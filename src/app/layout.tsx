import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Roboto_Serif } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAWA – IT Agency Services | Your Vision, Our Tech",
  description:
    "JAWA is a premier IT agency delivering integrated expertise in custom software development, AI chatbots, WhatsApp, Facebook & Instagram automation, web applications, and marketing strategies.",
  keywords: [
    "JAWA",
    "JAWA IT Agency Services",
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "AI Chatbot Automation",
    "WhatsApp Automation",
    "Facebook & Instagram Automation",
    "Financial Management",
    "Marketing Strategies",
  ],
  icons: {
    icon: [
      { url: "/images/jawa-rounded.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/images/jawa-rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${robotoSerif.variable} dark scroll-smooth`}
    >
      <body className="font-manrope text-[#9ca3af] bg-[#06050b] antialiased selection:bg-[#8581BD]/40 selection:text-white">
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
