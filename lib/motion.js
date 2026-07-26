/**
 * Framer Motion uchun umumiy variantlar.
 * Har bir komponentda animatsiyani qaytadan yozmaslik uchun (DRY).
 */

/** Yumshoq "spring" — barcha mikro-interaksiyalar uchun yagona his */
export const SPRING = { type: "spring", stiffness: 260, damping: 24 };

/** Pastdan suzib chiqish */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Chapdan / o'ngdan kirish generatori */
export const fadeSide = (dir = "left") => ({
  hidden: { opacity: 0, x: dir === "left" ? -36 : 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

/** Kattalashib paydo bo'lish */
export const popIn = {
  hidden: { opacity: 0, scale: 0.86 },
  show: { opacity: 1, scale: 1, transition: SPRING },
};

/** Bolalarni ketma-ket animatsiya qilish (stagger) */
export const staggerParent = (stagger = 0.09, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Scroll bilan ishga tushadigan standart sozlama */
export const VIEWPORT = { once: true, amount: 0.25 };
