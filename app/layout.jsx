import "./globals.css";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/site";

// Shrift — CSS o'zgaruvchisi orqali Tailwind'ga ulanadi
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

// SEO uchun metadata (Next.js App Router standarti)
export const metadata = {
  title: `${SITE.bookTitle} — matematikani kashf qiladigan kitob`,
  description:
    "30 mavzu, 368 sahifa, 2000+ masala. BMBA imtihoniga va maktab matematikasiga tayyorlaydigan interaktiv ish daftari-kitob.",
  keywords: [
    "matematika kitobi",
    "BMBA imtihon",
    "prezident maktabi",
    "matematikaga qadam",
    "ish daftari",
  ],
  openGraph: {
    title: `${SITE.bookTitle} — ${SITE.author}`,
    description: "Matematikani zerikarli deydiganlar uchun kashfiyot.",
    type: "book",
    locale: "uz_UZ",
  },
};

export const viewport = {
  themeColor: "#04040F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
