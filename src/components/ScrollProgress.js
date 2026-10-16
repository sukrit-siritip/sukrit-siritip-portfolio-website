"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[2px] origin-left bg-gradient-to-r from-gold/40 via-gold to-gold-light"
    />
  );
}
