"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * CosmicBackground — butun sayt ostidagi jonli fon:
 *  1) katakli doska (matematik daftar hissi)
 *  2) sichqoncha ortidan yumshoq suzuvchi nur (mikro-interaksiya)
 *  3) miltillovchi "yulduzlar"
 *
 * position: fixed — scroll paytida ham doim ko'rinib turadi.
 */
export default function CosmicBackground() {
  const [stars, setStars] = useState([]);

  // Sichqoncha koordinatalari (0..1), spring bilan yumshatilgan
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.25);
  const sx = useSpring(mx, { stiffness: 55, damping: 20 });
  const sy = useSpring(my, { stiffness: 55, damping: 20 });

  // Motion qiymatlarni to'g'ridan-to'g'ri CSS foiziga aylantiramiz
  const glowLeft = useTransform(sx, (v) => `${v * 100}%`);
  const glowTop = useTransform(sy, (v) => `${v * 100}%`);

  // Yulduzlar faqat klientda hosil qilinadi (SSR hydration mos kelishi uchun)
  useEffect(() => {
    setStars(
      Array.from({ length: 46 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.4 + 0.8,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 3,
      })),
    );
  }, []);

  // Sichqoncha harakatini kuzatish
  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-space-950"
    >
      {/* Katakli daftar doskasi */}
      <div className="grid-bg absolute inset-0 opacity-70" />

      {/* Doska chetlarini qoraytiruvchi maska */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,transparent_18%,#04040F_78%)]" />

      {/* Nebula dog'lari */}
      <div className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-nebula-600/20 blur-[120px]" />
      <div className="absolute -bottom-56 -left-32 h-[34rem] w-[34rem] rounded-full bg-plasma-500/15 blur-[120px]" />
      <div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-solar-400/10 blur-[130px]" />

      {/* Sichqoncha ortidan yuruvchi nur */}
      <motion.div
        style={{ left: glowLeft, top: glowTop }}
        className="absolute hidden h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-plasma-400/10 blur-[110px] lg:block"
      />

      {/* Yulduzlar */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white/70"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
