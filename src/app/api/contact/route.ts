import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  company?: string;
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
  const company = payload.company?.trim() ?? "";
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
    const { error: sendError } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: recipients,
      replyTo: email,
      subject: `Új ajánlatkérés – ${name}`,
      text: [
        `Név: ${name}`,
        `Cégnév: ${company || "-"}`,
        `Email: ${email}`,
        `Telefon: ${phone}`,
        `Kártyatípus: ${cardType || "-"}`,
        "",
        "Üzenet:",
        message || "-",
      ].join("\n"),
    });

    // The Resend SDK resolves with { data, error } instead of throwing on API-level
    // rejections (e.g. an unverified sender domain), so this must be checked explicitly.
    if (sendError) {
      console.error("Failed to send contact form email", sendError);
      return NextResponse.json({ ok: false, error: "email_send_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return NextResponse.json({ ok: false, error: "email_send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
