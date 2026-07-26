"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, PlayCircle, Sparkles, Star } from "lucide-react";
import { SITE, STATS } from "@/lib/site";
import { fadeUp, staggerParent } from "@/lib/motion";
import Button from "../ui/Button";
import FloatingShapes from "../FloatingShapes";

/** Sarlavhada almashib turadigan so'zlar — AIDA modelining "Attention" bosqichi */
const ROTATING_WORDS = ["kashfiyot", "o‘yin", "superkuch", "sarguzasht"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  // Har 2.2 soniyada sarlavhadagi so'zni almashtiramiz
  useEffect(() => {
    const timer = setInterval(
      () => setWordIndex((i) => (i + 1) % ROTATING_WORDS.length),
      2200,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:pt-32"
    >
      <div className="absolute inset-0 -z-[5] bg-hero-glow" />
      <FloatingShapes />

      <motion.div
        variants={staggerParent(0.12, 0.1)}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_1fr]"
      >
        {/* --------------------------- CHAP: matn --------------------------- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.span variants={fadeUp} className="chip">
            <Sparkles className="h-3.5 w-3.5" />
            {SITE.year} · {SITE.topics} mavzu · {SITE.pages} sahifa
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Matematikani zerikarli
            <br className="hidden sm:block" /> deydiganlar uchun{" "}
            <span className="relative inline-block">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 22, rotateX: -70 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-gradient"
              >
                {ROTATING_WORDS[wordIndex]}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            <strong className="font-semibold text-slate-200">
              «{SITE.bookTitle}»
            </strong>{" "}
            — bu shunchaki masalalar to‘plami emas. Bu — bolangiz qo‘lida
            to‘ldiradigan ish daftari, BMBA imtihoniga tayyorgarlik xaritasi va
            olamning yashirin kodini ochadigan kalit.
          </motion.p>

          {/* CTA tugmalari */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#order" icon={ArrowRight}>
              Kitobni buyurtma qilish
            </Button>
            <Button href="#playground" variant="ghost" icon={PlayCircle}>
              Avval sinab ko‘raman
            </Button>
          </motion.div>

          {/* Ishonch ko'rsatkichlari */}
          <motion.dl
            variants={fadeUp}
            className="mt-12 grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass px-3 py-3 text-center transition hover:border-plasma-400/30"
              >
                <dt className="text-xl font-extrabold text-white sm:text-2xl">
                  {s.value}
                  <span className="text-plasma-400">{s.suffix}</span>
                </dt>
                <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-500">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* --------------------- O'NG: kitob maketi (3D) --------------------- */}
        <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-sm">
          <BookMockup />
        </motion.div>
      </motion.div>

      {/* Pastga scroll ishorasi */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-600">
          Pastga
        </span>
        <div className="h-9 w-5 rounded-full border border-white/15 p-1">
          <div className="h-2 w-full rounded-full bg-plasma-400" />
        </div>
      </motion.div>
    </section>
  );
}

/**
 * BookMockup — sichqonchaga munosabat bildiruvchi 3D kitob maketi.
 * Rasm o'rniga CSS bilan yasalgan: dizayn tayyor bo'lmasa ham ishlaydi.
 * (Haqiqiy muqova rasmini keyin <Image /> bilan almashtirish mumkin.)
 */
function BookMockup() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 16, y: px * 20 });
  };

  return (
    <div
      className="perspective"
      onPointerMove={handleMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 150, damping: 18 }}
        className="preserve-3d relative"
      >
        {/* Muqova */}
        <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-br from-nebula-700 via-space-800 to-plasma-500/40 p-7 shadow-[0_40px_90px_-30px_rgba(124,58,237,.8)]">
          {/* Ichki katakli fon */}
          <div className="grid-bg absolute inset-0 opacity-40" />

          {/* Yaltirash effekti */}
          <div className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="relative flex h-[26rem] flex-col justify-between">
            <div>
              <span className="chip !text-solar-300">Yangi nashr</span>
              <h3 className="mt-6 text-4xl font-black leading-tight text-white">
                Matematikaga
                <br />
                <span className="text-solar-400">qadam</span>
              </h3>
              <p className="mt-3 text-sm font-medium text-plasma-200">
                {SITE.author}
              </p>
            </div>

            {/* Muqovadagi geometrik bezak */}
            <svg viewBox="0 0 120 60" className="w-full opacity-80">
              <polygon
                points="10,50 40,8 70,50"
                className="fill-none stroke-plasma-300"
                strokeWidth="1.5"
              />
              <circle
                cx="92"
                cy="30"
                r="20"
                className="fill-none stroke-solar-400"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <rect
                x="52"
                y="18"
                width="24"
                height="24"
                className="fill-none stroke-white/50"
                strokeWidth="1.5"
              />
            </svg>

            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs uppercase tracking-widest text-slate-400">
                {SITE.publisher}
              </span>
              <span className="text-xs font-bold text-white">{SITE.year}</span>
            </div>
          </div>
        </div>

        {/* Suzuvchi reyting yorlig'i */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute -bottom-6 -left-6 flex items-center gap-3 px-4 py-3"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-solar-400 text-solar-400" />
            ))}
          </div>
          <div className="text-xs">
            <p className="font-bold text-white">4.9 / 5</p>
            <p className="text-slate-500">o‘qituvchilar bahosi</p>
          </div>
        </motion.div>

        {/* Suzuvchi "ish daftari" yorlig'i */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass absolute -right-5 top-10 flex items-center gap-2 px-4 py-3"
        >
          <BookOpen className="h-4 w-4 text-plasma-300" />
          <span className="text-xs font-semibold text-white">
            Ish daftari formati
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
