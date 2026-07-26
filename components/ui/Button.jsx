"use client";

import { motion } from "framer-motion";
import { SPRING } from "@/lib/motion";

/** Variantlar lug'ati — yangi ko'rinish qo'shish uchun shu yerga qator qo'shing */
const VARIANTS = {
  primary:
    "bg-gradient-to-r from-nebula-600 via-nebula-500 to-plasma-500 text-white shadow-glow hover:shadow-glow-cyan",
  solar:
    "bg-gradient-to-r from-solar-400 to-solar-500 text-space-950 shadow-[0_0_36px_-8px_rgba(250,204,21,.7)]",
  ghost:
    "border border-white/15 bg-white/5 text-slate-100 backdrop-blur hover:bg-white/10",
};

const SIZES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Button — sayt bo'ylab yagona interaktiv tugma.
 * `href` berilsa <a>, aks holda <button> sifatida render qilinadi.
 */
export default function Button({
  children,
  variant = "primary",
  size = "lg",
  href,
  className = "",
  icon: Icon,
  ...rest
}) {
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      whileHover={{ scale: 1.045, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={SPRING}
      className={`group inline-flex select-none items-center justify-center gap-2 rounded-2xl font-semibold tracking-tight transition-shadow duration-300 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...rest}
    >
      {children}
      {Icon && (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Tag>
  );
}
