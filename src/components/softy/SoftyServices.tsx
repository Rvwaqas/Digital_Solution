"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const servicesList = [
  {
    title: "Website Development",
    description: "Stunning, fast & conversion-focused websites built to rank.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <rect x="4" y="8" width="40" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="10" cy="12" r="1.8" fill="currentColor"/>
        <circle cx="16" cy="12" r="1.8" fill="currentColor"/>
        <circle cx="22" cy="12" r="1.8" fill="currentColor"/>
        <rect x="14" y="22" width="20" height="2.5" rx="1.25" fill="currentColor"/>
        <rect x="18" y="27" width="12" height="2.5" rx="1.25" fill="currentColor"/>
        <line x1="20" y1="36" x2="28" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="22" y="36" width="4" height="4" fill="currentColor"/>
        <rect x="16" y="40" width="16" height="2" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Web Applications",
    description: "Scalable SaaS & enterprise apps built for real-world power.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <rect x="6" y="4" width="36" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="6" y1="13" x2="42" y2="13" stroke="currentColor" strokeWidth="2"/>
        <rect x="12" y="18" width="10" height="8" rx="1.5" fill="currentColor" opacity="0.6"/>
        <rect x="26" y="18" width="10" height="3.5" rx="1.5" fill="currentColor"/>
        <rect x="26" y="24" width="7" height="2" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="12" y="30" width="24" height="2.5" rx="1.25" fill="currentColor" opacity="0.5"/>
        <rect x="12" y="35" width="16" height="2.5" rx="1.25" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android apps that users love and keep coming back to.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <rect x="13" y="3" width="22" height="42" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="13" y1="10" x2="35" y2="10" stroke="currentColor" strokeWidth="2"/>
        <line x1="13" y1="38" x2="35" y2="38" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="42.5" r="1.5" fill="currentColor"/>
        <rect x="19" y="5" width="10" height="2" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="18" y="15" width="12" height="12" rx="2" fill="currentColor" opacity="0.5"/>
        <rect x="18" y="30" width="7" height="2" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="18" y="33.5" width="12" height="2" rx="1" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "AI Chatbots & Automation",
    description: "24/7 smart bots across WhatsApp, Facebook & Instagram.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <path
          d="M6 10 C6 6.7 8.7 4 12 4 L36 4 C39.3 4 42 6.7 42 10 L42 26 C42 29.3 39.3 32 36 32 L18 32 L8 40 L8 32 L12 32 C12 32 6 32 6 26 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="19" r="2.5" fill="currentColor"/>
        <circle cx="24" cy="19" r="2.5" fill="currentColor"/>
        <circle cx="32" cy="19" r="2.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    description: "Grow your audience with data-driven content & campaigns.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <circle cx="10" cy="24" r="5" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="38" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="38" cy="38" r="5" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="15" y1="21" x2="33" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="15" y1="27" x2="33" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Graphics Designing",
    description: "Brand-defining visuals, logos, UI assets & marketing creatives.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <path d="M24 6 C18 6 10 14 10 22 C10 30 16 38 24 38 C26 38 26 34 24 34 C20 34 14 28 14 22 C14 16 18 10 24 10 Z" fill="currentColor" opacity="0.5"/>
        <path d="M24 6 C30 6 38 14 38 22 C38 30 32 38 24 38" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="30" cy="16" r="4" fill="currentColor"/>
        <circle cx="34" cy="28" r="3" fill="currentColor" opacity="0.7"/>
        <circle cx="20" cy="30" r="2.5" fill="currentColor" opacity="0.5"/>
        <line x1="22" y1="40" x2="26" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="20" y1="44" x2="28" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Sales & Marketing",
    description: "ROI-driven funnels, ads & strategies that convert leads to sales.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <polyline points="6,36 16,24 24,30 34,14 42,20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="42" cy="20" r="3" fill="currentColor"/>
        <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <line x1="6" y1="36" x2="6" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Financial Management",
    description: "Smart financial planning, risk advisory & capital optimization.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 fill-current text-[#faecc3]">
        <rect x="8" y="8" width="32" height="36" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="15" y1="17" x2="33" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <line x1="15" y1="23" x2="33" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="15" y1="29" x2="26" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <circle cx="33" cy="33" r="7" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2"/>
        <line x1="33" y1="30" x2="33" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30" y1="33" x2="36" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
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

        {/* 4 Columns × 2 Rows with Divider Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {servicesList.map((service, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={1000}
              delay={120 * (idx % 4)}
              className="h-full"
            >
              <div className={`flex flex-col items-start px-6 sm:px-8 py-8 sm:py-10 border-b border-r border-white/10 hover:bg-white/[0.02] group h-full transition-colors duration-300 ${(idx + 1) % 4 === 0 ? 'lg:border-r-0' : ''}`}>
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
