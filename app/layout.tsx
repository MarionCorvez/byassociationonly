import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/users"}>Users</Link>
            <Link href={"/about-us"}>About</Link>
            <Link href={"/case-studies"}>Case studies</Link>
            <Link href={"/articles"}>Articles</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/careers"}>Careers</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
