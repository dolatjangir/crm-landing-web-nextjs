"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = {
  q: string;
  a: string;
};

type FAQSectionProps = {
  title?: string;
  items: FAQItem[];
  className?: string;
};

export function FAQSection({
  title = "FAQ",
  items,
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`py-32 px-6 max-md:px-1 bg-gradient-to-br from-cyan-50 via-white to-blue-50 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 max-md:mb-10">
          <h2
            className="text-5xl lg:text-6xl font-black mb-6 text-gray-900"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-cyan-600">{title}</span>
          </h2>
        </div>

        <div className="space-y-6">
          {items.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "border-cyan-400 shadow-lg"
                  : "border-gray-200 hover:border-cyan-300 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full p-8 max-md:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-2">
                  {faq.q}
                </h3>

                <ChevronDown
                  className={`w-6 h-6 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 max-md:px-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
