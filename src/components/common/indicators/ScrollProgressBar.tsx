"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useEffect, useState } from "react";

type ScrollProgressBarProps = {
  height?: string;
  position?: "fixed" | "sticky";
  top?: string;
  zIndex?: string;
  className?: string;
  bgColor?: string;
};

export default function ScrollProgressBar({
  height = "h-1",
  position = "fixed",
  top = "top-0",
  zIndex = "z-50",
  className = "",
  bgColor = "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500",
}: ScrollProgressBarProps) {
  const progress = useScrollProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // mark as mounted after hydration
  }, []);

  if (!mounted) return null; // render nothing on server

  return (
    <div
      className={`${position} ${top} left-0 right-0 ${height} bg-transparent ${zIndex} ${className}`}
      style={{
        zIndex:zIndex?Number(zIndex):999
      }}
    >
      <div
        className={`h-full transition-[width] duration-200 ease-out ${bgColor}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
