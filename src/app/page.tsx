import SoftyHero from "@/components/softy/SoftyHero";
import SoftyAbout from "@/components/softy/SoftyAbout";
import SoftyInnovativeSolutions from "@/components/softy/SoftyInnovativeSolutions";
import SoftyServices from "@/components/softy/SoftyServices";
import SoftyMarqueeCross from "@/components/softy/SoftyMarqueeCross";
import SoftyStrategy from "@/components/softy/SoftyStrategy";
import SoftyAiSolutionsBanner from "@/components/softy/SoftyAiSolutionsBanner";
import SoftyWhyUs from "@/components/softy/SoftyWhyUs";


import SoftyStats from "@/components/softy/SoftyStats";
import SoftyFaq from "@/components/softy/SoftyFaq";
import SoftyFooter from "@/components/softy/SoftyFooter";
import SoftyScrollToTop from "@/components/softy/SoftyScrollToTop";
import SoftyChatWidget from "@/components/softy/SoftyChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#9ca3af] relative selection:bg-[#8581BD]/40 selection:text-white">
      {/* Background ambient lighting orbs with rich theme gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] left-[5%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(133,129,189,0.22)_0%,rgba(69,66,112,0.12)_45%,transparent_70%)] blur-[130px]"></div>
        <div className="absolute top-[30%] right-[5%] w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(69,66,112,0.26)_0%,rgba(133,129,189,0.14)_40%,transparent_70%)] blur-[150px]"></div>
        <div className="absolute top-[58%] left-[8%] w-[850px] h-[850px] bg-[radial-gradient(circle,rgba(133,129,189,0.2)_0%,rgba(69,66,112,0.18)_50%,transparent_70%)] blur-[140px]"></div>
        <div className="absolute top-[82%] right-[8%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(133,129,189,0.25)_0%,rgba(69,66,112,0.22)_50%,transparent_70%)] blur-[130px]"></div>
      </div>

      <SoftyScrollToTop />
      <SoftyChatWidget />
      <main className="flex-1 relative z-10">
        <SoftyHero />
        <SoftyAbout />
        <SoftyInnovativeSolutions />
        <SoftyServices />
        <SoftyMarqueeCross />
        <SoftyStrategy />
        <SoftyAiSolutionsBanner />
        <SoftyWhyUs />


        <SoftyStats />
        <SoftyFaq />
      </main>
      <div className="relative z-10">
        <SoftyFooter />
      </div>
    </div>
  );
}
