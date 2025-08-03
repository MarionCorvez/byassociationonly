"use client";
import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";

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
        <Nav />
      </header>
    );
  }
}
