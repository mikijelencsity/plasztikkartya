# Landing Page Conversion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing single-page plasztikkartya.hu clone a working lead-gen landing page: the contact form actually delivers leads by email, gives on-page success/error feedback, and fires Google Ads / Meta Pixel conversion events — with zero changes to the visual design.

**Architecture:** A new Node-runtime API route (`/api/contact`) validates submissions and sends email via Resend. `ContactForm` becomes a stateful client component that posts JSON to that route and swaps in a success/error UI in place. A small `tracking.ts` helper and a `ConversionScripts` component (wired into `layout.tsx`) load Google/Meta tags only when their env vars are set, and fire a conversion event after a successful submit. The project currently has no test runner, so this plan also introduces Vitest + Testing Library.

**Tech Stack:** Next.js 16 (App Router, Route Handlers), React 19, TypeScript strict, Resend (email), Vitest + @testing-library/react (tests).

**Reference spec:** `docs/superpowers/specs/2026-09-15-landing-page-conversion-design.md`

---

## File Structure

**Create:**
- `vitest.config.ts` — Vitest config (jsdom environment, `@/*` path alias, React plugin)
- `vitest.setup.ts` — loads `@testing-library/jest-dom` matchers
- `src/app/api/contact/route.ts` — POST handler, validates + sends email via Resend
- `src/app/api/contact/route.test.ts` — tests for the route
- `src/lib/tracking.ts` — `trackLeadConversion()` helper, safe no-op without env vars
- `src/lib/tracking.test.ts` — tests for the helper
- `src/components/analytics/ConversionScripts.tsx` — conditionally injects gtag.js / Meta Pixel base script
- `src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.test.tsx` — tests for the stateful form
- `.env.example` — documents required/optional env vars with blank placeholders

**Modify:**
- `src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.tsx` — add submit state + success/error UI
- `src/app/layout.tsx` — render `<ConversionScripts />`
- `package.json` — add `test` script, add `test` to `check`, add `resend` + test dependencies

---

### Task 1: Test tooling (Vitest + Testing Library)

**Files:**
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Modify: `package.json`

- [ ] **Step 1: Install dependencies**

Run:
```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```
Expected: `package.json` gains these under `devDependencies`.

- [ ] **Step 2: Create the Vitest config**

Create `vitest.config.ts`:
```ts
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- [ ] **Step 3: Create the setup file**

Create `vitest.setup.ts`:
```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 4: Add the `test` script**

In `package.json`, add to `"scripts"`:
```json
"test": "vitest run",
```
And update `"check"` to include it:
```json
"check": "npm run lint && npm run typecheck && npm run test && npm run build"
```

- [ ] **Step 5: Verify the harness works with a throwaway smoke test**

Create a temporary file `src/lib/__smoke.test.ts`:
```ts
import { describe, expect, it } from "vitest";

describe("vitest harness", () => {
  it("runs", () => {
    expect(1 + 1).toBe(2);
  });
});
```
Run: `npm run test`
Expected: `1 passed`. Then delete `src/lib/__smoke.test.ts` — it was only to confirm the harness works.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json vitest.config.ts vitest.setup.ts
git commit -m "test: add Vitest and Testing Library"
```

---

### Task 2: `/api/contact` route

**Files:**
- Create: `src/app/api/contact/route.ts`
- Test: `src/app/api/contact/route.test.ts`

- [ ] **Step 1: Install the Resend SDK**

Run:
```bash
npm install resend
```

- [ ] **Step 2: Write the failing tests**

Create `src/app/api/contact/route.test.ts`:
```ts
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendMock = vi.fn();

vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: { send: sendMock },
  })),
}));

const { POST } = await import("./route");

function makeRequest(body: unknown) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validPayload = {
  name: "Teszt Elek",
  email: "teszt@example.com",
  phone: "+36301234567",
  cardType: "VIP kártya",
  message: "Kérek egy ajánlatot.",
};

