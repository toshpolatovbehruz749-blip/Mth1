/**
 * SAYT MA'LUMOTLARI — bitta manba (Single Source of Truth).
 * Matn yoki narxni o'zgartirish uchun faqat shu faylni tahrirlang,
 * komponentlarga tegish shart emas.
 */

export const SITE = {
  bookTitle: "Matematikaga qadam",
  author: "Behruz Toshpo‘latov",
  publisher: "Fan va ta'lim nashriyoti",
  year: 2026,
  pages: 368,
  topics: 30,
  // TODO: o'zingizning haqiqiy aloqa ma'lumotlaringizga almashtiring
  phone: "+998 90 000 00 00",
  telegram: "https://t.me/matematikaga_qadam",
  email: "toshpolatovbehruz749@gmail.com",
};

/** Navigatsiya menyusi */
export const NAV_LINKS = [
  { id: "playground", label: "Jonli sinov" },
  { id: "chapters", label: "Boblar" },
  { id: "philosophy", label: "Falsafa" },
  { id: "quiz", label: "Test o‘yin" },
  { id: "reviews", label: "Sharhlar" },
  { id: "order", label: "Buyurtma" },
];

/** Hero ostidagi ishonch ko'rsatkichlari */
export const STATS = [
  { value: "30", label: "Mavzu", suffix: "" },
  { value: "368", label: "Sahifa", suffix: "" },
  { value: "2000", label: "Masala", suffix: "+" },
  { value: "100", label: "Ish daftari", suffix: "%" },
];

/**
 * Kitob boblari — 30 ta mavzu, 6 ta bosqichga guruhlangan.
 * `tag` — flip-card orqa tomonidagi qisqa izoh.
 */
export const CHAPTER_GROUPS = [
  {
    id: "arifmetika",
    title: "Arifmetika poydevori",
    range: "1–6-mavzular",
    color: "from-plasma-400 to-plasma-500",
    icon: "Calculator",
    hook: "Sonlar bilan do‘stlashish",
    chapters: [
      "To‘rtta amalga doir sodda misol-masalalar",
      "Raqam va natural sonlar",
      "Teskari tamoyil metodi bilan masalalar yechish",
      "Yig‘indi va ayirmaga doir masalalar",
      "O‘lchov birliklariga doir masalalar",
      "Qoldiqli bo‘lish",
    ],
  },
  {
    id: "algebra",
    title: "Algebra tili",
    range: "7–9-mavzular",
    color: "from-nebula-400 to-nebula-600",
    icon: "Sigma",
    hook: "Noma’lumni topish san’ati",
    chapters: [
      "Harfiy ifodalar",
      "Tenglamalar yechish",
      "Masalalarni tenglama tuzib yechish",
    ],
  },
  {
    id: "sonlar",
    title: "Sonlar nazariyasi",
    range: "10–12-mavzular",
    color: "from-solar-300 to-solar-500",
    icon: "Binary",
    hook: "Tub sonlar — matematikaning atomlari",
    chapters: [
      "Bo‘linish belgilari, tub va murakkab sonlar",
      "Tub ko‘paytuvchilarga ajratish. EKUB va EKUK",
      "Bo‘linuvchanlik. Bo‘luvchilar soni va yig‘indisi",
    ],
  },
  {
    id: "kasrlar",
    title: "Kasrlar olami",
    range: "13–19-mavzular",
    color: "from-mint to-plasma-400",
    icon: "PieChart",
    hook: "Butunni bo‘lishni bilgan — dunyoni tushunadi",
    chapters: [
      "Oddiy kasrlar va amallar (1-qism)",
      "Oddiy kasrlar va amallar (2-qism)",
      "O‘nli va davriy o‘nli kasrlar",
      "Ratsional sonlar",
      "Daraja va uning xossalari",
      "Qism va foiz",
      "Nisbat va proporsiya",
    ],
  },
  {
    id: "sistema",
    title: "Sistemalar va harakat",
    range: "20–22-mavzular",
    color: "from-coral to-nebula-500",
    icon: "GitCompareArrows",
    hook: "Bir vaqtda ikki noma’lumni yechish",
    chapters: [
      "Tenglamalar sistemasi",
      "Sistema orqali yechiladigan masalalar",
      "Harakatga doir masalalar",
    ],
  },
  {
    id: "geometriya",
    title: "Geometriya va statistika",
    range: "23–30-mavzular",
    color: "from-plasma-300 to-nebula-500",
    icon: "Shapes",
    hook: "Fazoni ko‘rish qobiliyati",
    chapters: [
      "Geometrik shakllar",
      "Murakkab shakllar perimetri va yuzasi",
      "O‘rta arifmetik, moda va mediana",
      "Jadval bilan ishlash",
      "Diagramma va grafik",
      "Kombinatorika",
      "Prizma va piramida",
      "To‘g‘ri burchakli parallelepiped va kub",
    ],
  },
];

