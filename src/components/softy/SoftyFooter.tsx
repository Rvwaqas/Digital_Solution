"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SoftyFooter() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-transparent via-[#110d24]/90 to-[#191330] text-white relative overflow-hidden border-t border-[#454270]/30">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse,rgba(133,129,189,0.18)_0%,rgba(69,66,112,0.12)_40%,transparent_70%)] blur-3xl pointer-events-none"></div>

      {/* Top CTA Glowing Card */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <ScrollReveal direction="zoom-in" duration={1100}>
          <div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 lg:p-20 border border-[#454270]/50 bg-[#090810] text-center shadow-2xl shadow-black">
            {/* Glowing brand purple & violet radial background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(133,129,189,0.25)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(69,66,112,0.3)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8581BD]/15 text-[#8581BD] text-xs font-bold uppercase tracking-wider mb-6 border border-[#8581BD]/30 backdrop-blur-sm">
                Get in Touch
              </div>

              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                Ready to Transform Your Business?
              </h2>

              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto font-medium leading-relaxed font-serif-accent italic">
                “We believe this offers a clear overview of who we are and how we work, laying the foundation for a successful partnership with you.”
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:rvwaqas602@gmail.com"
                  className="px-9 py-4 rounded-full bg-gradient-to-r from-[#8581BD] to-[#454270] hover:from-[#9d99d1] hover:to-[#555285] text-white text-base font-semibold shadow-xl shadow-[#8581BD]/30 hover:scale-105 transition-all"
                >
                  Email Us: rvwaqas602@gmail.com
                </a>

                <a
                  href="tel:+9203480227414"
                  className="px-9 py-4 rounded-full bg-white/[0.08] hover:bg-white/15 text-white text-base font-semibold border border-white/20 backdrop-blur-sm hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>📞</span>
                  <span>+92 348 0227414</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Multi-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-white/[0.08]">
        <ScrollReveal direction="up" duration={1000} delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3.5 mb-6 group">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border border-white/20 shadow-xl bg-white flex-shrink-0 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/jawa.jpeg"
                  alt="JAWA - IT Agency Services"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#8581BD] transition-colors leading-tight">
                  JAWA
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8581BD] leading-tight">
                  IT Agency Services
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              JAWA is a premier IT agency delivering cutting-edge digital solutions, custom software engineering, and strategic tech innovations.
            </p>

            <div className="space-y-2.5 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <span className="text-[#8581BD]">📞</span>
                <a href="tel:+9203480227414" className="hover:text-[#8581BD] transition-colors font-medium">
                  +92 348 0227414
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#8581BD]">✉️</span>
                <a href="mailto:rvwaqas602@gmail.com" className="hover:text-[#8581BD] transition-colors font-medium">
                  rvwaqas602@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#8581BD]">🌐</span>
                <span className="text-gray-400">jawatech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#8581BD]">📍</span>
                <span className="text-gray-400">Global IT Services</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services (8 Verticals from PDF) */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-base font-bold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="#services" className="hover:text-[#8581BD] transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#8581BD] transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#8581BD] transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#8581BD] transition-colors">
                  AI Chatbots & Automation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#8581BD] transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#8581BD] transition-colors">
                  Graphics Designing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#8581BD] transition-colors">
                  Sales & Marketing
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#8581BD] transition-colors">
                  Financial Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-base font-bold text-white uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#about" className="hover:text-[#8581BD] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#strategy" className="hover:text-[#8581BD] transition-colors">
                  Our Strategy
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#8581BD] transition-colors">
                  Client Work
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-[#8581BD] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#8581BD] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#8581BD] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Strategic Mission */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-base font-bold text-white uppercase tracking-wider mb-5">
              Our Vision
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              To establish JAWA as a trusted global IT agency by encouraging innovation, building lasting client relationships, and delivering consistent measurable results.
            </p>
            <div className="p-4 rounded-xl bg-[#090810] border border-[#454270]/30 text-xs text-gray-300">
              <span className="font-semibold text-white block mb-1">Direct Consultation:</span>
              <a href="tel:+9203480227414" className="text-[#8581BD] hover:underline font-bold">
                +92 348 0227414
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

        {/* Bottom Bar: Copyright */}
        <div className="pt-12 mt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} JAWA IT Agency Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#about" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#about" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
