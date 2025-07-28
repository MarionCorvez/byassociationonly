"use client";
import React, { useState, useEffect } from "react";

export default function useWindowScroll() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const [position, setPosition] = useState(window.scrollY);
      let moving = window.scrollY;
      setIsVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return isVisible;
}
