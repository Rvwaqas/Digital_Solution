"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  action?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
}

const PRESET_ANSWERS: Record<string, { reply: string; action?: { label: string; href: string } }> = {
  whatsapp: {
    reply:
      "🟢 WhatsApp Business Automation:\n• 24/7 instant auto-replies for customer inquiries & product catalogs\n• Automated order tracking, receipts & appointment scheduling\n• Verified Meta Cloud API with bulk broadcast sequences\n• Direct CRM integration (HubSpot, Salesforce, Zoho).",
    action: {
      label: "Open Live WhatsApp (+92 348 0227414)",
      href: "https://wa.me/923480227414?text=Hello%20JAWA,%20I%20am%20interested%20in%20WhatsApp%20Chatbot%20Automation",
    },
  },
  instagram: {
    reply:
      "🟣 Instagram DM & Story Automation:\n• Instant auto-replies to Story mentions, DMs & Post comments\n• Keyword triggers (e.g. users comment 'PRICE' to auto-receive links)\n• Lead capture forms directly inside Instagram Direct Messages\n• 100% Meta Instagram Graph API compliant.",
    action: {
      label: "Set Up Instagram Automation",
      href: "#contact",
    },
  },
  facebook: {
    reply:
      "🔵 Facebook Messenger Sales Funnels:\n• Interactive menu trees & automated lead qualification\n• Instant calendar booking integration for discovery calls\n• Re-engage abandoned cart leads with customized promotional prompts\n• Seamless handoff to human support reps when requested.",
    action: {
      label: "Consult on Messenger Automation",
      href: "#contact",
    },
  },
  pricing: {
    reply:
      "💡 Our AI Chatbot & Omnichannel Automation packages are tailored to your business scale. We deliver turnkey setup, custom prompt engineering, API integration, and monthly maintenance. Get in touch for a custom roadmap!",
    action: {
      label: "Request a Free Automation Audit",
      href: "#contact",
    },
  },
};

