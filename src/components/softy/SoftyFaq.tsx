"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes JAWA unique as an IT agency?",
    answer:
      "JAWA combines end-to-end expertise across modern software engineering, web & mobile applications, AI chatbots, social media automation (WhatsApp, Facebook, Instagram), and digital marketing strategies under one roof. We do not offer disconnected services; every solution is strategically integrated to drive sustainable business growth.",
  },
  {
    question: "What are JAWA's core service verticals?",
    answer:
      "Our core services include:\n• Website Development\n• Web Application Development\n• Mobile App Development\n• AI Chatbots & Omni-Channel Automation (WhatsApp, FB, IG)\n• Social Media Management\n• Graphics Designing\n• Sales & Marketing Strategies\n• Financial Management & Advisory",
  },
  {
    question: "How does your 4-step strategic process work?",
    answer:
      "We follow a rigorous, proven methodology: \n1. Step 01: Discover & Understand your core challenges\n2. Step 02: Develop a custom tailored strategy\n3. Step 03: Implement the strategy with precision\n4. Step 04: Monitor performance and continuously optimize for results.",
  },
  {
    question: "Where is JAWA headquartered?",
    answer:
      "JAWA IT Agency Services delivers cutting-edge software development, AI solutions, online chatbots & social messaging automation (WhatsApp, Facebook, Instagram), and digital growth services for clients worldwide.",
  },
  {
    question: "How do we get in touch and start a project?",
    answer:
      "You can contact us immediately by calling +92 348 0227414, emailing rvwaqas602@gmail.com, or submitting the contact form below. Our leadership team will schedule an initial discovery consultation within 24 hours.",
  },
];

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SoftyFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-t border-[#454270]/20"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,rgba(69,66,112,0.22)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" duration={1100} distance={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8581BD]/15 border border-[#8581BD]/30 text-[#8581BD] text-xs font-bold uppercase tracking-wider mb-6">
                Got Questions?
              </div>

              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Frequently Asked Questions
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                Everything you need to know about our integrated consultancy, custom software solutions, and strategic partnership approach.
              </p>

              <div className="p-6 rounded-2xl bg-[#090810] border border-[#454270]/40">
                <h4 className="text-white font-bold text-base mb-2">Have a specific challenge?</h4>
                <p className="text-xs text-gray-400 mb-4">
                  Our consultants are ready to discuss your custom project requirements.
                </p>
                <a
                  href="tel:+9203480227414"
                  className="text-xs font-semibold text-[#8581BD] hover:underline flex items-center gap-1.5"
                >
                  <span>📞 Call Us: +92 348 0227414</span>
                  <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <ScrollReveal
                  key={idx}
                  direction="left"
                  duration={1000}
                  delay={idx * 100}
                >
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#090810] border-[#8581BD]/60 shadow-xl shadow-[#8581BD]/10"
                        : "bg-[#090810]/60 border-[#454270]/30 hover:border-white/20"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-white">
                        {faq.question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-300 flex-shrink-0 ${
                          isOpen
                            ? "bg-[#8581BD] text-black rotate-45"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 sm:px-7 pb-7 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
