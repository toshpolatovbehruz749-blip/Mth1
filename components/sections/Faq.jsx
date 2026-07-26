"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { FAQ } from "@/lib/site";

/**
 * Faq — akkordeon. Bir vaqtda faqat bitta savol ochiq turadi,
 * bu ota-onaning e'tiborini bo'lmaydi.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq">
      <SectionHeading
        chip="Savol-javob"
        title="Ko‘p so‘raladigan"
        highlight="savollar"
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {FAQ.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={item.q} delay={i * 0.05}>
              <div
                className={`glass overflow-hidden transition-colors ${
                  isOpen ? "border-plasma-400/30" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/5 text-plasma-300"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
