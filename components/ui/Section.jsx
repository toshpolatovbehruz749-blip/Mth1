/**
 * Section — barcha bo'limlar uchun yagona o'ram:
 * bir xil vertikal bo'shliq, konteyner kengligi va id (navigatsiya uchun).
 */
export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
