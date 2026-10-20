"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { LINKS, NAV_ITEMS } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { scrollToSection, scrollToTop, useActiveSection } from "./ActiveSection";

const bar = "absolute top-1/2 right-3 left-3 h-[1.5px] rounded-sm bg-body transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)]";
const sideInset = "right-[clamp(12px,4vw,24px)] left-[clamp(12px,4vw,24px)]";

export default function MobileBar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const activeLabel = (NAV_ITEMS.find((n) => n.id === active) ?? NAV_ITEMS[0]).label;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 960px)");
    const onWide = (e) => e.matches && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    mq.addEventListener("change", onWide);
    window.addEventListener("keydown", onKey);
    return () => {
      mq.removeEventListener("change", onWide);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="sticky top-0 z-40 px-[clamp(12px,4vw,24px)] pt-[10px] wide:hidden"
      >
        <div className="flex h-[52px] items-center justify-between gap-3 rounded-2xl border border-white/8 bg-[rgba(22,28,42,.72)] pr-2 pl-[18px] shadow-[0_8px_28px_rgba(5,8,15,.35)] backdrop-blur-[16px] backdrop-saturate-[150%]">
          <button type="button" onClick={scrollToTop} className="flex min-w-0 cursor-pointer items-baseline gap-2.5 rounded-md text-left">
            <span className="text-[16px] font-bold tracking-[-.02em] whitespace-nowrap text-head">
              Sukrit <span className="text-gold">Siritip</span>
            </span>
            <span className="relative min-w-0 overflow-hidden text-[13px] text-ellipsis whitespace-nowrap text-subtle">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeLabel}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="inline-block"
                >
                  {activeLabel}
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative size-10 flex-none cursor-pointer rounded-[11px] border border-white/10 bg-white/4"
          >
            <span className={bar} style={{ transform: open ? "translateY(-50%) rotate(45deg)" : "translateY(-4px)" }} />
            <span className={bar} style={{ transform: open ? "translateY(-50%) rotate(-45deg)" : "translateY(3px)" }} />
          </button>
        </div>
      </motion.header>

      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-35 bg-[rgba(10,14,22,.55)] backdrop-blur-[6px] transition-opacity duration-300 wide:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed top-[72px] z-39 rounded-[18px] border border-line bg-surface p-2.5 shadow-[0_20px_50px_rgba(5,8,15,.5)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] wide:hidden ${sideInset} ${
          open ? "opacity-100" : "pointer-events-none -translate-y-2 scale-[.98] opacity-0"
        }`}
      >
        <nav aria-label="Sections" className="flex flex-col">
          {NAV_ITEMS.map(({ id, label }, i) => {
            const isActive = id === active;
            return (
              <motion.a
                key={id}
                href={`#${id}`}
                data-target={id}
                aria-current={isActive ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  go(id);
                }}
                animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE, delay: open ? 0.04 * i : 0 }}
                className={`flex min-h-12 items-center justify-between rounded-[11px] px-3.5 text-[17px] font-medium transition-colors duration-200 ${
                  isActive ? "bg-[rgba(207,174,107,.10)] text-head hover:text-head" : "text-subtle hover:text-head"
                }`}
              >
                {label}
                <span className="font-mono text-[12px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
              </motion.a>
            );
          })}
        </nav>
        <div className="mt-2 flex gap-2 border-t border-line pt-2.5">
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener"
            className="flex min-h-[46px] flex-1 items-center justify-center rounded-[11px] bg-body text-[15px] font-medium text-page transition-colors duration-200 hover:bg-gold hover:text-page"
          >
            Resume
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            className="flex min-h-[46px] flex-1 items-center justify-center rounded-[11px] border border-strong-2 text-[15px] font-medium text-body transition-colors duration-200 hover:border-body hover:text-body"
          >
            Email me
          </a>
        </div>
      </div>
    </>
  );
}
