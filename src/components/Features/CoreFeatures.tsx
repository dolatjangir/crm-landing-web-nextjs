"use client";
import { useState } from "react";

export default function CoreFeatures() {
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      title: "AI Lead Qualification Assistant",
      description: "Understands what buyers are looking for and helps you focus only on serious customers.",
      image: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775477233/lead-generation-active-robo_mu4ybt.png",
    },
    {
      title: "Smart Property Matching",
      description: "Quickly shows the best property options based on each buyer's needs.",
      image: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775479263/property-robo_vtrnqk.png",
    },
    {
      title: "Lead Capture Assistant",
      description: "Collects new leads automatically from your website, WhatsApp, ads, and property pages.",
      image: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775558338/lead_generation_active_kk7zvz.png",
    },
    {
      title: "Content Creation Assistant",
      description: "Creates attractive property listings, ads, and marketing content for you in seconds.",
      image: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775477196/AI-Content-creations-robo_radj9b.png",
    },
    {
      title: "Follow-Up Assistant",
      description: "Reminds and follows up with your leads at the right time so you don't miss any opportunity.",
      image: "/assets/brockerdashai.png",
    },
    {
      title: "AI Calling Assistant",
      description: "Automatically calls new leads and collects their requirements for you.",
      image: "/assets/img-5.png",
    },
    {
      title: "Campaign Automation",
      description: "Sends WhatsApp, email, and SMS campaigns to your leads without manual work.",
      image: "/assets/leadai.png",
    },
    {
      title: "Property Data Assistant",
      description: "Gathers property details from different sources and keeps your listings updated.",
      image: "/assets/brockerdashai.png",
    },
    {
      title: "Social Media Assistant",
      description: "Handles your social media posts and helps you grow your online presence.",
      image: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775477177/marketing-automation-robo_rhqsqs.png",
    },
    {
      title: "SEO Content Assistant",
      description: "Creates content that helps your website rank higher and attract more buyers.",
      image: "/assets/leadai.png",
    },
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <section id="ai-agents" className="relative scroll-mt-20 py-6 sm:py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-10">
          Meet Your{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            AI Agents
          </span>
        </h2>

        {/* Infinite Auto-Scroll Container */}
        <div
          className="mt-16 relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6 w-max"
            style={{
              animation: `marqueeScroll 40s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-cyan-200 transition-all duration-300 overflow-hidden group"
              >
                {/* Image Container - Fixed height, proper fit */}
                <div className="relative w-full h-40 bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-left">
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}