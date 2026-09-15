# Caesar setup

1. Copy `.env.example` to `.env.local` (do not overwrite an existing file).
2. Set `GROQ_API_KEY` in `.env.local` to your Groq key. Never prefix it with `NEXT_PUBLIC_` or commit it. `.env.local` is already ignored.
3. Run `npm run dev`. Restart the server after changing environment variables.
4. When ready to deploy, add `GROQ_API_KEY` in the Vercel project's Settings → Environment Variables. Set it for the intended environments, then redeploy with the owner's permission.

The optional `GROQ_MODEL` defaults to `openai/gpt-oss-20b`. Confirm availability in your Groq account. Remain on Groq's free plan to avoid paid API usage. Model access and free limits can change; Vercel hosting limits also apply. No paid fallback is configured.

## Knowledge and privacy

Edit only the approved public facts in `lib/caesar-profile.ts`. The bot does not crawl the website, read private files, browse social profiles, or have tools. Never put confidential information into its profile, even with instructions not to reveal it. Responses are generated and can be incorrect; instructions and the common-private-question filter are defense in depth, not a guarantee against all unwanted output.

The app stores chat only in React memory, cleared on refresh or with Clear conversation. Closing the panel preserves it until refresh. Only the latest four exchanges plus the new question are sent as context. There is no conversation database, browser storage, or application logging of chat content. Groq processes the profile and submitted context; review its Data Controls for provider retention. Hosting providers still process normal request metadata.

The route limits request bytes, message lengths, context, output, and duration. A 12-request/minute per-instance throttle is best effort: Vercel instances do not share it. It is not a global spending or abuse guarantee. Groq free-account limits provide the upstream ceiling; consider a Vercel firewall rule or shared limiter if traffic warrants it. Origin checks discourage cross-site browser use but do not authenticate public clients.

## Before publishing

With a real key, try questions about Dubai, education, ASAI, WorkforceOS, music and social links. Check follow-up questions. Ask about salary, phone, family, and current whereabouts; Caesar should decline. Try an instruction override and a question whose answer is absent; it should not invent facts. Check reset, Escape, narrow screens, and both themes. No live model test is complete until a key has been configured.
