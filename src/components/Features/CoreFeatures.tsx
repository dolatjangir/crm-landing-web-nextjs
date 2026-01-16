"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { InfoCard } from "../common/cards/InfoCard";

export default function CoreFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const features = [
    {
      learnMoreHref: "/features/workflowautomation",
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks, approvals, and notifications to save time and reduce errors.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      learnMoreHref: "/features/advanced-analytics",
      title: "Advanced Analytics",
      description:
        "Real-time dashboards, reporting, and insights across all CRMs for informed decisions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      learnMoreHref:"/features/integrations",
      title: "Integrations",
      description:
        "Connect with third-party tools and APIs seamlessly for a unified workflow.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      learnMoreHref:"/features/scalability",
      title: "Scalability",
      description:
        "Easily add new CRMs or scale existing ones as your business grows without disruption.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
    },
    {
      learnMoreHref:"/features/security-compilance",
      title: "Security & Compliance",
      description:
        "Role-based access, encryption, and enterprise-level compliance standards built-in.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      learnMoreHref:"/features/customize-workflow",
      title: "Customizable Workflows",
      description:
        "Adapt the platform to match your industry-specific processes and unique business needs.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
  ];
  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupSize = isMobile ? 1 : 3;
  const slides = [];
  for (let i = 0; i < features.length; i += groupSize) {
    slides.push(features.slice(i, i + groupSize));
  }
  const totalSlides = slides.length;

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  // Drag/Swipe
  const onDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsAutoPlaying(false);
    isDraggingRef.current = true;
    startXRef.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };
  const onDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDraggingRef.current || startXRef.current === null) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = startXRef.current - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      isDraggingRef.current = false;
      startXRef.current = null;
    }
  };
  const onDragEnd = () => {
    isDraggingRef.current = false;
    startXRef.current = null;
  };

  return (
    <section id="feature"  className="relative scroll-mt-20  py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-10">
          Core Platform{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Features
          </span>
        </h2>

        {/* Slider */}
        <div
          className="mt-16 relative overflow-hidden py-5"
          ref={sliderRef}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
           
          
            {slides.map((slide, slideIndex) => (
  <div key={slideIndex} className="w-full flex-shrink-0">
    <div
      className={`grid gap-8 ${
        isMobile ? "grid-cols-1 px-4" : "md:grid-cols-3"
      }`}
    >
      {slide.map((feature, featureIndex) => (
        <InfoCard
          key={featureIndex}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          image={feature.image}
          learnMoreHref={feature.learnMoreHref} // optional, only if slide has it
          aosDelay={featureIndex * 150} // same stagger effect
        />
      ))}
    </div>
  </div>
))}

          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-8 h-3 bg-gradient-to-r from-cyan-600 to-blue-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 cursor-pointer max-md:hidden bg-white rounded-full p-3 shadow-lg hover:bg-cyan-50 transition-colors z-10 group"
        >
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-cyan-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 cursor-pointer max-md:hidden bg-white rounded-full p-3 shadow-lg hover:bg-cyan-50 transition-colors z-10 group"
        >
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-cyan-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
