import type { CardTypeIconName } from "../shared/icons";

export const IMAGES = "/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images";

export interface CardType {
  icon: CardTypeIconName;
  image: string;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  date: string;
}

export const hero = {
  titleLines: ["Plasztikkártya", "gyártva, ahogy elképzelted"],
  text: "Tartós. Praktikus. Feltűnő. Ma már nem luxus — alapkövetelmény.",
  cta: "Szerezze meg most",
};

export const cardTypesSection = {
  title: "Plasztikkártya típusok",
  text: "Lapozd végig és találd meg célodra legalkalmasabb plasztikkártyát.",
};

export const cardTypes: CardType[] = [
  {
    icon: "gift",
    image: "card-gift-ai.webp",
    title: "Ajándékkártya",
    description:
      "Az ajándékkártya praktikus és elegáns ajándék családtagoknak, barátoknak vagy partnereknek. Előre meghatározott összeggel vagy feltöltött értékkártyaként is használható termékek és szolgáltatások vásárlására.",
  },
  {
    icon: "transparent",
    image: "card-transparent-ai.webp",
    title: "Transzparens kártya",
    description:
      "Kínálatunkban víztiszta és különböző füstszínű plasztikkártyák érhetők el matt vagy fényes kivitelben. A klasszikus és különleges árnyalatok között mindenki megtalálhatja az igényeinek megfelelő megjelenést.",
  },
  {
    icon: "vip",
    image: "card-vip-ai.webp",
    title: "VIP kártya",
    description:
      "VIP kártyáink exkluzív megjelenésükkel ideálisak rendezvények, klubok és kiemelt vendégek számára. Arany vagy ezüst felületkezeléssel, dombornyomással és belépő- vagy kulcskártya funkcióval is készülhetnek.",
  },
  {
    icon: "door",
    image: "card-door-ai.webp",
    title: "Ajtó nyitó kártya",
    description:
      "Az ajtónyitó plasztikkártyák biztonságos beléptetést biztosítanak szállodákban, bankokban és más intézményekben. RFID vagy mágnescsíkos kivitelben is elérhetők az egyszerű és gyors azonosításhoz.",
  },
  {
    icon: "customGraphic",
    image: "card-customgraphic-ai.webp",
    title: "Egyedi grafikájú kártya",
    description:
      "Kész grafikája alapján vagy grafikusunk segítségével prémium minőségű névjegykártyákat készítünk. Egy- vagy kétoldalas kivitel, valamint arany, ezüst és dombornyomott felület is választható az Ön elképzelése szerint.",
  },
  {
    icon: "id",
    image: "card-id-ai.webp",
    title: "Azonosító kártya",
    description:
      "Az azonosító plasztikkártya egyszerre szolgálhat azonosításra és márkaépítésre. A gyártás előtt ingyenes látványtervet és tesztpéldányt is biztosítunk. Lehetőséget biztosítunk arra is, hogy a nyomtatás előtt kézbe vegye kártyáját.",
  },
  {
    icon: "discount",
    image: "card-discount-ai.webp",
    title: "Kedvezmény kártya",
    description:
      "A kedvezménykártya egyszerű és látványos módja annak, hogy vásárlóit azonnali árengedménnyel jutalmazza. Egyedi grafikával és teljes körű tervezési segítséggel készítjük el.",
  },
  {
    icon: "discount",
    image: "card-loyalty-ai.webp",
    title: "Hűségkártya",
    description:
      "A hűségkártya hatékony eszköz a visszatérő vásárlók jutalmazására és a vevőkapcsolatok erősítésére. Segítségével éreztetheti ügyfeleivel, hogy fontosak Önnek. Tagazonosítóval és vonalkóddal is elkészítjük.",
  },
  {
    icon: "warranty",
    image: "card-warranty-ai.webp",
    title: "Garancia kártya",
    description:
      "A tartós plasztik garanciakártya megbízhatóbb és időtállóbb megoldás a papíralapú jótállási jegyeknél. Ez a plasztikkártya megbízhatóságot sugall, évek alatt sem romlik a minősége. Igény szerint azonosítást segítő extrákkal is ellátható.",
  },
  {
    icon: "sportPass",
    image: "card-sportpass-ai.webp",
    title: "Sportbérlet kártya",
    description:
      "A plasztik bérletkártya ideális választás edzőtermekbe, uszodákba és fitneszközpontokba, mivel hosszú távon is ellenáll a használatnak. Beléptetésre és szekrények nyitására is alkalmas extrafunkciókkal bővíthető.",
  },
];

