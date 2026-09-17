import type { Metadata } from "next";
import { LegalPage, legalText } from "@/components/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/LegalPage";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató | Plasztikkartya.hu",
  description: "Tájékoztató a Plasztikkartya.hu weboldalon és az ajánlatkérő űrlapon keresztül történő adatkezelésről.",
};

const { h2, p, ul } = legalText;

export default function AdatvedelemPage() {
  return (
    <LegalPage title="Adatvédelmi tájékoztató" updated="2026. szeptember 17.">
      <section className="flex flex-col gap-3">
        <h2 className={h2}>1. Az adatkezelő</h2>
        <p className={p}>
          Az adatkezelő a Plasztikkartya.hu üzemeltetője (a továbbiakban: „Adatkezelő”).
          Elérhetőségek: telefon +36 (70) 885 8046, e-mail{" "}
          <a href="mailto:info@plasztikkartya.hu" className="text-pk-gold">
            info@plasztikkartya.hu
          </a>
          . Az adatkezelés az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR), valamint az
          információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény
          (Infotv.) rendelkezéseivel összhangban történik.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>2. A tájékoztató célja és hatálya</h2>
        <p className={p}>
          Jelen tájékoztató célja, hogy bemutassa, milyen személyes adatokat kezelünk a weboldalon található
          ajánlatkérő űrlap használata, valamint a weboldal látogatása során, és milyen jogok illetik meg
          ezzel kapcsolatban az érintetteket. A tájékoztató a plasztikkartya.hu weboldalra és az azon
          keresztül folytatott adatkezelésekre vonatkozik.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>3. Az ajánlatkérő űrlap során kezelt adatok</h2>
        <p className={p}>
          Amikor kitölti az „Ajánlatkérés” űrlapot, az alábbi adatokat adja meg, illetve kezeljük:
        </p>
        <ul className={ul}>
          <li>Név</li>
          <li>E-mail cím</li>
          <li>Telefonszám</li>
          <li>Cégnév (opcionális)</li>
          <li>A kiválasztott kártyatípus</li>
          <li>Az üzenet szövege</li>
          <li>Az űrlaphoz csatolt fájl/grafika (opcionális)</li>
        </ul>
        <p className={p}>
          <span className="font-semibold text-white">Az adatkezelés célja:</span> az érdeklődés,
          ajánlatkérés megválaszolása, kapcsolatfelvétel, egyedi árajánlat elkészítése, illetve a
          megrendelés teljesítésének előkészítése.
        </p>
        <p className={p}>
          <span className="font-semibold text-white">Jogalap:</span> az Ön hozzájárulása (GDPR 6. cikk (1)
          bekezdés a) pont), amelyet az űrlap elküldésekor, a checkbox bejelölésével ad meg.
        </p>
        <p className={p}>
          <span className="font-semibold text-white">Az adatkezelés időtartama:</span> az ajánlatkérés
          megválaszolásáig, illetve — amennyiben megrendelés jön létre — a megrendelés teljesítéséhez, a
          számvitelről szóló törvény szerinti bizonylatok esetén a jogszabályban előírt megőrzési időig. Ha
          nem jön létre üzleti kapcsolat, az adatokat legkésőbb az utolsó kapcsolatfelvételtől számított 1
          éven belül töröljük.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>4. Adatfeldolgozók, akikkel megosztjuk az adatokat</h2>
        <p className={p}>
          Az ajánlatkérő űrlap elküldött adatait technikai közreműködőként az alábbi szolgáltatók dolgozzák
          fel, kizárólag az üzenet továbbítása / megjelenítése céljából:
        </p>
        <ul className={ul}>
          <li>
            <span className="font-semibold text-white">Resend (Resend, Inc.)</span> — az űrlap adatait
            tartalmazó e-mail kézbesítése az Adatkezelő címére.
          </li>
        </ul>
        <p className={p}>
          Az Ön adatait harmadik félnek reklámcélra nem adjuk el, és nem osztjuk meg olyan szolgáltatóval,
          amely azt saját céljára használná fel.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>5. Sütik és mérőkódok</h2>
        <p className={p}>
          A weboldalon a látogatottság méréséhez és a hirdetések hatékonyságának mérésére sütiket és
          mérőkódokat (Meta Pixel, illetve — ha aktív — Google Ads konverziókövetés) használunk. Ezekről
          részletesen a{" "}
          <a href="/sutik-tajekoztato" className="text-pk-gold">
            Sütik (cookie-k) tájékoztatóban
          </a>{" "}
          olvashat, ahol a hozzájárulását is módosíthatja.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>6. Az Ön jogai</h2>
        <p className={p}>Az Önt megillető, a GDPR szerinti jogok:</p>
        <ul className={ul}>
          <li>Hozzáférés a kezelt személyes adatokhoz és tájékoztatás kéréséhez</li>
          <li>Helyesbítés — a pontatlan adatok javításának kéréséhez</li>
          <li>Törlés — az adatok törlésének kéréséhez</li>
          <li>Az adatkezelés korlátozásának kéréséhez</li>
          <li>Tiltakozás az adatkezelés ellen</li>
          <li>Adathordozhatóság</li>
          <li>A hozzájárulás bármikor, indokolás nélküli visszavonásához</li>
        </ul>
        <p className={p}>
          Jogai gyakorlásához keressen minket a fenti elérhetőségek bármelyikén. Amennyiben úgy ítéli meg,
          hogy adatkezelésünk jogsértő, panasszal élhet a Nemzeti Adatvédelmi és Információszabadság
          Hatóságnál (NAIH, székhely: 1055 Budapest, Falk Miksa utca 9–11., honlap:{" "}
          <a href="https://naih.hu" target="_blank" rel="noreferrer" className="text-pk-gold">
            naih.hu
          </a>
          ), vagy bírósághoz fordulhat.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>7. Adatbiztonság</h2>
        <p className={p}>
          Az Adatkezelő megteszi a szükséges technikai és szervezési intézkedéseket az Ön adatainak
          védelme érdekében a jogosulatlan hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal,
          törlés vagy megsemmisítés, valamint a véletlen megsemmisülés és sérülés ellen.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className={h2}>8. Kapcsolat</h2>
        <p className={p}>
          Adatvédelemmel kapcsolatos kérdéseivel, kérésével forduljon hozzánk bizalommal a{" "}
          <a href="mailto:info@plasztikkartya.hu" className="text-pk-gold">
            info@plasztikkartya.hu
          </a>{" "}
          e-mail címen, vagy telefonon a +36 (70) 885 8046 számon.
        </p>
      </section>
    </LegalPage>
  );
}
