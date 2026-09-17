import type { Metadata } from "next";
import { LegalPage, legalText } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/LegalPage";

export const metadata: Metadata = {
  title: "Sütik (cookie-k) tájékoztató | Plasztikkartya.hu",
  description: "Tájékoztató a Plasztikkartya.hu weboldalon használt sütikről (cookie-król) és mérőkódokról.",
};

const { h2, p, ul } = legalText;

export default function SutikTajekoztatoPage() {
  return (
    <LegalPage title="Sütik (cookie-k) tájékoztató" updated="2026. szeptember 17.">
      <section className="flex flex-col gap-3">
        <h2 className={h2}>1. Mi az a süti?</h2>
        <p className={p}>
          A sütik (cookie-k) kis méretű szöveges fájlok, amelyeket a böngészője ment el az Ön eszközén a
          weboldal meglátogatásakor. A sütik segítségével a weboldal bizonyos ideig „megjegyzi” a
          műveleteit és beállításait, illetve információt adnak a weboldal üzemeltetőjének a látogatás
          körülményeiről.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>2. Milyen sütiket és mérőkódokat használunk?</h2>
        <p className={p}>
          A weboldal jelenleg nem használ, saját, kizárólag statisztikai célú első féltől származó sütit.
          A weboldalba beépített, harmadik féltől származó mérőkódok a következők:
        </p>
        <ul className={ul}>
          <li>
            <span className="font-semibold text-white">Meta Pixel (Facebook/Instagram, Meta Platforms
            Ireland Ltd.)</span> — a hirdetéseink hatékonyságát méri, és sütiket (pl. <code>_fbp</code>,{" "}
            <code>_fbc</code>) helyezhet el, amelyek segítségével a Meta összekapcsolja a weboldal
            látogatását a Facebook/Instagram hirdetési fiókunkkal, illetve remarketing közönséget épít.
          </li>
          <li>
            <span className="font-semibold text-white">Google Ads / Google Analytics (Google Ireland
            Ltd.)</span> — amennyiben aktív, a hirdetéseinkre kattintva érkező látogatók konverzióit méri,
            és sütiket (pl. <code>_gcl_au</code>, <code>_ga</code>) helyezhet el.
          </li>
        </ul>
        <p className={p}>
          Ezek a mérőkódok kizárólag akkor töltődnek be a böngészőjében, ha az oldal alján megjelenő
          sütibeállító sávban az „Elfogadom” lehetőségre kattint. Elutasítás esetén ezek a szkriptek nem
          futnak le, és nem kerül sor a fenti sütik elhelyezésére.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>3. Feltétlenül szükséges sütik</h2>
        <p className={p}>
          A weboldal működéséhez feltétlenül szükséges, technikai jellegű sütit használunk a sütikre
          vonatkozó választása (elfogadás/elutasítás) megjegyzésére. Ez a süti nem gyűjt Önről
          személyazonosításra alkalmas adatot, és jogalapja az Adatkezelő jogos érdeke a jogszabályi
          kötelezettség (a felhasználói döntés dokumentálása) teljesítéséhez.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>4. Hogyan kezelheti/tilthatja le a sütiket?</h2>
        <p className={p}>
          A weboldal alján bármikor módosíthatja a hozzájárulását a sütibeállítások törlésével (böngésző
          adatainak törlése), vagy a böngészője beállításain keresztül. A legtöbb böngésző lehetőséget ad
          arra, hogy a sütiket teljesen letiltsa, vagy hogy minden alkalommal kérdést kapjon az elhelyezés
          előtt. Emellett a Meta és a Google is biztosít saját leiratkozási lehetőséget:
        </p>
        <ul className={ul}>
          <li>
            Meta hirdetési beállítások:{" "}
            <a
              href="https://www.facebook.com/adpreferences/ad_settings"
              target="_blank"
              rel="noreferrer"
              className="text-pk-gold"
            >
              facebook.com/adpreferences
            </a>
          </li>
          <li>
            Google hirdetési beállítások:{" "}
            <a
              href="https://myadcenter.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-pk-gold"
            >
              myadcenter.google.com
            </a>
          </li>
        </ul>
        <p className={p}>
          A sütik letiltása nem befolyásolja a weboldal alapvető funkcióit, a kapcsolatfelvételi űrlap
          sütik nélkül is használható.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>5. Kapcsolat</h2>
        <p className={p}>
          A sütik kezelésével kapcsolatos kérdéseivel forduljon hozzánk a{" "}
          <a href="mailto:info@plasztikkartya.hu" className="text-pk-gold">
            info@plasztikkartya.hu
          </a>{" "}
          e-mail címen. Az adatkezelésről bővebben az{" "}
          <a href="/adatvedelem" className="text-pk-gold">
            Adatvédelmi tájékoztatóban
          </a>{" "}
          olvashat.
        </p>
      </section>
    </LegalPage>
  );
}
