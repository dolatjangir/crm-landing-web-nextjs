"use client";

import AIRobot from "@/components/common/animatedimages/AIRobot";
import AppButton from "@/components/common/buttons/AppButton";
import Scrollindicator from "@/components/common/indicators/Scrollindicator";
import { useState } from "react";

export default function EcosystemHero() {
    const [activeTab, setActiveTab] = useState("core");

    return (
       
            <section className="relative  flex items-center justify-center py-5 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
                {/* AI Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop"
                        alt="AI Technology Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-800/95" />
                </div>

                {/* Animated Background Grid */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />

                    {/* Animated Glowing Orbs */}
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
                    <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse animation-delay-4000" />
                </div>

                {/* Breadcrumb */}
                {/* <nav className="absolute top-8 left-8 flex items-center gap-2 text-sm text-gray-400 z-10">
          <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white font-medium">Ecosystem</span>
        </nav> */}

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-left">
                            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 mb-8 shadow-lg shadow-cyan-500/30">
                                <span className="text-sm font-semibold text-white tracking-wide">
                                    🚀 The Future of Business Intelligence
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                The Complete{" "}
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    AI Ecosystem
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed mb-10">
                                Discover how ibigdata's intelligent architecture connects every aspect of your business,
                                from lead generation to customer retention, all powered by cutting-edge AI technology.
                            </p>

                            {/* Key Features Pills */}
                            <div className="flex flex-wrap gap-3 mb-10">
                                {["AI-Powered", "Self-Scaling", "Secure", "Intelligent"].map((tag, i) => (
                                    <div key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                              
                                <AppButton text="Explore Ecosystem" bgColor="bg-gradient-to-r from-cyan-500 to-blue-500" className="px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105" />
                                <AppButton text="Watch Demo" bgColor="bg-white/10 backdrop-blur-sm" textcolor="text-white" className="border-2 border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300" />
                            </div>
                        </div>

                        {/* Right - AI Robot Visualization */}
                        <AIRobot />
                    </div>
                </div>

                {/* Scroll Indicator */}
                <Scrollindicator />
            </section>

    );
}