// Downloads assets for https://www.plasztikkartya.hu/ into public/sites/www-plasztikkartya-hu-dd18f73f/
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://www.plasztikkartya.hu/wp-content/uploads/";
const SITE = "public/sites/www-plasztikkartya-hu-dd18f73f";
const PAGE = `${SITE}/root-8a5edab2/images`;
const FONTS = `${SITE}/shared/fonts`;
const SEO = `${SITE}/shared/seo`;

const cards = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "010", "011", "012", "013"];

const jobs = [
  ...["UltraLight", "Thin", "Light", "Roman", "Medium", "Bold", "Black"].map((w) => [
    `2026/06/HelveticaNeueCyr-${w}.woff2`,
    `${FONTS}/HelveticaNeueCyr-${w}.woff2`,
  ]),
  ["2024/02/cropped-favicon-plasztikkartya-32x32.png", `${SEO}/favicon-32x32.png`],
  ["2024/02/cropped-favicon-plasztikkartya-180x180.png", `${SEO}/apple-touch-icon.png`],
  ["2024/02/cropped-favicon-plasztikkartya-192x192.png", `${SEO}/favicon-192x192.png`],
  ["2024/02/cropped-favicon-plasztikkartya-270x270.png", `${SEO}/favicon-270x270.png`],
  ["2026/06/logo-plasztikkartya.svg", `${PAGE}/logo-plasztikkartya.svg`],
  ["2026/06/plasztikkaryta-hero-new-1536x1284.webp", `${PAGE}/hero-card.webp`],
  ["2026/06/plastic-cards-1536x561.webp", `${PAGE}/plastic-cards.webp`],
  ["2026/06/plastic-cards-scaled.webp", `${PAGE}/plastic-cards-large.webp`],
  ["2026/06/card-background.webp", `${PAGE}/card-background.webp`],
  ["2026/06/vip-card-image.webp", `${PAGE}/vip-card.webp`],
  ["2026/06/contact-image-1-1536x1024.webp", `${PAGE}/contact-image.webp`],
  ["2026/06/graphic-element-01.png", `${PAGE}/graphic-element-01.png`],
  ["2026/06/graphic-element-02-1536x862.webp", `${PAGE}/graphic-element-02.webp`],
  ...cards.map((c) => [`2026/06/card-${c}.webp`, `${PAGE}/card-${c}.webp`]),
];

async function download([src, dest]) {
  const res = await fetch(BASE + src, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${res.status} ${src}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return `${dest} (${buf.length} bytes)`;
}

let failed = 0;
for (let i = 0; i < jobs.length; i += 4) {
  const results = await Promise.allSettled(jobs.slice(i, i + 4).map(download));
  for (const r of results) {
    if (r.status === "fulfilled") console.log("ok  ", r.value);
    else {
      failed++;
      console.error("FAIL", r.reason.message);
    }
  }
}
console.log(`${jobs.length - failed}/${jobs.length} downloaded`);
if (failed) process.exitCode = 1;
