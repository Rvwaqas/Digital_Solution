"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SoftyAiSolutionsBanner() {
  return (
    <section className="py-6 sm:py-10 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="zoom-in" duration={1200}>
          {/* Outer Full Banner with Glowing Neon Fiber & Particle Aura */}
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden p-8 sm:p-12 lg:p-16 border border-white/20 shadow-[0_25px_80px_rgba(133,129,189,0.3)] group">
            
            {/* Background Luminous Fiber Optic Neon Stream Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/softy/ai-banner.jpg"
                alt="AI Native Digital Solutions"
                fill
                sizes="100vw"
                className="object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-1000 ease-out"
                priority
              />
              {/* Vibrant Magenta & Purple Neon Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#100720]/90 via-[#1e0a38]/80 to-[#0d0724]/85"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(192,38,211,0.3)_0%,transparent_60%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(133,129,189,0.35)_0%,transparent_60%)]"></div>
            </div>

            {/* Glowing Bokeh Ambient Light Balls */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 rounded-full bg-fuchsia-500/30 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 right-20 -translate-y-1/2 w-56 h-56 rounded-full bg-[#8581BD]/35 blur-3xl pointer-events-none"></div>

            {/* Frosted Glass Content Box */}
            <div className="relative z-10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 bg-black/45 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              
              {/* Left Content */}
              <div className="max-w-3xl">
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
                  Build custom, AI-native solutions that deliver real business value
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  From strategy to deployment, we help you design, develop, and scale AI-powered software that solves complex problems and drives measurable outcomes.
                </p>
              </div>

              {/* Right Button */}
              <div className="flex-shrink-0">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 bg-white/[0.08] hover:bg-gradient-to-r hover:from-[#8581BD] hover:to-[#454270] hover:border-transparent hover:text-white text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl backdrop-blur-md hover:scale-105 active:scale-95 group/btn"
                >
                  <span>Learn More</span>
                  <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
