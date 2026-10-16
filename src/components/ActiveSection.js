"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/data";

const ActiveSectionContext = createContext("about");

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}

const WIDE_QUERY = "(min-width: 960px)";

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = window.matchMedia(WIDE_QUERY).matches ? 72 : 76;
  const sc = document.scrollingElement || document.documentElement;
  sc.scrollTo({
    top: Math.max(0, el.getBoundingClientRect().top + sc.scrollTop - offset),
    behavior: "smooth",
  });
}

export function ActiveSectionProvider({ children }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const spy = () => {
      const line = window.innerHeight * 0.35;
      let cur = NAV_ITEMS[0].id;
      for (const { id } of NAV_ITEMS) {
        const s = document.getElementById(id);
        if (s && s.getBoundingClientRect().top <= line) cur = id;
      }
      const sc = document.scrollingElement || document.documentElement;
      if (sc.scrollTop + window.innerHeight >= sc.scrollHeight - 4) cur = NAV_ITEMS.at(-1).id;
      setActive(cur);
    };
    spy();
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("resize", spy);
    return () => {
      window.removeEventListener("scroll", spy);
      window.removeEventListener("resize", spy);
    };
  }, []);

  return <ActiveSectionContext value={active}>{children}</ActiveSectionContext>;
}
