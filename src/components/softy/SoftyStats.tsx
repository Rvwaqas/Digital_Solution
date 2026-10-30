"use client";

import { useEffect, useRef, useState } from "react";

interface CounterItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: CounterItem[] = [
  {
    value: 8,
    suffix: "+",
    label: "Integrated Business & Digital Verticals",
  },
  {
    value: 100,
    suffix: "%",
    label: "Tailored Client-Centric Solution Architecture",
  },
  {
    value: 24,
    suffix: "/7",
    label: "AI Chatbots & Social Automation (WhatsApp, FB, IG)",
  },
  {
    value: 4,
    suffix: "-Step",
    label: "Proven Strategic Results Framework",
  },
];

export default function SoftyStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1600;
    const startTime = performance.now();

    const updateCounts = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) => Math.floor(easeProgress * stat.value))
      );

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        setCounts(stats.map((s) => s.value));
      }
    };

    requestAnimationFrame(updateCounts);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 relative overflow-hidden bg-gradient-to-r from-[#454270] via-[#5c5894] to-[#8581BD] text-white shadow-[0_0_50px_rgba(133,129,189,0.3)]"
    >
      {/* Background radiant texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="font-['Space_Grotesk'] text-5xl sm:text-7xl font-extrabold tracking-tight mb-3 text-white drop-shadow-md">
                {stat.prefix}
                {counts[idx]}
                {stat.suffix}
              </div>
              <p className="text-white/90 text-sm sm:text-base font-medium max-w-[220px] leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
