"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, Sigma, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import Button from "./ui/Button";

/**
 * Navbar — yopishqoq (sticky) navigatsiya:
 *  • scroll qilinganda shaffofdan glassmorphism holatiga o'tadi
 *  • yuqorida o'qish jarayonini ko'rsatuvchi progress chiziq
 *  • mobil uchun to'liq ekranli menyu
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Sahifa bo'ylab o'qilgan qismni ko'rsatuvchi indikator
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-space-950/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          {/* Logotip */}
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-nebula-500 to-plasma-500 shadow-glow">
              <Sigma className="h-5 w-5 text-white" />
              <span className="absolute inset-0 rounded-2xl border border-white/30 opacity-0 transition group-hover:opacity-100" />
            </span>
            <span className="text-sm font-bold leading-tight text-white sm:text-base">
              Matematikaga
              <span className="block text-xs font-medium text-plasma-300">
                qadam
              </span>
            </span>
          </a>

          {/* Desktop menyu */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="relative rounded-xl px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 scale-90 rounded-xl bg-white/5 opacity-0 transition duration-300 hover:scale-100 hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button href="#order" size="md" className="hidden sm:inline-flex">
              Kitobni olish
            </Button>

            {/* Mobil menyu tugmasi */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Menyuni ochish"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* O'qish progressi */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-gradient-to-r from-plasma-400 via-nebula-500 to-solar-400"
        />
      </motion.header>

      {/* Mobil to'liq ekran menyu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-space-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-base font-bold text-white">Menyu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Menyuni yopish"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-col gap-2 px-5 pt-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="glass block px-5 py-4 text-lg font-semibold text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="px-5 pt-8">
              <Button
                href="#order"
                onClick={() => setOpen(false)}
                className="w-full"
              >
                Kitobni buyurtma qilish
              </Button>
              <p className="mt-4 text-center text-sm text-slate-500">
                {SITE.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
