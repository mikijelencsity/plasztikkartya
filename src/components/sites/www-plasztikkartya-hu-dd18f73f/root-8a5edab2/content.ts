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
  titleLines: ["Plasztikkártya", "a jövő a jelenben"],
  text: "Tartós. Praktikus. Feltűnő. Ma már nem luxus — alapkövetelmény.",
  cta: "Szerezze meg most",
};

export const intro = {
  title: "Melyiket adnád ügyfeled kezébe?",
  cta: "Megrendelem",
};

export const whyUsSection = {
  eyebrow: "Miért mi?",
};

export const whyUsItems: string[] = [
  "Egy életre veszed",
  "Ügyfeleid felfigyelnek rá",
  "Grafikával nincs feladatod",
  "Célodra szabjuk",
  "Gyorsan a tiéd",
];

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
    image: "card-vip-ai.webp",
    title: "Transzparens kártya",
    description:
      "Kínálatunkban víztiszta és különböző füstszínű plasztikkártyák érhetők el matt vagy fényes kivitelben. A klasszikus és különleges árnyalatok között mindenki megtalálhatja az igényeinek megfelelő megjelenést.",
  },
  {
    icon: "vip",
    image: "vip-card.webp",
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
      "A hűségkártya hatékony eszköz a visszatérő vásárlók jutalmazására és a vevőkapcsolatok erősítésére. Segítségével éreztetheti ügyfeleivel, hogy fontosak Önnek. Egyedi grafikával és teljes körű tervezési segítséggel készítjük el.",
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
    quote: "Igényes kivitelezés, szép színek és tartós anyag. Biztosan innen rendelek legközelebb is.",
    name: "Dékány Bence",
    date: "2026. június 3.",
  },
  {
    quote: "Kiváló minőségű plasztikkártyák, segítőkész ügyfélszolgálat és gyors szállítás. Csak ajánlani tudom.",
    name: "Pálinkás Réka",
    date: "2026. május 27.",
  },
];

export const contact = {
  title: "Kérjen ajánlatot!",
  text: "Töltse ki az űrlapot, és hamarosan jelentkezünk.",
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
    "Egyéb",
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
