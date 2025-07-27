"use client";
import Link from "next/link";
import SvgLogo from "@/components/ui/SvgLogo";
import React, { useState, useEffect } from "react";
//import ReactDOM from "react-dom";

export default function Header() {
  const [windowHeight, setWindowHeight] = useState(0);
  //const [visible, setVisible] = useState(true);
  //const [position, setPosition] = useState(window.pageYOffset);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <header className="header-container">
      <div className="nav-container">
        <h2>Window Height : {windowHeight} </h2>
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
