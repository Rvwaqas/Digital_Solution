"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const HERO_SLIDES = [
  {
    image: "/images/careers/offices/manchester.jpg",
    city: "Manchester, UK",
    tagline: "Innovation & Creativity Hub",
  },
  {
    image: "/images/careers/offices/london.jpg",
    city: "London, UK",
    tagline: "Global Tech & Strategy Headquarters",
  },
  {
    image: "/images/careers/offices/newyork.jpg",
    city: "New York, USA",
    tagline: "Digital Growth & Media Lab",
  },
];

const PERKS = [
  {
    title: "30 Days Holiday",
    desc: "Generous paid time off to relax, recharge, and enjoy life outside of work.",
    image: "/images/careers/perks/holiday.webp",
    badge: "Wellbeing",
  },
  {
    title: "Work Anywhere",
    desc: "Flexibility to work from home, abroad, or from any of our global tech hubs.",
    image: "/images/careers/perks/work-anywhere.webp",
    badge: "Flexibility",
  },
  {
    title: "Free Mortgage Advisor",
    desc: "1-on-1 financial planning and dedicated mortgage support for all team members.",
    image: "/images/careers/perks/mortgage.webp",
    badge: "Financial",
  },
  {
    title: "Yearly Trips",
    desc: "All-inclusive annual company retreats to celebrate team milestones together.",
    image: "/images/careers/perks/trips.webp",
    badge: "Culture",
  },
  {
    title: "Bucket List Experience",
    desc: "We help fund your personal dream goals, from skydiving to international courses.",
    image: "/images/careers/perks/bucket-list.webp",
    badge: "Personal Growth",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Carrie Rose",
    role: "Co-Founder & CEO",
    image: "/images/careers/senior-team/team-1.jpg",
  },
  {
    name: "Ray Saddiq",
    role: "Head of Creative Strategy",
    image: "/images/careers/senior-team/team-2.jpg",
  },
  {
    name: "Elena Rostova",
    role: "Lead Software Architect",
    image: "/images/careers/senior-team/team-3.jpg",
  },
  {
    name: "Marcus Vance",
    role: "Director of Digital PR",
    image: "/images/careers/senior-team/team-4.jpg",
  },
  {
    name: "Sophia Chen",
    role: "VP of Product & AI",
    image: "/images/careers/senior-team/team-5.jpg",
  },
  {
    name: "David Sterling",
    role: "Head of Growth & Operations",
    image: "/images/careers/senior-team/team-6.jpg",
  },
];

const JOBS = [
  {
    id: "job-1",
    title: "Head of Digital PR & Communications",
    department: "Marketing & PR",
    location: "Manchester / Hybrid",
    type: "Full Time",
    desc: "Lead bold, viral digital campaigns for world-renowned brands while mentoring a high-performing PR team.",
  },
  {
    id: "job-2",
    title: "Senior Full-Stack Next.js Developer",
    department: "Engineering",
    location: "Remote / London",
    type: "Full Time",
    desc: "Architect scalable high-performance web applications using React, Next.js, TypeScript, and cloud serverless tech.",
  },
  {
    id: "job-3",
    title: "Senior Creative Strategist",
    department: "Strategy",
    location: "London, UK",
    type: "Full Time",
    desc: "Develop ground-breaking brand strategies and visual identities that capture market attention and drive engagement.",
  },
  {
    id: "job-4",
    title: "Content & Campaign Director",
    department: "Content & Media",
    location: "New York / Hybrid",
    type: "Full Time",
    desc: "Drive multi-channel storytelling and performance media content creation across global markets.",
  },
  {
    id: "job-5",
    title: "AI Solutions & Automation Specialist",
    department: "Engineering",
    location: "Remote",
    type: "Full Time",
    desc: "Integrate cutting-edge AI models, custom LLM agents, and workflow automations into enterprise client products.",
  },
];

