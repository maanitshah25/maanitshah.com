import { CAESAR_INSTRUCTIONS } from "@/lib/caesar-profile";

export const runtime = "nodejs";
export const maxDuration = 30;

type Message = { role: "user" | "assistant"; content: string };
const MAX_BODY_BYTES = 24_000;
const PRIVATE_QUESTION = /\b(salar(?:y|ies)|compensation|net worth|phone|mobile number|address|family|parents?|mother|father|siblings?|brother|sister|wife|husband|girlfriend|boyfriend|relationships?|dating|married|marriage|password|secret|medical|health records|personal email)\b|\b(where does he live|where is he now|current location|where is he living)\b/i;
const PRIVATE_REPLY = "I can't share private details about him. I can tell you about his work or interests, though.";

// Best-effort per-instance throttle, without storing IPs or conversations.
// Groq's account quota remains the global limit across Vercel instances.
let windowStart = 0;
let requests = 0;
function throttled() {
  if (Date.now() - windowStart >= 60_000) {
    windowStart = Date.now();
    requests = 0;
  }
  return ++requests > 30;
}

function reply(body: object, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...(status === 429 ? { "Retry-After": "60" } : {}) },
  });
}

async function readBody(request: Request): Promise<unknown> {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("Missing body");
  const chunks: Uint8Array[] = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error("Body too large");
    }
    chunks.push(value);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function validMessages(value: unknown): value is Message[] {
  return Array.isArray(value) && value.length > 0 && value.length <= 9 &&
    value.length % 2 === 1 && value.every((message, index) =>
      message && typeof message === "object" &&
      message.role === (index % 2 === 0 ? "user" : "assistant") &&
      typeof message.content === "string" && message.content.trim().length > 0 &&
      message.content.length <= (message.role === "user" ? 1000 : 4000));
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if ((origin && origin !== new URL(request.url).origin) ||
      request.headers.get("sec-fetch-site") === "cross-site") {
    return reply({ error: "Please open Caesar from Maanit's website." }, 403);
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return reply({ error: "Please send a JSON message." }, 415);
  }
  let body: unknown;
  try {
    body = await readBody(request);
  } catch {
    return reply({ error: "Please send a shorter, valid message." }, 400);
  }
  const messages = (body as { messages?: unknown } | null)?.messages;
  if (!validMessages(messages)) {
    return reply({ error: "Please keep your question under 1,000 characters and try again." }, 400);
  }
  if (throttled()) return reply({ error: "I'm getting a few too many questions. Please try again in a minute." }, 429);

  if (PRIVATE_QUESTION.test(messages[messages.length - 1].content)) {
    return reply({ message: PRIVATE_REPLY });
  }
  const key = process.env.GROQ_API_KEY?.trim();
  if (!key) return reply({ error: "I'm not connected just yet. Please try again later." }, 503);

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "openai/gpt-oss-20b",
        messages: [{ role: "system", content: CAESAR_INSTRUCTIONS }, ...messages],
        temperature: 0.2,
        max_completion_tokens: 1024,
        stream: false,
      }),
      signal: AbortSignal.timeout(20_000),
      cache: "no-store",
    });
    if (response.status === 429) {
      return reply({ error: "I've reached my chat limit for now. Please try again later." }, 429);
    }
    if (!response.ok) throw new Error("Provider unavailable");
    const result = await response.json();
    const content = result.choices?.[0]?.message?.content;
    if (typeof content !== "string" || !content.trim() || content.length > 4000 ||
        result.choices?.[0]?.finish_reason !== "stop") throw new Error("Invalid answer");
    return reply({ message: content.trim() });
  } catch {
    // Never log prompts, API keys, provider errors, or conversation content.
    return reply({ error: "I'm having trouble answering right now. Please try again shortly." }, 503);
  }
}
