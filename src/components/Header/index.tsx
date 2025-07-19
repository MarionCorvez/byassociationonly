// "use client";
import Link from "next/link";
import SvgLogo from "@/components/ui/SvgLogo";
// import Switchmode from "@/app/ui/Switchmode";

export default function Header() {
  return (
    <header className="theme--anthracite grid-50">
      <Link href={"/"}>
        <SvgLogo />
      </Link>
      <nav className="flex--between screen">
        <Link href={"/services"}>Services</Link>
        <Link href={"/about-us"}>About</Link>
        <Link href={"/case-studies"}>Case studies</Link>
        <Link href={"/articles"}>Articles</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/careers"} className="flex--self">
          Careers
        </Link>
      </nav>
    </header>
  );
}
