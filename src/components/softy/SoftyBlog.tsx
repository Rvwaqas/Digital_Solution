"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const posts = [
  {
    image: "/images/blog-financial.jpg",
    tag: "FINANCIAL STRATEGY",
    date: "Sep 2026",
    title: "Integrating Modern Technology With Strategic Financial Management",
    readTime: "5 min read",
  },
  {
    image: "/images/blog-automation.jpg",
    tag: "AI & CHATBOT AUTOMATION",
    date: "Sep 2026",
    title: "Scaling Conversions & 24/7 Support: AI Chatbots for WhatsApp, Facebook & Instagram",
    readTime: "6 min read",
  },
  {
    image: "/images/blog-tech.jpg",
    tag: "WEB & MOBILE TECH",
    date: "Sep 2026",
    title: "Tailored Architecture: Why Bespoke Web Applications Outperform Standard SaaS",
    readTime: "4 min read",
  },
];

export default function SoftyBlog() {
  return (
    <section
      id="blog"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-t border-[#454270]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={1000}>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8581BD]/15 border border-[#8581BD]/30 text-[#8581BD] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              Insights &amp; Strategy
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-white">
              Perspectives on Modern Business Growth
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {posts.map((post, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={1000}
              delay={idx * 150}
              className="h-full"
            >
              <article className="softy-card rounded-2xl overflow-hidden group bg-[#090810] border border-[#454270]/30 hover:border-[#8581BD]/60 transition-all duration-500 shadow-xl flex flex-col justify-between h-full">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-[#8581BD] uppercase tracking-wider border border-[#8581BD]/30">
                        {post.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white group-hover:text-[#8581BD] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-gray-300 group-hover:text-[#8581BD] transition-colors">
                  <span>Read Full Article</span>
                  <span className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#8581BD] group-hover:text-black flex items-center justify-center transition-colors">
                    →
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" duration={900} delay={200}>
          <div className="text-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8581BD] to-[#454270] hover:from-[#9d99d1] hover:to-[#555285] text-white text-sm font-semibold shadow-lg shadow-[#8581BD]/25 hover:scale-105 transition-all"
            >
              <span>Subscribe for Strategic Updates</span>
              <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
