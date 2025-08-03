import type { Metadata } from "next";
import Leicht from "next/font/local";
import Itcgalliard from "next/font/local";
import "@/styles/globals.scss";

import Header from "@/partials/Header";
import Footer from "@/partials/Footer";
import CookieBanner from "@/partials/CookieBanner";

const leicht = Leicht({
  src: "../../public/fonts/sohne-leicht.woff2",
  variable: "--f-leicht",
  display: "swap",
  weight: "400",
  fallback: ["system-ui", "arial"],
});

const itcgalliard = Itcgalliard({
  src: "../../public/fonts/itc-galliard-roman.woff2",
  variable: "--f-itc",
  display: "swap",
  weight: "400",
  fallback: ["system-ui", "helvetica"],
});

export const metadata: Metadata = {
  title: "By Association Only's website reproduction",
  description: "Work project unrelated to By Association Only creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leicht.variable} ${itcgalliard.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}
