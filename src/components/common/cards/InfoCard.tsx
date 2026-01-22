"use client";

import React from "react";
import Link from "next/link";

type InfoCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  learnMoreHref?: string; // optional Learn More link
  aosDelay?: number; // optional stagger delay
};

export function InfoCard({
  title,
  description,
  icon,
  image,
  learnMoreHref,
  aosDelay = 0,
}: InfoCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group relative pb-5 border-2 border-cyan-100 rounded-2xl bg-white/80 backdrop-blur-sm text-left hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-600/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Icon */}
      <div className="inline-flex mx-5 items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl px-5 font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 px-5 leading-relaxed mb-16">{description}</p>

      {/* Optional Learn More */}
      {learnMoreHref && (
        <div className="absolute bottom-0 left-0 right-0 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <Link
            href={learnMoreHref}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold py-4 px-6 flex items-center justify-center  hover:from-cyan-700 hover:to-blue-700 transition-colors"
          >
            <span>Learn More</span>
          </Link>
        </div>
      )}
    </div>
  );
}
