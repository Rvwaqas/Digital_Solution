"use client";

import { useEffect, useState } from "react";

export default function SoftyScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(Math.max(Math.round((scrollTop / totalHeight) * 100), 0), 100);
        setScrollProgress(progress);
        setVisible(scrollTop > 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  // Circular SVG progress math
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top with progress"
      className="fixed bottom-6 right-6 z-50 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#090810]/95 hover:bg-[#8581BD] text-white hover:text-black shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-[#454270]/60 cursor-pointer"
    >
      {/* Background SVG Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1" viewBox="0 0 48 48">
        {/* Track circle */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-white/10 fill-none"
          strokeWidth="3"
        />
        {/* Animated Progress Circle */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          className="stroke-[#8581BD] group-hover:stroke-black fill-none transition-all duration-150"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Percentage Text or Top Arrow on Hover */}
      <div className="relative z-10 flex items-center justify-center">
        <span className="font-['Space_Grotesk'] text-[11px] sm:text-xs font-black tracking-tight group-hover:hidden">
          {scrollProgress}%
        </span>
        <svg
          className="w-4 h-4 hidden group-hover:block transition-transform transform group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>
    </button>
  );
}
