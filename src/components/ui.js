import * as motion from "motion/react-client";
import { VIEWPORT, drawLine, fadeUp } from "@/lib/motion";

export function SectionTitle({ children, lineClass = "mb-1" }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={fadeUp}
      className="flex items-center gap-[14px] text-[clamp(24px,2.4vw,30px)] leading-[1.1] font-semibold tracking-[-.025em] text-head"
    >
      {children}
      <motion.span aria-hidden variants={drawLine} className={`h-px flex-1 origin-left bg-rule ${lineClass}`} />
    </motion.h2>
  );
}

export function Reveal({ as = "div", variants = fadeUp, children, ...props }) {
  const Tag = motion[as];
  return (
    <Tag initial="hidden" whileInView="show" viewport={VIEWPORT} variants={variants} {...props}>
      {children}
    </Tag>
  );
}

const buttonBase = "inline-flex items-center rounded-lg font-medium transition-colors duration-200";

export const buttonStyles = {
  light: `${buttonBase} bg-body text-page hover:bg-gold hover:text-page`,
  outline: `${buttonBase} border border-strong-2 text-body hover:border-body hover:text-body`,
  gold: `${buttonBase} bg-gold text-page hover:bg-gold-light hover:text-page`,
};
