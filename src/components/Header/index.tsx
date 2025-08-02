"use client";
import Link from "next/link";
import SvgLogo from "@/components/ui/SvgLogo";
import React, { useState, useEffect } from "react";

export default function Header() {
  if (typeof window !== "undefined") {
    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState(window.scrollY);

    useEffect(() => {
      const handleScroll = () => {
        let moving = window.scrollY;

        setIsVisible(position > moving);
        setPosition(moving);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });

    return (
      <header
        className={`header-container ${
          isVisible ? "is--visible" : "is--hidden"
        }`}
      >
        <div className="nav-container">
          <Link href={"/"} aria-label="Access to Home page" tabIndex={1}>
            <SvgLogo />
          </Link>
          <nav
            className="nav-main"
            role="navigation"
            aria-label="Main Navigation"
          >
            <Link
              href={"/services"}
              aria-label="Access to Services page"
              tabIndex={2}
            >
              Services
            </Link>
            <Link
              href={"/about-us"}
              aria-label="Access to About page"
              tabIndex={3}
            >
              About
            </Link>
            <Link
              href={"/case-studies"}
              aria-label="Access to Case studies page"
              tabIndex={4}
            >
              Case studies
            </Link>
            <Link
              href={"/articles"}
              aria-label="Access to Articles page"
              tabIndex={5}
            >
              Articles
            </Link>
            <Link
              href={"/contact"}
              aria-label="Access to Contact page"
              tabIndex={6}
            >
              Contact
            </Link>
            <Link
              href={"/careers"}
              aria-label="Access to Careers page"
              tabIndex={7}
            >
              Careers
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}
