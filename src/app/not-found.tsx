import SoftyNavbar from "@/components/softy/SoftyNavbar";
import SoftyFooter from "@/components/softy/SoftyFooter";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#020202] text-white">
      <SoftyNavbar />
      <main className="flex-1 flex items-center justify-center py-32 px-4 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="text-8xl sm:text-9xl font-['Space_Grotesk'] font-bold text-[#ff5500] tracking-tight">
            404
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Space_Grotesk'] font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-base text-gray-400 max-w-md mx-auto">
            The page you are looking for might have been moved or does not exist.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ff5500] hover:bg-[#ff6a00] text-white text-sm font-semibold shadow-lg shadow-[#ff5500]/30 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <SoftyFooter />
    </div>
  );
}
