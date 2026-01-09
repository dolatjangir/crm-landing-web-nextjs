"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      once: false,         // 🔹 animate every time you scroll into view
      mirror: true,        // 🔹 animate again on scroll up (optional)
      duration: 900,
      easing: "ease-out-cubic",
      offset: 120,
    });

    // refresh after initial paint
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);

    // recalc on viewport changes
    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
