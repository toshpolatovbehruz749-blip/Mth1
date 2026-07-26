"use client";

import { Mail, Phone, Send, Sigma } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

/**
 * Footer — yakuniy aloqa bloki va kichik CTA.
 */
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brend */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-nebula-500 to-plasma-500">
              <Sigma className="h-5 w-5 text-white" />
            </span>
            <span className="text-base font-bold text-white">
              {SITE.bookTitle}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
            {SITE.topics} mavzu, {SITE.pages} sahifa. BMBA imtihoniga
            tayyorlanayotgan o‘quvchilar, maktab va akademik litsey
            o‘quvchilari hamda mustaqil o‘rganuvchilar uchun.
          </p>
        </div>

        {/* Navigatsiya */}
        <nav>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Bo‘limlar
          </h4>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-slate-500 transition hover:text-plasma-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Aloqa */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Aloqa
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-slate-500 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-plasma-400" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 text-sm text-slate-500 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-plasma-400" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 transition hover:text-white"
              >
                <Send className="h-4 w-4 text-plasma-400" />
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-xs text-slate-600">
          © {SITE.year} {SITE.author}. Barcha huquqlar himoyalangan.
        </p>
        <p className="text-xs text-slate-600">{SITE.publisher}</p>
      </div>
    </footer>
  );
}
