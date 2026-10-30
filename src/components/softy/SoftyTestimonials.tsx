"use client";

import { useState } from "react";
import Image from "next/image";

const mainTestimonial = {
  quote:
    "JAWA completely reshaped our business operations. Their integrated expertise in custom web applications and marketing strategy doubled our conversion rates while streamlining our entire back-office workflow. What stood out was their commitment — they are a true strategic partner.",
  author: "David MacLeod",
  role: "VP Operations, Apex Realty Group (Toronto)",
  videoImage: "/images/softy/testimonial-thumb.jpg",
};

const secondaryTestimonials = [
  {
    quote:
      "JAWA took our vision for an international tourism portal and delivered a blazing-fast booking platform ahead of schedule. Their tech team was responsive, strategic, and remarkably skilled.",
    author: "Sophie Laurent",
    role: "Director of Digital, Horizon Travel Inc. (Montreal)",
    rating: 5,
  },
  {
    quote:
      "JAWA's AI chatbot and automated messaging across WhatsApp, Facebook, and Instagram transformed our business. We capture 4x more qualified leads 24/7 with zero response delay. Highly recommended!",
    author: "Robert Vance",
    role: "Head of Digital Operations, OmniRetail Group (Vancouver)",
    rating: 5,
  },
];

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SoftyTestimonials() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(69,66,112,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8581BD]/15 border border-[#8581BD]/30 text-[#8581BD] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              Client Success
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white">
              Trusted by Leaders Across North America & Beyond
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Video Card with Circular Play Button */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" duration={1100} distance={60}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#090810] border border-[#454270]/40 shadow-2xl group">
                {!isPlaying ? (
                  <>
                    <Image
                      src={mainTestimonial.videoImage}
                      alt={mainTestimonial.author}
                      fill
                      sizes="(max-width: 1024px) 100vw, 41vw"
                      className="object-cover filter brightness-85 group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1a]/90 via-transparent to-transparent"></div>

                    {/* Play Button matching brand purple */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#8581BD] hover:bg-[#9d99d1] text-black flex items-center justify-center shadow-2xl shadow-[#8581BD]/50 hover:scale-110 transition-all group/btn"
                      aria-label="Play testimonial video"
                    >
                      <svg
                        className="w-8 h-8 fill-black translate-x-0.5 group-hover/btn:scale-110 transition-transform"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>

                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                      <div className="font-['Space_Grotesk'] text-white font-bold text-base">
                        {mainTestimonial.author}
                      </div>
                      <div className="text-xs text-[#8581BD] font-medium">
                        {mainTestimonial.role}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#090810]">
                    <p className="text-white text-sm mb-4">Playing client story...</p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="px-5 py-2 rounded-full bg-[#8581BD] text-black text-xs font-bold"
                    >
                      Close Video
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Featured Quote & Review Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Featured Quote Box */}
            <ScrollReveal direction="left" duration={1000} delay={100}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#090810] border border-[#454270]/40 relative overflow-hidden shadow-2xl">
                <div className="text-[#8581BD] text-5xl font-serif leading-none mb-4 opacity-70">
                  “
                </div>
                <p className="font-['Space_Grotesk'] text-lg sm:text-2xl font-medium text-white leading-relaxed mb-6">
                  {mainTestimonial.quote}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <h4 className="font-['Space_Grotesk'] font-bold text-white text-base">
                      {mainTestimonial.author}
                    </h4>
                    <p className="text-xs text-[#8581BD]">{mainTestimonial.role}</p>
                  </div>
                  <div className="flex text-[#8581BD] text-sm">
                    {"★★★★★".split("").map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Secondary Testimonial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryTestimonials.map((t, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  duration={900}
                  delay={200 + idx * 120}
                  className="h-full"
                >
                  <div className="p-6 rounded-2xl bg-[#090810] border border-[#454270]/30 hover:border-[#8581BD]/50 transition-colors h-full flex flex-col justify-between">
                    <div>
                      <div className="flex text-[#8581BD] text-xs mb-3">
                        {"★★★★★".split("").map((s, i) => (
                          <span key={i}>{s}</span>
                        ))}
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                        “{t.quote}”
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-xs">{t.author}</h5>
                      <p className="text-[11px] text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
