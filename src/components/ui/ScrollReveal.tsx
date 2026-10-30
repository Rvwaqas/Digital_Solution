"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale" | "zoom-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  distance?: number; // in pixels
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1400,
  distance = 45,
  className = "",
  threshold = 0.12,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver is not supported, reveal immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(${distance * 1.2}px, 0, 0)`;
      case "right":
        return `translate3d(-${distance * 1.2}px, 0, 0)`;
      case "scale":
        return `scale(0.92)`;
      case "zoom-in":
        return `translate3d(0, ${distance * 0.6}px, 0) scale(0.94)`;
      case "fade":
      default:
        return "none";
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Luxury smooth ease-out
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