describe("POST /api/contact", () => {
  beforeEach(() => {
    sendMock.mockReset();
    sendMock.mockResolvedValue({ data: { id: "email_123" }, error: null });
    process.env.RESEND_API_KEY = "test-key";
    process.env.CONTACT_TO_EMAILS = "a@example.com,b@example.com";
  });

  afterEach(() => {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_TO_EMAILS;
  });

  it("sends an email and returns 200 for a valid payload", async () => {
    const response = await POST(makeRequest(validPayload));
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ ok: true });
    expect(sendMock).toHaveBeenCalledTimes(1);
    expect(sendMock.mock.calls[0][0]).toMatchObject({
      to: ["a@example.com", "b@example.com"],
      replyTo: "teszt@example.com",
    });
  });

  it("returns 400 when a required field is missing", async () => {
    const response = await POST(makeRequest({ ...validPayload, name: "" }));
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.ok).toBe(false);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("returns 400 for an invalid email address", async () => {
    const response = await POST(makeRequest({ ...validPayload, email: "not-an-email" }));
    expect(response.status).toBe(400);
  });

  it("returns 502 when Resend throws", async () => {
    sendMock.mockRejectedValueOnce(new Error("network down"));
    const response = await POST(makeRequest(validPayload));
    const json = await response.json();

    expect(response.status).toBe(502);
    expect(json.ok).toBe(false);
  });

  it("returns 502 when RESEND_API_KEY is missing", async () => {
    delete process.env.RESEND_API_KEY;
    const response = await POST(makeRequest(validPayload));
    expect(response.status).toBe(502);
  });
});
```

- [ ] **Step 3: Run the tests to verify they fail**

Run: `npx vitest run src/app/api/contact/route.test.ts`
Expected: FAIL — `Failed to resolve import "./route"` (the file doesn't exist yet).

- [ ] **Step 4: Write the route**

Create `src/app/api/contact/route.ts`:
```ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  cardType?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Must be a sender address/domain verified in the Resend dashboard before going live.
const FROM_ADDRESS = "Plasztikkártya.hu <ajanlatkeres@plasztikkartya.hu>";