/** «Nega bu kitob boshqacha» — falsafa bloki */
export const PHILOSOPHY = [
  {
    icon: "PenLine",
    title: "Kitob = ish daftari",
    text:
      "Har bir misoldan keyin yechish uchun maxsus bo‘sh joy ajratilgan. O‘quvchi o‘qimaydi — u ishlaydi. Bilim qo‘l bilan yozilgandagina qoladi.",
  },
  {
    icon: "Layers",
    title: "Mavzulashtirilgan tuzilma",
    text:
      "30 ta mavzu sinfdagi dars jadvaliga moslashtirilgan. Har mavzudan so‘ng sinf ishi va uy vazifasi — o‘qituvchi uchun tayyor tizim.",
  },
  {
    icon: "Target",
    title: "BMBA imtihoniga yo‘naltirilgan",
    text:
      "Masalalar prezident maktablari va ixtisoslashtirilgan maktablar imtihoni formatida sinchiklab tanlangan.",
  },
  {
    icon: "Brain",
    title: "Mantiq — yodlashdan ustun",
    text:
      "Teskari tamoyil, kombinatorika, tahlil. Bola formulani emas, fikrlash usulini o‘rganadi — bu kelajakdagi har qanday kasbga asos.",
  },
];

/** Ijtimoiy isbot */
export const TESTIMONIALS = [
  {
    name: "Muxabbat Turniyozova",
    role: "Matematika o‘qituvchisi, 32 yillik tajriba",
    text:
      "Darsga tayyorgarlik vaqtim uch barobar qisqardi. Mavzular ketma-ketligi shu qadar mantiqiy joylashganki, kitobni ochib dars boshlayverasiz.",
    accent: "nebula",
    initials: "MT",
  },
  {
    name: "Dilnoza Karimova",
    role: "Ona, 6-sinf o‘quvchisining onasi",
    text:
      "O‘g‘lim ilgari «matematika zerikarli» derdi. Endi kechqurun o‘zi kitobni ochib o‘tiradi. Ish daftari formati juda qulay — daftar izlash shart emas.",
    accent: "plasma",
    initials: "DK",
  },
  {
    name: "Javohir, 12 yosh",
    role: "Prezident maktabi abituriyenti",
    text:
      "Teskari tamoyil mavzusidan keyin imtihon masalalarini yarim vaqtda yechadigan bo‘ldim. Eng zo‘ri — kombinatorika bo‘limi.",
    accent: "solar",
    initials: "J",
  },
  {
    name: "Sardor G‘afforov",
    role: "Akademik litsey metodisti",
    text:
      "368 sahifa ichida 5-sinfdan 9-sinfgacha bo‘lgan poydevor to‘liq qamrab olingan. Bu — bitta kitobga sig‘dirilgan butun bir kurs.",
    accent: "mint",
    initials: "SG",
  },
];

