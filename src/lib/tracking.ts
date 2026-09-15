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