export default function SoftyChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! 👋 Welcome to JAWA IT Services. We build intelligent 24/7 AI Chatbots & automated workflows for WhatsApp, Facebook Messenger, and Instagram. How can I help your business grow today?",
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      let botAction: { label: string; href: string } | undefined;

      const lower = text.toLowerCase();
      if (lower.includes("whatsapp") || lower.includes("wa")) {
        botResponse = PRESET_ANSWERS.whatsapp.reply;
        botAction = PRESET_ANSWERS.whatsapp.action;
      } else if (lower.includes("instagram") || lower.includes("ig") || lower.includes("story")) {
        botResponse = PRESET_ANSWERS.instagram.reply;
        botAction = PRESET_ANSWERS.instagram.action;
      } else if (lower.includes("facebook") || lower.includes("messenger") || lower.includes("fb")) {
        botResponse = PRESET_ANSWERS.facebook.reply;
        botAction = PRESET_ANSWERS.facebook.action;
      } else if (lower.includes("price") || lower.includes("cost") || lower.includes("package") || lower.includes("rate")) {
        botResponse = PRESET_ANSWERS.pricing.reply;
        botAction = PRESET_ANSWERS.pricing.action;
      } else {
        botResponse =
          "Thanks for reaching out! We specialize in custom AI chatbots and automated customer communication across WhatsApp, Facebook & Instagram. Our bots answer queries in under 2 seconds, qualify prospects, and route high-value leads straight to your CRM. Would you like to test a live demo or speak with our engineering team?";
        botAction = {
          label: "Chat with Us on WhatsApp",
          href: "https://wa.me/923480227414?text=Hello%20JAWA,%20I%20would%20like%20to%20discuss%20Chatbot%20Automation",
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          action: botAction,
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Trigger Button on bottom-left to give clean space to scroll-to-top on bottom-right */}
      <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#120d24]/90 hover:bg-[#1a1433] border border-[#8581BD]/50 hover:border-[#8581BD] text-white shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Open AI Chatbot & Automation"
          >
            {/* Pulsing glow ring */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#8581BD] via-[#ec4899] to-[#25D366] opacity-40 blur-sm group-hover:opacity-75 transition-opacity"></span>

            {/* Inner Content */}
            <div className="relative flex items-center gap-2.5">
              {/* Bot Icon with active status dot */}
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#8581BD] to-[#454270] flex items-center justify-center text-white shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 13A2.5 2.5 0 005 15.5 2.5 2.5 0 007.5 18a2.5 2.5 0 002.5-2.5A2.5 2.5 0 007.5 13m9 0a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5z" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] ring-2 ring-[#120d24]"></span>
              </div>

              {/* Text & Social Badges */}
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
                  AI Chatbot & Automation
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                </span>
                <span className="text-[10px] text-gray-300 font-medium">WhatsApp • FB • Instagram</span>
              </div>

              {/* Social micro icons */}
              <div className="flex items-center -space-x-1 pl-1">
                <span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center text-[10px] text-white shadow">
                  W
                </span>
                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-[10px] text-white shadow">
                  IG
                </span>
                <span className="w-5 h-5 rounded-full bg-[#1877F2] flex items-center justify-center text-[10px] text-white shadow">
                  FB
                </span>
              </div>
            </div>

            {unreadCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-extrabold flex items-center justify-center shadow-lg animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 w-[calc(100vw-32px)] sm:w-[410px] h-[550px] max-h-[85vh] rounded-[28px] overflow-hidden bg-[#0d091b]/95 border border-[#8581BD]/40 shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col transition-all duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#17112d] via-[#1f173d] to-[#120d24] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#8581BD] to-[#585392] flex items-center justify-center text-white shadow-lg">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 13A2.5 2.5 0 005 15.5 2.5 2.5 0 007.5 18a2.5 2.5 0 002.5-2.5A2.5 2.5 0 007.5 13m9 0a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5 2.5 2.5 0 00-2.5-2.5z" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#25D366] ring-2 ring-[#17112d]"></span>
              </div>
              <div>
                <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white flex items-center gap-2">
                  JAWA Automation Assistant
                </h3>
                <p className="text-[11px] text-gray-300 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                  Active • WhatsApp, FB &amp; IG Bot
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Omnichannel Quick Action Badges */}
          <div className="px-4 py-2 bg-[#120d24]/90 border-b border-white/5 flex items-center justify-between text-xs overflow-x-auto gap-2">
            <a
              href="https://wa.me/923480227414?text=Hello%20JAWA,%20I%20want%20WhatsApp%20Automation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap text-[11px]"
            >
              <span>💬 WhatsApp</span>
            </a>
            <button
              onClick={() => handleSend("Tell me about Instagram DM Automation")}
              className="px-2.5 py-1 rounded-lg bg-pink-500/15 hover:bg-pink-500/25 text-pink-300 font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap text-[11px] cursor-pointer"
            >
              <span>📷 Instagram</span>
            </button>
            <button
              onClick={() => handleSend("Tell me about Facebook Messenger Bot")}
              className="px-2.5 py-1 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap text-[11px] cursor-pointer"
            >
              <span>⚡ Messenger</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl ${
                    m.sender === "user"
                      ? "bg-gradient-to-r from-[#8581BD] to-[#585392] text-white rounded-br-sm shadow-md"
                      : "bg-[#18132e] text-gray-200 border border-white/10 rounded-bl-sm shadow-sm"
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>

                  {m.action && (
                    <div className="mt-3 pt-2.5 border-t border-white/10">
                      <a
                        href={m.action.href}
                        target={m.action.href.startsWith("http") ? "_blank" : undefined}
                        rel={m.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#8581BD] text-white text-[11px] font-bold transition-all duration-200 shadow"
                      >
                        <span>{m.action.label}</span>
                        <span>→</span>
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-gray-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#18132e] text-gray-400 border border-white/10 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8581BD] animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8581BD] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8581BD] animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="px-3 py-2 bg-[#100b21]/70 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleSend("How does WhatsApp Automation work?")}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 text-[10px] whitespace-nowrap transition-colors border border-white/5 cursor-pointer"
            >
              🟢 WhatsApp Flow
            </button>
            <button
              onClick={() => handleSend("Instagram Story & DM Auto-replies")}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 text-[10px] whitespace-nowrap transition-colors border border-white/5 cursor-pointer"
            >
              🟣 Instagram DM
            </button>
            <button
              onClick={() => handleSend("What are the pricing packages for Chatbots?")}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-gray-300 text-[10px] whitespace-nowrap transition-colors border border-white/5 cursor-pointer"
            >
              💰 Pricing &amp; ROI
            </button>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#130e26] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about chatbot & automation..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#0c0819] border border-white/10 focus:border-[#8581BD] text-xs text-white placeholder-gray-500 outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#8581BD] to-[#454270] hover:from-[#9d99d1] hover:to-[#555285] text-white flex items-center justify-center transition-all shadow-md cursor-pointer flex-shrink-0"
              aria-label="Send Message"
            >
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
