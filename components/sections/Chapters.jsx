"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Binary,
  Calculator,
  GitCompareArrows,
  PieChart,
  Shapes,
  Sigma,
  RotateCw,
} from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { CHAPTER_GROUPS } from "@/lib/site";
import { popIn, staggerParent, VIEWPORT } from "@/lib/motion";

/** Ikonka nomini komponentga bog'lovchi jadval (data qatlami toza qoladi) */
const ICONS = {
  Calculator,
  Sigma,
  Binary,
  PieChart,
  GitCompareArrows,
  Shapes,
};

/**
 * Chapters — kitob bo'ylab sayohat.
 * Har bir bosqich 3D flip-card: old tomonda nom, orqa tomonda mavzular ro'yxati.
 */
export default function Chapters() {
  return (
    <Section id="chapters">
      <SectionHeading
        chip="Kitob bo‘ylab sayohat"
        title="30 mavzu —"
        highlight="6 bosqichli xarita"
        description="Sonlardan boshlab fazoviy geometriyagacha. Kartani bosing va bosqich ichidagi mavzularni ko‘ring."
      />

      <motion.div
        variants={staggerParent(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CHAPTER_GROUPS.map((group, index) => (
          <FlipCard key={group.id} group={group} index={index} />
        ))}
      </motion.div>

      {/* Umumiy progress chizig'i — «yo'l xaritasi» hissi */}
      <div className="mt-14 flex items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          1-mavzu
        </span>
        <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full rounded-full bg-gradient-to-r from-plasma-400 via-nebula-500 to-solar-400"
          />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          30-mavzu
        </span>
      </div>
    </Section>
  );
}

/**
 * FlipCard — bosilganda 180° aylanadigan karta.
 * Klaviatura bilan ham boshqariladi (a11y).
 */
function FlipCard({ group, index }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = ICONS[group.icon] ?? Sigma;

  return (
    <motion.div
      variants={popIn}
      className="perspective h-[22rem]"
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="preserve-3d relative h-full w-full cursor-pointer"
        onClick={() => setFlipped((v) => !v)}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((v) => !v)}
        role="button"
        tabIndex={0}
        aria-label={`${group.title} bosqichi haqida batafsil`}
      >
        {/* -------------------- OLD TOMON -------------------- */}
        <div className="backface-hidden glass absolute inset-0 flex flex-col justify-between overflow-hidden p-7">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-nebula-600/20 blur-2xl" />

          <div>
            <div
              className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${group.color} shadow-glow`}
            >
              <Icon className="h-7 w-7 text-space-950" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-plasma-300">
              {group.range}
            </p>
            <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {group.hook}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-sm font-semibold text-slate-300">
              {group.chapters.length} ta mavzu
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-plasma-300">
              <RotateCw className="h-3.5 w-3.5" />
              Kartani aylantir
            </span>
          </div>

          {/* Tartib raqami — fon bezagi */}
          <span className="pointer-events-none absolute bottom-2 right-4 text-7xl font-black text-white/[0.04]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* -------------------- ORQA TOMON -------------------- */}
        <div className="backface-hidden rotate-y-180 neo absolute inset-0 flex flex-col overflow-hidden p-7">
          <h4 className="text-lg font-bold text-white">{group.title}</h4>
          <ul className="mt-4 flex-1 space-y-2.5 overflow-y-auto pr-1">
            {group.chapters.map((chapter, i) => (
              <li key={chapter} className="flex gap-3 text-sm text-slate-300">
                <span
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-gradient-to-br ${group.color} text-[10px] font-bold text-space-950`}
                >
                  {i + 1}
                </span>
                <span className="leading-snug">{chapter}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-white/10 pt-3 text-xs text-slate-500">
            Har mavzudan so‘ng: sinf ishi + uy vazifasi
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
