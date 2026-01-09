"use client";

import { useState } from "react";
import EcosystemHero from "./components/EcosystemHero";
import ProcessSteps from "@/components/common/sections/ProcessSteps";
import StatsSection from "@/components/common/sections/StatsSection";
import IntegrationsSection from "@/components/common/sections/IntegrationsSection";
import FeatureShowcase from "@/components/common/sections/FeatureShowcase";
import SectionTabs from "@/components/common/sections/SectionTabs";
import { howItWorkstabsData } from "@/data/pages/ecosystem/howItWorksData";
import ModuleCard from "@/components/common/cards/ModuleCard";


export default function EcosystemDetails() {
    const [activeTab, setActiveTab] = useState("core");

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
            {/* Hero Section */}
            <EcosystemHero />

            {/* System Architecture Visualization */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            System Architecture Overview
                        </h2>
                        <p className="text-xl text-gray-600">
                            A centralized AI core orchestrating industry-specific CRM modules
                        </p>
                    </div>

                    {/* Architecture Diagram */}
                    <div className="relative">
                        {/* Central Core */}
                        <div className="flex justify-center mb-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-30 animate-pulse" />
                                <div className="relative bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full w-64 h-64 flex items-center justify-center shadow-2xl">
                                    <div className="text-center">
                                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">AI Core</h3>
                                        <p className="text-cyan-100 text-sm">Central Intelligence</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Connected Modules */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Real Estate CRM", icon: "🏢", color: "from-purple-500 to-pink-500" },
                                { name: "Healthcare CRM", icon: "🏥", color: "from-green-500 to-emerald-500" },
                                { name: "E-commerce CRM", icon: "🛍️", color: "from-orange-500 to-red-500" },
                                { name: "Finance CRM", icon: "💼", color: "from-blue-500 to-indigo-500" },
                                { name: "Education CRM", icon: "📚", color: "from-yellow-500 to-amber-500" },
                                { name: "Hospitality CRM", icon: "🏨", color: "from-teal-500 to-cyan-500" },
                                { name: "Manufacturing CRM", icon: "🏭", color: "from-gray-500 to-slate-500" },
                                { name: "Legal CRM", icon: "⚖️", color: "from-indigo-500 to-purple-500" },
                            ].map((module, i) => (
                                <ModuleCard
                                    key={i}
                                    name={module.name}
                                    icon={module.icon}
                                    color={module.color}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Tabs */}
            <SectionTabs
                sectionTitle="How It Works"
                sectionDescription="Explore the four pillars of our AI-powered ecosystem"
                tabs={howItWorkstabsData}
            />


            {/* AI Virtual Assistant Section */}
            <FeatureShowcase
                badgeText="🤖 AI Assistant"
                badgeColor="from-purple-600 to-pink-600"
                title="Your Built-in AI Virtual Assistant"
                subtitle="Every ibigdata instance comes with an intelligent virtual assistant that understands natural language, learns your preferences, and proactively suggests optimizations. It's like having an expert consultant available 24/7."
                features={[
                    {
                        title: "Natural Language Commands",
                        desc: "Just ask in plain English: 'Show me high-value leads from last week' or 'Schedule follow-ups for all pending deals'",
                    },
                    {
                        title: "Proactive Recommendations",
                        desc: "The AI spots opportunities and risks, alerting you before problems arise",
                    },
                    {
                        title: "Workflow Automation",
                        desc: "Teaches the system new automations by example—no coding required",
                    },
                    {
                        title: "Smart Data Entry",
                        desc: "Extracts information from emails, calls, and documents automatically",
                    },
                ]}
                visualContent={
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-white rounded-lg px-4 py-2 text-gray-900">
                                        Show me all real estate leads from this month
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <span className="text-2xl">🤖</span>
                                </div>
                                <div className="flex-1">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
                                        I found 47 leads. 12 are high-priority. Would you like me to schedule follow-ups?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {["📊 Analytics", "📧 Email", "📞 Calls"].map((action, i) => (
                                <button key={i} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl py-3 text-white text-sm font-semibold transition-colors">
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>
                }
            />



            {/* Data Flow Section */}
            <ProcessSteps
                title="Seamless Data Flow"
                subtitle="Watch how information moves through the ecosystem in real-time"
                steps={[
                    {
                        step: "01",
                        title: "Data Capture",
                        desc: "AI extracts information from emails, forms, calls, and integrations",
                        icon: "📥"
                    },
                    {
                        step: "02",
                        title: "Intelligent Processing",
                        desc: "The AI core analyzes, categorizes, and enriches data automatically",
                        icon: "⚡"
                    },
                    {
                        step: "03",
                        title: "Actionable Insights",
                        desc: "Delivered to the right team member at the perfect moment",
                        icon: "🎯"
                    },
                ]}
            />

            {/* Integration Ecosystem */}
            <IntegrationsSection
                title="Connects With Everything"
                subtitle="Seamlessly integrate with your existing tools and platforms"
                integrations={[
                    { name: "Slack", logo: "💬" },
                    { name: "Gmail", logo: "📧" },
                    { name: "Zoom", logo: "📹" },
                    { name: "Stripe", logo: "💳" },
                    { name: "Salesforce", logo: "☁️" },
                    { name: "QuickBooks", logo: "📊" },
                    { name: "HubSpot", logo: "🎯" },
                    { name: "Mailchimp", logo: "📬" },
                    { name: "Zapier", logo: "⚡" },
                    { name: "Microsoft", logo: "🪟" },
                    { name: "Google", logo: "🔍" },
                    { name: "Shopify", logo: "🛒" },
                ]}
                buttonText="View All Integrations →"
                buttonOnClick={() => console.log("View all clicked")}
            />

            {/* Stats Section */}
            <StatsSection
                stats={[
                    { value: 10, suffix: "M+", label: "Tasks Automated Daily" },
                    { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
                    { value: 50, suffix: "+", label: "Industry Verticals" },
                    { value: 30, suffix: "s", prefix: "<", label: "Average Response Time" },
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-600 mb-10">
                        Join thousands of companies already using ibigdata's AI-powered ecosystem
                        to scale their operations and maximize efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-600/30 transition-all duration-300">
                            Start Free Trial
                        </button>
                        <button className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-cyan-600 hover:text-cyan-600 transition-all duration-300">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
        </div>
    );
}