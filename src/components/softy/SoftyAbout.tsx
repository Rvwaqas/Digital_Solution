"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SoftyAbout() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden"
    >
      {/* Warm amber & brand ambient backlight behind the 3D knot on the left */}
      <div className="absolute top-1/2 left-0 sm:left-12 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] bg-[radial-gradient(circle,rgba(217,119,6,0.28)_0%,rgba(180,83,9,0.12)_40%,rgba(133,129,189,0.1)_60%,transparent_75%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 xl:gap-28 items-center">
          {/* Left Column: 3D Metallic Glossy Knot Graphic with comfortable sizing */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <ScrollReveal direction="right" duration={1400} distance={60} className="w-full flex justify-center">
              <div className="relative group w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] flex items-center justify-center">
                {/* Subtle amber & violet backlight halo */}
                <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.35)_0%,rgba(133,129,189,0.2)_45%,transparent_70%)] blur-3xl group-hover:scale-110 transition-transform duration-1000 pointer-events-none"></div>

                <Image
                  src="/images/softy/knot-graphic.webp"
                  alt="JAWA Innovation Node"
                  width={480}
                  height={480}
                  className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] h-auto object-contain filter drop-shadow-[0_25px_60px_rgba(217,119,6,0.3)] animate-float scale-100 sm:scale-105"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Pill Badge, Big Bold Statement, Orange CTA Button */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-4">
            <ScrollReveal direction="left" duration={1200} delay={100}>
              {/* Badge: Not Just Another Agency */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-semibold text-white/90 mb-8 backdrop-blur-md">
                Not Just Another Agency
              </div>

              {/* Bold Statement Headline */}
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-[52px] font-normal sm:font-medium text-white leading-[1.18] tracking-tight mb-10">
                We don’t do cookie-cutter campaigns. We build bold ideas, powered by AI and human creativity, that push boundaries and spark growth.
              </h2>

              {/* Orange Gradient Pill CTA Button matching screenshot */}
              <Link
                href="#services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f97316] hover:from-[#f97316] hover:to-[#ea580c] text-white text-sm font-semibold shadow-xl shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <span className="font-bold text-base transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                <span>Find Out More</span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
