"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const globalLocations = [
  { city: "TORONTO (HQ)", x: 29, y: 30, continent: "North America", isHq: true },
  { city: "MONTREAL", x: 31, y: 28, continent: "North America" },
  { city: "NEW YORK", x: 28, y: 35, continent: "North America" },
  { city: "CHICAGO", x: 24, y: 33, continent: "North America" },
  { city: "LONDON", x: 52, y: 27, continent: "Europe" },
  { city: "DUBAI", x: 65, y: 42, continent: "Middle East" },
  { city: "KARACHI", x: 69, y: 43, continent: "Asia" },
  { city: "LAHORE", x: 71, y: 39, continent: "Asia" },
  { city: "SINGAPORE", x: 78, y: 57, continent: "Asia" },
  { city: "SAN JOSÉ", x: 27, y: 51, continent: "Central America" },
  { city: "MEDELLÍN", x: 32, y: 55, continent: "South America" },
];

const teamPhotos = [
  { image: "/images/team/team-1.jpg", caption: "Strategic Team Collaboration" },
  { image: "/images/team/team-2.jpg", caption: "Annual Gala & Excellence Awards" },
  { image: "/images/team/team-3.jpg", caption: "Global Innovation Retreat" },
  { image: "/images/team/team-4.jpg", caption: "Engineering & Architecture Team" },
  { image: "/images/team/team-5.jpg", caption: "Client Strategic Review" },
];

