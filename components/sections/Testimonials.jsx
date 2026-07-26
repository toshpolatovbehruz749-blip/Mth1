"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/site";
import { fadeUp, staggerParent, VIEWPORT } from "@/lib/motion";

/** Avatar fonini urg'u rangiga bog'lovchi jadval */
const ACCENTS = {
  nebula: "from-nebula-500 to-nebula-700",
  plasma: "from-plasma-400 to-plasma-500",
  solar: "from-solar-400 to-solar-500",
  mint: "from-mint to-plasma-400",
};

/**
 * Testimonials — ijtimoiy isbot.
 * Masonry-ga o'xshash ustunli tartib: kartalar turli balandlikda "suzadi".
 */
export default function Testimonials() {
  return (
    <Section id="reviews">
      <SectionHeading
        chip="Ijtimoiy isbot"
        title="O‘qituvchilar, ota-onalar va"
        highlight="o‘quvchilar nima deydi"
        description="Sinfxonada, uyda va imtihonga tayyorgarlikda sinovdan o‘tgan."
      />

      <motion.div
        variants={staggerParent(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {TESTIMONIALS.map((item, i) => (
          <motion.figure
            key={item.name}
            variants={fadeUp}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={`glass relative flex flex-col gap-5 p-6 ${
              i % 2 === 1 ? "lg:mt-10" : ""
            }`}
          >
            <Quote className="absolute right-5 top-5 h-7 w-7 text-white/[0.06]" />

            <div className="flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-solar-400 text-solar-400" />
              ))}
            </div>

            <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
              «{item.text}»
            </blockquote>

            <figcaption className="flex items-center gap-3 border-t border-white/10 pt-4">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${
                  ACCENTS[item.accent] ?? ACCENTS.nebula
                } text-sm font-black text-space-950`}
              >
                {item.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">
                  {item.name}
                </p>
                <p className="text-xs leading-snug text-slate-500">{item.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </Section>
  );
}
