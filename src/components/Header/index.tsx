"use client";
import Link from "next/link";
import SvgLogo from "@/components/ui/SvgLogo";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const cls = visible ? "is--visible" : "is--hidden";

  return (
    <header className={`${cls} header-container`}>
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
  );
}
