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

  it("calls fbq('track', 'Lead') with a unique event_id when the pixel id is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", "1234567890");
    const fbq = vi.fn();
    vi.stubGlobal("fbq", fbq);

    trackLeadConversion();

    expect(fbq).toHaveBeenCalledWith("track", "Lead", {}, { eventID: expect.any(String) });
  });

  it("retries until fbq becomes available, since the pixel init script can still be loading", async () => {
    vi.useFakeTimers();
    vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", "1234567890");

    trackLeadConversion();

    const fbq = vi.fn();
    vi.stubGlobal("fbq", fbq);
    await vi.advanceTimersByTimeAsync(300);

    expect(fbq).toHaveBeenCalledWith("track", "Lead", {}, { eventID: expect.any(String) });
    vi.useRealTimers();
  });
});