export default function SoftyGlobalPresence() {
  const [activeCity, setActiveCity] = useState<string>("TORONTO (HQ)");
  const [continentsCount, setContinentsCount] = useState<number>(0);
  const [teamCount, setTeamCount] = useState<number>(0);
  const [retentionCount, setRetentionCount] = useState<number>(0);
  const [hasCounted, setHasCounted] = useState<boolean>(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);

          // Animate Continents (4)
          const cStart = performance.now();
          const animateContinents = (time: number) => {
            const p = Math.min((time - cStart) / 1200, 1);
            setContinentsCount(Math.floor(p * 4));
            if (p < 1) requestAnimationFrame(animateContinents);
            else setContinentsCount(4);
          };
          requestAnimationFrame(animateContinents);

          // Animate Team (1400)
          const tStart = performance.now();
          const animateTeam = (time: number) => {
            const p = Math.min((time - tStart) / 2000, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setTeamCount(Math.floor(ease * 1400));
            if (p < 1) requestAnimationFrame(animateTeam);
            else setTeamCount(1400);
          };
          requestAnimationFrame(animateTeam);

          // Animate Retention (98%)
          const rStart = performance.now();
          const animateRetention = (time: number) => {
            const p = Math.min((time - rStart) / 1800, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setRetentionCount(Math.floor(ease * 98));
            if (p < 1) requestAnimationFrame(animateRetention);
            else setRetentionCount(98);
          };
          requestAnimationFrame(animateRetention);
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section
      id="global-presence"
      className="py-12 sm:py-16 bg-transparent relative overflow-hidden border-t border-[#454270]/20"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(133,129,189,0.15)_0%,rgba(69,66,112,0.08)_50%,transparent_70%)] blur-3xl pointer-events-none"></div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <ScrollReveal direction="up" duration={1000}>
          <div className="max-w-3xl">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] mb-4">
              We&apos;re a global team of innovators
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Navigate complex digital initiatives with confidence, propelling your journey towards innovation and growth.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ====================================================
          TOP: Infinite Team/Culture Image Marquee Slider
         ==================================================== */}
      <div className="w-full mb-8 sm:mb-12 overflow-hidden relative">
        {/* Edge Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d0a1a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d0a1a] to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-softy-marquee whitespace-nowrap">
          {[...teamPhotos, ...teamPhotos, ...teamPhotos].map((item, idx) => (
            <div key={idx} className="inline-block px-2 sm:px-3">
              <div className="w-[280px] h-[180px] sm:w-[380px] sm:h-[240px] lg:w-[450px] lg:h-[280px] rounded-2xl overflow-hidden relative group border border-white/10 shadow-lg cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="450px"
                  className="object-cover filter contrast-105 brightness-95 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====================================================
          MIDDLE: World Map with Locations & Key Global Stats
         ==================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive 3D World Map (map.jpg) */}
          <div className="lg:col-span-7 relative">
            <ScrollReveal direction="right" duration={1200}>
              <div className="relative w-full rounded-3xl p-3 sm:p-5 bg-[#0e0b1c]/80 border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden aspect-[16/10] flex items-center justify-center">
                
                {/* 3D Realistic Dark Metallic World Map Background */}
                <Image
                  src="/images/map.jpg"
                  alt="JAWA Global Presence Map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover filter brightness-90 contrast-110 rounded-2xl"
                  priority
                />

                {/* Subtle brand ambient glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b1c]/70 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(133,129,189,0.18)_0%,transparent_60%)] pointer-events-none"></div>

                {/* Location Pins with Glowing Pulse Animation */}
                {globalLocations.map((loc, idx) => {
                  const isSelected = activeCity === loc.city;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveCity(loc.city)}
                      style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin z-20"
                    >
                      {/* Pulse Ring */}
                      <span
                        className={`absolute -inset-2 rounded-full animate-ping opacity-60 ${
                          loc.isHq
                            ? "bg-[#8581BD]"
                            : isSelected
                            ? "bg-fuchsia-400"
                            : "bg-white/40"
                        }`}
                      ></span>

                      {/* Pin Icon / Flag */}
                      <div
                        className={`relative flex items-center justify-center rounded-full transition-all duration-300 shadow-lg ${
                          loc.isHq
                            ? "w-8 h-8 bg-gradient-to-r from-[#8581BD] to-[#454270] text-white scale-110 border-2 border-white"
                            : isSelected
                            ? "w-6 h-6 bg-[#8581BD] text-black scale-125 border border-white"
                            : "w-4 h-4 bg-white/80 hover:bg-[#8581BD] border border-black/40"
                        }`}
                      >
                        {loc.isHq ? (
                          <span className="text-[10px] font-black">HQ</span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-black/60"></span>
                        )}
                      </div>

                      {/* Tooltip on Hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg bg-black/90 border border-white/20 text-[10px] font-bold text-white whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
                        {loc.city} ({loc.continent})
                      </div>
                    </div>
                  );
                })}

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Key Metrics from 10Pearls Screenshot */}
          <div ref={statsRef} className="lg:col-span-5 flex flex-col justify-center space-y-10">
            <ScrollReveal direction="left" duration={1200}>
              
              {/* Stat 1: 4 Continents */}
              <div className="pb-8 border-b border-white/10">
                <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                  {continentsCount} continents
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  North America, South America, Europe & Asia
                </p>
              </div>

              {/* Stat 2: 1,400+ Creators */}
              <div className="pb-8 border-b border-white/10">
                <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                  {teamCount >= 1000 ? `${(teamCount / 1000).toFixed(1)}K+` : `${teamCount}+`}
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  team of global creators, consultants & innovators
                </p>
              </div>

              {/* Stat 3: 98% Client Satisfaction */}
              <div>
                <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                  {retentionCount}%
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  client retention rate & on-time enterprise project delivery
                </p>
              </div>

            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* ====================================================
          BOTTOM: Infinite City Marquee Ticker Slider
         ==================================================== */}
      <div className="w-full border-t border-b border-[#454270]/30 py-5 bg-[#0b0816]/70 backdrop-blur-md overflow-hidden">
        <div className="flex animate-softy-marquee whitespace-nowrap">
          {[...globalLocations, ...globalLocations, ...globalLocations].map((loc, i) => (
            <div
              key={i}
              onClick={() => setActiveCity(loc.city)}
              className="inline-flex items-center gap-3 mx-6 sm:mx-8 cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-[#8581BD] group-hover:scale-150 transition-transform"></span>
              <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-extrabold tracking-widest text-gray-300 group-hover:text-white uppercase transition-colors">
                {loc.city}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
