"use client";

import { useState, useMemo } from "react";
import IntegrationCard from "./IntegrationCard";

type Props = {
  integrations: any[];
  categories: string[];
  onSelect: (id: number) => void;
};

export default function IntegrationsFinder({
  integrations,
  categories,
  onSelect,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch =
        integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        integration.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [integrations, searchTerm, selectedCategory]);

  return (
    <>
      {/* Search & Filter Bar */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Search */}
            <div className="relative flex-1 max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-cyan-500 text-lg"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 md:px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-cyan-600 text-white shadow-lg"
                      : "bg-white border-2 border-gray-200 text-gray-600 hover:border-cyan-300 hover:shadow-md"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-bold text-cyan-600">
                {filteredIntegrations.length}
              </span>{" "}
              integrations
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredIntegrations.length ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIntegrations.map((integration) => (
                <IntegrationCard
                  key={integration.id}
                  integration={integration}
                  onClick={() => onSelect(integration.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No integrations found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
