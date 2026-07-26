"use client";

import Reveal from "./Reveal";

/**
 * SectionHeading — har bir bo'lim uchun bir xil sarlavha bloki.
 * chip → sarlavha → tavsif ketma-ketligi saqlanadi (vizual ritm).
 */
export default function SectionHeading({
  chip,
  title,
  highlight,
  description,
  align = "center",
}) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {chip && (
        <Reveal>
          <span className="chip">{chip}</span>
        </Reveal>
      )}

      <Reveal delay={0.05}>
        <h2 className="text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.1}>
          <p className="text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
