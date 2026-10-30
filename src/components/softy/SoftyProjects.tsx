"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const caseStudies = [
  {
    category: "HEALTHCARE",
    badge: "Caregiver Platform",
    title: "Caregiver support platform",
    description:
      "Empowering caregivers with an all-in-one support platform that streamlines access to key resources, allowing them to focus on delivering quality care.",
    statNumber: "50%",
    statLabel1: "Digitized key support operations, reducing admin costs by over",
    statLabel2: "Enhanced caregiver engagement with user-focused support features",
    image: "/images/projects/project-healthcare.jpg",
    linkText: "Read case study",
  },
  {
    category: "REAL ESTATE",
    badge: "Cloud Platform",
    title: "Global Real Estate Asset & Tenant Management Portal",
    description:
      "Engineered an all-in-one property portfolio management web platform with automated lease processing, real-time valuation analytics, and direct tenant communication portals.",
    statNumber: "+320%",
    statLabel1: "Accelerated operational speed and transaction velocity by",
    statLabel2: "$120M+ real estate assets actively monitored with automated compliance",
    image: "/images/projects/project-realestate.jpg",
    linkText: "Read case study",
  },
  {
    category: "AI & SOCIAL AUTOMATION",
    badge: "Chatbot & Messaging Engine",
    title: "Omnichannel AI Chatbot Automation (WhatsApp, FB & Instagram)",
    description:
      "Engineered an enterprise-grade AI chatbot system integrated with WhatsApp Business API, Facebook Messenger, and Instagram DMs. Automating customer service, lead qualification, order tracking, and 24/7 sales conversions with zero human intervention.",
    statNumber: "96.4%",
    statLabel1: "Automated instant inquiry resolution & lead response rate of",
    statLabel2: "850K+ automated customer conversations processed monthly across WhatsApp, IG & FB",
    image: "/images/projects/project-automation.jpg",
    linkText: "Read case study",
  },
  {
    category: "FINANCIAL ADVISORY",
    badge: "Business Intelligence",
    title: "Integrated Financial Advisory & Executive Dashboard",
    description:
      "Consolidated complex multi-entity cashflows into clear executive roadmaps, automating financial forecasting, regulatory compliance, and risk analytics dashboards.",
    statNumber: "99.2%",
    statLabel1: "Automated cashflow forecast accuracy across portfolio companies of",
    statLabel2: "$450K+ in direct annual operational and accounting cost savings",
    image: "/images/projects/project-finance.jpg",
    linkText: "Read case study",
  },
  {
    category: "TOURISM & HOSPITALITY",
    badge: "Digital Transformation",
    title: "Omnichannel Tourism & Booking Experience Engine",
    description:
      "Designed and deployed a high-conversion booking engine, interactive itinerary builder, and real-time reservation infrastructure handling thousands of daily international travelers.",
    statNumber: "+185%",
    statLabel1: "Boosted digital booking conversion rates across web and mobile by",
    statLabel2: "65,000+ active global travelers managed smoothly through peak season",
    image: "/images/projects/project-tourism.jpg",
    linkText: "Read case study",
  },
];

const SLIDE_DURATION = 4000; // 4 seconds per slide

