import { usePathname } from "next/navigation";
import Link from "next/link";
import SvgLogo from "@/components/ui/SvgLogo";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="nav-container">
      <Link
        className={`link ${pathname === "/" ? "active" : ""}`}
        href={"/"}
        aria-label="Access to Home page"
        tabIndex={1}
      >
        <SvgLogo />
      </Link>
      <nav className="nav-main" role="navigation" aria-label="Main Navigation">
        <Link
          className={`link ${pathname === "/about-us" ? "is--active" : ""}`}
          href={"/about-us"}
          aria-label="Access to About page"
          tabIndex={3}
        >
          About
        </Link>
        <Link
          className={`link ${pathname === "/case-studies" ? "is--active" : ""}`}
          href={"/case-studies"}
          aria-label="Access to Case studies page"
          tabIndex={4}
        >
          Case studies
        </Link>
        <Link
          className={`link ${pathname === "/articles" ? "is--active" : ""}`}
          href={"/articles"}
          aria-label="Access to Articles page"
          tabIndex={5}
        >
          Articles
        </Link>
        <Link
          className={`link ${pathname === "/contact" ? "is--active" : ""}`}
          href={"/contact"}
          aria-label="Access to Contact page"
          tabIndex={6}
        >
          Contact
        </Link>
        <Link
          className={`link is--self ${
            pathname === "/careers" ? "is--active" : ""
          }`}
          href={"/careers"}
          aria-label="Access to Careers page"
          tabIndex={7}
        >
          Careers
        </Link>
      </nav>
    </div>
  );
}
