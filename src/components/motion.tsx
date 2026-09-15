"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Motion without opacity:0 traps — content stays visible if JS is delayed.
 * Animate transform only; CSS keeps elements fully opaque.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 28 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function HeroMotion({ children, className }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ y: 36 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}

export function WashDrift({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className} aria-hidden />;
  }

  return (
    <motion.div
      className={className}
      aria-hidden
      animate={{ x: ["0%", "4%", "0%"], y: ["0%", "-3%", "0%"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{ opacity: 1 }}
    />
  );
}
