"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false); // track client mount

  useEffect(() => {
    setMounted(true); // now we are on client

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrolled, 100));
    };

    handleScroll(); // init scroll progress
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only return progress after mounted to avoid hydration mismatch
  return mounted ? progress : 0;
}
