import CosmicBackground from "@/components/CosmicBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Playground from "@/components/sections/Playground";
import Chapters from "@/components/sections/Chapters";
import Philosophy from "@/components/sections/Philosophy";
import Quiz from "@/components/sections/Quiz";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

/**
 * Bosh sahifa — bo'limlar AIDA modeli ketma-ketligida joylashtirilgan:
 * Attention → Interest → Desire → Action.
 */
export default function HomePage() {
  return (
    <>
      <CosmicBackground />
      <Navbar />

      <main>
        <Hero />          {/* Attention */}
        <Playground />    {/* Interest  */}
        <Chapters />      {/* Interest  */}
        <Philosophy />    {/* Desire    */}
        <Quiz />          {/* Desire    */}
        <Testimonials />  {/* Desire    */}
        <Pricing />       {/* Action    */}
        <Faq />
      </main>

      <Footer />
    </>
  );
}