function getRecipients(): string[] {
  const raw = process.env.CONTACT_TO_EMAILS ?? "";
  return raw
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const cardType = payload.cardType?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !phone) {
    return NextResponse.json({ ok: false, error: "missing_required_field" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const recipients = getRecipients();
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || recipients.length === 0) {
    console.error("Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAILS");
    return NextResponse.json({ ok: false, error: "server_misconfigured" }, { status: 502 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: recipients,
      replyTo: email,
      subject: `Új ajánlatkérés – ${name}`,
      text: [
        `Név/Cégnév: ${name}`,
        `Email: ${email}`,
        `Telefon: ${phone}`,
        `Kártyatípus: ${cardType || "-"}`,
        "",
        "Üzenet:",
        message || "-",
      ].join("\n"),
    });
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return NextResponse.json({ ok: false, error: "email_send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npx vitest run src/app/api/contact/route.test.ts`
Expected: `5 passed`

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json src/app/api/contact/route.ts src/app/api/contact/route.test.ts
git commit -m "feat: add /api/contact route sending leads via Resend"
```

---

### Task 3: Conversion tracking helper + script loader

**Files:**
- Create: `src/lib/tracking.ts`
- Test: `src/lib/tracking.test.ts`
- Create: `src/components/analytics/ConversionScripts.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/lib/tracking.test.ts`:
```ts
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { trackLeadConversion } from "./tracking";

describe("trackLeadConversion", () => {
  beforeEach(() => {
    vi.stubGlobal("gtag", undefined);
    vi.stubGlobal("fbq", undefined);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it("does nothing when no tracking env vars are set", () => {
    expect(() => trackLeadConversion()).not.toThrow();
  });

  it("calls gtag with the conversion send_to id when configured", () => {
    vi.stubEnv("NEXT_PUBLIC_GTAG_ID", "AW-123");
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL", "abcDEF");
    const gtag = vi.fn();
    vi.stubGlobal("gtag", gtag);

    trackLeadConversion();

    expect(gtag).toHaveBeenCalledWith("event", "conversion", { send_to: "AW-123/abcDEF" });
  });

  it("calls fbq('track', 'Lead') when the pixel id is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", "1234567890");
    const fbq = vi.fn();
    vi.stubGlobal("fbq", fbq);

    trackLeadConversion();

    expect(fbq).toHaveBeenCalledWith("track", "Lead");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npx vitest run src/lib/tracking.test.ts`
Expected: FAIL — `Failed to resolve import "./tracking"`.

- [ ] **Step 3: Write `tracking.ts`**

Create `src/lib/tracking.ts`:
```ts
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLeadConversion(): void {
  const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (gtagId && conversionLabel) {
    window.gtag?.("event", "conversion", { send_to: `${gtagId}/${conversionLabel}` });
  }

  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (pixelId) {
    window.fbq?.("track", "Lead");
  }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npx vitest run src/lib/tracking.test.ts`
Expected: `3 passed`

- [ ] **Step 5: Create the script loader (no dedicated test — trivial conditional JSX, covered by manual verification in Task 5)**

Create `src/components/analytics/ConversionScripts.tsx`:
```tsx
import Script from "next/script";

export function ConversionScripts() {
  const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {gtagId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtagId}');
            `}
          </Script>
        </>
      ) : null}
      {pixelId ? (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/tracking.ts src/lib/tracking.test.ts src/components/analytics/ConversionScripts.tsx
git commit -m "feat: add conversion tracking helper and script loader"
```

---

### Task 4: Stateful `ContactForm`

**Files:**
- Modify: `src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.tsx`
- Test: `src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.test.tsx`

- [ ] **Step 1: Write the failing tests**

Create `src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.test.tsx`:
```tsx
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";
import { trackLeadConversion } from "@/lib/tracking";

vi.mock("@/lib/tracking", () => ({
  trackLeadConversion: vi.fn(),
}));

async function fillRequiredFields(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Név/Cégnév"), "Teszt Elek");
  await user.type(screen.getByLabelText("Email"), "teszt@example.com");
  await user.type(screen.getByLabelText("Phone"), "+36301234567");
  await user.click(screen.getByLabelText(/Elfogadom/));
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
    vi.mocked(trackLeadConversion).mockClear();
  });

  it("shows a success message and tracks the conversion after a successful submit", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(await screen.findByText("Köszönjük az ajánlatkérést!")).toBeInTheDocument();
    expect(trackLeadConversion).toHaveBeenCalledTimes(1);
  });

  it("shows an error message and keeps the field values when the request fails", async () => {
    vi.mocked(fetch).mockResolvedValue(new Response(JSON.stringify({ ok: false }), { status: 502 }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillRequiredFields(user);
    await user.click(screen.getByRole("button", { name: "Üzenet küldése" }));

    expect(await screen.findByText(/Hiba történt/)).toBeInTheDocument();
    expect(screen.getByLabelText("Név/Cégnév")).toHaveValue("Teszt Elek");
    expect(trackLeadConversion).not.toHaveBeenCalled();
  });
});
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npx vitest run src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.test.tsx`
Expected: FAIL — the current form always calls `event.preventDefault()` and never fetches, so no success/error text ever appears.

- [ ] **Step 3: Rewrite `ContactForm.tsx`**

Replace the full contents of `ContactForm.tsx`:
```tsx
"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { trackLeadConversion } from "@/lib/tracking";
import { CaretDownIcon } from "../shared/icons";
import { contact, footer } from "./content";

const field =
  "w-full border-0 bg-pk-field font-raleway text-[14px] leading-[1.4] font-medium text-white/45 outline-none placeholder:text-white/45";

function FieldGroup({ half, children }: { half?: boolean; children: ReactNode }) {
  return <div className={cn("mb-5 w-full px-[10px]", half && "tab:w-1/2")}>{children}</div>;
}

interface ContactFormProps {
  className?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      cardType: String(data.get("select") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      trackLeadConversion();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={cn(className, "flex flex-col items-center px-[10px] text-center")}>
        <p className="font-helvetica text-[25px] font-medium text-white tab:text-[35px]">
          Köszönjük az ajánlatkérést!
        </p>
        <p className="mt-[10px] font-raleway text-[16px] leading-[1.4] font-medium text-white/60">
          Hamarosan felvesszük Önnel a kapcsolatot.
        </p>
      </div>
    );
  }

  return (
    <form className={className} name="Új űrlap" onSubmit={handleSubmit}>
      <div className="-mx-[10px] -mb-5 flex flex-wrap">
        <FieldGroup half>
          <label htmlFor="form-field-name" className="sr-only">
            Név/Cégnév
          </label>
          <input
            id="form-field-name"
            name="name"
            type="text"
            required
            placeholder="Név/Cégnév.."
            className={cn(field, "min-h-10 px-[15px] py-[10px]")}
          />
        </FieldGroup>
        <FieldGroup half>
          <label htmlFor="form-field-email" className="sr-only">
            Email
          </label>
          <input
            id="form-field-email"
            name="email"
            type="email"
            required
            placeholder="Email.."
            className={cn(field, "min-h-10 px-[15px] py-[10px]")}
          />
        </FieldGroup>
        <FieldGroup half>
          <label htmlFor="form-field-phone" className="sr-only">
            Phone
          </label>
          <input
            id="form-field-phone"
            name="phone"
            type="tel"
            required
            placeholder="Telefonszám.."
            pattern="[0-9()#&+*\-=.]+"
            title="Only numbers and phone characters (#, -, *, etc) are accepted."
            className={cn(field, "min-h-10 px-[15px] py-[10px]")}
          />
        </FieldGroup>
        <FieldGroup half>
          <label htmlFor="form-field-select" className="sr-only">
            Select
          </label>
          <div className="relative w-full">
            <select
              id="form-field-select"
              name="select"
              className={cn(field, "h-10 appearance-none rounded-[3px] py-[5px] pr-5 pl-[14px]")}
            >
              {contact.cardOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute top-1/2 right-[10px] -translate-y-1/2 text-white/45">
              <CaretDownIcon className="block h-[25px] w-[10px] -translate-x-[3px] -translate-y-px" />
            </span>
          </div>
        </FieldGroup>
        <FieldGroup>
          <label htmlFor="form-field-message" className="sr-only">
            Üzenet
          </label>
          <textarea
            id="form-field-message"
            name="message"
            rows={6}
            placeholder="Üzenet"
            className={cn(field, "block rounded-[3px] px-[14px] py-[5px]")}
          />
        </FieldGroup>
        <FieldGroup>
          <span className="block font-raleway text-[14px] leading-[21px] font-normal text-white">
            File feltöltése (nem kötelező)
          </span>
        </FieldGroup>
        <FieldGroup half>
          <label htmlFor="form-field-upload" className="sr-only">
            upload
          </label>
          <input
            id="form-field-upload"
            name="upload"
            type="file"
            multiple
            className="block font-raleway text-[14px] text-white/45"
          />
        </FieldGroup>
        <FieldGroup>
          {/* Subgroup inherits the theme body line box (17px / 1.5) */}
          <div className="text-[17px] leading-[25.5px]">
            <span className="font-raleway text-[14px] leading-[21px] font-medium text-pk-muted">
              <input id="form-field-acceptance" name="acceptance" type="checkbox" required className="align-baseline" />{" "}
              <label htmlFor="form-field-acceptance">
                Elfogadom az{" "}
                <a href="https://www.plasztikkartya.hu/adatvedelem" className="text-pk-gold">
                  Adatvédelmi Tájékoztatóban
                </a>{" "}
                leírtakat
              </label>
            </span>
          </div>
        </FieldGroup>
        {status === "error" ? (
          <FieldGroup>
            <p className="font-raleway text-[14px] leading-[1.4] font-medium text-red-400">
              Hiba történt a küldés során. Kérjük próbáld újra, vagy hívj minket:{" "}
              <a href={footer.phoneHref} className="text-pk-gold underline">
                {footer.phone}
              </a>
            </p>
          </FieldGroup>
        ) : null}
        <FieldGroup>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-[10px] bg-pk-gold px-[30px] pt-[17px] pb-[15px] font-helvetica text-[16px] leading-none font-bold text-white tab:text-[18px] disabled:opacity-60"
          >
            {status === "submitting" ? "Küldés…" : contact.submit}
          </button>
        </FieldGroup>
      </div>
    </form>
  );
}
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `npx vitest run src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.test.tsx`
Expected: `2 passed`

- [ ] **Step 5: Commit**

```bash
git add src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.tsx src/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/ContactForm.test.tsx
git commit -m "feat: wire ContactForm to /api/contact with success/error states"
```

---

### Task 5: Wire tracking into the app, document env vars, final verification

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `.env.example`

- [ ] **Step 1: Render `ConversionScripts` in the root layout**

In `src/app/layout.tsx`, add the import near the top:
```ts
import { ConversionScripts } from "@/components/analytics/ConversionScripts";
```
Change the `body` line from:
```tsx
      <body className="min-h-full flex flex-col">{children}</body>
```
to:
```tsx
      <body className="min-h-full flex flex-col">
        {children}
        <ConversionScripts />
      </body>
```

- [ ] **Step 2: Create `.env.example`**

Create `.env.example`:
```
# Resend (https://resend.com) — required for the contact form to send email.
RESEND_API_KEY=

# Comma-separated list of addresses that receive lead emails.
CONTACT_TO_EMAILS=mullerdanielev@gmail.com,info@plasztikkartya.hu

# Google Ads conversion tracking — optional, leave blank to disable.
NEXT_PUBLIC_GTAG_ID=
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=

# Meta (Facebook/Instagram) Pixel — optional, leave blank to disable.
NEXT_PUBLIC_META_PIXEL_ID=
```

- [ ] **Step 3: Create a local `.env.local` for manual testing (not committed)**

```bash
cp .env.example .env.local
```
Fill in a real `RESEND_API_KEY` in `.env.local` if you have one available; leave the tracking vars blank for now.

- [ ] **Step 4: Run the full check pipeline**

Run: `npm run check`
Expected: lint, typecheck, all Vitest suites, and the production build all pass.

- [ ] **Step 5: Manual smoke test**

Run: `npm run dev`, open `http://localhost:3000`, scroll to the contact form, submit it with a valid name/email/phone and the privacy checkbox ticked.
- With `RESEND_API_KEY` set: confirm the email arrives at the configured addresses, and the on-page message changes to "Köszönjük az ajánlatkérést!".
- With `RESEND_API_KEY` left blank: confirm the form shows the error message with the phone number, and the browser console has no uncaught errors.
- Open DevTools console: confirm there are no errors related to `gtag` or `fbq` even though the tracking env vars are unset.

- [ ] **Step 6: Commit**

```bash
git add src/app/layout.tsx .env.example
git commit -m "feat: load conversion tracking scripts and document env vars"
```

---

## Self-Review Notes

- **Spec coverage:** API route (Task 2), stateful form + inline success/error (Task 4), conversion tracking (Task 3 + 5), env vars documented (Task 5), all six spec testing bullets covered by Task 2/3/4 automated tests plus the Task 5 manual check.
- **Out of scope, confirmed still out of scope:** file upload attachment handling, CRM/webhook integration, spam/bot protection — none of the tasks above touch these.
- **Type consistency:** `FormStatus` is defined once in `ContactForm.tsx` and used only there; the `/api/contact` response shape `{ ok: boolean, error?: string }` is used identically in the route and in the tests that read `response.json()`.
