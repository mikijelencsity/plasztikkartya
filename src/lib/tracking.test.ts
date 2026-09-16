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
