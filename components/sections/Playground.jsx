"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Grid3x3, RefreshCw, Triangle, Waves } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { popIn, staggerParent } from "@/lib/motion";

/**
 * Playground — «Live Math» bo'limi (AIDA: Interest).
 * Bola tugmani bosadi va matematik hodisa ko'z oldida jonlanadi.
 * Har bir demo alohida, mustaqil komponent (SOLID: Single Responsibility).
 */

const DEMOS = [
  { id: "pifagor", label: "Pifagor teoremasi", icon: Triangle },
  { id: "fraktal", label: "Fraktal", icon: Waves },
  { id: "elak", label: "Tub sonlar elagi", icon: Grid3x3 },
];

export default function Playground() {
  const [active, setActive] = useState("pifagor");

  return (
    <Section id="playground">
      <SectionHeading
        chip="Jonli matematika"
        title="Formulani o‘qish emas —"
        highlight="uni harakatda ko‘rish"
        description="Kitobdagi mavzular shu tarzda tushuntiriladi: avval ko‘rasiz, keyin tushunasiz, so‘ng o‘zingiz yechasiz. Quyidagi tugmalarni bosib sinab ko‘ring."
      />

      <Reveal className="mt-12">
        <div className="glass overflow-hidden p-2 sm:p-3">
          {/* Demo almashtirgich */}
          <div className="flex flex-wrap gap-2 rounded-2xl bg-space-900/60 p-2">
            {DEMOS.map((demo) => {
              const isActive = active === demo.id;
              return (
                <button
                  key={demo.id}
                  onClick={() => setActive(demo.id)}
                  className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-semibold transition sm:text-sm ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="playground-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-nebula-600 to-plasma-500 shadow-glow"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <demo.icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{demo.label}</span>
                </button>
              );
            })}
          </div>

          {/* Faol demo */}
          <div className="p-4 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.32 }}
              >
                {active === "pifagor" && <PythagorasDemo />}
                {active === "fraktal" && <FractalDemo />}
                {active === "elak" && <SieveDemo />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Yordamchi: chiroyli slider (barcha demolar uchun umumiy)            */
/* ------------------------------------------------------------------ */
function Slider({ label, value, min, max, onChange, color = "plasma" }) {
  const accent = color === "solar" ? "accent-solar-400" : "accent-plasma-400";
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm font-medium text-slate-300">
        {label}
        <span className="rounded-lg bg-white/5 px-2.5 py-0.5 font-mono text-plasma-300">
          {value}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 ${accent}`}
      />
    </label>
  );
}

/* ------------------------------------------------------------------ */
/* 1-DEMO: Pifagor teoremasi                                           */
/* ------------------------------------------------------------------ */
function PythagorasDemo() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);

  const c = useMemo(() => Math.sqrt(a * a + b * b), [a, b]);
  const scale = 26; // 1 birlik = 26 px

  // Uchburchak uchlari (SVG koordinatalari)
  const originX = 120;
  const originY = 220;
  const p = {
    right: [originX, originY],
    horizontal: [originX + b * scale, originY],
    vertical: [originX, originY - a * scale],
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      {/* Boshqaruv paneli */}
      <div className="order-2 space-y-6 lg:order-1">
        <h3 className="text-xl font-bold text-white">
          Katetlarni o‘zgartiring — gipotenuza o‘zi hisoblanadi
        </h3>

        <Slider label="a kateti" value={a} min={1} max={7} onChange={setA} />
        <Slider label="b kateti" value={b} min={1} max={9} onChange={setB} color="solar" />

        <div className="neo p-5 font-mono text-sm">
          <p className="text-slate-400">
            a² + b² = <span className="text-white">c²</span>
          </p>
          <p className="mt-2 text-plasma-300">
            {a}² + {b}² = {a * a} + {b * b} ={" "}
            <span className="text-solar-400">{a * a + b * b}</span>
          </p>
          <p className="mt-2 text-lg font-bold text-white">
            c = √{a * a + b * b} ={" "}
            <span className="text-gradient">{c.toFixed(2)}</span>
          </p>
        </div>

        <p className="text-sm leading-relaxed text-slate-500">
          Sariq va ko‘k kvadratlarning yuzalari yig‘indisi har doim binafsha
          kvadrat yuzasiga teng. Kitobning{" "}
          <strong className="text-slate-300">23-mavzusi</strong> shu qonuniyatdan
          boshlanadi.
        </p>
      </div>

      {/* Vizualizatsiya */}
      <div className="order-1 lg:order-2">
        <svg viewBox="0 0 420 300" className="w-full">
          {/* Katakli fon */}
          <defs>
            <pattern id="pg-grid" width="26" height="26" patternUnits="userSpaceOnUse">
              <path
                d="M 26 0 L 0 0 0 26"
                fill="none"
                stroke="rgba(148,163,184,.12)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="420" height="300" fill="url(#pg-grid)" rx="16" />

          {/* b kateti ustidagi kvadrat (pastda) */}
          <motion.rect
            animate={{
              x: originX,
              y: originY,
              width: b * scale,
              height: b * scale,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="fill-solar-400/25 stroke-solar-400"
            strokeWidth="1.5"
          />

          {/* a kateti ustidagi kvadrat (chapda) */}
          <motion.rect
            animate={{
              x: originX - a * scale,
              y: originY - a * scale,
              width: a * scale,
              height: a * scale,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="fill-plasma-400/25 stroke-plasma-400"
            strokeWidth="1.5"
          />

          {/* Uchburchak (points atributi animatsiya qilinmaydi — to'g'ridan-to'g'ri chiziladi) */}
          <polygon
            points={`${p.right} ${p.horizontal} ${p.vertical}`}
            className="fill-nebula-500/40 stroke-nebula-400 transition-all duration-300"
            strokeWidth="2.5"
          />

          {/* To'g'ri burchak belgisi */}
          <rect
            x={originX}
            y={originY - 14}
            width="14"
            height="14"
            className="fill-none stroke-white/50"
            strokeWidth="1.5"
          />

          {/* Yorliqlar */}
          <text x={originX - 22} y={originY - (a * scale) / 2} className="fill-plasma-300 text-[13px] font-bold">
            a={a}
          </text>
          <text x={originX + (b * scale) / 2 - 8} y={originY + 18} className="fill-solar-300 text-[13px] font-bold">
            b={b}
          </text>
          <text
            x={originX + (b * scale) / 2 + 6}
            y={originY - (a * scale) / 2 - 6}
            className="fill-white text-[13px] font-bold"
          >
            c={c.toFixed(1)}
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2-DEMO: Sierpinski fraktali                                         */
/* ------------------------------------------------------------------ */
function FractalDemo() {
  const [depth, setDepth] = useState(4);

  // Rekursiya natijasini keshlaymiz — har render'da qayta hisoblanmasin
  const triangles = useMemo(() => {
    const out = [];
    const mid = (u, v) => [(u[0] + v[0]) / 2, (u[1] + v[1]) / 2];

    const build = (p1, p2, p3, level) => {
      if (level === 0) {
        out.push([p1, p2, p3].map((pt) => pt.join(",")).join(" "));
        return;
      }
      build(p1, mid(p1, p2), mid(p1, p3), level - 1);
      build(mid(p1, p2), p2, mid(p2, p3), level - 1);
      build(mid(p1, p3), mid(p2, p3), p3, level - 1);
    };

    build([200, 12], [388, 300], [12, 300], depth);
    return out;
  }, [depth]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div className="order-2 space-y-6 lg:order-1">
        <h3 className="text-xl font-bold text-white">
          Bitta qoida — cheksiz go‘zallik
        </h3>

        <Slider
          label="Bo‘lish darajasi"
          value={depth}
          min={0}
          max={7}
          onChange={setDepth}
        />

        <div className="neo grid grid-cols-2 gap-4 p-5">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Uchburchaklar
            </p>
            <p className="text-2xl font-black text-gradient">
              {triangles.length}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Formula
            </p>
            <p className="font-mono text-2xl font-black text-plasma-300">
              3<sup>{depth}</sup>
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-slate-500">
          Har bir uchburchak 3 taga bo‘linadi. Faqat 7 qadamdan keyin{" "}
          <strong className="text-slate-300">2187</strong> ta shakl paydo bo‘ladi.
          Aynan shu — daraja (17-mavzu) va kombinatorika (28-mavzu) kuchining
          ko‘zga ko‘rinadigan isboti.
        </p>
      </div>

      <div className="order-1 flex items-center justify-center lg:order-2">
        <svg viewBox="0 0 400 312" className="w-full max-w-md">
          {triangles.map((pts, i) => (
            <motion.polygon
              key={`${depth}-${i}`}
              points={pts}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: Math.min(i * 0.0016, 0.6), duration: 0.35 }}
              className={i % 3 === 0 ? "fill-plasma-400" : i % 3 === 1 ? "fill-nebula-500" : "fill-solar-400"}
              style={{ transformOrigin: "center" }}
              opacity={0.85}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3-DEMO: Eratosfen elagi (tub sonlar)                                */
/* ------------------------------------------------------------------ */
function SieveDemo() {
  const LIMIT = 100;
  const [step, setStep] = useState(0); // 0 = boshlang'ich holat

  // Elakning har bir bosqichi: qaysi son bilan "elaymiz"
  const SIEVE_STEPS = [2, 3, 5, 7];

  // Har bir son uchun holat: "prime" | "crossed" | "plain"
  const cells = useMemo(() => {
    const state = Array.from({ length: LIMIT + 1 }, () => "plain");
    state[0] = "hidden";
    state[1] = "crossed";

    SIEVE_STEPS.slice(0, step).forEach((prime) => {
      state[prime] = "prime";
      for (let k = prime * 2; k <= LIMIT; k += prime) {
        if (state[k] !== "prime") state[k] = "crossed";
      }
    });

    // Oxirgi bosqichdan keyin qolgan barcha sonlar — tub
    if (step === SIEVE_STEPS.length) {
      for (let n = 2; n <= LIMIT; n += 1) {
        if (state[n] === "plain") state[n] = "prime";
      }
    }
    return state;
  }, [step]);

  const primeCount = cells.filter((s) => s === "prime").length;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div className="order-2 space-y-6 lg:order-1">
        <h3 className="text-xl font-bold text-white">
          Tub sonlar — matematikaning atomlari
        </h3>

        <p className="text-sm leading-relaxed text-slate-400">
          2200 yil oldin Eratosfen shunday qilgan: 2 ning karralarini o‘chir,
          keyin 3 ning, 5 ning, 7 ning… Qolgani — tub sonlar.
        </p>

        <div className="flex flex-wrap gap-2">
          {SIEVE_STEPS.map((prime, i) => (
            <button
              key={prime}
              onClick={() => setStep(i + 1)}
              className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                step >= i + 1
                  ? "border-plasma-400/50 bg-plasma-500/20 text-plasma-200"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-white/25"
              }`}
            >
              {prime} ni ela
            </button>
          ))}
          <button
            onClick={() => setStep(0)}
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Boshidan
          </button>
        </div>

        <div className="neo p-5">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Topilgan tub sonlar
          </p>
          <p className="text-3xl font-black text-gradient">{primeCount}</p>
          <p className="mt-1 text-xs text-slate-500">
            100 gacha jami 25 ta tub son bor — 10, 11 va 12-mavzular
          </p>
        </div>
      </div>

      <motion.div
        variants={staggerParent(0.004)}
        initial="hidden"
        animate="show"
        className="order-1 grid grid-cols-10 gap-1 sm:gap-1.5 lg:order-2"
      >
        {Array.from({ length: LIMIT }, (_, i) => i + 1).map((n) => {
          const state = cells[n];
          return (
            <motion.div
              key={n}
              variants={popIn}
              className={`grid aspect-square place-items-center rounded-md text-[10px] font-bold transition-colors duration-500 sm:rounded-lg sm:text-xs ${
                state === "prime"
                  ? "bg-gradient-to-br from-plasma-400 to-nebula-500 text-white shadow-glow-cyan"
                  : state === "crossed"
                    ? "bg-white/[0.03] text-slate-700 line-through"
                    : "bg-white/[0.07] text-slate-300"
              }`}
            >
              {n}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
