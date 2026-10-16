"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { EASE } from "@/lib/motion";

export default function CountUp({ value, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const decimals = value.split(".")[1]?.length ?? 0;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, Number(value), {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <div ref={ref} className={className}>
      {value}
    </div>
  );
}
