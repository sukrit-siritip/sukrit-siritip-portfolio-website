"use client";

import { useEffect, useRef } from "react";

const HOT = "a,button,[data-target]";

export default function MagneticCursor() {
  const dotRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const dot = dotRef.current, box = boxRef.current;
    document.documentElement.dataset.customCursor = "";
    dot.style.display = box.style.display = "block";

    let mx = -100, my = -100, raf = 0, hotEl = null;
    let x = 0, y = 0, w = 28, hh = 28, r = 14;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      hotEl = e.target.closest ? e.target.closest(HOT) : null;
    };

    const loop = () => {
      let tx = mx - 14, ty = my - 14, tw = 28, th = 28, tr = 14;
      if (hotEl) {
        const b = hotEl.getBoundingClientRect();
        const cs = getComputedStyle(hotEl);
        tx = b.left - 6 + (mx - (b.left + b.width / 2)) * 0.08;
        ty = b.top - 4 + (my - (b.top + b.height / 2)) * 0.12;
        tw = b.width + 12; th = b.height + 8;
        tr = Math.min(parseFloat(cs.borderRadius) + 4 || 8, th / 2);
      }
      x += (tx - x) * 0.2; y += (ty - y) * 0.2; w += (tw - w) * 0.2; hh += (th - hh) * 0.2; r += (tr - r) * 0.2;
      box.style.transform = `translate(${x}px,${y}px)`;
      box.style.width = `${w}px`;
      box.style.height = `${hh}px`;
      box.style.borderRadius = `${r}px`;
      box.style.background = hotEl ? "rgba(207,174,107,.08)" : "transparent";
      dot.style.transform = `translate(${mx}px,${my}px)`;
      dot.style.opacity = hotEl ? "0" : "1";
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      delete document.documentElement.dataset.customCursor;
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[10001] -mt-[3px] -ml-[3px] hidden size-1.5 rounded-full bg-gold transition-opacity duration-200"
      />
      <div
        ref={boxRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[10000] box-border hidden border-[1.5px] border-[rgba(207,174,107,.7)]"
      />
    </>
  );
}
