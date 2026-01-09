"use client";

import { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  icon?: string;
  content: React.ReactNode;
}

interface SectionTabsProps {
  sectionTitle: string;
  sectionDescription?: string;
  tabs: TabItem[];
  className?: string; // optional for styling variations
}

export default function SectionTabs({
  sectionTitle,
  sectionDescription,
  tabs,
  className = "py-20 bg-gradient-to-br from-gray-50 to-cyan-50",
}: SectionTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{sectionTitle}</h2>
          {sectionDescription && <p className="text-xl text-gray-600">{sectionDescription}</p>}
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-600/30"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
              }`}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          {tabs.map((tab) => activeTab === tab.id && <div key={tab.id}>{tab.content}</div>)}
        </div>
      </div>
    </section>
  );
}
