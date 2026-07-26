"use client";

import { motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "@/lib/motion";

/**
 * Reveal — bolalarini scroll paytida yumshoq paydo qiladi.
 * Butun saytda animatsiya kodini takrorlamaslik uchun yagona o'ram.
 *
 * @param {object} variants - Framer Motion varianti (default: fadeUp)
 * @param {number} delay    - Kechikish (sekund)
 */
export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className = "",
  as: Tag = motion.div,
  ...rest
}) {
  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
