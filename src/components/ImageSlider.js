"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navButton =
  "absolute top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-overlay text-[18px] leading-none text-head shadow-[0_2px_10px_rgba(0,0,0,.3)] transition-colors duration-200 hover:bg-head hover:text-page";

const SWIPE_PX = 40;

export default function ImageSlider({ images, alt, position = "50% 50%" }) {
  const [index, setIndex] = useState(0);
  const n = images.length;
  const go = (j) => setIndex((j + n) % n);

  return (
    <motion.div
      className="relative aspect-video w-full touch-pan-y overflow-hidden rounded-[9px] bg-surface-2"
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
      onPanEnd={(_, info) => {
        if (Math.abs(info.offset.x) < SWIPE_PX) return;
        go(info.offset.x < 0 ? index + 1 : index - 1);
      }}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-full flex-[0_0_100%] overflow-hidden" aria-hidden={i !== index}>
            <Image
              src={src}
              alt={`${alt}, screenshot ${i + 1}`}
              fill
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
              sizes="(min-width: 960px) 640px, 100vw"
              className="object-cover transition-transform duration-700 ease-out select-none group-hover:scale-[1.03]"
              style={{ objectPosition: position }}
            />
          </div>
        ))}
      </div>
      <motion.button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous image"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${navButton} left-3`}
      >
        ‹
      </motion.button>
      <motion.button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next image"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${navButton} right-3`}
      >
        ›
      </motion.button>
      <div
        className="absolute right-3 bottom-3 flex overflow-hidden rounded-full bg-overlay px-[9px] py-1 font-mono text-[11.5px] text-head"
        aria-live="polite"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="inline-block"
          >
            {index + 1}
          </motion.span>
        </AnimatePresence>
        <span>&nbsp;/ {n}</span>
      </div>
    </motion.div>
  );
}
