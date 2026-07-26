"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Gift, Lightbulb, RotateCcw, X } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { QUIZ } from "@/lib/site";
import { SPRING } from "@/lib/motion";

const PROMO_CODE = "QADAM15";

/**
 * Quiz — gamifikatsiya bloki (AIDA: Action'ga ko'prik).
 * 3 ta savol → natija → chegirma promokodi.
 * Butun holat shu komponent ichida (hech qanday tashqi bog'liqlik yo'q).
 */
export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [copied, setCopied] = useState(false);

  const question = QUIZ[current];
  const isLast = current === QUIZ.length - 1;

  /** Javob tanlanganda — faqat birinchi bosishni hisobga olamiz */
  const handleSelect = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) setScore((s) => s + 1);
  };

  /** Keyingi savol yoki yakuniy ekran */
  const handleNext = () => {
    if (isLast) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
    setShowHint(false);
  };

  /** Testni boshidan boshlash */
  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowHint(false);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard mavjud bo'lmasa — jimgina o'tkazib yuboramiz */
    }
  };

  return (
    <Section id="quiz">
      <SectionHeading
        chip="Mini o‘yin"
        title="3 ta savol —"
        highlight="15% chegirma"
        description="Kitobdagi mavzulardan olingan uchta savol. To‘g‘ri javob bering va promokodni qo‘lga kiriting."
      />

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <div className="glass overflow-hidden p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {!finished ? (
              /* ------------------- SAVOL EKRANI ------------------- */
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
              >
                {/* Progress */}
                <div className="mb-8 flex items-center gap-3">
                  {QUIZ.map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: i <= current ? "100%" : 0 }}
                        transition={{ duration: 0.4 }}
                        className="h-full bg-gradient-to-r from-plasma-400 to-nebula-500"
                      />
                    </div>
                  ))}
                  <span className="shrink-0 font-mono text-xs text-slate-500">
                    {current + 1}/{QUIZ.length}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                  {question.question}
                </h3>

                {/* Variantlar */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {question.options.map((option, i) => {
                    const isCorrect = i === question.answer;
                    const isChosen = selected === i;
                    const revealed = selected !== null;

                    // Holatga qarab uslub tanlash
                    let style =
                      "border-white/10 bg-white/5 hover:border-plasma-400/50 hover:bg-white/10";
                    if (revealed && isCorrect)
                      style = "border-mint/60 bg-mint/15 text-white";
                    else if (revealed && isChosen)
                      style = "border-coral/60 bg-coral/15 text-white";
                    else if (revealed) style = "border-white/5 bg-white/[0.02] opacity-50";

                    return (
                      <motion.button
                        key={option}
                        onClick={() => handleSelect(i)}
                        whileHover={selected === null ? { scale: 1.02 } : {}}
                        whileTap={selected === null ? { scale: 0.98 } : {}}
                        transition={SPRING}
                        className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left font-semibold text-slate-200 transition ${style}`}
                      >
                        <span>{option}</span>
                        {revealed && isCorrect && (
                          <Check className="h-5 w-5 text-mint" />
                        )}
                        {revealed && isChosen && !isCorrect && (
                          <X className="h-5 w-5 text-coral" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Maslahat / tushuntirish */}
                <div className="mt-6 min-h-[3rem]">
                  {selected === null ? (
                    <button
                      onClick={() => setShowHint((v) => !v)}
                      className="flex items-center gap-2 text-sm font-medium text-solar-400 hover:text-solar-300"
                    >
                      <Lightbulb className="h-4 w-4" />
                      {showHint ? question.hint : "Maslahat kerakmi?"}
                    </button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="neo flex items-start gap-3 p-4 text-sm leading-relaxed text-slate-300"
                    >
                      <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-solar-400" />
                      {question.explain}
                    </motion.div>
                  )}
                </div>

                {selected !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-7 flex justify-end"
                  >
                    <Button onClick={handleNext} size="md">
                      {isLast ? "Natijani ko‘rish" : "Keyingi savol"}
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              /* ------------------- NATIJA EKRANI ------------------- */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={SPRING}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.8 }}
                  className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-solar-400 to-solar-500 shadow-[0_0_50px_-8px_rgba(250,204,21,.8)]"
                >
                  <Gift className="h-9 w-9 text-space-950" />
                </motion.div>

                <h3 className="mt-6 text-3xl font-black text-white">
                  {score} / {QUIZ.length} to‘g‘ri!
                </h3>
                <p className="mx-auto mt-3 max-w-md text-slate-400">
                  {score === QUIZ.length
                    ? "Ajoyib! Siz allaqachon matematik fikrlaysiz. Kitob bu qobiliyatni yanada charxlaydi."
                    : score >= 2
                      ? "Yaxshi natija! Kitobdagi mavzular qolgan bo‘shliqlarni to‘ldiradi."
                      : "Mana shuning uchun ham bu kitob kerak. Har bir mavzu noldan, bosqichma-bosqich tushuntiriladi."}
                </p>

                {/* Promokod */}
                <div className="neo mx-auto mt-8 flex max-w-sm items-center justify-between gap-4 p-5">
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Sizning promokodingiz
                    </p>
                    <p className="font-mono text-2xl font-black text-gradient">
                      {PROMO_CODE}
                    </p>
                  </div>
                  <button
                    onClick={copyCode}
                    aria-label="Promokodni nusxalash"
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-plasma-300 transition hover:bg-white/10"
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-mint" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href="#order">Chegirma bilan buyurtma qilish</Button>
                  <Button onClick={reset} variant="ghost" icon={RotateCcw}>
                    Qayta o‘ynash
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  );
}
