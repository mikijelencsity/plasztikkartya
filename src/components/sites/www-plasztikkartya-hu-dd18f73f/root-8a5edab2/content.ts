import type { CardTypeIconName } from "../shared/icons";

export const IMAGES = "/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images";

export interface CardType {
  icon: CardTypeIconName;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface TestimonialStat {
  label: string;
  value: number;
  suffix: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  stats: TestimonialStat[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export const hero = {
  titleLines: ["A plasztikkártya", "a jövő"],
  text: "A Plasztikkártya széleskörű felhasználhatósága, praktikus kezelhetősége és időtállósága teszi a plasztikkártyát egyre népszerűbbé mind az üzleti, mind a magánszférában.",
  cta: "Szerezze meg most",
};

export const intro = {
  title: "Itt az ideje elfelejteni a hagyományos papír alapú kártyákat!",
  text: "Mire gondolhat ügyfelünk, leendő vásárlónk miközben kezében tartja plasztik kártyánkat? Mire másra, mint hogy ez az ember nem bízza a véletlenre üzleti sikereit! Mi a kezébe adjuk sikerének kulcsait, a többi már csak Önön múlik!",
  cta: "Megrendelem",
};

export const cardTypesSection = {
  title: "Plasztikkártya típusok",
  text: "A tapasztalataink azt mutatják, hogy jelentősen megnövekedett az érdeklődés az igényesen elkészített plasztikkártyák iránt. A Plasztikkártya egyedülállóan, exkluzív módon képviseli Önt vagy cégét, vállalatát. Széleskörű felhasználhatósága, praktikus kezelhetősége és időtállósága teszi a plasztikkártyát egyre népszerűbbé mind az üzleti, mind a magánszférában.",
};

export const cardTypes: CardType[] = [
  {
    icon: "gift",
    title: "Ajándékkártya",
    description:
      "Az ajándékkártya praktikus és elegáns ajándék családtagoknak, barátoknak vagy partnereknek. Előre meghatározott összeggel vagy feltöltött értékkártyaként is használható termékek és szolgáltatások vásárlására.",
  },
  {
    icon: "transparent",
    title: "Transzparens kártya",
    description:
      "Kínálatunkban víztiszta és különböző füstszínű plasztikkártyák érhetők el matt vagy fényes kivitelben. A klasszikus és különleges árnyalatok között mindenki megtalálhatja az igényeinek megfelelő megjelenést.",
  },
  {
    icon: "vip",
    title: "VIP kártya",
    description:
      "VIP kártyáink exkluzív megjelenésükkel ideálisak rendezvények, klubok és kiemelt vendégek számára. Arany vagy ezüst felületkezeléssel, dombornyomással és belépő- vagy kulcskártya funkcióval is készülhetnek.",
  },
  {
    icon: "door",
    title: "Ajtó nyitó kártya",
    description:
      "Az ajtónyitó plasztikkártyák biztonságos beléptetést biztosítanak szállodákban, bankokban és más intézményekben. RFID vagy mágnescsíkos kivitelben is elérhetők az egyszerű és gyors azonosításhoz.",
  },
  {
    icon: "customGraphic",
    title: "Egyedi grafikájú kártya",
    description:
      "Kész grafikája alapján vagy grafikusunk segítségével prémium minőségű névjegykártyákat készítünk. Egy- vagy kétoldalas kivitel, valamint arany, ezüst és dombornyomott felület is választható az Ön elképzelése szerint.",
  },
  {
    icon: "id",
    title: "Azonosító kártya",
    description:
      "Az azonosító plasztikkártya egyszerre szolgálhat azonosításra és márkaépítésre. A gyártás előtt ingyenes látványtervet és tesztpéldányt is biztosítunk. Lehetőséget biztosítunk arra is, hogy a nyomtatás előtt kézbe vegye kártyáját.",
  },
  {
    icon: "discount",
    title: "Kedvezmény kártya",
    description:
      "A hűségkártya hatékony eszköz a visszatérő vásárlók jutalmazására és a vevőkapcsolatok erősítésére. Segítségével éreztetheti ügyfeleivel, hogy fontosak Önnek. Egyedi grafikával és teljes körű tervezési segítséggel készítjük el.",
  },
  {
    icon: "warranty",
    title: "Garancia kártya",
    description:
      "A tartós plasztik garanciakártya megbízhatóbb és időtállóbb megoldás a papíralapú jótállási jegyeknél. Ez a plasztikkártya megbízhatóságot sugall, évek alatt sem romlik a minősége. Igény szerint azonosítást segítő extrákkal is ellátható.",
  },
  {
    icon: "sportPass",
    title: "Sportbérlet kártya",
    description:
      "A plasztik bérletkártya ideális választás edzőtermekbe, uszodákba és fitneszközpontokba, mivel hosszú távon is ellenáll a használatnak. Beléptetésre és szekrények nyitására is alkalmas extrafunkciókkal bővíthető.",
  },
];

export const benefits = {
  title: "Miért válassza a plasztikkártyát?",
  text: "A plasztikkártya tartós, elegáns és professzionális megjelenést biztosít, legyen szó hűségkártyáról, belépőkártyáról, névjegykártyáról vagy azonosító kártyáról. A kiváló minőségű alapanyagoknak és a számos egyedi kialakítási lehetőségnek köszönhetően hosszú távon is megbízható megoldást kínál vállalkozása számára.",
  lists: [
    ["Tartós és időtálló", "Prémium megjelenés", "Grafikai támogatás"],
    ["Egyedi kialakítás", "Sokoldalú felhasználás", "Gyors gyártás"],
  ],
  cta: "Megrendelem",
};

export const stepsSection = {
  title: "Miért válassza a plasztikkártyát?",
  text: "Álmodja meg és mi megvalósítjuk! Az Ön kártyái személyre szabhatók aláírás-mezővel, mágnesszalaggal, vonalkóddal, stb. Forduljon hozzánk bizalommal telefonon vagy E-mail-en keresztül.",
  cta: "Megrendelem",
};

export const steps: Step[] = [
  {
    title: "1. lépés",
    description:
      "Küldje el ajánlatkérését, és amennyiben rendelkezésre áll, a nyomdai anyagot is. Kollégáink a beérkezett anyagok alapján megkezdik az egyeztetést.",
  },
  {
    title: "2. lépés",
    description:
      "Elkészítjük árajánlatát, átnézzük a grafikát, és szükség esetén javaslatot teszünk a tökéletes végeredmény érdekében. Ezzel egy időben a fizetés részleteit is egyeztetjük.",
  },
  {
    title: "3. lépés",
    description:
      "A megrendelés és a jóváhagyott grafika birtokában megkezdjük a gyártást, igény esetén mintakártya készítésével. Ezt követően már csak az elkészült kártyákról szóló értesítésünkre kell várnia.",
  },
  {
    title: "4. lépés",
    description:
      "A mintakártya fontos része a gyártási folyamatnak, különösen akkor, ha a színek pontos megjelenése kiemelten fontos. A minta díja megrendelés esetén jóváírásra kerül, és jóváhagyása után kezdődik a végleges gyártás.",
  },
  {
    title: "5. lépés",
    description:
      "Amint elkészülnek a megrendelt kártyák, értesítést küldünk az átvétel vagy a szállítás részleteiről. Önnek már csak a kész termék átvétele marad.",
  },
];

export const galleryImages: GalleryImage[] = ["013", "012", "011", "010", "09", "08", "07", "06", "05", "04", "03", "02", "01"].map(
  (n) => ({ src: `${IMAGES}/card-${n}.webp`, alt: `card-${n}` }),
);

export const testimonialsSection = {
  title: "Vevői visszajelzések",
  text: "Valódi visszajelzések elégedett ügyfeleinktől, akik prémium minőségű plasztikkártyáinkat választották. Olvasd el, milyen tapasztalatokat szereztek a közös munka során.",
};

export const testimonials: Testimonial[] = [
  {
    quote: "Nagyon elégedett vagyok a kártyák minőségével. Gyorsan elkészültek, és pontosan olyanok lettek, mint vártam.”",
    name: "Szabó Eszter",
    stats: [
      { label: "Minőség", value: 98, suffix: "%" },
      { label: "Ár-érték arány", value: 9, suffix: "/10" },
      { label: "Gyártási idő", value: 9, suffix: "/10" },
    ],
  },
  {
    quote: "Igényes kivitelezés, szép színek és tartós anyag. Biztosan innen rendelek legközelebb is.",
    name: "Nagy Péter",
    stats: [
      { label: "Minőség", value: 100, suffix: "%" },
      { label: "Ár-érték arány", value: 10, suffix: "/10" },
      { label: "Gyártási idő", value: 9, suffix: "/10" },
    ],
  },
  {
    quote: "Kiváló minőségű plasztikkártyák, segítőkész ügyfélszolgálat és gyors szállítás. Csak ajánlani tudom.",
    name: "Tóth Katalin",
    stats: [
      { label: "Minőség", value: 95, suffix: "%" },
      { label: "Ár-érték arány", value: 9.5, suffix: "/10" },
      { label: "Gyártási idő", value: 9, suffix: "/10" },
    ],
  },
];

export const contact = {
  title: "Rendeljen plasztikkártyát most!",
  text: "Álmodja meg és mi megvalósítjuk! Az Ön kártyái személyre szabhatók aláírás-mezővel, mágnesszalaggal, vonalkóddal, stb. Forduljon hozzánk bizalommal telefonon vagy E-mail-en keresztül.",
  cardOptions: [
    "Ajándékkártya",
    "Transzparens kártya",
    "VIP kártya",
    "Ajtó nyitó plasztikkártya",
    "Egyedi grafikájú plasztikkártya",
    "Azonosító kártya",
    "Kedvezmény kártya",
    "Garancia kártya",
    "Sportbérlet kártya",
  ],
  submit: "Üzenet küldése",
};

export const footer = {
  text: "A plasztikkártya tartós, elegáns és professzionális megjelenést biztosít, legyen szó hűségkártyáról, belépőkártyáról, névjegykártyáról vagy azonosító kártyáról.",
  copyright: "2026 @ Plasztikkartya.hu | Minden jog fenntartva.",
  privacyLabel: "Adatvédelem",
  privacyHref: "/adatvedelem/",
  phoneLabel: "Telefon:",
  phone: "+36 (70) 885 8046",
  phoneHref: "tel:+36708858046",
  emailLabel: "E-mail:",
  email: "info@plasztikkartya.hu",
};
