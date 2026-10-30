"use client";

const partners = [
  { id: 1, name: "Partner 1", src: "/images/partners/partner-1.svg" },
  { id: 2, name: "Partner 2", src: "/images/partners/partner-2.svg" },
  { id: 3, name: "Partner 3", src: "/images/partners/partner-3.svg" },
  { id: 4, name: "Partner 4", src: "/images/partners/partner-4.svg" },
  { id: 5, name: "Partner 5", src: "/images/partners/partner-5.svg" },
  { id: 6, name: "Partner 6", src: "/images/partners/partner-6.svg" },
  { id: 7, name: "Partner 7", src: "/images/partners/partner-7.svg" },
  { id: 8, name: "Partner 8", src: "/images/partners/partner-8.svg" },
];

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SoftyPartners() {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-[#0c0a18]/60 to-transparent border-y border-[#454270]/25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <ScrollReveal direction="up" duration={900}>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#8581BD]/80">
            Trusted by Industry Leaders & Growing Businesses Worldwide
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite Marquee Ticker with Dark Gradient Masks */}
      <ScrollReveal direction="fade" duration={1100} delay={150}>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-softy-marquee flex items-center gap-14 sm:gap-20">
          {/* First set */}
          {partners.map((partner) => (
            <div
              key={`p1-${partner.id}`}
              className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={140}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain max-w-[140px]"
              />
            </div>
          ))}

          {/* Duplicate set for infinite loop */}
          {partners.map((partner) => (
            <div
              key={`p2-${partner.id}`}
              className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={140}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain max-w-[140px]"
              />
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
