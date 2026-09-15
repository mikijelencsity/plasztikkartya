# Landing Page Conversion Design

## Context

The repo is a pixel-perfect Next.js clone of plasztikkartya.hu (single page: Hero, Intro, CardTypes, Benefits, Steps, CardGallery, Testimonials, Contact). The goal is to turn it into a working lead-gen landing page for paid traffic (Google/Meta Ads), without changing the visual design or page structure.

Existing state, confirmed by code inspection:
- `SiteHeader` already has no navigation links — only logo + one "Megrendelés" CTA linking to `#contact`.
- `HeroSection`, `IntroSection`, `BenefitsSection`, `StepsSection` all already have CTAs linking to `#contact`.
- `SiteFooter` only has a privacy link and contact info — no other exit links.
- `ContactForm` (`src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.tsx`) is a client component with fields (name, email, phone, card-type select, message, file upload, privacy checkbox) whose `onSubmit` only calls `event.preventDefault()` — it is not wired to any backend.

Because the header/nav/footer are already minimal and CTA-focused, no structural or visual changes are needed there. The only gap is that the form doesn't do anything, and there is no conversion measurement for ad spend.

## Goal

1. The contact form actually delivers leads by email.
2. Successful submission gives the visitor clear on-page confirmation, without leaving the single-page layout.
3. Successful submission fires Google Ads and Meta Pixel conversion events, so ad platforms can optimize toward leads.
4. No visual/layout/copy changes to the existing design.

## Non-goals

- No new pages/routes (no separate `/thank-you` page).
- No CRM/webhook integration — email delivery only.
- No changes to unrelated sections (Hero, Gallery, Testimonials, etc.) beyond the ContactForm/Contact area needed for the success message.
- No file-upload storage/processing — the existing file input stays cosmetic unless trivial to pass through as an email attachment (see Open Question below, resolved: keep cosmetic for v1, see Decisions).

## Architecture

### 1. API route: `src/app/api/contact/route.ts`

- `POST` handler, Next.js Route Handler (App Router), runtime `nodejs` (Resend SDK needs Node, not edge).
- Reads `RESEND_API_KEY` and `CONTACT_TO_EMAILS` (comma-separated) from `process.env`.
- Accepts JSON body: `{ name, email, phone, cardType, message }` (file upload is NOT sent to the API in v1 — see Decisions).
- Server-side validation: `name`, `email`, `phone` required and non-empty; `email` matches a basic email pattern. Reject with `400` and a machine-readable error code if invalid.
- Sends one email via Resend (`resend.emails.send`) to both addresses in `CONTACT_TO_EMAILS`, with the form fields formatted in the body, `reply_to` set to the visitor's submitted email so replying goes straight to the lead.
- Returns `{ ok: true }` on success (`200`), `{ ok: false, error: string }` on failure (`400` for validation, `502` for Resend API failure).
- Wrap the Resend call in try/catch; log the error server-side (`console.error`) and return the `502` — do not leak provider error details to the client.

### 2. `ContactForm` becomes stateful

- Add `useState` for `status: "idle" | "submitting" | "success" | "error"` and `errorMessage: string | null`.
- `onSubmit`: `event.preventDefault()`, build a `FormData`-derived plain object from the named fields (skip `upload` and `acceptance`, which stay client-only), `fetch("/api/contact", { method: "POST", body: JSON.stringify(...), headers: {"Content-Type": "application/json"} })`.
- On success: set `status: "success"`, fire tracking events (see below).
- On failure (network error or `ok:false` response): set `status: "error"` with a short inline message ("Hiba történt, kérjük próbáld újra, vagy hívj minket." + the phone number already available via `footer`/`contact` content) — form stays visible so the user can retry.
- While `status === "success"`, render a confirmation block in place of the form fields, inside the same `ContactSection` wrapper, matching existing typography (reuse existing text classes, e.g. the gold-accent + white heading style already used elsewhere in the section) — no layout shift of the outer section.
- Submit button shows "Küldés…" text and is `disabled` while `status === "submitting"`.

### 3. Conversion tracking

- New client component `src/components/analytics/ConversionScripts.tsx` (or similar path — final path decided in plan), rendered once in `src/app/layout.tsx`, that:
  - Injects the Google tag (`gtag.js`) script tag via `next/script` (`strategy="afterInteractive"`) only if `NEXT_PUBLIC_GTAG_ID` is set.
  - Injects the Meta Pixel base script the same way, only if `NEXT_PUBLIC_META_PIXEL_ID` is set.
  - If an ID env var is missing, that platform's script is simply not rendered (no crash, no console errors).
- New small helper `src/lib/tracking.ts` exporting `trackLeadConversion()`, which:
  - Calls `window.gtag?.('event', 'conversion', { send_to: `${NEXT_PUBLIC_GTAG_ID}/${NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL}` })` if both env vars present.
  - Calls `window.fbq?.('track', 'Lead')` if `NEXT_PUBLIC_META_PIXEL_ID` present.
  - No-ops safely (optional chaining) if scripts never loaded (ad blockers, missing env vars).
- `ContactForm` calls `trackLeadConversion()` right after setting `status: "success"`.

### 4. Environment variables

Added to `.env.local` (git-ignored, not committed) and documented in `.env.example` (committed, values blank/placeholder):
- `RESEND_API_KEY`
- `CONTACT_TO_EMAILS` (e.g. `mullerdanielev@gmail.com,info@plasztikkartya.hu`)
- `NEXT_PUBLIC_GTAG_ID` (optional)
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` (optional)
- `NEXT_PUBLIC_META_PIXEL_ID` (optional)

`resend` package added as a dependency.

## Decisions (resolving ambiguity up front)

- **File upload field**: stays purely client-side/cosmetic in v1 (not sent to the API, not attached to the email). Sending real attachments through Resend adds meaningful complexity (multipart parsing, size limits, virus/type checks) that wasn't asked for. If needed later, that's a separate follow-up.
- **Missing tracking IDs**: the site must work correctly with zero ad tracking configured (local dev, or before the user has pixel IDs) — scripts and calls all become no-ops rather than erroring.
- **Success state placement**: inline swap within `ContactSection`/`ContactForm`, not a route change, per the "séma és kinézet maradjon" constraint and to avoid losing paid-traffic users to a navigation/reload.
- **Error recovery**: on failure the form stays populated and visible (React state isn't cleared) so the visitor doesn't have to retype everything.

## Testing

- Unit/integration test for the `/api/contact` route: valid payload → `200` + Resend called with expected args (mock Resend client); missing required field → `400`; Resend throwing → `502`.
- Component test for `ContactForm`: submit with valid fields shows success state and calls the tracking function (mock `fetch` and `trackLeadConversion`); submit with a failed fetch shows the error state and keeps field values.
- Manual verification: run `npm run dev`, submit the form with the Resend test/sandbox key (or a real key against a test inbox), confirm the email arrives at both configured addresses, confirm the on-page success message renders, confirm no console errors when tracking env vars are unset.

## Open follow-ups (explicitly out of scope for this spec)

- Wiring an actual Resend account/API key and real Google Ads / Meta Pixel IDs — these are secrets/business IDs the user supplies later, this spec only makes the code ready to accept them.
- Spam/bot protection (e.g. honeypot field, rate limiting) — not requested; flag as a future hardening step if lead volume from bots becomes a problem.
