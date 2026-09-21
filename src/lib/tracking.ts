declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// The gtag/fbq init scripts (rendered in the root layout, after `children`) can still be
// loading when a page's mount effect fires, so retry briefly instead of firing once and
// silently no-oping via optional chaining.
function callWhenReady(isReady: () => boolean, fn: () => void, attemptsLeft = 20): void {
  if (isReady()) {
    fn();
    return;
  }
  if (attemptsLeft <= 0) return;
  setTimeout(() => callWhenReady(isReady, fn, attemptsLeft - 1), 100);
}

export function trackLeadConversion(): void {
  const gtagId = process.env.NEXT_PUBLIC_GTAG_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (gtagId && conversionLabel) {
    callWhenReady(
      () => typeof window.gtag === "function",
      () => window.gtag?.("event", "conversion", { send_to: `${gtagId}/${conversionLabel}` }),
    );
  }

  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (pixelId) {
    // Meta can't dedupe this browser-side Lead event against any server-side (Conversions API)
    // Lead event without a shared event_id, so every fire gets one even though we don't control
    // the server side yet.
    const eventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    callWhenReady(
      () => typeof window.fbq === "function",
      () => window.fbq?.("track", "Lead", {}, { eventID: eventId }),
    );
  }
}