export default function SoftyProjects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeCase = caseStudies[activeIdx];

  // Auto-advancing timer with progress line filling up
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 40; // 40ms tick
    const increment = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          setActiveIdx((current) => (current + 1) % caseStudies.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, activeIdx]);

  const handleSelectSlide = (index: number) => {
    setActiveIdx(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % caseStudies.length);
    setProgress(0);
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(circle,rgba(133,129,189,0.12)_0%,rgba(69,66,112,0.06)_50%,transparent_70%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Screenshot 1 */}
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#8581BD]/15 border border-[#8581BD]/30 text-[#8581BD] text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md">
              Proven Industry Impact
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.15] mb-5">
              Solutions That Drive <br className="hidden sm:inline" />
              Measurable Growth
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              From finance and healthcare to real estate, tourism, and AI social automation (WhatsApp, FB, Instagram) — we build solutions that deliver long-term value.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Interactive Case Study Card matching Screenshot 2 */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0d0a1a] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.85)] min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex flex-col justify-between transition-all duration-500"
        >
          {/* Background Right Side Photo with Smooth Crossfade */}
          <div className="absolute inset-0 z-0">
            <Image
              key={activeIdx}
              src={activeCase.image}
              alt={activeCase.title}
              fill
              sizes="100vw"
              priority
              className="object-cover object-right filter brightness-90 contrast-105"
            />
            {/* Dark gradient mask from left so text is completely readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0a1a] via-[#0d0a1a]/92 sm:via-[#0d0a1a]/85 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1a] via-transparent to-black/30 pointer-events-none"></div>
          </div>

          {/* Left Content Area */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl flex flex-col justify-between h-full min-h-[520px] sm:min-h-[560px]">
            <div>
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#8581BD]">
                  {activeCase.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span className="text-[11px] font-semibold text-gray-300 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                  {activeCase.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-6 transition-all duration-500">
                {activeCase.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                {activeCase.description}
              </p>
            </div>

            {/* Bottom Metrics Section */}
            <div className="pt-6 border-t border-white/15">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-8">
                {/* Metric Big Number */}
                <div className="sm:col-span-4">
                  <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {activeCase.statNumber}
                  </div>
                </div>

                {/* Metric Descriptive Text */}
                <div className="sm:col-span-8 space-y-1.5 text-xs sm:text-sm text-gray-300 leading-snug">
                  <p>{activeCase.statLabel1}</p>
                  <p className="text-gray-400">{activeCase.statLabel2}</p>
                </div>
              </div>

              {/* Read Case Study Link */}
              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#8581BD] transition-colors group/link"
                >
                  <span>{activeCase.linkText}</span>
                  <span className="text-base transition-transform duration-300 group-hover/link:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ====================================================
              RIGHT-CENTER VERTICAL ARROW CONTROLLER (Screenshot 5)
              With Up Arrow, Vertical Line, Slide Number, Down Arrow
             ==================================================== */}
          <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
            {/* Up / Previous Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#8581BD] hover:text-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group/up"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover/up:-translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* Vertical Line Indicator with Number (Screenshot 5 Match) */}
            <div className="flex flex-col items-center gap-2 py-1">
              <div className="w-[2px] h-6 bg-white/25 rounded-full"></div>
              <span className="font-['Space_Grotesk'] text-xs font-bold tracking-widest text-white/90 select-none">
                0{activeIdx + 1}
              </span>
              <div className="w-[2px] h-6 bg-white/25 rounded-full"></div>
            </div>

            {/* Down / Next Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next Project"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#8581BD] hover:text-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group/down"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover/down:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

        </div>

        {/* ====================================================
            BOTTOM TAB NAVIGATION WITH AUTO-FILL PROGRESS LINE
            (Screenshots 2, 3, 4: Progress line fills up then changes)
           ==================================================== */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {caseStudies.map((study, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => handleSelectSlide(idx)}
                className="cursor-pointer group flex flex-col pt-3 text-left transition-all"
              >
                {/* Progress Bar Container on Top of Tab */}
                <div className="w-full h-[3px] sm:h-1 rounded-full bg-white/10 mb-3 overflow-hidden relative">
                  {/* Filling Progress Line on Active Tab */}
                  <div
                    className={`h-full rounded-full transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#8581BD] to-[#b3aee8]"
                        : "w-0 bg-transparent"
                    }`}
                    style={{
                      width: isActive ? `${progress}%` : "0%",
                      transition: isActive ? "width 40ms linear" : "none",
                    }}
                  ></div>
                </div>

                {/* Tab Title Text */}
                <h4
                  className={`font-['Space_Grotesk'] text-xs sm:text-sm font-semibold transition-colors duration-300 line-clamp-2 ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-200"
                  }`}
                >
                  {study.title}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#100d1e] hover:bg-[#8581BD] hover:text-black border border-[#454270]/60 hover:border-[#8581BD] text-white text-sm font-semibold transition-all duration-300 shadow-xl group"
          >
            <span>Discuss Your Custom Solution</span>
            <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
