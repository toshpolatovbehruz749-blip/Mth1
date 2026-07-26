"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Sparkles, Truck } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { PLANS, SITE } from "@/lib/site";
import { fadeUp, staggerParent, VIEWPORT } from "@/lib/motion";

/** Buyurtma ostidagi ishonch belgilari */
const TRUST = [
  { icon: Truck, text: "O‘zbekiston bo‘ylab yetkazib berish" },
  { icon: ShieldCheck, text: "7 kun ichida qaytarish kafolati" },
  { icon: Sparkles, text: "QADAM15 promokodi bilan 15% chegirma" },
];

/**
 * Pricing — yakuniy harakatga chorlov (AIDA: Action).
 * O'rtadagi paket vizual jihatdan ustunlashtirilgan (anchoring effekti).
 */
export default function Pricing() {
  return (
    <Section id="order">
      <SectionHeading
        chip="Buyurtma"
        title="Bolangizning matematikaga"
        highlight="birinchi qadami"
        description="Bugun buyurtma qiling — kitob 1–4 ish kunida qo‘lingizda bo‘ladi."
      />

      <motion.div
        variants={staggerParent(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mt-14 grid items-stretch gap-6 lg:grid-cols-3"
      >
        {PLANS.map((plan) => (
          <motion.article
            key={plan.id}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className={`relative flex flex-col p-8 ${
              plan.highlighted
                ? "glass border-plasma-400/40 shadow-glow lg:-my-4 lg:py-12"
                : "glass"
            }`}
          >
            {/* Ustun paket uchun yorliq */}
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-solar-400 to-solar-500 px-4 py-1 text-[11px] font-black uppercase tracking-wider text-space-950">
                Eng ommabop
              </span>
            )}

            <h3 className="text-lg font-bold text-white">{plan.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{plan.tagline}</p>

            <div className="mt-6 flex items-end gap-2">
              <span
                className={`text-4xl font-black ${
                  plan.highlighted ? "text-gradient" : "text-white"
                }`}
              >
                {plan.price}
              </span>
              {plan.currency && (
                <span className="pb-1.5 text-sm text-slate-400">
                  {plan.currency}
                </span>
              )}
            </div>

            <ul className="mt-7 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              variant={plan.highlighted ? "solar" : "ghost"}
              icon={ArrowRight}
              className="mt-8 w-full"
            >
              {plan.cta}
            </Button>
          </motion.article>
        ))}
      </motion.div>

      {/* Ishonch belgilari */}
      <motion.ul
        variants={staggerParent(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
      >
        {TRUST.map((item) => (
          <motion.li
            key={item.text}
            variants={fadeUp}
            className="flex items-center gap-2.5 text-sm text-slate-400"
          >
            <item.icon className="h-4 w-4 text-plasma-400" />
            {item.text}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
