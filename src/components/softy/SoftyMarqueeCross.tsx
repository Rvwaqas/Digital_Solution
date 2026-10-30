"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const itemsLine1 = [
  "STRATEGIC GROWTH & DIGITAL INNOVATION",
  "WHERE AI MEETS HUMAN EXPERTISE",
  "CUSTOM SOFTWARE & MOBILE APPS",
  "INTEGRATED FINANCIAL MANAGEMENT",
  "AI CHATBOTS & SOCIAL AUTOMATION (WHATSAPP, FB, IG)",
];

const itemsLine2 = [
  "BUILD SMARTER. LAUNCH FASTER.",
  "WHERE AI MEETS HUMAN EXPERIENCE",
  "NEXT-GEN SOLUTIONS IN RECORD TIME",
  "TURNING IDEAS INTO SUSTAINABLE GROWTH",
  "LET’S BUILD SOMETHING EXTRAORDINARY",
];

export default function SoftyMarqueeCross() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-transparent flex flex-col items-center justify-center">
      {/* Top CTA Banner matching Screenshot 2 */}
      <ScrollReveal direction="up" duration={900} className="w-full">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-14 sm:mb-20 px-4 z-30 relative text-center">
          <span className="text-white font-['Space_Grotesk'] text-xl sm:text-3xl font-bold tracking-tight">
            Got a bold idea? We’ll make it real.
          </span>
          <Link
            href="#contact"
            className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-[#8581BD] to-[#454270] hover:from-[#9d99d1] hover:to-[#555285] text-white text-sm sm:text-base font-bold shadow-xl shadow-[#8581BD]/40 hover:scale-105 transition-all duration-300 flex items-center gap-2.5 group"
          >
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            <span>Get in Touch</span>
          </Link>
        </div>
      </ScrollReveal>

      {/* Container for the thick tilted overlapping ribbons */}
      <ScrollReveal direction="zoom-in" duration={1100} className="w-full">
        <div className="relative w-full py-16 sm:py-20 flex flex-col items-center justify-center overflow-hidden">
          {/* Ribbon 1 (Back / Dark Black Ribbon tilted negative - Much Thicker) */}
          <div className="relative w-[120vw] -ml-[10vw] transform -rotate-3 sm:-rotate-3.5 z-10 bg-[#090810] border-y border-[#454270]/70 py-7 sm:py-9 shadow-2xl shadow-black overflow-hidden">
            <div className="animate-softy-marquee flex items-center gap-10 sm:gap-16 whitespace-nowrap text-white font-['Space_Grotesk'] font-bold text-xl sm:text-3xl lg:text-4xl uppercase tracking-wider">
              {[...itemsLine1, ...itemsLine1, ...itemsLine1, ...itemsLine1].map((text, idx) => (
                <div key={idx} className="flex items-center gap-10 sm:gap-16 flex-shrink-0">
                  <span>{text}</span>
                  <span className="text-[#8581BD] text-2xl sm:text-4xl leading-none font-bold">✻</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ribbon 2 (Front / Rich Gradient Ribbon tilted positive - Much Thicker & Radiant) */}
          <div className="relative w-[120vw] -ml-[10vw] transform rotate-2 sm:rotate-2.5 -mt-12 sm:-mt-16 z-20 bg-gradient-to-r from-[#454270] via-[#8581BD] via-[#9e9ad6] to-[#454270] py-8 sm:py-10 shadow-[0_25px_60px_rgba(133,129,189,0.45)] border-y border-white/30 overflow-hidden">
            <div className="animate-softy-marquee-reverse flex items-center gap-10 sm:gap-16 whitespace-nowrap text-white font-['Space_Grotesk'] font-black text-xl sm:text-3xl lg:text-4xl uppercase tracking-wider drop-shadow-md">
              {[...itemsLine2, ...itemsLine2, ...itemsLine2, ...itemsLine2].map((text, idx) => (
                <div key={idx} className="flex items-center gap-10 sm:gap-16 flex-shrink-0">
                  <span>{text}</span>
                  <span className="text-white/90 text-2xl sm:text-4xl leading-none font-black">✻</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
