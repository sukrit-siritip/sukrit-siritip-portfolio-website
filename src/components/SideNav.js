"use client";

import { motion } from "motion/react";
import { NAV_ITEMS } from "@/lib/data";
import { fadeLeft, stagger } from "@/lib/motion";
import { scrollToSection, useActiveSection } from "./ActiveSection";

export default function SideNav({ className = "" }) {
  const active = useActiveSection();

  return (
    <motion.nav variants={stagger(0.06)} aria-label="Sections" className={`hidden flex-col wide:flex ${className}`}>
      {NAV_ITEMS.map(({ id, label }) => {
        const isActive = id === active;
        return (
          <motion.a
            key={id}
            variants={fadeLeft}
            href={`#${id}`}
            data-target={id}
            aria-current={isActive ? "location" : undefined}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
            className={`group flex items-center gap-[14px] py-[clamp(3px,.65vh,7px)] text-[12.5px] font-medium uppercase tracking-[.12em] transition-colors duration-200 hover:text-head ${
              isActive ? "text-head" : "text-subtle"
            }`}
          >
            <span
              aria-hidden
              className={`h-px bg-current transition-[width] duration-300 ease-out ${isActive ? "w-14" : "w-7 group-hover:w-11"}`}
            />
            {label}
          </motion.a>
        );
      })}
    </motion.nav>
  );
}
