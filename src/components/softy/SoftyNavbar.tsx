"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SoftyNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-4 sm:top-6 left-0 right-0 z-40 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md px-5 sm:px-7 py-3 shadow-xl shadow-black/40 flex items-center justify-between">
        {/* Brand Logo: JAWA - IT Agency Services */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 rounded-xl overflow-hidden border border-white/20 shadow-lg shadow-black/40 bg-white flex-shrink-0 group-hover:scale-105 transition-all duration-300">
            <Image
              src="/images/jawa.jpeg"
              alt="JAWA - IT Agency Services"
              fill
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#8581BD] transition-colors leading-tight">
              JAWA
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8581BD] leading-tight">
              IT Agency Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-gray-200">
          <Link href="/" className="hover:text-[#8581BD] transition-colors">
            Home
          </Link>

          <Link href="#services" className="hover:text-[#8581BD] transition-colors">
            Services
          </Link>

          <Link href="#about" className="hover:text-[#8581BD] transition-colors">
            About
          </Link>



          <Link href="#contact" className="hover:text-[#8581BD] transition-colors">
            Contacts
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#8581BD] to-[#454270] hover:from-[#9d99d1] hover:to-[#555285] text-white text-sm font-semibold shadow-lg shadow-[#8581BD]/25 hover:scale-105 transition-all duration-300"
          >
            <span>→</span>
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-gray-300 hover:bg-white/5"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-[#090810] border border-[#454270]/40 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 backdrop-blur-xl">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-white hover:text-[#8581BD]">
            Home
          </Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#8581BD]">
            Services
          </Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#8581BD]">
            About
          </Link>

          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-300 hover:text-[#8581BD]">
            Contacts
          </Link>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-[#8581BD] to-[#454270] text-white text-sm font-semibold shadow-lg shadow-[#8581BD]/30"
            >
              → Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
