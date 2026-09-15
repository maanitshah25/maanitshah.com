"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { FiArrowUp, FiMessageCircle, FiRefreshCw, FiX } from "react-icons/fi";

type Message = { role: "user" | "assistant"; content: string };
const suggestions = ["What is Maanit currently working on?", "Where did Maanit grow up?", "What is Maanit passionate about?"];
const approvedLinks = new Set([
  "https://www.linkedin.com/in/maanit-shah",
  "https://www.instagram.com/_maanitshah",
  "https://github.com/maanitshah25",
  "https://open.spotify.com/user/82eo4p5gg9zsjv9745hyvqald",
]);

function MessageText({ text }: { text: string }) {
  return text.split(/(https:\/\/[^\s<>]+[^\s<>.,!?)])/g).map((part, index) =>
    approvedLinks.has(part) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{part}</a>
    ) : <span key={index}>{part}</span>);
}

export default function CaesarChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const pending = useRef<AbortController | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open && logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, busy, error, open]);
  useEffect(() => () => pending.current?.abort(), []);

  function close() {
    setOpen(false);
    launcherRef.current?.focus();
  }

  function reset() {
    pending.current?.abort();
    pending.current = null;
    setMessages([]);
    setInput("");
    setError("");
    setBusy(false);
    inputRef.current?.focus();
  }

  async function send(text: string) {
    const question = text.trim();
    if (!question || pending.current || question.length > 1000) return;
    const previous = messages;
    const next: Message[] = [...messages, { role: "user", content: question }];
    const controller = new AbortController();
    pending.current = controller;
    setMessages(next);
    setInput("");
    setError("");
    setBusy(true);
    const timeout = window.setTimeout(() => controller.abort(), 25_000);
    try {
      const response = await fetch("/api/caesar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-9) }),
        signal: controller.signal,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Please try again shortly.");
      if (typeof data.message !== "string") throw new Error("Please try again shortly.");
      if (pending.current === controller) {
        setMessages([...next, { role: "assistant", content: data.message }]);
      }
    } catch (cause) {
      if (pending.current !== controller) return;
      setMessages(previous);
      setInput(question);
      setError(controller.signal.aborted ? "That took too long. Please try again." :
        cause instanceof Error ? cause.message : "Couldn't connect. Please try again.");
    } finally {
      window.clearTimeout(timeout);
      if (pending.current === controller) {
        pending.current = null;
        setBusy(false);
        inputRef.current?.focus();
      }
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void send(input);
  }

  return (
    <aside className="caesar-chat" aria-label="Ask Caesar">
      <section
        id="caesar-panel"
        role="dialog"
        aria-labelledby="caesar-title"
        aria-hidden={!open}
        ref={(element) => { if (element) element.inert = !open; }}
        onKeyDown={(event) => { if (event.key === "Escape") close(); }}
        className={`caesar-panel ${open ? "caesar-panel-open" : ""}`}
      >
        <header className="caesar-header">
          <span aria-hidden="true" className="caesar-avatar">C</span>
          <div className="caesar-heading">
            <h2 id="caesar-title">Caesar</h2>
            <p>Maanit’s assistant</p>
          </div>
          <button type="button" onClick={reset} aria-label="Clear conversation" title="Clear conversation" className="caesar-icon-button"><FiRefreshCw size={14} aria-hidden="true" /></button>
          <button type="button" onClick={close} aria-label="Close chat" className="caesar-icon-button"><FiX size={17} aria-hidden="true" /></button>
        </header>

        <div ref={logRef} role="log" aria-label="Conversation with Caesar" aria-live={open ? "polite" : "off"} aria-relevant="additions text" className="caesar-log">
          <div className="caesar-message caesar-message-assistant">
            Hey, I’m Caesar. Ask me about Maanit’s work, background, or interests.
          </div>
          {messages.length === 0 && <div className="caesar-suggestions">
            {suggestions.map((question) => <button key={question} type="button" onClick={() => void send(question)} disabled={busy}>{question}</button>)}
          </div>}
          {messages.map((message, index) => <div key={index} className={`caesar-message caesar-message-${message.role}`}>
            <span className="sr-only">{message.role === "user" ? "You" : "Caesar"}: </span>
            <MessageText text={message.content} />
          </div>)}
          {busy && <div role="status" className="caesar-thinking"><span className="sr-only">Caesar is thinking</span><i /><i /><i /></div>}
        </div>

        <div className="caesar-composer">
          {error && <p role="alert" className="caesar-error">{error}</p>}
          <form onSubmit={submit}>
            <label htmlFor="caesar-question" className="sr-only">Your question for Caesar</label>
            <input ref={inputRef} id="caesar-question" value={input} onChange={(event) => setInput(event.target.value)} maxLength={1000} autoComplete="off" readOnly={busy} placeholder="Ask me anything about Maanit…" />
            <button type="submit" aria-label="Send message" disabled={busy || !input.trim()} className="caesar-send"><FiArrowUp size={17} aria-hidden="true" /></button>
          </form>
        </div>
      </section>
      <button ref={launcherRef} type="button" aria-label={open ? "Close Caesar" : "Ask Caesar"} aria-expanded={open} aria-controls="caesar-panel" onClick={() => open ? close() : setOpen(true)} className={`caesar-launcher ${open ? "caesar-launcher-open" : ""}`}>
        <FiMessageCircle className="caesar-launcher-chat" size={21} aria-hidden="true" />
        <FiX className="caesar-launcher-close" size={21} aria-hidden="true" />
      </button>
    </aside>
  );
}