export default function SoftyCareers() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All Roles");
  const [activeJob, setActiveJob] = useState<typeof JOBS[0] | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Automatic blur slider timer (changes every 4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const categories = ["All Roles", "Engineering", "Marketing & PR", "Strategy", "Content & Media"];

  const filteredJobs = selectedCategory === "All Roles"
    ? JOBS
    : JOBS.filter(j => j.department === selectedCategory);

  return (
    <section id="careers" className="relative bg-[#05050A] text-white py-16 sm:py-24 overflow-hidden select-none border-t border-[#454270]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* HERO SECTION WITH BLUR IMAGE FADE TRANSITION */}
        <ScrollReveal direction="up" duration={1000}>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-12">

            {/* Background Image Slideshow with Smooth Blur & Zoom Transition */}
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isActive
                    ? "opacity-100 scale-100 filter-none z-10 pointer-events-auto"
                    : "opacity-0 scale-105 blur-2xl z-0 pointer-events-none"
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.city}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    className="object-cover transition-transform duration-7000 ease-out"
                  />
                  {/* Subtle vignette dark overlay for readable text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
                </div>
              );
            })}

            {/* Top Bar inside Hero */}
            <div className="relative z-20 flex items-center justify-between">

            </div>

            {/* Bottom Content inside Hero */}
            <div className="relative z-20 max-w-3xl pt-20">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-none">
                We want to see you in <br />
                <span className="bg-gradient-to-r from-white via-gray-200 to-[#8581BD] bg-clip-text text-transparent">
                  JAWA
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
                Join our world-class team of visionary creators, engineers, and digital strategists shaping the future of global tech and digital solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#open-positions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-[#8581BD] hover:text-white transition-all duration-300 shadow-xl shadow-white/10 hover:scale-105"
                >
                  <span>See Open Positions</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                {/* Office badge indicator */}
                <div className="px-4 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-xs text-gray-300 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#8581BD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{HERO_SLIDES[currentSlideIndex].city} — {HERO_SLIDES[currentSlideIndex].tagline}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* PERKS & BENEFITS SECTION ("What's in it for you") */}
        <div className="space-y-10">
          <ScrollReveal direction="up" duration={900}>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8581BD] bg-[#8581BD]/10 px-3 py-1 rounded-full border border-[#8581BD]/30">
                Why Join JAWA
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What’s in it for you?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                We believe exceptional work happens when people feel empowered, supported, and rewarded.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100} duration={800}>
                <div className="group relative h-80 rounded-2xl overflow-hidden border border-[#454270]/30 bg-[#0C0B18] shadow-lg hover:border-[#8581BD]/60 transition-all duration-500">
                  <Image
                    src={perk.image}
                    alt={perk.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090812] via-[#090812]/60 to-transparent" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <span className="self-start text-[10px] font-semibold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {perk.badge}
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#8581BD] transition-colors">
                        {perk.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* SENIOR TEAM & LEADERSHIP */}
        <div className="space-y-10 pt-6">
          <ScrollReveal direction="up" duration={900}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8581BD]">
                  Our Leadership
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
                  Meet our Senior Team
                </h2>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Industry pioneers and visionary leaders driving breakthrough strategies and digital experiences.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 80} duration={800}>
                <div className="group relative rounded-2xl overflow-hidden bg-[#0C0B18] border border-white/10 hover:border-[#8581BD]/60 transition-all duration-300">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="p-3 text-center">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#8581BD] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                      {member.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* OPEN POSITIONS & APPLICATION MODAL */}
        <div id="open-positions" className="space-y-8 pt-10 scroll-mt-24">
          <ScrollReveal direction="up" duration={900}>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8581BD] bg-[#8581BD]/10 px-3 py-1 rounded-full border border-[#8581BD]/30">
                Current Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Find your next career role
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Explore our active job openings across tech, engineering, design, and digital marketing.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${selectedCategory === cat
                  ? "bg-[#8581BD] text-white shadow-lg shadow-[#8581BD]/30"
                  : "bg-[#0F0E1E] text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredJobs.map((job) => (
              <ScrollReveal key={job.id} direction="up" duration={700}>
                <div className="group bg-[#0C0B18] border border-[#454270]/30 hover:border-[#8581BD]/70 p-6 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md hover:shadow-xl hover:shadow-[#8581BD]/10">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold text-[#8581BD] bg-[#8581BD]/10 px-2.5 py-0.5 rounded-md border border-[#8581BD]/20">
                        {job.department}
                      </span>
                      <span className="text-[11px] text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-md">
                        {job.location}
                      </span>
                      <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8581BD] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {job.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveJob(job);
                      setApplicationSubmitted(false);
                    }}
                    className="self-start md:self-center shrink-0 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#8581BD] text-white text-xs font-semibold transition-all duration-300 group-hover:scale-105"
                  >
                    Apply Now →
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>

      {/* JOB APPLICATION MODAL */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0C0B18] border border-[#454270]/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {applicationSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                <p className="text-xs text-gray-300">
                  Thank you for applying for <span className="text-[#8581BD] font-semibold">{activeJob.title}</span>. Our HR recruitment team will review your application and contact you soon.
                </p>
                <button
                  onClick={() => setActiveJob(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#8581BD] text-white text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-xs text-[#8581BD] font-semibold uppercase">{activeJob.department}</span>
                  <h3 className="text-2xl font-bold text-white">{activeJob.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{activeJob.location} • {activeJob.type}</p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setApplicationSubmitted(true);
                  }}
                  className="space-y-4 text-xs"
                >
                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8581BD]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8581BD]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Portfolio / LinkedIn Link</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/johndoe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8581BD]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Cover Note / Intro</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us why you are a great fit for this position..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8581BD]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8581BD] to-[#454270] hover:from-[#9d99d1] hover:to-[#555285] text-white font-semibold shadow-lg shadow-[#8581BD]/25 transition-all duration-300"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
