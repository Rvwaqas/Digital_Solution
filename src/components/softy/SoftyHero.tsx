"use client";

import { useEffect, useState } from "react";
import SoftyNavbar from "./SoftyNavbar";

export default function SoftyHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full pt-3 sm:pt-5 pb-4 px-2 sm:px-4 lg:px-6 bg-gradient-to-b from-[#1d1733] via-[#120d24] to-transparent overflow-hidden">
      {/* Background luxury gradient & radial ambient purple glow behind the card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(133,129,189,0.35)_0%,rgba(69,66,112,0.2)_45%,transparent_75%)] blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(69,66,112,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      {/* Full-Width Framed Card Container matching screenshot */}
      <div className="relative w-full min-h-[90vh] lg:min-h-[94vh] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col justify-between">
        {/* Crystal-Clear Background Video — bright, vivid, without heavy darkness */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-100 filter brightness-105 contrast-105"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            poster="https://softy-solutions.cmsmasters.studio/dark-demo/wp-content/uploads/sites/2/2025/09/71-home-2-video.mp4"
          >
            <source
              src="https://softy-solutions.cmsmasters.studio/dark-demo/wp-content/uploads/sites/2/2025/09/71-home-2-video.mp4"
              type="video/mp4"
            />
          </video>
          {/* Subtle minimal vignette only to keep text crisp while keeping the laptop screen and warm desk totally bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/25 pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/45 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none"></div>
        </div>

        {/* Navbar inside the card at the top */}
        <SoftyNavbar />

        {/* Center breathing space for the clear video (showing laptop screen & warm wood) */}
        <div className="pt-32 sm:pt-40 lg:pt-48"></div>

        {/* Hero Bottom Content Area inside the card */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 pb-12 sm:pb-16 mt-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Left Column: Badge and Big Bold Headline */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Exact Badge: [✦ NEXT-GEN] AI-Powered Digital Agency */}
              <div
                className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 shadow-xl backdrop-blur-md mb-8 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <span className="bg-white text-black text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <span>✦</span> NEXT-GEN
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide pr-1">
                  AI-Powered Digital Agency
                </span>
              </div>

              {/* Huge Display Heading */}
              <h1
                className={`font-['Space_Grotesk'] text-5xl sm:text-7xl lg:text-[82px] font-bold tracking-tight text-white leading-[1.04] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mounted ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-10 -translate-x-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Smarter Digital. <br />
                Stronger Brands.
              </h1>
            </div>

            {/* Right Column: Statement Paragraph */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end">
              <div className="max-w-md text-left lg:text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] overflow-hidden">
                <p
                  className={`text-base sm:text-lg text-gray-100 leading-relaxed font-normal transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  We’re JAWA — the AI-fueled IT agency that blends creativity, code, and strategy to make brands impossible to ignore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
