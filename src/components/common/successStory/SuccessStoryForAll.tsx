"use client";

import { QuoteIcon } from "lucide-react";
import React from "react";

interface Testimonial {
  quote: string;
  avatar: React.ReactNode;
  author: string;
  role: string;
  company: string;
  metric: string;
}

interface TestimonialCardProps {
    quoteIcon?: React.ReactNode;
  testimonials: Testimonial[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function SuccessStoryForAll({
  testimonials,
  activeIndex,
  quoteIcon,
  onChange,
}: TestimonialCardProps) {
  const active = testimonials[activeIndex];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl py-12 px-4 shadow-xl">
      
      {/* Quote */}
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 text-start md:ml-40 opacity-20"> {quoteIcon ?? <QuoteIcon className="w-20 h-20" />}</div>
        <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
          {active.quote}
        </blockquote>
      </div>

      {/* Author */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl">
            {active.avatar}
          </div>

          <div>
            <div className="font-bold text-gray-900 text-lg">
              {active.author}
            </div>
            <div className="text-gray-600 text-sm md:text-lg">{active.role}</div>
            {/* <div className="text-cyan-600 font-semibold">
              {active.company}
            </div> */}
          </div>
        </div>

        <div className="md:text-right">
          <div className="text-2xl font-bold text-green-600">
            {active.metric}
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex ? "bg-cyan-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