/** Gamifikatsiya: 3 savolli test. `answer` — to'g'ri variant indeksi. */
export const QUIZ = [
  {
    question: "Sonni 5 ga ko‘paytirib, 8 ga bo‘lsak, 40 chiqdi. Bu qaysi son?",
    hint: "Teskari tamoyil metodi: oxiridan boshiga qarab yur.",
    options: ["50", "64", "25", "72"],
    answer: 1,
    explain:
      "Teskari yo‘l bilan: 40 × 8 = 320, so‘ng 320 ÷ 5 = 64. Bu — kitobning 3-mavzusi.",
  },
  {
    question: "36 sonining nechta natural bo‘luvchisi bor?",
    hint: "36 = 2² × 3². Darajalarga 1 qo‘shib ko‘paytiring.",
    options: ["6", "8", "9", "12"],
    answer: 2,
    explain:
      "36 = 2²·3² ⇒ (2+1)(2+1) = 9 ta bo‘luvchi. Bu — kitobning 12-mavzusi.",
  },
  {
    question: "Tomoni 3 va 4 bo‘lgan to‘g‘ri burchakli uchburchak gipotenuzasi?",
    hint: "a² + b² = c²",
    options: ["5", "6", "7", "12"],
    answer: 0,
    explain:
      "9 + 16 = 25 ⇒ c = 5. Geometriya bo‘limi (23-mavzu) shu qonuniyatdan boshlanadi.",
  },
];

/** Narx paketlari */
export const PLANS = [
  {
    id: "print",
    name: "Bosma kitob",
    price: "89 000",
    currency: "so‘m",
    tagline: "Klassik, qo‘lda yoziladigan ish daftari",
    features: [
      "368 sahifa, qattiq muqova",
      "30 ta mavzu + uy vazifalari",
      "Yechish uchun bo‘sh joylar",
      "O‘zbekiston bo‘ylab yetkazib berish",
    ],
    highlighted: false,
    cta: "Kitobni buyurtma qilish",
  },
  {
    id: "combo",
    name: "Bosma + Interaktiv",
    price: "149 000",
    currency: "so‘m",
    tagline: "Eng ko‘p tanlanadigan to‘plam",
    features: [
      "Bosma kitobning barchasi",
      "Video-yechimlar kutubxonasi",
      "Interaktiv onlayn testlar",
      "Ota-ona uchun natija paneli",
      "Yopiq Telegram guruh",
    ],
    highlighted: true,
    cta: "To‘plamni olish",
  },
  {
    id: "school",
    name: "Maktab / Sinf",
    price: "Kelishilgan",
    currency: "",
    tagline: "10 va undan ortiq nusxa uchun",
    features: [
      "Ulgurji chegirma",
      "O‘qituvchi uchun metodik qo‘llanma",
      "Mavzulashtirilgan dars rejasi",
      "Onlayn treninq sessiyasi",
    ],
    highlighted: false,
    cta: "Taklif so‘rash",
  },
];

/** Tez-tez so'raladigan savollar */
export const FAQ = [
  {
    q: "Kitob necha yoshdagi bolalarga mo‘ljallangan?",
    a: "Asosan 10–15 yosh (5–9-sinf) o‘quvchilari uchun. Biroq arifmetika bo‘limlari 4-sinfdan, kombinatorika va statistika esa litsey darajasigacha xizmat qiladi.",
  },
  {
    q: "Javoblari bormi?",
    a: "Ha. Har bir mavzu oxirida uy vazifasi topshiriqlari va ularning javoblari berilgan, interaktiv paketda esa to‘liq video-yechimlar mavjud.",
  },
  {
    q: "Mustaqil o‘rganuvchi uchun mos keladimi?",
    a: "Aynan shu maqsadda tuzilgan. Mavzular soddadan murakkabga qat’iy ketma-ketlikda joylashgan, har bir bo‘lim o‘z-o‘zini tekshirish bilan yakunlanadi.",
  },
  {
    q: "Yetkazib berish qancha vaqt oladi?",
    a: "Toshkent bo‘ylab 1–2 kun, viloyatlarga 2–4 ish kuni ichida.",
  },
];
