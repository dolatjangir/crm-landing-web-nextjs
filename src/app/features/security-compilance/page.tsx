"use client";

import CaseStudyCard from "@/components/common/cards/CaseStudyCard";
import FeatureCard from "@/components/common/cards/FeatureCard";
import { MiniCTA } from "@/components/common/cta/MiniCTA";
import { FAQSection } from "@/components/common/FAQ/FAQSection";
import DarkHeroSection from "@/components/common/sections/DarkHeroSection";
import { useNavigate } from "@/hooks/useNavigate";
import { useState, useEffect } from "react";
import { CgNotes } from "react-icons/cg";
import { FaShieldAlt, FaUser } from "react-icons/fa";
import { FaArrowsRotate, FaChartLine, FaChartSimple, FaCheck, FaEarthAmericas, FaLock, FaRegChartBar, FaRegEye, FaUnlock } from "react-icons/fa6";
import { GiRobotAntennas } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { IoCheckmarkSharp, IoSearch } from "react-icons/io5";

// Animated AI Robot SVG Component
const AnimatedRobot = () => {
    const [particles, setParticles] = useState<any>([]);
    const [scanLine, setScanLine] = useState(0);
    const [shieldRotation, setShieldRotation] = useState(0);
    const [energyPulse, setEnergyPulse] = useState(0);

    useEffect(() => {
        // Generate floating particles
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 400,
            y: Math.random() * 400,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 3,
            duration: Math.random() * 3 + 2
        }));
        setParticles(newParticles);

        // Animate scan line
        const scanInterval = setInterval(() => {
            setScanLine(prev => (prev + 2) % 300);
        }, 30);

        // Rotate shield
        const shieldInterval = setInterval(() => {
            setShieldRotation(prev => (prev + 1) % 360);
        }, 50);

        // Energy pulse
        const pulseInterval = setInterval(() => {
            setEnergyPulse(prev => (prev + 1) % 100);
        }, 50);

        return () => {
            clearInterval(scanInterval);
            clearInterval(shieldInterval);
            clearInterval(pulseInterval);
        };
    }, []);

    return (
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <svg
                width="500"
                height="500"
                viewBox="0 0 500 500"
                className="absolute"
                style={{ filter: 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.6))' }}
            >
                <defs>
                    {/* Gradients */}
                    <linearGradient id="robotBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#67e8f9', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                    </linearGradient>
                    
                    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
                        <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.8 }} />
                    </linearGradient>

                    <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
                        <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
                    </linearGradient>

                    <radialGradient id="glowGradient">
                        <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
                    </radialGradient>

                    {/* Filters */}
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>

                    <filter id="strongGlow">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Floating Particles */}
                {particles.map((particle:any) => (
                    <circle
                        key={particle.id}
                        cx={particle.x}
                        cy={particle.y}
                        r={particle.size}
                        fill="#06b6d4"
                        opacity="0.6"
                        className="animate-particle"
                        style={{
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`
                        }}
                    />
                ))}

                {/* Outer Rotating Rings */}
                <g style={{ transformOrigin: '250px 250px', transform: `rotate(${shieldRotation}deg)` }}>
                    <circle
                        cx="250"
                        cy="250"
                        r="180"
                        fill="none"
                        stroke="url(#shieldGradient)"
                        strokeWidth="3"
                        strokeDasharray="10 10"
                        opacity="0.4"
                    />
                    <circle
                        cx="250"
                        cy="250"
                        r="200"
                        fill="none"
                        stroke="url(#shieldGradient)"
                        strokeWidth="2"
                        strokeDasharray="5 15"
                        opacity="0.3"
                    />
                </g>

                {/* Counter-rotating Ring */}
                <g style={{ transformOrigin: '250px 250px', transform: `rotate(${-shieldRotation * 1.5}deg)` }}>
                    <circle
                        cx="250"
                        cy="250"
                        r="190"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="15 5"
                        opacity="0.3"
                    />
                </g>

                {/* Hexagonal Shield */}
                <g style={{ transformOrigin: '250px 250px', transform: `rotate(${shieldRotation * 0.5}deg)` }}>
                    <path
                        d="M 250 120 L 320 160 L 320 240 L 250 280 L 180 240 L 180 160 Z"
                        fill="none"
                        stroke="url(#shieldGradient)"
                        strokeWidth="4"
                        opacity="0.5"
                        filter="url(#glow)"
                    />
                    {/* Hexagon corners */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <circle
                            key={i}
                            cx={250 + 80 * Math.cos((angle - 90) * Math.PI / 180)}
                            cy={250 + 80 * Math.sin((angle - 90) * Math.PI / 180)}
                            r="5"
                            fill="#06b6d4"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    ))}
                </g>

                {/* Energy Core Circle */}
                <circle
                    cx="250"
                    cy="250"
                    r={60 + energyPulse * 0.2}
                    fill="url(#glowGradient)"
                    opacity="0.3"
                />

                {/* Robot Main Body Container */}
                <g className="animate-float-gentle">
                    
                    {/* Main Body Shield Background */}
                    <ellipse
                        cx="250"
                        cy="260"
                        rx="90"
                        ry="100"
                        fill="url(#glowGradient)"
                        opacity="0.2"
                    />

                    {/* Robot Head */}
                    <g>
                        {/* Head Glow */}
                        <rect
                            x="205"
                            y="165"
                            width="90"
                            height="70"
                            rx="15"
                            fill="url(#glowGradient)"
                            opacity="0.3"
                        />
                        
                        {/* Head Main */}
                        <rect
                            x="210"
                            y="170"
                            width="80"
                            height="60"
                            rx="12"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="4"
                            filter="url(#glow)"
                        />

                        {/* Antenna System */}
                        <g>
                            {/* Left Antenna */}
                            <line
                                x1="230"
                                y1="170"
                                x2="220"
                                y2="140"
                                stroke="#06b6d4"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="animate-antenna-left"
                            />
                            <circle cx="220" cy="135" r="6" fill="#06b6d4" className="animate-pulse" filter="url(#strongGlow)"/>
                            
                            {/* Center Antenna */}
                            <line
                                x1="250"
                                y1="170"
                                x2="250"
                                y2="135"
                                stroke="#06b6d4"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                            <circle cx="250" cy="130" r="8" fill="#06b6d4" className="animate-pulse-strong" filter="url(#strongGlow)"/>
                            
                            {/* Right Antenna */}
                            <line
                                x1="270"
                                y1="170"
                                x2="280"
                                y2="140"
                                stroke="#06b6d4"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="animate-antenna-right"
                            />
                            <circle cx="280" cy="135" r="6" fill="#06b6d4" className="animate-pulse" filter="url(#strongGlow)"/>
                        </g>

                        {/* Eyes - Animated */}
                        <g className="animate-blink">
                            {/* Left Eye */}
                            <ellipse cx="230" cy="195" rx="8" ry="10" fill="#06b6d4" filter="url(#strongGlow)"/>
                            <ellipse cx="230" cy="195" rx="4" ry="5" fill="#ffffff"/>
                            
                            {/* Right Eye */}
                            <ellipse cx="270" cy="195" rx="8" ry="10" fill="#06b6d4" filter="url(#strongGlow)"/>
                            <ellipse cx="270" cy="195" rx="4" ry="5" fill="#ffffff"/>
                        </g>

                        {/* Scanning Line across face */}
                        <rect
                            x="210"
                            y={170 + (scanLine % 60)}
                            width="80"
                            height="2"
                            fill="url(#energyGradient)"
                            opacity="0.7"
                        />

                        {/* Mouth/Display */}
                        <rect
                            x="225"
                            y="210"
                            width="50"
                            height="8"
                            rx="4"
                            fill="#164e63"
                            opacity="0.6"
                        />
                        {/* Animated Mouth Bars */}
                        {[0, 1, 2, 3, 4].map(i => (
                            <rect
                                key={i}
                                x={228 + i * 10}
                                y="211"
                                width="3"
                                height={3 + (energyPulse + i * 20) % 4}
                                fill="#06b6d4"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            />
                        ))}
                    </g>

                    {/* Main Body */}
                    <rect
                        x="200"
                        y="235"
                        width="100"
                        height="90"
                        rx="15"
                        fill="url(#robotBodyGradient)"
                        stroke="#06b6d4"
                        strokeWidth="4"
                        filter="url(#glow)"
                    />

                    {/* Central Lock/Shield Icon */}
                    <g transform="translate(250, 270)">
                        {/* Lock Body */}
                        <rect
                            x="-18"
                            y="0"
                            width="36"
                            height="28"
                            rx="5"
                            fill="#164e63"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                        {/* Lock Arc */}
                        <path
                            d="M -12 0 L -12 -12 A 12 12 0 0 1 12 -12 L 12 0"
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                        {/* Lock Core - Animated */}
                        <circle
                            cx="0"
                            cy="14"
                            r={4 + energyPulse * 0.03}
                            fill="#06b6d4"
                            className="animate-pulse"
                            filter="url(#strongGlow)"
                        />
                    </g>

                    {/* Energy Indicators on Body */}
                    <g>
                        {[0, 1, 2].map(i => (
                            <circle
                                key={i}
                                cx={220 + i * 20}
                                cy="305"
                                r="4"
                                fill="#06b6d4"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.3}s` }}
                            />
                        ))}
                    </g>

                    {/* Animated Arms */}
                    <g className="animate-wave-left">
                        {/* Left Arm */}
                        <rect
                            x="160"
                            y="250"
                            width="40"
                            height="16"
                            rx="8"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                        {/* Left Hand */}
                        <circle
                            cx="155"
                            cy="258"
                            r="12"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                        {/* Energy bands on left arm */}
                        {[0, 1, 2].map(i => (
                            <rect
                                key={i}
                                x={165 + i * 10}
                                y="253"
                                width="2"
                                height="10"
                                fill="#06b6d4"
                                opacity="0.6"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </g>

                    <g className="animate-wave-right">
                        {/* Right Arm */}
                        <rect
                            x="300"
                            y="250"
                            width="40"
                            height="16"
                            rx="8"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                        {/* Right Hand */}
                        <circle
                            cx="345"
                            cy="258"
                            r="12"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                        {/* Energy bands on right arm */}
                        {[0, 1, 2].map(i => (
                            <rect
                                key={i}
                                x={305 + i * 10}
                                y="253"
                                width="2"
                                height="10"
                                fill="#06b6d4"
                                opacity="0.6"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </g>

                    {/* Legs */}
                    <g>
                        {/* Left Leg */}
                        <rect
                            x="215"
                            y="325"
                            width="20"
                            height="40"
                            rx="8"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                        <rect
                            x="210"
                            y="360"
                            width="30"
                            height="15"
                            rx="7"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />

                        {/* Right Leg */}
                        <rect
                            x="265"
                            y="325"
                            width="20"
                            height="40"
                            rx="8"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                        <rect
                            x="260"
                            y="360"
                            width="30"
                            height="15"
                            rx="7"
                            fill="url(#robotBodyGradient)"
                            stroke="#06b6d4"
                            strokeWidth="3"
                        />
                    </g>
                </g>

                {/* Orbiting Security Icons */}
                {[
                    { icon: '🔒', angle: 0, radius: 140, color: '#06b6d4' },
                    { icon: '🛡️', angle: 120, radius: 140, color: '#3b82f6' },
                    { icon: '✓', angle: 240, radius: 140, color: '#8b5cf6' }
                ].map((item, i) => {
                    const angle = (shieldRotation * 2 + item.angle) * Math.PI / 180;
                    const x = 250 + item.radius * Math.cos(angle);
                    const y = 250 + item.radius * Math.sin(angle);
                    return (
                        <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                            <circle cx={x} cy={y} r="25" fill={item.color} opacity="0.2" filter="url(#glow)"/>
                            <text x={x} y={y + 8} fontSize="24" textAnchor="middle" fill={item.color}>{item.icon}</text>
                        </g>
                    );
                })}

                {/* Data Streams */}
                {[0, 1, 2, 3].map(i => (
                    <line
                        key={i}
                        x1="250"
                        y1="280"
                        x2={250 + 60 * Math.cos((i * 90 + shieldRotation * 3) * Math.PI / 180)}
                        y2={280 + 60 * Math.sin((i * 90 + shieldRotation * 3) * Math.PI / 180)}
                        stroke="#06b6d4"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        opacity="0.3"
                    />
                ))}

            </svg>
        </div>
    );
};

// Security Badge Component
const SecurityBadge = ({ icon : Icon, title, subtitle, color } : any) => (
    <div className={`relative group cursor-pointer`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
        <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-2xl transition-all">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform"><Icon className="text-blue-500 text-3xl"/></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
    </div>
);

// Compliance Certificate Component
const ComplianceCertificate = ({ name, description, verified } : any) => (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6 hover:shadow-xl transition-all group">
        <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">✓</span>
            </div>
            {verified && (
                <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Verified
                </div>
            )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
    </div>
);

export default function SecurityCompliancePage() {
    const [activeFeature, setActiveFeature] = useState(0);
    const navigate = useNavigate();
    
    const securityFAQ = [
        {
            q: "What encryption standards do you use?",
            a: "We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. All data is encrypted end-to-end with zero-knowledge architecture, meaning even we cannot access your unencrypted data."
        },
        {
            q: "How do you handle access control?",
            a: "We implement role-based access control (RBAC) with granular permissions, multi-factor authentication (MFA), single sign-on (SSO), and IP whitelisting. You have complete control over who can access what data."
        },
        {
            q: "Are you compliant with GDPR and other regulations?",
            a: "Yes! We're compliant with GDPR, HIPAA, SOC 2 Type II, ISO 27001, PCI DSS, and CCPA. We undergo regular third-party audits and maintain comprehensive compliance documentation."
        },
        {
            q: "How often are security audits performed?",
            a: "We conduct internal security audits weekly, third-party penetration testing quarterly, and annual compliance audits. We also have a bug bounty program for responsible disclosure."
        },
        {
            q: "What happens if there's a security incident?",
            a: "We have a 24/7 security operations center (SOC), automated threat detection, and incident response procedures. You'll be notified within 24 hours of any security incident affecting your data."
        }
    ];

    // Auto-rotate security features
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME with Animated Robot */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 overflow-hidden">
                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        animation: 'gridMove 20s linear infinite'
                    }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-sm font-medium text-cyan-400">Enterprise-Grade Security</span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Security &
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Compliance
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in animation-delay-500">
                            Bank-level encryption, enterprise compliance, and AI-powered threat detection.
                            Your data is protected by the most advanced security infrastructure.
                        </p>

                        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-w-xl mx-auto lg:mx-0 mb-16 animate-fade-in animation-delay-1000">
                            {[
                                { value: "256-bit", label: "Encryption", icon:<FaUnlock /> },
                                { value: "99.99%", label: "Uptime SLA", icon: <FaShieldAlt /> },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
                                >
                                    <div className="text-4xl mb-3 group-hover:scale-110 text-cyan-200 transition-transform">{stat.icon}</div>
                                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Animated Robot */}
                    <div className="flex-1 flex justify-center items-center">
                        <AnimatedRobot />
                    </div>
                </div>
            </section>

            {/* Security Layers Section - LIGHT THEME */}
            <section className="py-32 px-6 relative bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Multi-Layer <span className="text-cyan-600">Security</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your data is protected by multiple security layers, from infrastructure to application level,
                            with AI-powered monitoring and real-time threat detection.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Visual Demo - Security Stack */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                            <div className="relative space-y-4">
                                {[
                                    { layer: "Application Security", status: "active", icon: <FaLock />, features: ["WAF Protection", "SQL Injection Prevention", "XSS Protection"] },
                                    { layer: "Data Encryption", status: "active", icon: <FaUnlock />, features: ["AES-256 Encryption", "TLS 1.3", "Zero-Knowledge"] },
                                    { layer: "Access Control", status: "active", icon: <FaUser/>, features: ["RBAC", "MFA", "SSO Integration"] },
                                    { layer: "Network Security", status: "active", icon: <FaShieldAlt />, features: ["DDoS Protection", "Firewall", "VPN Access"] }
                                ].map((item, i) => (
                                    <div 
                                        key={i} 
                                        className={`bg-white border-2 rounded-2xl p-6 transition-all duration-500 ${
                                            activeFeature === i 
                                                ? 'border-cyan-400 shadow-2xl scale-105' 
                                                : 'border-gray-200 hover:border-cyan-300'
                                        }`}
                                        style={{ animationDelay: `${i * 150}ms` }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                                                activeFeature === i 
                                                    ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                                                    : 'bg-gray-100'
                                            }`}>
                                                <span className="text-2xl text-gray-800">{item.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-900">{item.layer}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                    <span className="text-xs text-green-600 font-semibold uppercase">Active</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.features.map((feature, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-semibold rounded-full">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: <GiRobotAntennas />,
                                    title: "AI-Powered Threat Detection",
                                    description: "Machine learning algorithms continuously monitor for suspicious activities, anomalies, and potential security threats in real-time."
                                },
                                {
                                    icon: <IoIosFlash />,
                                    title: "Real-Time Security Monitoring",
                                    description: "24/7 security operations center (SOC) with automated alerts and instant response to any security incidents."
                                },
                                {
                                    icon: <FaArrowsRotate />,
                                    title: "Automated Backup & Recovery",
                                    description: "Daily encrypted backups with point-in-time recovery. Your data is safe and can be restored within minutes."
                                },
                                {
                                    icon: <FaRegChartBar />,
                                    title: "Comprehensive Audit Logs",
                                    description: "Every action is logged and tracked. Complete audit trails for compliance and forensic analysis."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border-2 border-cyan-100 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all group">
                                    <div className="text-4xl group-hover:scale-110 transition-transform text-cyan-600">{feature.icon}</div>
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

            {/* Compliance Certifications - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Enterprise <span className="text-cyan-600">Compliance</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Certified and audited by leading security organizations. We maintain the highest compliance standards
                            so you can focus on growing your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {[
                            { name: "SOC 2 Type II", description: "Comprehensive security, availability, and confidentiality controls audited annually", verified: true },
                            { name: "ISO 27001", description: "International standard for information security management systems", verified: true },
                            { name: "GDPR", description: "Full compliance with EU General Data Protection Regulation", verified: true },
                            { name: "HIPAA", description: "Healthcare data protection and privacy compliance", verified: true },
                            { name: "PCI DSS", description: "Payment card industry data security standards certified", verified: true },
                            { name: "CCPA", description: "California Consumer Privacy Act compliance for US data protection", verified: true }
                        ].map((cert, i) => (
                            <ComplianceCertificate key={i} {...cert} />
                        ))}
                    </div>

                    {/* Security Badges Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <SecurityBadge 
                            icon={FaUnlock } 
                            title="256-bit AES" 
                            subtitle="Military-grade encryption"
                            color="from-cyan-500 to-blue-500"
                        />
                        <SecurityBadge 
                            icon={FaShieldAlt} 
                            title="DDoS Protection" 
                            subtitle="Always-on protection"
                            color="from-blue-500 to-purple-500"
                        />
                        <SecurityBadge 
                            icon={FaLock} 
                            title="Zero Trust" 
                            subtitle="Architecture verified"
                            color="from-purple-500 to-pink-500"
                        />
                        <SecurityBadge 
                            icon={IoCheckmarkSharp} 
                            title="Pen Tested" 
                            subtitle="Quarterly audits"
                            color="from-green-500 to-teal-500"
                        />
                    </div>
                </div>
            </section>

            {/* Real-World Examples Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Trusted by <span className="text-cyan-600">Enterprises</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Companies handling sensitive data trust our security infrastructure to protect their most valuable assets.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                industry: "Healthcare",
                                company: "MediSecure Health Systems",
                                logo: "🏥",
                                challenge: "Needed HIPAA-compliant CRM to handle 500K+ patient records with strict access controls and audit requirements.",
                                solution: "Implemented role-based access, end-to-end encryption, automated compliance reporting, and comprehensive audit logging.",
                                results: [
                                    { metric: "100%", label: "HIPAA compliance maintained" },
                                    { metric: "Zero", label: "Security incidents" },
                                    { metric: "50%", label: "Faster audit completion" }
                                ],
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                industry: "Financial Services",
                                company: "SecureBank Corporation",
                                logo: "🏦",
                                challenge: "Required PCI DSS compliance for handling payment data with real-time fraud detection and secure customer communications.",
                                solution: "Deployed multi-layer encryption, AI-powered fraud detection, secure messaging, and automated compliance monitoring.",
                                results: [
                                    { metric: "99.99%", label: "System uptime achieved" },
                                    { metric: "90%", label: "Fraud detection improvement" },
                                    { metric: "Zero", label: "Data breaches" }
                                ],
                                color: "from-blue-500 to-indigo-500"
                            },
                            {
                                industry: "Legal Services",
                                company: "LegalTech Partners",
                                logo: "⚖️",
                                challenge: "Needed attorney-client privilege protection, document encryption, and secure client portal with granular access controls.",
                                solution: "Implemented zero-knowledge encryption, secure document sharing, client portal with MFA, and detailed access logs.",
                                results: [
                                    { metric: "100%", label: "Client data encrypted" },
                                    { metric: "60%", label: "Faster secure sharing" },
                                    { metric: "Full", label: "Audit trail coverage" }
                                ],
                                color: "from-purple-500 to-pink-500"
                            }
                        ].map((caseStudy, i) => (
                            <CaseStudyCard key={i} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Features Deep Dive - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Advanced <span className="text-cyan-600">Features</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Enterprise-grade security features that protect your data and ensure compliance at every level.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaUnlock className="text-cyan-600 text-4xl"/>,
                                title: "End-to-End Encryption",
                                description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit. Zero-knowledge architecture ensures maximum privacy.",
                                features: ["AES-256 encryption", "TLS 1.3 protocol", "Zero-knowledge"]
                            },
                            {
                                icon: <FaUser className="text-cyan-600 text-4xl"/>,
                                title: "Role-Based Access Control",
                                description: "Granular permissions system with custom roles, MFA, SSO, and IP whitelisting for complete access management.",
                                features: ["Custom roles", "MFA required", "SSO integration"]
                            },
                            {
                                icon: <FaRegChartBar className="text-cyan-600 text-4xl"/>,
                                title: "Comprehensive Audit Logs",
                                description: "Every action is logged with timestamp, user, IP address, and details. Export logs for compliance reporting.",
                                features: ["Complete logging", "Export capability", "Real-time monitoring"]
                            },
                            {
                                icon: <GiRobotAntennas className="text-cyan-600 text-4xl"/>,
                                title: "AI Threat Detection",
                                description: "Machine learning algorithms detect anomalies, suspicious activities, and potential threats in real-time.",
                                features: ["Anomaly detection", "Real-time alerts", "Auto-response"]
                            },
                            {
                                icon: <FaArrowsRotate className="text-cyan-600 text-4xl"/>,
                                title: "Automated Backups",
                                description: "Daily encrypted backups with point-in-time recovery. 30-day retention with geo-redundancy.",
                                features: ["Daily backups", "Point-in-time recovery", "Geo-redundant"]
                            },
                            {
                                icon: <FaShieldAlt className="text-cyan-600 text-4xl"/>,
                                title: "DDoS Protection",
                                description: "Always-on DDoS mitigation with automatic traffic filtering and real-time threat intelligence.",
                                features: ["Always-on protection", "Auto-mitigation", "99.99% uptime"]
                            }
                        ].map((feature, i) => (
                            <FeatureCard key={i} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Process Timeline - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Our Security <span className="text-cyan-600">Process</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            How we ensure your data remains secure 24/7/365
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                step: "01",
                                title: "Continuous Monitoring",
                                description: "24/7 security operations center monitors all systems with AI-powered threat detection and automated response protocols.",
                                icon: <FaRegEye />
                            },
                            {
                                step: "02",
                                title: "Regular Audits",
                                description: "Weekly internal security audits, quarterly penetration testing, and annual third-party compliance certifications.",
                                icon: <IoSearch />
                            },
                            {
                                step: "03",
                                title: "Incident Response",
                                description: "Immediate incident response team activation with containment, analysis, and notification within 24 hours.",
                                icon: <IoIosFlash />
                            },
                            {
                                step: "04",
                                title: "Continuous Improvement",
                                description: "Regular security updates, patches, and improvements based on latest threats and industry best practices.",
                                icon: <FaChartLine  />
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-black">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-lg transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl text-blue-600">{item.icon}</span>
                                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-lg">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Standard vs <span className="text-cyan-600">Enterprise Security</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Why enterprise-grade security matters for your business
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Standard */}
                        <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-red-200 flex items-center justify-center">
                                    <span className="text-2xl">⚠️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-red-600">Standard Security</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Basic password protection only",
                                    "Limited access controls",
                                    "No encryption at rest",
                                    "Manual audit processes",
                                    "Reactive security approach",
                                    "No compliance certifications"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-red-600 text-sm font-bold">✗</span>
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-green-600">Enterprise Security</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Multi-factor authentication (MFA)",
                                    "Role-based access control (RBAC)",
                                    "AES-256 encryption everywhere",
                                    "Automated audit trails",
                                    "AI-powered threat detection",
                                    "Full compliance certifications"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-green-600 text-sm font-bold">✓</span>
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ROI Calculator Teaser */}
                    <MiniCTA
                        title="Calculate Security ROI"
                        description={
                            <>
                                See how much you save by preventing security incidents
                            </>
                        }
                        buttonText="Try ROI Calculator →"
                        onClick={() => navigate("/features/roicalculator")}
                    />
                </div>
            </section>

            {/* Technical Specifications - DARK THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Technical <span className="text-cyan-400">Specifications</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Built on enterprise-grade infrastructure with the highest security standards
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Encryption", value: "AES-256", icon: <FaLock /> },
                            { label: "Uptime SLA", value: "99.99%", icon: <FaShieldAlt /> },
                            { label: "Data Centers", value: "Global", icon: <FaEarthAmericas /> },
                            { label: "Backup Frequency", value: "Daily", icon: <CgNotes /> },
                            { label: "Audit Logs", value: "Unlimited", icon: <FaChartSimple /> },
                            { label: "SOC Response", value: "24/7", icon: <FaRegEye /> },
                            { label: "Pen Testing", value: "Quarterly", icon: <IoSearch /> },
                            { label: "Compliance", value: "6+ Certs", icon: <FaCheck /> }
                        ].map((spec, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform text-cyan-400">{spec.icon}</div>
                                <div className="text-sm text-gray-400 mb-2">{spec.label}</div>
                                <div className="text-3xl font-black text-cyan-400">{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Security Certifications */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-white text-center mb-8">Security Certifications</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "PCI DSS", "CCPA", "FedRAMP", "CSA STAR"].map((cert, i) => (
                                <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/10 transition-all">
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Trusted by <span className="text-cyan-600">Security Leaders</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "We handle millions of sensitive patient records. Their HIPAA-compliant infrastructure and zero-knowledge encryption gave us the confidence to migrate entirely.",
                                author: "Dr. Sarah Johnson",
                                role: "Chief Information Security Officer",
                                company: "HealthTech Systems",
                                avatar: <FaUser/>
                            },
                            {
                                quote: "As a financial institution, security is non-negotiable. Their SOC 2 Type II certification, real-time monitoring, and 99.99% uptime exceeded our requirements.",
                                author: "Michael Chen",
                                role: "VP of Security",
                                company: "SecureBank Corp",
                                avatar: <FaUser/>
                            },
                            {
                                quote: "The AI-powered threat detection caught suspicious activity we didn't even know was happening. Their incident response team was incredible.",
                                author: "Jennifer Williams",
                                role: "IT Director",
                                company: "GlobalTech Industries",
                                avatar: <FaUser/>
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all">
                                <div className="text-6xl opacity-30 text-cyan-600">"</div>
                                <div>
                                    {
                                        Array.from({length:5}).map((_, index) => (
                                            <span key={index} className="text-yellow-400 mb-4 text-2xl">★</span>
                                        ))
                                    }
                                </div>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">{testimonial.quote}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                        {/* <div className="text-sm text-cyan-600 font-semibold">{testimonial.company}</div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={securityFAQ} />

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
                        Your Data Deserves Better Protection
                    </h2>
                    <p className="text-2xl text-cyan-50 mb-12">
                        Join 10,000+ companies trusting enterprise-grade security for their critical data
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
                            Start Free Trial
                        </button>
                        <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Schedule Security Review
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
                            <span>Security consultation included</span>
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
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }

                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
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

                @keyframes gridMove {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(50px); }
                    100% { transform: translateY(0); }
                }

                @keyframes particle {
                    0%, 100% { 
                        transform: translateY(0) scale(1); 
                        opacity: 0.3;
                    }
                    50% { 
                        transform: translateY(-30px) scale(1.5); 
                        opacity: 0.8;
                    }
                }

                @keyframes blink {
                    0%, 90%, 100% { transform: scaleY(1); }
                    95% { transform: scaleY(0.1); }
                }

                @keyframes pulse-strong {
                    0%, 100% { 
                        transform: scale(1); 
                        opacity: 1;
                    }
                    50% { 
                        transform: scale(1.4); 
                        opacity: 0.6;
                    }
                }

                @keyframes wave-left {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-5deg); }
                    75% { transform: rotate(5deg); }
                }

                @keyframes wave-right {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(5deg); }
                    75% { transform: rotate(-5deg); }
                }

                @keyframes antenna-left {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(-10deg); }
                }

                @keyframes antenna-right {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(10deg); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-gentle {
                    animation: float-gentle 4s ease-in-out infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-slide-up {
                    animation: slide-up 1s ease-out forwards;
                }

                .animate-particle {
                    animation: particle 3s ease-in-out infinite;
                }

                .animate-blink {
                    animation: blink 4s ease-in-out infinite;
                    transform-origin: center;
                }

                .animate-pulse-strong {
                    animation: pulse-strong 1.5s ease-in-out infinite;
                }

                .animate-wave-left {
                    animation: wave-left 3s ease-in-out infinite;
                    transform-origin: 200px 258px;
                }

                .animate-wave-right {
                    animation: wave-right 3s ease-in-out infinite;
                    transform-origin: 300px 258px;
                }

                .animate-antenna-left {
                    animation: antenna-left 2s ease-in-out infinite;
                    transform-origin: 230px 170px;
                }

                .animate-antenna-right {
                    animation: antenna-right 2s ease-in-out infinite;
                    transform-origin: 270px 170px;
                }

                .animation-delay-500 { animation-delay: 0.5s; }
                .animation-delay-1000 { animation-delay: 1s; }
            `}</style>
        </div>
    );
}