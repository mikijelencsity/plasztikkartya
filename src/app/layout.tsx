import type { Metadata } from "next";
import { Nunito, Raleway, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const SEO = "/sites/www-plasztikkartya-hu-dd18f73f/shared/seo";

// next/font requires literal paths (resolved relative to this file).
const helveticaNeue = localFont({
  variable: "--font-helvetica-neue",
  display: "swap",
  src: [
    {
      path: "../../public/sites/www-plasztikkartya-hu-dd18f73f/shared/fonts/HelveticaNeueCyr-UltraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/sites/www-plasztikkartya-hu-dd18f73f/shared/fonts/HelveticaNeueCyr-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/sites/www-plasztikkartya-hu-dd18f73f/shared/fonts/HelveticaNeueCyr-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/sites/www-plasztikkartya-hu-dd18f73f/shared/fonts/HelveticaNeueCyr-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/www-plasztikkartya-hu-dd18f73f/shared/fonts/HelveticaNeueCyr-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/sites/www-plasztikkartya-hu-dd18f73f/shared/fonts/HelveticaNeueCyr-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/sites/www-plasztikkartya-hu-dd18f73f/shared/fonts/HelveticaNeueCyr-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

const roboto = Roboto({ variable: "--font-roboto-google", subsets: ["latin", "latin-ext"], weight: "400" });
const raleway = Raleway({ variable: "--font-raleway-google", subsets: ["latin", "latin-ext"], weight: ["400", "500"] });
const nunito = Nunito({ variable: "--font-nunito-google", subsets: ["latin", "latin-ext"], weight: "400" });

const title = "Plasztikkártya gyártás | Plasztikkartya.hu";
const description =
  "Plasztikkártya gyártása akár 10 db esetén is, rövid határidővel! Mágnes csík, aláírás csík, Ajándék kártya, Névjegykártya plasztikkártya.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plasztikkartya.hu"),
  title,
  description,
  openGraph: {
    locale: "hu_HU",
    type: "website",
    url: "/",
    title,
    description,
    siteName: "Plasztikkártya gyártás",
    images: [
      {
        url: "/sites/www-plasztikkartya-hu-dd18f73f/root-8a5edab2/images/card-011.webp",
        width: 1552,
        height: 1552,
        type: "image/webp",
      },
    ],
  },
  icons: {
    icon: [
      { url: `${SEO}/favicon-32x32.png`, sizes: "32x32" },
      { url: `${SEO}/favicon-192x192.png`, sizes: "192x192" },
    ],
    apple: `${SEO}/apple-touch-icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${helveticaNeue.variable} ${roboto.variable} ${raleway.variable} ${nunito.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
