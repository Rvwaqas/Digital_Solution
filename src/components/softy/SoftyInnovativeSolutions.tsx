"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const tabsData = [
  {
    id: "automation",
    title: "AI Chatbots & Omni-Channel Automation",
    description:
      "24/7 intelligent conversational chatbots and workflow automation across WhatsApp, Facebook Messenger, and Instagram. Capture qualified leads, resolve customer queries instantaneously, and drive automated sales around the clock.",
  },
  {
    id: "risk",
    title: "Risk Management & Financial Advisory",
    description:
      "Comprehensive financial structuring, risk assessment, and capital optimization. We provide strategic advisory to protect assets, improve liquidity, and fuel sustainable corporate growth.",
  },
  {
    id: "cloud",
    title: "Cloud Migration & Custom Software",
    description:
      "High-performance bespoke web, mobile, and cloud architectures built to scale. Modernizing legacy systems into resilient, high-speed digital engines tailored to your workflow.",
  },
];

export default function SoftyInnovativeSolutions() {
  const [activeTab, setActiveTab] = useState<string>("automation");
  const [yearsCount, setYearsCount] = useState<number>(0);
  const [clientsCount, setClientsCount] = useState<number>(0);
  const [hasCounted, setHasCounted] = useState<boolean>(false);
  const [knotActive, setKnotActive] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const statBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setKnotActive(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    const statObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);

          // Animate Years (0 to 15)
          const yearsDuration = 1800;
          const yearsTarget = 15;
          const yearsStartTime = performance.now();

          const animateYears = (time: number) => {
            const elapsed = time - yearsStartTime;
            const progress = Math.min(elapsed / yearsDuration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setYearsCount(Math.floor(easeProgress * yearsTarget));

            if (progress < 1) {
              requestAnimationFrame(animateYears);
            } else {
              setYearsCount(yearsTarget);
            }
          };
          requestAnimationFrame(animateYears);

          // Animate Clients (0 to 120)
          const clientsDuration = 2200;
          const clientsTarget = 120;
          const clientsStartTime = performance.now();

          const animateClients = (time: number) => {
            const elapsed = time - clientsStartTime;
            const progress = Math.min(elapsed / clientsDuration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setClientsCount(Math.floor(easeProgress * clientsTarget));

            if (progress < 1) {
              requestAnimationFrame(animateClients);
            } else {
              setClientsCount(clientsTarget);
            }
          };
          requestAnimationFrame(animateClients);
        }
      },
      { threshold: 0.25 }
    );

    if (statBoxRef.current) {
      statObserver.observe(statBoxRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      statObserver.disconnect();
    };
  }, [hasCounted]);

  return (
    <section
      ref={sectionRef}
      id="innovative-solutions"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-t border-[#454270]/20"
    >
      {/* Ambient background light orbs */}
      <div className="absolute top-1/3 left-10 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(133,129,189,0.16)_0%,rgba(69,66,112,0.1)_45%,transparent_70%)] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(69,66,112,0.22)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      {/* Subtle decorative background vector waves */}
      <div className="absolute top-12 left-8 text-[#8581BD]/20 pointer-events-none hidden sm:block">
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M2 12C10 4 15 20 23 12C31 4 36 20 44 12C52 4 57 20 58 12" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute top-6 left-16 text-[#8581BD]/30 pointer-events-none hidden sm:block">
        <span className="text-xl font-bold">✕</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ====================================================
              LEFT COLUMN: Photo, Stat Counter Box & 3D Element
              (Image enters from LEFT, Stat box enters from BOTTOM,
               3D Knot drops from TOP, overshoots downward and settles)
             ==================================================== */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Main Photo: Enters from LEFT */}
            <ScrollReveal direction="right" duration={1300} distance={70} className="w-full">
              <div className="relative w-full max-w-[540px] mx-auto">
                {/* Outer frame glow */}
                <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-[#100d1e] aspect-[4/4.5] sm:aspect-[4/4.2]">
                  <Image
                    src="/images/softy/innovative-team.jpg"
                    alt="JAWA Innovation Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="object-cover filter contrast-105 brightness-95"
                    priority
                  />
                  {/* Subtle ambient lighting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0914]/80 via-transparent to-black/20 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8581BD]/15 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* 3D Glossy Knot Element: Drops from TOP, dips lower, then settles up */}
                <div
                  className={`absolute -bottom-8 -right-6 sm:-bottom-12 sm:-right-10 w-52 sm:w-64 lg:w-72 h-52 sm:h-64 lg:h-72 z-20 pointer-events-none transition-opacity duration-300 ${
                    knotActive ? "animate-drop-bounce opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src="/images/softy/knot-graphic.webp"
                    alt="Decorative 3D Knot Element"
                    width={288}
                    height={288}
                    className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(133,129,189,0.5)]"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Overlapping Number Stat Box: Enters from BOTTOM with CountUp */}
            <div ref={statBoxRef} className="w-full max-w-[540px] relative z-20 -mt-16 sm:-mt-24 pl-2 sm:pl-4">
              <ScrollReveal direction="up" duration={1200} delay={250} distance={50}>
                <div className="w-[85%] sm:w-[320px] rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#8581BD] via-[#585392] to-[#454270] text-white shadow-[0_20px_50px_rgba(69,66,112,0.6)] border border-white/20 backdrop-blur-xl">
                  {/* Stat 1: Years of Experience */}
                  <div className="flex items-center gap-4 pb-5 border-b border-white/20">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white shadow-inner">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {yearsCount}+
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white/90">
                        Years of Experience
                      </div>
                    </div>
                  </div>

                  {/* Stat 2: Worldwide Clients */}
                  <div className="flex items-center gap-4 pt-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0 text-white shadow-inner">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {clientsCount}K+
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white/90">
                        Worldwide Clients
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ====================================================
              RIGHT COLUMN: Heading (from LEFT), Content (from BOTTOM)
             ==================================================== */}
          <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
            {/* Badge & Heading: Enters from LEFT */}
            <ScrollReveal direction="right" duration={1300} distance={60}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#8581BD]/15 border border-[#8581BD]/30 text-xs font-bold text-[#8581BD] uppercase tracking-wider mb-6 backdrop-blur-md">
                About Our Company
              </div>

              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-[48px] font-bold text-white leading-[1.18] tracking-tight mb-6">
                Discover Innovative Solutions & Technology
              </h2>
            </ScrollReveal>

            {/* Paragraph & Interactive Tabs: Enters from BOTTOM */}
            <ScrollReveal direction="up" duration={1200} delay={200} distance={50} className="w-full">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Work to understand your core challenges and driven to ask better questions in the pursuit of strategic results. We combine custom software engineering, AI chatbots & social automation (WhatsApp, Facebook, Instagram), and corporate financial advisory under one cohesive framework.
              </p>

              {/* Interactive Vertical Feature Tabs */}
              <div className="space-y-4 w-full">
                {tabsData.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <div
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`cursor-pointer transition-all duration-300 p-4 sm:p-5 rounded-2xl border ${
                        isActive
                          ? "bg-[#141026] border-[#8581BD]/60 shadow-lg shadow-[#8581BD]/10"
                          : "bg-[#100d1e]/50 border-white/5 hover:border-white/20 hover:bg-[#141026]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        {/* Active vertical highlight bar */}
                        <div
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isActive ? "h-6 bg-[#8581BD]" : "h-4 bg-white/20"
                          }`}
                        ></div>
                        <h4
                          className={`font-['Space_Grotesk'] text-base sm:text-lg font-bold transition-colors ${
                            isActive ? "text-white" : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {tab.title}
                        </h4>
                      </div>

                      {/* Smooth description reveal */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out pl-4.5 ${
                          isActive ? "grid-rows-[1fr] opacity-100 pt-3" : "grid-rows-[0fr] opacity-0 pt-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {tab.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
