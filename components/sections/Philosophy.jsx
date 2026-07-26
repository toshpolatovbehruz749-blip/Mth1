"use client";

import { motion } from "framer-motion";
import { Brain, Layers, PenLine, Quote, Target } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { PHILOSOPHY, SITE } from "@/lib/site";
import { fadeSide, staggerParent, VIEWPORT } from "@/lib/motion";

const ICONS = { PenLine, Layers, Target, Brain };

/**
 * Philosophy — «Nega bu kitob boshqacha?» (AIDA: Desire).
 * Muallif iqtibosi + 4 ta pedagogik tamoyil.
 */
export default function Philosophy() {
  return (
    <Section id="philosophy">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* Chap: iqtibos kartasi */}
        <Reveal variants={fadeSide("left")}>
          <div className="glass relative overflow-hidden p-8 sm:p-10">
            <Quote className="absolute -right-4 -top-4 h-28 w-28 text-white/[0.04]" />

            <span className="chip">Muallif so‘zi</span>

            <blockquote className="mt-6 text-pretty text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl">
              «Matematika — bu yodlanadigan formulalar to‘plami emas.{" "}
              <span className="text-gradient">
                Bu — olamning yashirin kodi
              </span>
              . Bolaga kodni o‘qishni o‘rgatsangiz, u butun dunyoni o‘qiy
              boshlaydi.»
            </blockquote>

            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-nebula-500 to-plasma-500 text-lg font-black text-white">
                BT
              </div>
              <div>
                <p className="font-bold text-white">{SITE.author}</p>
                <p className="text-sm text-slate-400">
                  Muallif, matematika o‘qituvchisi
                </p>
              </div>
            </div>

            {/* Pastdagi neon chiziq */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-plasma-400 to-transparent" />
          </div>
        </Reveal>

        {/* O'ng: 4 tamoyil */}
        <div>
          <SectionHeading
            align="left"
            chip="Pedagogik yondashuv"
            title="An’anaviy darslikdan"
            highlight="4 ta farqi"
            description="Har bir sahifa bitta savolga javob beradi: bola bu bilimni qayerda ishlatadi?"
          />

          <motion.div
            variants={staggerParent(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {PHILOSOPHY.map((item) => {
              const Icon = ICONS[item.icon] ?? Brain;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeSide("right")}
                  whileHover={{ y: -6 }}
                  className="glass group p-6 transition-colors hover:border-plasma-400/30"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-plasma-300 transition group-hover:bg-plasma-500/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
