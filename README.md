# «Matematikaga qadam» — interaktiv landing page

Behruz Toshpo‘latovning 30 mavzuli, 368 sahifali matematika kitobi uchun
zamonaviy, interaktiv va sotuvchi (high-converting) sayt.

**Stack:** Next.js 14 (App Router) · React 18 · Tailwind CSS 3 · Framer Motion 11 · lucide-react

---

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:3000
```

Ishlab chiqarish uchun:

```bash
npm run build && npm start
```

> `next/font` Google Fonts'dan Inter shriftini yuklaydi — birinchi build paytida
> internet ulanishi kerak.

---

## Arxitektura

```
app/
  layout.jsx          # Root layout, shrift, SEO metadata
  page.jsx            # Bo'limlar AIDA ketma-ketligida yig'iladi
  globals.css         # Design system: .glass, .neo, .text-gradient, .chip

components/
  CosmicBackground.jsx   # Katakli doska + sichqoncha ortidan yuruvchi nur + yulduzlar
  Navbar.jsx             # Sticky menyu, scroll progress, mobil overlay
  FloatingShapes.jsx     # CSS 3D kub, Sierpinski fraktal, suzuvchi formulalar

  ui/                    # Qayta ishlatiluvchi primitivlar (DRY)
    Section.jsx          # Bir xil bo'shliq + konteyner
    SectionHeading.jsx   # chip → sarlavha → tavsif
    Button.jsx           # 3 variant (primary / solar / ghost), hover-tap animatsiya
    Reveal.jsx           # Scroll bilan paydo bo'lish o'rami

  sections/              # Har biri mustaqil bo'lim (SOLID: SRP)
    Hero.jsx             # 3D kitob maketi + almashuvchi sarlavha  → Attention
    Playground.jsx       # Pifagor / Fraktal / Tub sonlar elagi     → Interest
    Chapters.jsx         # 6 ta 3D flip-card, 30 mavzu              → Interest
    Philosophy.jsx       # Muallif iqtibosi + 4 pedagogik tamoyil   → Desire
    Quiz.jsx             # 3 savolli o'yin + QADAM15 promokod       → Desire
    Testimonials.jsx     # Ijtimoiy isbot                            → Desire
    Pricing.jsx          # 3 paket, o'rtadagisi urg'ulangan          → Action
    Faq.jsx              # Akkordeon
    Footer.jsx           # Aloqa

lib/
  site.js             # BARCHA matn, narx, boblar, sharhlar — bitta manba
  motion.js           # Umumiy Framer Motion variantlari
```

**Asosiy tamoyil:** matnni o‘zgartirish uchun faqat `lib/site.js` faylini
tahrirlang. Komponentlarga tegish shart emas.

---

## Nima o‘zgartirish kerak (TODO)

`lib/site.js` faylida:

| Maydon | Hozirgi qiymat | Nima qilish kerak |
|---|---|---|
| `SITE.phone` | `+998 90 000 00 00` | Haqiqiy raqamingiz |
| `SITE.telegram` | placeholder havola | Telegram kanal/bot havolangiz |
| `PLANS[*].price` | 89 000 / 149 000 | Haqiqiy narxlar |
| `TESTIMONIALS` | namunaviy sharhlar | Real sharhlar bilan almashtiring |
| `QUIZ` | 3 ta savol | Xohlasangiz kitobdan boshqa savollar |

Kitob muqovasi hozir CSS bilan chizilgan (`Hero.jsx` → `BookMockup`).
Haqiqiy muqova rasmi tayyor bo‘lsa, `public/muqova.jpg` ga qo‘yib,
`next/image` bilan almashtirish mumkin.

---

## Interaktiv elementlar

1. **Live Playground** — Pifagor teoremasi (slayder bilan jonli SVG),
   Sierpinski fraktali (3⁰…3⁷ = 2187 ta uchburchak), Eratosfen elagi
   (100 tagacha tub sonlarni bosqichma-bosqich topish).
2. **3D flip-cards** — kartani bosing, orqa tomonida bosqich mavzulari.
3. **Gamified quiz** — 3 to‘g‘ri javob → `QADAM15` promokodi (nusxalash tugmasi bilan).
4. **Mikro-interaksiyalar** — sichqoncha ortidan yuruvchi nur, kitob maketining
   parallaks egilishi, hover’da ko‘tariluvchi kartalar, scroll progress chizig‘i.

Barcha animatsiyalar `prefers-reduced-motion` sozlamasini hurmat qiladi.

---

## Deploy

Eng qulay yo‘l — [Vercel](https://vercel.com):

```bash
npx vercel
```

Yoki statik eksport kerak bo‘lsa, `next.config.mjs` ga `output: "export"`
qo‘shing va `npm run build` natijasidagi `out/` papkasini hostingga yuklang.
