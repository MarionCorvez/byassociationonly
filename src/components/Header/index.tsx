// "use client";
import Link from "next/link";
import styles from "./index.module.scss";
// import Switchmode from "@/app/ui/Switchmode";

export default function Header() {
  return (
    <header className="theme--anthracite">
      <nav className={`${styles.container} flex--between screen`}>
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
  );
}
