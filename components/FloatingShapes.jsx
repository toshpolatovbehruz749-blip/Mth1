"use client";

import { motion } from "framer-motion";

/**
 * FloatingShapes — Hero atrofida suzuvchi 3D matematik obyektlar.
 * Three.js o'rniga sof CSS 3D + SVG ishlatilgan: bir xil vizual effekt,
 * ammo ~0 KB qo'shimcha yuk va mobil qurilmalarda ravon ishlash.
 */

/** Aylanuvchi 3D kub (6 ta yuz — CSS transform bilan) */
function Cube({ size = 84, className = "" }) {
  const half = size / 2;
  const faces = [
    { t: `translateZ(${half}px)`, label: "a²" },
    { t: `rotateY(180deg) translateZ(${half}px)`, label: "π" },
    { t: `rotateY(90deg) translateZ(${half}px)`, label: "∑" },
    { t: `rotateY(-90deg) translateZ(${half}px)`, label: "√" },
    { t: `rotateX(90deg) translateZ(${half}px)`, label: "∞" },
    { t: `rotateX(-90deg) translateZ(${half}px)`, label: "Δ" },
  ];

  return (
    <div className={`perspective ${className}`} style={{ width: size, height: size }}>
      <motion.div
        className="preserve-3d relative h-full w-full"
        animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {faces.map((f) => (
          <div
            key={f.t}
            style={{ transform: f.t }}
            className="backface-hidden absolute inset-0 grid place-items-center rounded-xl border border-plasma-400/40 bg-gradient-to-br from-nebula-600/30 to-plasma-500/20 text-lg font-bold text-plasma-200 backdrop-blur-sm"
          >
            {f.label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/** Sierpinski uchburchagi — fraktal (rekursiv SVG) */
function Fractal({ depth = 4, size = 96, className = "" }) {
  const triangles = [];

  // Rekursiv bo'lish: har bir uchburchak 3 ta kichigiga ajraladi
  const subdivide = (p1, p2, p3, level) => {
    if (level === 0) {
      triangles.push(`${p1.join(",")} ${p2.join(",")} ${p3.join(",")}`);
      return;
    }
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    subdivide(p1, mid(p1, p2), mid(p1, p3), level - 1);
    subdivide(mid(p1, p2), p2, mid(p2, p3), level - 1);
    subdivide(mid(p1, p3), mid(p2, p3), p3, level - 1);
  };
  subdivide([50, 4], [96, 92], [4, 92], depth);

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
      {triangles.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          className="fill-solar-400/70"
          style={{ opacity: 0.35 + (i % 5) * 0.14 }}
        />
      ))}
    </svg>
  );
}

/** Suzuvchi formula yorlig'i */
function FormulaChip({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`glass px-4 py-2 font-mono text-sm text-plasma-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <Cube size={78} className="absolute left-[6%] top-[22%] animate-float" />
      <Cube size={54} className="absolute right-[8%] top-[62%] animate-float-slow" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute right-[10%] top-[16%]"
      >
        <Fractal size={104} />
      </motion.div>

      {/* Neon halqa */}
      <div className="absolute bottom-[18%] left-[12%] h-24 w-24 rounded-full border-2 border-dashed border-plasma-400/40 animate-spin-slow" />

      <FormulaChip className="absolute left-[3%] top-[58%]" delay={0.4}>
        a² + b² = c²
      </FormulaChip>
      <FormulaChip className="absolute right-[4%] bottom-[24%]" delay={1.2}>
        EKUB(12, 18) = 6
      </FormulaChip>
    </div>
  );
}