export const benefits = {
  title: "Miért válassza a plasztikkártyát?",
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

export const testimonialsSection = {
  title: "Vevői visszajelzések",
  text: "Valódi vélemények elégedett ügyfeleinktől.",
};

export const testimonials: Testimonial[] = [
  {
    quote: "Nagyon elégedett vagyok a kártyák minőségével. Gyorsan elkészültek, és pontosan olyanok lettek, mint vártam.”",
    name: "Sebestyén Kata",
    date: "2026. április 18.",
  },
  {
    quote: "Kiváló minőségű plasztikkártyák, segítőkész ügyfélszolgálat és gyors szállítás. Csak ajánlani tudom.",
    name: "Pálinkás Réka",
    date: "2026. május 27.",
  },
];

export interface PriceRow {
  quantity: string;
  netUnitPrice: string;
  netTotal: string;
  vatRate: string;
  vatAmount: string;
  grossTotal: string;
}

export const pricingSection = {
  title: "Árlista",
  text: "Tájékoztató árak plasztikkártya gyártásra, mennyiségtől függően.",
  columns: ["Mennyiség (db)", "Nettó egységár", "Nettó összesen", "ÁFA", "ÁFA összege", "Bruttó összesen"],
  rows: [
    { quantity: "100", netUnitPrice: "250 Ft", netTotal: "25 000 Ft", vatRate: "27%", vatAmount: "6 750 Ft", grossTotal: "31 750 Ft" },
    { quantity: "250", netUnitPrice: "200 Ft", netTotal: "50 000 Ft", vatRate: "27%", vatAmount: "13 500 Ft", grossTotal: "63 500 Ft" },
    { quantity: "500", netUnitPrice: "180 Ft", netTotal: "90 000 Ft", vatRate: "27%", vatAmount: "24 300 Ft", grossTotal: "114 300 Ft" },
    { quantity: "1000", netUnitPrice: "150 Ft", netTotal: "150 000 Ft", vatRate: "27%", vatAmount: "40 500 Ft", grossTotal: "190 500 Ft" },
    { quantity: "1500", netUnitPrice: "140 Ft", netTotal: "210 000 Ft", vatRate: "27%", vatAmount: "56 700 Ft", grossTotal: "266 700 Ft" },
    { quantity: "2000", netUnitPrice: "130 Ft", netTotal: "260 000 Ft", vatRate: "27%", vatAmount: "70 200 Ft", grossTotal: "330 200 Ft" },
  ] satisfies PriceRow[],
  note: "Gyártási idő: a nyomdakész grafika jóváhagyását és az összeg beérkezését követően 7–10 munkanap.",
};

export const contact = {
  title: "Kérjen ajánlatot!",
  text: "Töltse ki az űrlapot, és hamarosan jelentkezünk.",
  cardOptions: [
    "Ajándékkártya",
    "Transzparens kártya",
    "VIP kártya",
    "Ajtó nyitó kártya",
    "Egyedi grafikájú kártya",
    "Azonosító kártya",
    "Kedvezmény kártya",
    "Hűségkártya",
    "Garancia kártya",
    "Sportbérlet kártya",
    "Egyéb",
  ],
  quantityOptions: ["100 - 200 db", "200 - 500 db", "500 - 1000 db", "1000 - 2000 db", "2000+ db", "Még nem tudom"],
  submit: "Üzenet küldése",
};

export const footer = {
  text: "A plasztikkártya tartós, elegáns és professzionális megjelenést biztosít, legyen szó hűségkártyáról, belépőkártyáról, névjegykártyáról vagy azonosító kártyáról.",
  copyright: "2026 @ Plasztikkartya.hu | Minden jog fenntartva.",
  privacyLabel: "Adatvédelem",
  privacyHref: "/adatvedelem",
  phoneLabel: "Telefon:",
  phone: "+36 (70) 885 8046",
  phoneHref: "tel:+36708858046",
  emailLabel: "E-mail:",
  email: "info@plasztikkartya.hu",
};
