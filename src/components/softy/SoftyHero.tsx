"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
            {/* Left Column: Badge, Big Bold Headline, and Action Buttons */}
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

              {/* Huge Display Heading matching screenshot */}
              <h1
                className={`font-['Space_Grotesk'] text-5xl sm:text-7xl lg:text-[82px] font-bold tracking-tight text-white leading-[1.04] mb-10 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mounted ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-10 -translate-x-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Smarter Digital. <br />
                Stronger Brands.
              </h1>

              {/* Action Buttons: [→ Start Your Project] [→ See Our Process] - from inner to outer */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="#contact"
                  className={`px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#8581BD] to-[#454270] hover:from-[#9d99d1] hover:to-[#555285] text-white text-sm font-semibold shadow-xl shadow-[#8581BD]/35 hover:scale-105 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2.5 ${
                    mounted ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-8 scale-90"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <span>→</span>
                  <span>Start Your Project</span>
                </Link>

                <Link
                  href="#about"
                  className={`px-7 py-3.5 rounded-xl bg-black/50 hover:bg-white/10 text-white text-sm font-semibold border border-white/25 backdrop-blur-md hover:border-white/40 hover:scale-105 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2.5 ${
                    mounted ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-90"
                  }`}
                  style={{ transitionDelay: "650ms" }}
                >
                  <span>→</span>
                  <span>See Our Process</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Statement Paragraph (from Left) + Overlapping Avatars (from Right & opening from center) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-end">
              <div className="max-w-md text-left lg:text-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] overflow-hidden">
                {/* Paragraph entering from LEFT side */}
                <p
                  className={`text-base sm:text-lg text-gray-100 leading-relaxed font-normal mb-6 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  We’re JAWA — the AI-fueled IT agency that blends creativity, code, and strategy to make brands impossible to ignore.
                </p>

                {/* 3 Overlapping Avatars opening/fanning out from center + 2000+ Happy Clients entering from RIGHT */}
                <div
                  className={`flex items-center gap-3.5 transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <div className="flex -space-x-2.5 overflow-visible">
                    <Image
                      src="/images/softy/hero-avatar-1.jpg"
                      alt="Happy Client 1"
                      width={40}
                      height={40}
                      className={`inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
                        mounted ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-6 scale-50"
                      }`}
                      style={{ transitionDelay: "750ms" }}
                    />
                    <Image
                      src="/images/softy/hero-avatar-2.jpg"
                      alt="Happy Client 2"
                      width={40}
                      height={40}
                      className={`inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover relative z-10 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
                        mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`}
                      style={{ transitionDelay: "900ms" }}
                    />
                    <Image
                      src="/images/softy/hero-avatar-3.jpg"
                      alt="Happy Client 3"
                      width={40}
                      height={40}
                      className={`inline-block h-10 w-10 rounded-full ring-2 ring-black object-cover relative z-20 transition-all duration-[1200ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] ${
                        mounted ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-6 scale-50"
                      }`}
                      style={{ transitionDelay: "1050ms" }}
                    />
                  </div>
                  <span
                    className={`font-['Space_Grotesk'] text-sm font-semibold text-white tracking-tight transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                    }`}
                    style={{ transitionDelay: "850ms" }}
                  >
                    2000+ Happy Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
