"use client";

import { useEffect, useState } from "react";
import { ConversionScripts } from "./ConversionScripts";

type Consent = "accepted" | "rejected" | null;

const STORAGE_KEY = "pk-cookie-consent";
const OPEN_EVENT = "pk-open-cookie-settings";

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: Consent = null;
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      if (value === "accepted" || value === "rejected") {
        stored = value;
      }
    } catch {
      // localStorage unavailable — treat as undecided, banner will show.
    }
    // Reading localStorage requires an effect (unavailable during SSR); the `ready`
    // flag keeps the server/client render in sync until this runs.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(stored);
    setReady(true);

    function handleOpen() {
      setConsent(null);
    }
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  function choose(value: "accepted" | "rejected") {
    setConsent(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore write failures, choice still applies for this page view
    }
  }

  return (
    <>
      {consent === "accepted" ? <ConversionScripts /> : null}
      {ready && consent === null ? (
        <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-[16px] pb-[16px]">
          <div className="flex w-full max-w-[720px] flex-col items-center gap-4 rounded-[16px] border border-white/10 bg-pk-field/95 p-5 text-center shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur tab:flex-row tab:text-left">
            <p className="font-raleway text-[14px] leading-[22px] font-medium text-white/70">
              Weboldalunk sütiket használ a látogatottság mérésére és hirdetéseink hatékonyságának
              nyomon követésére.{" "}
              <a href="/sutik-tajekoztato" className="text-pk-gold underline">
                Bővebben a sütikről
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("rejected")}
                className="rounded-[10px] border border-white/20 px-4 py-2 font-raleway text-[14px] font-semibold text-white/80 transition-colors hover:bg-white/10"
              >
                Elutasítom
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-[10px] bg-pk-gold px-4 py-2 font-raleway text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Elfogadom
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
