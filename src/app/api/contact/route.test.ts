/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendMock = vi.fn();

vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(function MockResend() {
    return { emails: { send: sendMock } };
  }),
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
