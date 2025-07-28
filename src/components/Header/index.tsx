"use client";
import Link from "next/link";
import SvgLogo from "@/components/ui/SvgLogo";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import useWindowScroll from "@/hooks/useWindowScroll";

export default function Header() {
  if (typeof window !== "undefined") {
    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState(window.scrollY);
    //const [windowHeight, setWindowHeight] = useState(0);

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

    //const isVisible = useWindowScroll();
    return (
      <>
        <header
          className={`header-container ${
            isVisible ? "is--visible" : "is--hidden"
          }`}
        >
          <div className="nav-container">
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
          </div>
        </header>
      </>
    );
  }
}
