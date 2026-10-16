export const EASE = [0.2, 0.7, 0.2, 1];

export const VIEWPORT = { once: true, amount: 0.15 };

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

export const pop = {
  hidden: { opacity: 0, scale: 0.85, y: 6 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 420, damping: 26 } },
};

export const photoReveal = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
};

export const drawLine = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease: EASE, delay: 0.15 } },
};

export const hoverLift = { y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } };
export const tapPress = { scale: 0.97 };
