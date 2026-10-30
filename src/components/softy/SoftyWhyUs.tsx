"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProcessStep {
  stepNumber: string;
  stepLabel: string;
  title: string;
  description: string;
  badgeGradient: string;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    stepNumber: "01",
    stepLabel: "Step 1",
    title: "Requirement Analysis",
    description:
      "We gather detailed business requirements and offer expert software consulting services to define the project scope, user personas, and tech strategy.",
    badgeGradient: "from-[#8581BD] to-[#5a559e]",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    stepNumber: "02",
    stepLabel: "Step 2",
    title: "UI/UX Design",
    description:
      "Our designers craft user-friendly and visually compelling interfaces that align with client goals, high conversion benchmarks, and end-user expectations.",
    badgeGradient: "from-[#ec4899] to-[#8b5cf6]",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    stepNumber: "03",
    stepLabel: "Step 3",
    title: "Architecture & Prototyping",
    description:
      "We design resilient microservices, cloud data schemas, and interactive wireframe prototypes to validate workflows before writing code.",
    badgeGradient: "from-[#3b82f6] to-[#8581BD]",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    stepNumber: "04",
    stepLabel: "Step 4",
    title: "Agile Development & Coding",
    description:
      "Full-stack development using modern frameworks, clean modular code, CI/CD automated pipelines, and sprint-based deliverable milestones.",
    badgeGradient: "from-[#10b981] to-[#3b82f6]",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    stepNumber: "05",
    stepLabel: "Step 5",
    title: "Quality Assurance & Deployment",
    description:
      "We launch your application with rigorous automated security audits, load testing, containerized cloud setup, and zero-downtime deployment.",
    badgeGradient: "from-[#f59e0b] to-[#ec4899]",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
  },
  {
    stepNumber: "06",
    stepLabel: "Step 6",
    title: "Maintenance & Continuous Support",
    description:
      "Our post-launch software maintenance and 24/7 support ensure continuous improvement, security updates, feature expansions, and technical assistance.",
    badgeGradient: "from-[#8581BD] to-[#ec4899]",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function SoftyWhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fillHeight, setFillHeight] = useState<number>(0);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(steps.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start filling as top approaches 70% of viewport
      const triggerPoint = windowHeight * 0.7;
      const totalHeight = rect.height;
      const currentScroll = triggerPoint - rect.top;

      let progress = currentScroll / totalHeight;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      setFillHeight(progress * 100);

      // Check visibility for each step independently based on its viewport position
      const newVisible = steps.map((_, idx) => {
        const el = stepRefs.current[idx];
        if (!el) return false;
        const stepRect = el.getBoundingClientRect();
        // Activate when the step is within 75% of viewport from top
        return stepRect.top <= windowHeight * 0.78;
      });

      setVisibleSteps(newVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="process"
      className="py-16 sm:py-24 bg-transparent relative border-t border-[#454270]/20 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse,rgba(133,129,189,0.12)_0%,rgba(69,66,112,0.06)_50%,transparent_70%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#8581BD]/15 border border-[#8581BD]/30 text-xs font-bold text-[#8581BD] uppercase tracking-wider mb-5 backdrop-blur-md">
              Agile & Proven Delivery
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] mb-5">
              Our Proven Software <br className="hidden sm:inline" />
              Development Process
            </h2>

            {/* Red/Purple accent line */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-4 h-1 rounded-full bg-[#8581BD]"></div>
              <div className="w-14 h-1 rounded-full bg-gradient-to-r from-[#8581BD] to-[#454270]"></div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              At JAWA, we follow a structured and agile software development process to ensure transparency, speed, and quality. Each stage is crafted to reduce risks and maximize results for every custom software development project.
            </p>
          </div>
        </ScrollReveal>

        {/* Scroll-Filling Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto pb-12">
          
          {/* Vertical Center Track Line */}
          <div className="absolute left-6 md:left-1/2 top-6 bottom-12 -translate-x-1/2 w-[3px] bg-white/10 rounded-full z-0 pointer-events-none">
            {/* Animated Active Fill Line */}
            <div
              className="w-full bg-gradient-to-b from-[#8581BD] via-[#a29ee6] to-[#ec4899] rounded-full transition-all duration-150 ease-out shadow-[0_0_18px_rgba(133,129,189,0.9)]"
              style={{ height: `${fillHeight}%` }}
            ></div>
          </div>

          {/* Steps List */}
          <div className="space-y-14 sm:space-y-20 lg:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1; // Step 2, 4, 6 (Card on Right)
              const isPassed = fillHeight >= (idx / (steps.length - 1)) * 90;
              const isStepActive = visibleSteps[idx] || isPassed;

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    stepRefs.current[idx] = el;
                  }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Card Container: Slides in from LEFT if odd (or RIGHT if even) */}
                  <div className="w-full md:w-[calc(50%-44px)] pl-16 md:pl-0">
                    <div
                      className={`relative group p-6 sm:p-8 rounded-[24px] bg-gradient-to-b from-[#141026]/95 via-[#0f0c1e]/95 to-[#090714]/95 border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl backdrop-blur-xl ${
                        isStepActive
                          ? "opacity-100 translate-x-0 scale-100 border-[#8581BD]/60 shadow-[0_20px_50px_rgba(133,129,189,0.25)]"
                          : isEven
                          ? "opacity-0 translate-x-16 sm:translate-x-24 scale-95 pointer-events-none border-white/10"
                          : "opacity-0 -translate-x-16 sm:-translate-x-24 scale-95 pointer-events-none border-white/10"
                      }`}
                    >
                      {/* Speech Bubble Arrow for Desktop */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 bg-[#141026] border-t border-r transition-colors duration-500 ${
                          isEven
                            ? "-left-2 border-[#8581BD]/50 -rotate-135"
                            : "-right-2 border-[#8581BD]/50 rotate-45"
                        } ${isStepActive ? "border-[#8581BD]/60" : "border-white/10"}`}
                      ></div>

                      {/* Header with Icon + Title */}
                      <div className="flex items-start sm:items-center gap-4 mb-4">
                        {/* Glowing Circular Icon Badge */}
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.badgeGradient} flex items-center justify-center flex-shrink-0 shadow-lg ${
                            isStepActive
                              ? "shadow-[0_0_22px_rgba(133,129,189,0.6)] scale-105 rotate-0"
                              : "opacity-80 scale-90 -rotate-6"
                          } transition-all duration-700 ease-out`}
                        >
                          {step.icon}
                        </div>

                        <div>
                          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#8581BD] mb-0.5">
                            Phase {step.stepNumber}
                          </div>
                          <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#8581BD] transition-colors">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>

                      {/* Active Indicator Bar on Card Bottom */}
                      <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${
                              isStepActive
                                ? "bg-[#8581BD] shadow-[0_0_8px_#8581BD] animate-pulse"
                                : "bg-white/20"
                            }`}
                          ></span>
                          <span className={isStepActive ? "text-[#8581BD] font-semibold" : "text-gray-400"}>
                            {isStepActive ? "In Progress / Active" : "Upcoming Phase"}
                          </span>
                        </span>
                        <span className="font-mono text-gray-500 font-bold">
                          {step.stepNumber} / 06
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Center Node on Vertical Line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 pointer-events-none">
                    {/* Pulsing Node Circle */}
                    <div
                      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isStepActive
                          ? "bg-[#0c0a1a] border-[3px] border-[#8581BD] shadow-[0_0_28px_rgba(133,129,189,0.95)] scale-110"
                          : "bg-[#090714] border-2 border-white/20 text-gray-500 scale-90 opacity-60"
                      }`}
                    >
                      {/* Inner Ring Glow */}
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-700 ${
                          isStepActive
                            ? "bg-gradient-to-br from-[#8581BD] to-[#ec4899] shadow-[0_0_14px_#8581BD] scale-100"
                            : "bg-white/15 scale-75"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Step Label (e.g. "Step 1", "Step 2") on Opposite Side for Desktop */}
                  <div
                    className={`hidden md:flex w-[calc(50%-44px)] items-center ${
                      isEven ? "justify-end pr-8" : "justify-start pl-8"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isStepActive
                          ? isEven
                            ? "opacity-100 translate-x-0 bg-[#8581BD]/15 border-[#8581BD]/40 text-white shadow-[0_0_25px_rgba(133,129,189,0.3)] font-bold scale-100"
                            : "opacity-100 translate-x-0 bg-[#8581BD]/15 border-[#8581BD]/40 text-white shadow-[0_0_25px_rgba(133,129,189,0.3)] font-bold scale-100"
                          : isEven
                          ? "opacity-0 -translate-x-12 bg-white/5 border-white/10 text-gray-500 scale-90"
                          : "opacity-0 translate-x-12 bg-white/5 border-white/10 text-gray-500 scale-90"
                      }`}
                    >
                      <span className="font-['Space_Grotesk'] text-lg font-black tracking-tight">
                        {step.stepLabel}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Button */}
        <ScrollReveal direction="up" duration={900} delay={200}>
          <div className="mt-12 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#8581BD] to-[#454270] hover:from-[#9d99d1] hover:to-[#555285] text-white text-sm font-semibold shadow-xl shadow-[#8581BD]/30 hover:scale-105 transition-all duration-300 group"
            >
              <span>Start Your Project With JAWA</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
