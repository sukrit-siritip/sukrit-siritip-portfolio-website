"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function ConstellationBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, hh = 0, mx = -9999, my = -9999, sx = -9999, sy = -9999, t = 0, raf = 0;
    let ripples = [], parts = [];
    const GOLD = [207, 174, 107], INK = [236, 235, 230];
    const mix = (k) => GOLD.map((g, i) => Math.round(INK[i] + (g - INK[i]) * k)).join(",");

    const seed = () => {
      const n = Math.min(140, Math.round((w * hh) / 11000));
      parts = Array.from({ length: n }, () => {
        const ang = Math.random() * 6.283, sp = 0.12 + Math.random() * 0.22;
        const bvx = Math.cos(ang) * sp, bvy = Math.sin(ang) * sp;
        return { x: Math.random() * w, y: Math.random() * hh, vx: bvx, vy: bvy, bvx, bvy, ph: Math.random() * 6.283, r: 0.8 + Math.random() * 1.4 };
      });
    };
    const size = () => {
      w = c.clientWidth; hh = c.clientHeight;
      c.width = w * dpr; c.height = hh * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };
    const glow = (r, a) => {
      if (sx < -1000 || mx < -1000) return;
      const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, r);
      g.addColorStop(0, `rgba(207,174,107,${a})`);
      g.addColorStop(1, "rgba(207,174,107,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, hh);
    };

    const draw = () => {
      glow(420, 0.05);
      const L = 130, LM = 190;
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        const dx = p.x - sx, dy = p.y - sy, d = Math.hypot(dx, dy);
        if (d < LM && mx > -1000) { p.x += (dx / d) * 0.6; p.y += (dy / d) * 0.6; }
        for (const rp of ripples) {
          const dd = Math.hypot(p.x - rp.x, p.y - rp.y);
          if (Math.abs(dd - rp.r) < 30) { p.vx += ((p.x - rp.x) / dd) * 0.25; p.vy += ((p.y - rp.y) / dd) * 0.25; }
        }
        p.vx += (p.bvx + Math.sin(t * 0.7 + p.ph) * 0.06 - p.vx) * 0.02;
        p.vy += (p.bvy + Math.cos(t * 0.6 + p.ph) * 0.06 - p.vy) * 0.02;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = hh + 20;
        if (p.y > hh + 20) p.y = -20;
      }
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < L) {
            const md = Math.hypot((a.x + b.x) / 2 - sx, (a.y + b.y) / 2 - sy), k = md < LM ? 1 - md / LM : 0;
            ctx.strokeStyle = `rgba(${mix(k)},${((1 - d / L) * (0.12 + k * 0.5)).toFixed(3)})`;
            ctx.lineWidth = 0.6 + k * 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - sx, a.y - sy), k = md < LM ? 1 - md / LM : 0;
        if (k > 0) {
          ctx.strokeStyle = `rgba(207,174,107,${(k * 0.35).toFixed(3)})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(sx, sy); ctx.stroke();
        }
        ctx.fillStyle = `rgba(${mix(k)},${(0.35 + k * 0.6).toFixed(3)})`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r + k * 1.2, 0, 6.283); ctx.fill();
      }
    };

    const tick = () => {
      t += 0.012;
      if (mx > -1000) {
        if (sx < -1000) { sx = mx; sy = my; }
        sx += (mx - sx) * 0.14; sy += (my - sy) * 0.14;
      }
      ripples = ripples.filter((r) => (r.r += 7) < 600);
      ctx.clearRect(0, 0, w, hh);
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const onLeave = () => { mx = my = sx = sy = -9999; };
    const onDown = (e) => { ripples.push({ x: e.clientX, y: e.clientY, r: 0 }); };

    size();
    tick();
    window.addEventListener("resize", size);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, ease: "easeOut" }}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
