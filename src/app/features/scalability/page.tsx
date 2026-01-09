"use client";

import CaseStudyCard from "@/components/common/cards/CaseStudyCard";
import FeatureCard from "@/components/common/cards/FeatureCard";
import { MiniCTA } from "@/components/common/cta/MiniCTA";
import { FAQSection } from "@/components/common/FAQ/FAQSection";
import Scrollindicator from "@/components/common/indicators/Scrollindicator";
import DarkHeroSection from "@/components/common/sections/DarkHeroSection";
import { useNavigate } from "@/hooks/useNavigate";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ScalabilityPage() {
    const [activeScenario, setActiveScenario] = useState(0);
    const [trafficLevel, setTrafficLevel] = useState(0);
    const navigate = useNavigate();

    const scalabilityFAQ = [
        {
            q: "Will my CRM slow down as we add more users and data?",
            a: "No. Our platform automatically scales infrastructure as you grow, maintaining the same fast performance whether you have 100 or 100,000 users."
        },
        {
            q: "Do we need to upgrade or migrate as we grow?",
            a: "Never. Our architecture grows with you seamlessly. Start small and scale to millions of users without any migrations or downtime."
        },
        {
            q: "What happens during traffic spikes or busy seasons?",
            a: "Our auto-scaling technology instantly allocates more resources during peak times, then scales back down to optimize costs when traffic normalizes."
        },
        {
            q: "Is our data safe and accessible during high-load periods?",
            a: "Absolutely. Our distributed systems ensure 99.99% uptime with automatic failover protection, keeping your data secure and accessible 24/7."
        },
        {
            q: "How does pricing work as we scale?",
            a: "Transparent, predictable pricing that scales with your usage. No hidden fees for high traffic or data storage - you only pay for what you use."
        }
    ];

    const growthScenarios = [
        {
            name: "Small Team",
            icon: "👥",
            users: "10-100",
            records: "1K-50K",
            description: "Starting your growth journey",
            features: ["Instant setup", "All features included", "No user limits", "Automatic scaling"],
            performance: "Lightning fast",
            reliability: "99.99% uptime",
            color: "from-green-500 to-emerald-500"
        },
        {
            name: "Growing Startup",
            icon: "🚀",
            users: "100-1K",
            records: "50K-500K",
            description: "Rapid expansion phase",
            features: ["Seamless scaling", "Advanced analytics", "Team collaboration", "API access"],
            performance: "Consistent speed",
            reliability: "Zero downtime",
            color: "from-blue-500 to-indigo-500"
        },
        {
            name: "Enterprise",
            icon: "🏢",
            users: "1K-100K+",
            records: "500K-50M+",
            description: "Large-scale operations",
            features: ["Global distribution", "Custom integrations", "White-label options", "Dedicated support"],
            performance: "Enterprise-grade",
            reliability: "Mission-critical",
            color: "from-purple-500 to-pink-500"
        }
    ];

    // Simulate traffic spikes
    useEffect(() => {
        const interval = setInterval(() => {
            setTrafficLevel(prev => (prev + 1) % 5);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME */}
            <DarkHeroSection backgroundImage="/scale-hero.png">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">Enterprise-Grade Scale</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Scale Without
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Limits
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Grow from 100 users to millions without performance loss, downtime, or re-architecture.
                    Experience consistent speed and reliability at any scale.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "99.99%", label: "Uptime SLA", icon: "🛡️" },
                        { value: "< 100ms", label: "Response Time", icon: "⚡" },
                        { value: "10M+", label: "Concurrent Users", icon: "🚀" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className={`
        bg-white/5 text-4xl max-md:text-2xl backdrop-blur-sm
        border border-white/10 rounded-2xl p-6
        hover:bg-white/10 transition-all group
        ${i === 2 ? "max-md:col-span-2" : ""}
      `}
                        >
                            <div className=" mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <div className=" font-bold text-cyan-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300 max-md:col-start-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </DarkHeroSection>


            {/* Key Performance Metrics - LIGHT THEME */}
            <section className="py-32 px-6 relative bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Proven <span className="text-cyan-600">Performance</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-world metrics from companies scaling with confidence on our platform
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-20">
                        {[
                            { value: "99.99%", label: "Uptime SLA", change: "+0.01% vs last month", icon: "🛡️", color: "text-green-600" },
                            { value: "47ms", label: "Average Response", change: "-12% vs last month", icon: "⚡", color: "text-cyan-600" },
                            { value: "2.3M", label: "Requests/Minute", change: "+45% vs last month", icon: "📈", color: "text-blue-600" },
                            { value: "Zero", label: "Downtime Events", change: "Last 12 months", icon: "🎯", color: "text-purple-600" }
                        ].map((metric, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{metric.icon}</div>
                                <div className={`text-4xl font-black mb-2 ${metric.color}`}>{metric.value}</div>
                                <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
                                <div className="text-sm text-gray-500">{metric.change}</div>
                            </div>
                        ))}
                    </div>

                    {/* Live System Status */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-black text-gray-900">System Status</h3>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-green-600 font-semibold">All Systems Operational</span>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">Global CDN</div>
                                <div className="text-sm text-gray-600">15 regions active</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">Database Cluster</div>
                                <div className="text-sm text-gray-600">5 nodes healthy</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">API Gateway</div>
                                <div className="text-sm text-gray-600">All endpoints responsive</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Technical Benefits - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Built for <span className="text-cyan-600">Growth</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade infrastructure that delivers consistent performance,
                            whether you're serving hundreds or millions of users.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Benefits Visualization */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">How We Scale With You</h3>
                                <div className="space-y-6">
                                    {[
                                        { benefit: "Auto-Scaling", description: "Resources increase automatically during traffic spikes", icon: "📈", color: "bg-green-100 text-green-700" },
                                        { benefit: "Load Distribution", description: "Traffic spread across global servers for consistent speed", icon: "🌍", color: "bg-blue-100 text-blue-700" },
                                        { benefit: "Smart Caching", description: "Frequently accessed data served instantly from nearby locations", icon: "⚡", color: "bg-cyan-100 text-cyan-700" },
                                        { benefit: "Fault Tolerance", description: "Automatic failover keeps you running even during outages", icon: "🛡️", color: "bg-purple-100 text-purple-700" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                            <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{item.benefit}</div>
                                                <div className="text-sm text-gray-600">{item.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Technical Features */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: "🚀",
                                    title: "Instant Auto-Scaling",
                                    description: "No downtime during traffic spikes. Our system detects load increases and scales resources in milliseconds, not minutes."
                                },
                                {
                                    icon: "🌍",
                                    title: "Global Edge Network",
                                    description: "Content delivered from 200+ locations worldwide. Your users experience the same fast performance regardless of location."
                                },
                                {
                                    icon: "⚡",
                                    title: "Predictive Optimization",
                                    description: "AI analyzes usage patterns and pre-allocates resources before you need them. Always ready for your next growth surge."
                                },
                                {
                                    icon: "🛡️",
                                    title: "Self-Healing Infrastructure",
                                    description: "Automatic detection and resolution of issues before they impact your business. Problems fixed before you notice them."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border-2 border-cyan-100 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all group">
                                    <div className="text-4xl group-hover:scale-110 transition-transform">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Growth Scenarios - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Scale at <span className="text-cyan-600">Every Stage</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From startup to enterprise, our platform adapts to your needs
                            without compromising performance or reliability.
                        </p>
                    </div>

                    {/* Scenario Selector */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {growthScenarios.map((scenario, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveScenario(i)}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all ${activeScenario === i
                                    ? 'bg-cyan-600 text-white shadow-lg'
                                    : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-cyan-300 hover:shadow-md'
                                    }`}
                            >
                                <span className="mr-2">{scenario.icon}</span>
                                {scenario.name}
                            </button>
                        ))}
                    </div>

                    {/* Active Scenario Display */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-6xl">{growthScenarios[activeScenario].icon}</div>
                                    <div>
                                        <h3 className="text-3xl font-black text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                            {growthScenarios[activeScenario].name}
                                        </h3>
                                        <p className="text-gray-600">{growthScenarios[activeScenario].description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                                        <div className="text-sm text-gray-600 mb-1">Users</div>
                                        <div className="text-2xl font-bold text-gray-900">{growthScenarios[activeScenario].users}</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                                        <div className="text-sm text-gray-600 mb-1">Records</div>
                                        <div className="text-2xl font-bold text-gray-900">{growthScenarios[activeScenario].records}</div>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Performance</span>
                                        <span className="font-bold text-green-600">{growthScenarios[activeScenario].performance}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Reliability</span>
                                        <span className="font-bold text-green-600">{growthScenarios[activeScenario].reliability}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {growthScenarios[activeScenario].features.map((feature, i) => (
                                        <div key={i} className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-medium">
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-4 text-gray-400 text-sm">Growth Metrics</span>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { metric: "Response Time", value: "< 100ms", status: "excellent" },
                                            { metric: "Throughput", value: "10K req/s", status: "excellent" },
                                            { metric: "Availability", value: "99.99%", status: "excellent" },
                                            { metric: "Concurrent Users", value: "Unlimited", status: "excellent" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                                                <span className="text-gray-300">{item.metric}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-cyan-400">{item.value}</span>
                                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Performance Under Load - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Performance Under <span className="text-cyan-600">Any Load</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Watch how our system automatically adapts to traffic spikes,
                            maintaining consistent performance during your busiest moments.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Traffic Visualization */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">Real-Time Traffic Adaptation</h3>
                                
                                {/* Traffic Levels */}
                                <div className="space-y-4 mb-6">
                                    {[
                                        { level: "Low", color: "bg-green-500", width: "25%", users: "1K users" },
                                        { level: "Normal", color: "bg-blue-500", width: "50%", users: "10K users" },
                                        { level: "High", color: "bg-yellow-500", width: "75%", users: "100K users" },
                                        { level: "Peak", color: "bg-red-500", width: "100%", users: "1M+ users" },
                                        { level: "Surge", color: "bg-purple-500", width: "125%", users: "10M+ users" }
                                    ].map((traffic, i) => (
                                        <div key={i} className={`transition-all duration-500 ${trafficLevel === i ? 'opacity-100 scale-105' : 'opacity-50'}`}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-gray-700">{traffic.level} Traffic</span>
                                                <span className="text-sm text-gray-500">{traffic.users}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                                <div 
                                                    className={`${traffic.color} h-3 rounded-full transition-all duration-1000`} 
                                                    style={{ width: traffic.width }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-600">Current Status</span>
                                        <span className="text-sm font-medium text-green-600">Auto-Scaling Active</span>
                                    </div>
                                    <div className="text-3xl font-black text-gray-900">
                                        {trafficLevel === 0 && "Lightning Fast ⚡"}
                                        {trafficLevel === 1 && "Consistent Speed 🚀"}
                                        {trafficLevel === 2 && "Scaling Up 📈"}
                                        {trafficLevel === 3 && "Peak Performance 🎯"}
                                        {trafficLevel === 4 && "Surge Handling 🛡️"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Performance Benefits */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: "🔄",
                                    title: "Instant Auto-Scaling",
                                    description: "Resources scale up in real-time during traffic spikes. No manual intervention, no downtime, no performance degradation."
                                },
                                {
                                    icon: "🧠",
                                    title: "Predictive Intelligence",
                                    description: "AI analyzes patterns and pre-allocates resources before traffic surges. Always ready for your next big campaign or product launch."
                                },
                                {
                                    icon: "💰",
                                    title: "Cost Optimization",
                                    description: "Pay only for what you use. Resources automatically scale down when traffic normalizes, optimizing your infrastructure costs."
                                },
                                {
                                    icon: "🛡️",
                                    title: "Built-in Protection",
                                    description: "DDoS protection and rate limiting ensure malicious traffic can't impact your legitimate users' experience."
                                }
                            ].map((benefit, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border-2 border-cyan-100 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all group">
                                    <div className="text-4xl group-hover:scale-110 transition-transform">{benefit.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Enterprise Assurance - DARK THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Enterprise <span className="text-cyan-400">Ready</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Mission-critical reliability with the security and compliance standards enterprises demand
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { label: "Uptime SLA", value: "99.99%", icon: "🛡️" },
                            { label: "Response Time", value: "< 100ms", icon: "⚡" },
                            { label: "Security Certifications", value: "15+", icon: "🔒" },
                            { label: "Support Response", value: "< 5 mins", icon: "💬" }
                        ].map((spec, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{spec.icon}</div>
                                <div className="text-sm text-gray-400 mb-2">{spec.label}</div>
                                <div className="text-3xl font-black text-cyan-400">{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Compliance & Security Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Security Features */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-black text-white mb-6">Security & Compliance</h3>
                            <div className="space-y-4">
                                {[
                                    { feature: "SOC 2 Type II Certified", icon: "✓", color: "text-green-400" },
                                    { feature: "ISO 27001 Compliant", icon: "✓", color: "text-green-400" },
                                    { feature: "GDPR Ready", icon: "✓", color: "text-green-400" },
                                    { feature: "HIPAA Compliant", icon: "✓", color: "text-green-400" },
                                    { feature: "PCI DSS Level 1", icon: "✓", color: "text-green-400" },
                                    { feature: "256-bit Encryption", icon: "✓", color: "text-green-400" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className={item.color}>{item.icon}</span>
                                        <span className="text-gray-300">{item.feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Infrastructure Features */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-black text-white mb-6">Infrastructure Features</h3>
                            <div className="space-y-4">
                                {[
                                    { feature: "Multi-Region Deployment", icon: "🌍", color: "text-cyan-400" },
                                    { feature: "Automatic Backups", icon: "💾", color: "text-cyan-400" },
                                    { feature: "Disaster Recovery", icon: "🔄", color: "text-cyan-400" },
                                    { feature: "DDoS Protection", icon: "🛡️", color: "text-cyan-400" },
                                    { feature: "24/7 Monitoring", icon: "📊", color: "text-cyan-400" },
                                    { feature: "Incident Response", icon: "🚨", color: "text-cyan-400" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className={item.color}>{item.icon}</span>
                                        <span className="text-gray-300">{item.feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Enterprise CTA */}
                    <MiniCTA
                        title="Ready for Enterprise Scale?"
                        description={
                            <>
                                Get a personalized scalability assessment and see how we can support your growth
                            </>
                        }
                        buttonText="Talk to Sales →"
                        onClick={() => navigate("/enterprise")}
                    />
                </div>
            </section>



            {/* Real-World Examples - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Scale <span className="text-cyan-600">Success</span> Stories
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how companies scaled from startup to enterprise without
                            infrastructure headaches or performance issues.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                industry: "E-commerce",
                                company: "ShopFlow",
                                logo: "🛒",
                                challenge: "Black Friday traffic spikes crashed their platform yearly, losing millions in revenue during peak sales periods.",
                                solution: "Auto-scaling infrastructure that handles 50x normal traffic without performance degradation or downtime.",
                                results: [
                                    { metric: "50x", label: "Traffic Capacity" },
                                    { metric: "Zero", label: "Downtime Events" },
                                    { metric: "$5M+", label: "Revenue Protected" }
                                ],
                                color: "from-orange-500 to-red-500"
                            },
                            {
                                industry: "SaaS Platform",
                                company: "DataSync Pro",
                                logo: "📊",
                                challenge: "Growing from 1K to 100K users caused database bottlenecks and 5-second page load times.",
                                solution: "Distributed architecture with intelligent caching and database sharding for consistent sub-100ms response times.",
                                results: [
                                    { metric: "100x", label: "User Growth" },
                                    { metric: "20x", label: "Faster Response" },
                                    { metric: "99.99%", label: "Uptime Maintained" }
                                ],
                                color: "from-blue-500 to-indigo-500"
                            },
                            {
                                industry: "Financial Services",
                                company: "FinTech Solutions",
                                logo: "💰",
                                challenge: "Processing millions of transactions daily while maintaining compliance and zero data loss requirements.",
                                solution: "Multi-region deployment with real-time replication and automatic failover for mission-critical reliability.",
                                results: [
                                    { metric: "10M+", label: "Daily Transactions" },
                                    { metric: "Zero", label: "Data Loss Events" },
                                    { metric: "100%", label: "Compliance Rate" }
                                ],
                                color: "from-green-500 to-emerald-500"
                            }
                        ].map((caseStudy, i) => (
                            <CaseStudyCard key={i} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>



            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={scalabilityFAQ} />



            {/* Final CTA Section - DARK THEME */}
            <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-600">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-4xl mx-auto relative text-center">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Scale With Confidence
                    </h2>
                    <p className="text-2xl text-cyan-50 mb-12">
                        Join companies growing from startup to enterprise without infrastructure worries
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
                            Start Free Trial
                        </button>
                        <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Schedule Demo
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-cyan-50">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
                    <p>© 2024 ibigdata. All rights reserved.</p>
                </div>
            </footer>

            <style jsx>{`
        @keyframes gridMove {
  0% { transform: translateY(0); }
  50% { transform: translateY(50px); }
  100% { transform: translateY(0); }
}

        .animate-grid-move {
          animation: gridMove 20s linear infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
        </div>
    );
}