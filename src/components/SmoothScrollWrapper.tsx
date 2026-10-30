"use client";

import { ReactNode } from "react";
import SmoothScroll from "./SmoothScroll";

export default function SmoothScrollWrapper({ children }: { children: ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
