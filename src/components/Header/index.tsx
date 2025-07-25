// "use client";
import Link from "next/link";
import SvgLogo from "@/components/ui/SvgLogo";

export default function Header() {
  return (
    <header className="header-container">
      <Link href={"/"}>
        <SvgLogo />
      </Link>
      <nav className="nav-main">
        <Link href={"/services"}>Services</Link>
        <Link href={"/about-us"}>About</Link>
        <Link href={"/case-studies"}>Case studies</Link>
        <Link href={"/articles"}>Articles</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/careers"}>Careers</Link>
      </nav>
    </header>
  );
}
