"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { NAV_ITEMS } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { scrollToSection, useActiveSection } from "./ActiveSection";

export default function MobileBar() {
  const active = useActiveSection();
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const pill = nav?.querySelector(`[data-target="${active}"]`);
    if (!nav || !pill || nav.offsetParent === null) return;
    nav.scrollTo({
      left: pill.offsetLeft - nav.clientWidth / 2 + pill.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="sticky top-0 z-30 border-b border-line bg-[rgba(22,28,42,.86)] backdrop-blur-[14px] backdrop-saturate-[140%] wide:hidden"
    >
      <motion.nav
        ref={navRef}
        layoutScroll
        aria-label="Sections"
        className="no-scrollbar flex justify-center-safe gap-1 overflow-x-auto px-[clamp(14px,5vw,50px)] py-[10px]"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = id === active;
          return (
            <a
              key={id}
              href={`#${id}`}
              data-target={id}
              aria-current={isActive ? "location" : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={`relative inline-flex min-h-9 flex-none items-center rounded-full px-[14px] text-[14px] font-medium transition-colors duration-300 ${
                isActive ? "text-page hover:text-page" : "text-muted hover:text-head"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-nav-pill"
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 480, damping: 38 }}
                />
              )}
              <span className="relative">{label}</span>
            </a>
          );
        })}
      </motion.nav>
    </motion.header>
  );
}
