"use client";
import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SvgLogo from "@/components/ui/Svg/SvgLogo";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="nav-container">
      <Link
        className={`link ${pathname === "/" ? "active" : ""}`}
        href={"/"}
        aria-label="Access to Home page"
      >
        <SvgLogo />
      </Link>
      <nav className="nav-main" role="navigation" aria-label="Main Navigation">
        {/*         <Link
          className={`link ${pathname === "/services" ? "is--active" : ""}`}
          href={"/services"}
          aria-label="Access to Services page"
        >
          Services
        </Link> */}
        <Link
          className={`link ${pathname === "/about-us" ? "is--active" : ""}`}
          href={"/about-us"}
          aria-label="Access to About page"
        >
          About
        </Link>
        <Link
          className={`link ${pathname === "/case-studies" ? "is--active" : ""}`}
          href={"/case-studies"}
          aria-label="Access to Case studies page"
        >
          Case studies
        </Link>
        <Link
          className={`link ${pathname === "/articles" ? "is--active" : ""}`}
          href={"/articles"}
          aria-label="Access to Articles page"
        >
          Articles
        </Link>
        {/*         <Link
          className={`link ${pathname === "/contact" ? "is--active" : ""}`}
          href={"/contact"}
          aria-label="Access to Contact page"
        >
          Contact
        </Link> */}
        <Link
          className={`link is--self ${
            pathname === "/careers" ? "is--active" : ""
          }`}
          href={"/careers"}
          aria-label="Access to Careers page"
        >
          Careers
        </Link>
      </nav>
    </div>
  );
}
