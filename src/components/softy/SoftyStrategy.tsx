"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const workSteps = [
  { step: "01", title: "Differentiate from the competition", description: "Capitalize on high-impact insights to identify unique market positioning, streamline core workflows, and outpace traditional competition.", image: "/images/strategy/strategy-1.jpg", alt: "VR Technology Innovation" },
  { step: "02", title: "Target the right people effectively", description: "Override digital fragmentation with unified software architecture, targeted marketing campaigns, and high-conversion client acquisition pipelines.", image: "/images/strategy/strategy-2.jpg", alt: "Modern Tech Leader" },
  { step: "03", title: "Communicate your story consistently", description: "Full-cycle integration across branding, AI chatbot automation (WhatsApp, Facebook, Instagram), custom applications, and proactive financial advisory that closes the loop.", image: "/images/strategy/strategy-3.jpg", alt: "Collaborative Consulting Strategy" },
];

export default function SoftyStrategy() {
  return (
    <section
      id="strategy"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-t border-[#454270]/20"
    >
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse,rgba(133,129,189,0.14)_0%,rgba(69,66,112,0.08)_50%,transparent_75%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={1100}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] mb-4">
              Steps of Strategic <br className="hidden sm:inline" />
              Work Process
            </h2>
            
            {/* Minimal accent line matching screenshot */}
            <div className="flex items-center justify-center gap-1.5 my-5">
              <div className="w-4 h-1 rounded-full bg-[#8581BD]"></div>
              <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#8581BD] to-[#454270]"></div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A proven, structured methodology designed to transform business operations, automate customer engagement, and drive measurable enterprise growth.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Process Cards with Circular Images & Hover Waves */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
          {workSteps.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={1100}
              delay={idx * 150}
              className="h-full"
            >
              <div className="group flex flex-col items-center text-center h-full p-4 sm:p-6 rounded-3xl transition-all duration-500 hover:bg-[#120f22]/40">
                
                {/* Circular Image Container with Hover Wave & Number */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden mb-8 border-2 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#8581BD]/60 group-hover:shadow-[0_25px_60px_rgba(133,129,189,0.3)] transition-all duration-500 bg-[#0f0c1d] flex-shrink-0">
                  
                  {/* Base Photo with Zoom on Hover */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 224px, 256px"
                    className="object-cover filter contrast-105 brightness-95 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Dark subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Organic Liquid Gradient Wave that rises on hover (Screenshot 2 design) */}
                  <div className="absolute inset-x-0 bottom-0 h-32 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 pointer-events-none">
                    <svg
                      viewBox="0 0 500 220"
                      preserveAspectRatio="none"
                      className="w-full h-full filter drop-shadow-[0_-5px_15px_rgba(133,129,189,0.4)]"
                    >
                      <defs>
                        <linearGradient id={`wave-grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#454270" />
                          <stop offset="50%" stopColor="#6863a8" />
                          <stop offset="100%" stopColor="#8581BD" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,90 C 130,160 330,10 500,100 L 500,220 L 0,220 Z"
                        fill={`url(#wave-grad-${idx})`}
                      />
                    </svg>
                  </div>

                  {/* Big Number at the bottom of the circle */}
                  <div className="absolute bottom-3 inset-x-0 flex justify-center z-20 pointer-events-none transition-all duration-500 group-hover:-translate-y-1">
                    <span
                      className="font-['Space_Grotesk'] text-5xl sm:text-6xl font-black tracking-tight select-none transition-all duration-500 group-hover:text-white"
                      style={{
                        WebkitTextStroke: "2.5px rgba(255, 255, 255, 0.95)",
                        color: "transparent",
                      }}
                    >
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-[#8581BD] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                  {item.description}
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
