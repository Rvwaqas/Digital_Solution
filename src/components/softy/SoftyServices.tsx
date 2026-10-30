"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const servicesList = [
  {
    title: "Brand Strategy & Identity",
    description: "Crafting strong, memorable brands that resonate.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]" fill="none">
        {/* 4-pointed curved sparkle star */}
        <path d="M24 2 C24 14.15 33.85 24 46 24 C33.85 24 24 33.85 24 46 C24 33.85 14.15 24 2 24 C14.15 24 24 14.15 24 2 Z" />
      </svg>
    ),
  },
  {
    title: "Web & Mobile Development",
    description: "High-performing, scalable digital products.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        {/* 8-block square matrix with center cutout */}
        <rect x="4" y="4" width="10" height="10" rx="1.5" />
        <rect x="19" y="4" width="10" height="10" rx="1.5" />
        <rect x="34" y="4" width="10" height="10" rx="1.5" />
        <rect x="4" y="19" width="10" height="10" rx="1.5" />
        <rect x="34" y="19" width="10" height="10" rx="1.5" />
        <rect x="4" y="34" width="10" height="10" rx="1.5" />
        <rect x="19" y="34" width="10" height="10" rx="1.5" />
        <rect x="34" y="34" width="10" height="10" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "AI Chatbots & Automation",
    description: "24/7 smart bots across WhatsApp, FB & Instagram.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <path
          d="M6 10 C6 6.7 8.7 4 12 4 L36 4 C39.3 4 42 6.7 42 10 L42 26 C42 29.3 39.3 32 36 32 L18 32 L8 40 L8 32 L12 32 C12 32 6 32 6 26 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="18" r="2.5" fill="currentColor" />
        <circle cx="24" cy="18" r="2.5" fill="currentColor" />
        <circle cx="32" cy="18" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Creative Media Content",
    description: "Visuals, motion, and storytelling that engage.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        {/* Dynamic geometric starburst */}
        <path d="M24 20 L24 4 L28 4 L25 18 L39 12 L41 16 L27 22 L39 32 L36 36 L25 25 L21 39 L17 38 L22 24 L8 25 L8 21 L22 20 Z" />
      </svg>
    ),
  },
];



export default function SoftyServices() {
  return (
    <section
      id="services"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(69,66,112,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Pill Badge matching Screenshot 1 */}
        <ScrollReveal direction="up" duration={1000}>
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-white mb-6 backdrop-blur-md">
              What We Do
            </div>

            {/* Heading matching Screenshot 1 */}
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[64px] font-normal text-[#fffdfa] tracking-tight mb-4">
              Here’s What We Do Best
            </h2>

            {/* Subtitle matching Screenshot 1 */}
            <p className="text-gray-400 text-sm sm:text-base font-normal tracking-wide">
              Code, strategy, and AI in perfect sync.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Columns with Vertical Divider Lines matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t lg:border-t-0 border-white/10">
          {servicesList.map((service, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={1000}
              delay={120 * idx}
              className="h-full"
            >
              <div className="flex flex-col items-start px-6 sm:px-8 py-8 sm:py-10 border-b lg:border-b-0 lg:border-r border-white/10 last:border-r-0 hover:bg-white/[0.02] group h-full transition-colors duration-300">
                {/* Icon */}
                <div className="mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-[26px] font-bold text-white mb-4 leading-snug tracking-tight group-hover:text-[#faecc3] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
