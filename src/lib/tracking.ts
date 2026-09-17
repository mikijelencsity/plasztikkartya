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
    callWhenReady(
      () => typeof window.fbq === "function",
      () => window.fbq?.("track", "Lead"),
    );
  }
}
