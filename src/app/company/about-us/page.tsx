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
import { FaChartLine, FaCloud, FaFaceAngry, FaHandshake, FaMobileRetro, FaRegHeart, FaRegLightbulb, FaSackDollar, FaUsers } from "react-icons/fa6";
import { FaRegCalendarAlt, FaShieldAlt, FaUser } from "react-icons/fa";
import { IoCart, IoHome } from "react-icons/io5";
import { IoIosFlash, IoIosRocket } from "react-icons/io";
import { GiCrossedChains, GiFamilyHouse, GiRobotAntennas } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import SuccessStoryForAll from "@/components/common/successStory/SuccessStoryForAll";

export default function AboutPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const navigate = useNavigate();

    const aboutFAQ = [
        {
            q: "What makes ibigdata different from other CRM platforms?",
            a: "ibigdata combines powerful AI automation with intuitive design, making enterprise-level CRM capabilities accessible to growing businesses without the complexity or cost of traditional solutions."
        },
        {
            q: "How long has ibigdata been in business?",
            a: "Founded in 2019, ibigdata has been serving businesses for 5 years, with over 10,000 companies trusting our platform to manage their customer relationships and drive growth."
        },
        {
            q: "Is my data secure with ibigdata?",
            a: "Absolutely. We use enterprise-grade security with SOC 2 Type II certification, 256-bit encryption, and comply with GDPR, HIPAA, and other major data protection regulations."
        },
        {
            q: "What kind of support does ibigdata provide?",
            a: "We offer 24/7 customer support via chat, email, and phone, plus comprehensive documentation, video tutorials, and a dedicated customer success manager for enterprise accounts."
        },
        {
            q: "Can ibigdata scale with my business?",
            a: "Yes! Our platform automatically scales from startup to enterprise, handling millions of records and thousands of users without performance degradation or expensive upgrades."
        }
    ];

    const testimonials = [
        {
            quote: "ibigdata transformed how we manage customer relationships. The AI features alone save us 10+ hours every week.",
            author: "Sarah Chen",
            role: "CEO",
            company: "TechFlow Solutions",
            avatar: <FaUser/>,
            metric: "10+ hours saved weekly"
        },
        {
            quote: "The automation capabilities are incredible. What used to take our team days now happens automatically.",
            author: "Michael Rodriguez",
            role: "VP of Sales",
            company: "Growth Dynamics",
            avatar: <FaUser/>,
            metric: "3x productivity increase"
        },
        {
            quote: "Best CRM investment we've made. The ROI was clear within the first month of implementation.",
            author: "Emily Thompson",
            role: "Operations Director",
            company: "MarketMax Inc",
            avatar: <FaUser/>,
            metric: "300% ROI in 30 days"
        }
    ];

    const companyMetrics = [
        { value: "10,000+", label: "Happy Customers", icon: <IoHome /> },
        { value: "5", label: "Years in Business", icon: <FaRegCalendarAlt /> },
        { value: "99.99%", label: "Uptime SLA", icon: <FaShieldAlt /> },
        { value: "50M+", label: "Contacts Managed", icon: <FaUsers /> }
    ];

    const teamMembers = [
        {
            name: "Alex Rodriguez",
            role: "Founder & CEO",
            avatar: <FaUser/>,
            bio: "Former Salesforce executive with 15+ years in CRM innovation"
        },
        {
            name: "Sarah Chen",
            role: "CTO",
            avatar: <FaUser/>,
            bio: "AI/ML expert from Google, leading our intelligent automation"
        },
        {
            name: "Michael Thompson",
            role: "Head of Product",
            avatar: <FaUser/>,
            bio: "UX visionary focused on making complex tools beautifully simple"
        },
        {
            name: "Emily Davis",
            role: "VP of Customer Success",
            avatar: <FaUser/>,
            bio: "Customer experience expert ensuring every user achieves success"
        }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME */}
            <DarkHeroSection backgroundImage="/aboutpageimg.png" className="">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">About ibigdata</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    We Make CRM
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Actually Simple
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Built by former Salesforce executives who believe growing businesses deserve 
                    powerful CRM without the complexity, cost, or consultants.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {companyMetrics.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white/5 text-3xl max-md:text-xl backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all group"
                        >
                            <div className="mb-3 group-hover:scale-110 transition-transform text-cyan-100 flex items-center justify-center text-3xl">{stat.icon}</div>
                            <div className="font-bold text-cyan-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
{/* 
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => navigate("/signup")}
                        className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Get Started Free
                    </button>
                    <button 
                        onClick={() => navigate("/demo")}
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all"
                    >
                        Watch Demo
                    </button>
                </div> */}
            </DarkHeroSection>



            {/* Brand Story & Mission - LIGHT THEME */}
            <section className="py-32 px-4 relative bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Our <span className="text-cyan-600">Story</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Born from frustration with overcomplicated CRM systems
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-6">
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 shadow-lg">
                                <div className="text-3xl mb-4">😤</div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">The Problem We Saw</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    After 15+ years in enterprise CRM, our founders kept seeing the same pattern: 
                                    powerful platforms that required expensive consultants, months of training, and 
                                    complex implementations that small teams couldn't afford or manage.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 shadow-lg">
                                <div className="text-3xl mb-4">💡</div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">Our Solution</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We built ibigdata to give growing businesses enterprise-level CRM power 
                                    with consumer-app simplicity. No consultants needed, no steep learning curves—
                                    just powerful tools that work from day one.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 shadow-2xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">Our Mission</h3>
                                <blockquote className="text-lg text-gray-700 italic mb-6 border-l-4 border-cyan-500 pl-6">
                                    "Democratize powerful CRM technology so every business—regardless of size—
                                    can build meaningful customer relationships and achieve sustainable growth."
                                </blockquote>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                        <span className="text-gray-700">Make enterprise CRM accessible to all</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                        <span className="text-gray-700">Eliminate complexity without sacrificing power</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                        <span className="text-gray-700">Help businesses grow through better relationships</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* USP & Differentiation - LIGHT THEME */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Why Growing Businesses
                            <br />
                            <span className="text-cyan-600">Choose ibigdata</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We built the CRM we wished we had—powerful enough for enterprise needs, 
                            simple enough for any team to use
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: <IoIosFlash/>,
                                title: "Works in 5 Minutes",
                                description: "Not 5 months. Get up and running with your existing data instantly.",
                                detail: "Import contacts, connect tools, and start seeing value today—not weeks from now."
                            },
                            {
                                icon: <GiRobotAntennas/>,
                                title: "AI That Actually Helps",
                                description: "Smart automation that learns your business and gets better over time.",
                                detail: "Our AI suggests actions, predicts outcomes, and handles routine tasks so you can focus on relationships."
                            },
                            {
                                icon: <FaSackDollar />,
                                title: "Transparent Pricing",
                                description: "No hidden fees, no surprises, no consultants required.",
                                detail: "Simple per-user pricing that scales with you. Enterprise features included at every level."
                            },
                            {
                                icon: <GiCrossedChains />,
                                title: "Connects to Everything",
                                description: "2,000+ integrations with the tools you already use.",
                                detail: "From Gmail to Slack to Salesforce—if you use it, we integrate with it. No workarounds needed."
                            },
                            {
                                icon: <FaMobileRetro />,
                                title: "Mobile-First Design",
                                description: "Full CRM power in your pocket. Work from anywhere.",
                                detail: "Every feature works perfectly on mobile. Update deals, check insights, and collaborate on the go."
                            },
                            {
                                icon: <FaShieldAlt />,
                                title: "Enterprise Security",
                                description: "Bank-level security without the enterprise complexity.",
                                detail: "SOC 2 certified, GDPR compliant, with 99.99% uptime. Your data is safer than in your own servers."
                            }
                        ].map((usp, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform text-cyan-600">{usp.icon}</div>
                                <h3 className="text-xl font-black text-gray-900 mb-4">{usp.title}</h3>
                                <p className="text-gray-700 font-semibold mb-3">{usp.description}</p>
                                <p className="text-sm text-gray-600">{usp.detail}</p>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 shadow-xl">
                        <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">How We Stack Up</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4 flex justify-center items-center text-cyan-600"><GiFamilyHouse /></div>
                                <h4 className="font-bold text-gray-900 mb-2">Traditional CRM</h4>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>Complex setup</li>
                                    <li>Expensive consultants</li>
                                    <li>Steep learning curve</li>
                                    <li>Hidden costs</li>
                                </ul>
                            </div>
                            <div className="text-center md:border-l md:border-r border-gray-200 p-4 md:p-8">
                                <div className="text-4xl mb-4 flex justify-center items-center text-cyan-600"><IoIosRocket/></div>
                                <h4 className="font-bold text-gray-900 mb-2">ibigdata</h4>
                                <ul className="text-sm text-gray-700 space-y-2">
                                    <li>5-minute setup</li>
                                    <li>AI-powered automation</li>
                                    <li>Intuitive interface</li>
                                    <li>Transparent pricing</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4 flex justify-center items-center text-cyan-600"><FaRegLightbulb /></div>
                                <h4 className="font-bold text-gray-900 mb-2">The Difference</h4>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>93% faster deployment</li>
                                    <li>40% higher adoption</li>
                                    <li>60% lower total cost</li>
                                    <li>Enterprise features included</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Team Section - LIGHT THEME */}
            <section className="py-32 px-4 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Meet the <span className="text-cyan-600">Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Industry veterans committed to making CRM work for everyone
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 text-center hover:border-cyan-300 hover:shadow-xl transition-all group">
                                <div className="text-5xl mb-6 text-gray-900 flex justify-center items-center group-hover:scale-110 transition-transform">{member.avatar}</div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{member.name}</h3>
                                <div className="text-cyan-600 font-semibold mb-4">{member.role}</div>
                                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>

                    {/* Company Values */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 shadow-xl">
                        <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Our Core Values</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: <FaRegHeart />,
                                    title: "Customer First",
                                    description: "Every decision starts with 'How does this help our customers succeed?'"
                                },
                                {
                                    icon: <BsTools />,
                                    title: "Simplicity Wins",
                                    description: "Powerful doesn't have to mean complicated. We make complex things simple."
                                },
                                {
                                    icon: <GiRobotAntennas />,
                                    title: "Move Fast, Iterate Faster",
                                    description: "We ship improvements weekly, not yearly. Your feedback drives our roadmap."
                                },
                                {
                                    icon: <FaHandshake />,
                                    title: "Transparency Always",
                                    description: "Clear pricing, honest communication, and open about what we're building."
                                }
                            ].map((value, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="text-3xl flex items-center justify-center text-cyan-600">{value.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Social Proof Carousel - LIGHT THEME */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            What Our Customers
                            <br />
                            <span className="text-cyan-600">Say About Us</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real stories from businesses growing with ibigdata
                        </p>
                    </div>
{/* 
                    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl py-12 px-4 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="text-8xl mb-6 text-start md:ml-40 opacity-20">"</div>
                            <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                                {testimonials[activeTestimonial].quote}
                            </blockquote>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center  gap-8">
                            <div className="flex items-center gap-4 ">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl">
                                    {testimonials[activeTestimonial].avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].author}</div>
                                    <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                                    <div className="text-cyan-600 font-semibold">{testimonials[activeTestimonial].company}</div>
                                </div>
                            </div>
                            <div className="md:text-right">
                                <div className="text-2xl font-bold  text-green-600">{testimonials[activeTestimonial].metric}</div>
                            </div>
                        </div>

                        
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTestimonial(i)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        i === activeTestimonial ? 'bg-cyan-500' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div> */}
                    <SuccessStoryForAll
                    testimonials={testimonials}
                    activeIndex={activeTestimonial}
                    onChange={setActiveTestimonial}
                    quoteIcon={<div className="">"</div>}
                    />
                </div>
            </section>



            {/* Success Stories - LIGHT THEME */}
            <section className="py-32 px-4 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Success <span className="text-cyan-600">Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            How businesses like yours transformed with ibigdata
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                industry: "SaaS Startup",
                                company: "CloudSync Pro",
                                logo: <FaCloud className="text-cyan-100"/>,
                                challenge: "Struggling to manage 500+ leads with spreadsheets and basic CRM tools that couldn't scale.",
                                solution: "Implemented ibigdata with AI automation and saw immediate improvements in lead management.",
                                results: [
                                    { metric: "300%", label: "Lead Conversion Increase" },
                                    { metric: "10 hrs", label: "Time Saved Weekly" },
                                    { metric: "$2M", label: "Additional Revenue" }
                                ],
                                color: "from-blue-500 to-indigo-500"
                            },
                            {
                                industry: "Marketing Agency",
                                company: "Growth Dynamics",
                                logo: <FaChartLine className="text-cyan-100"/>,
                                challenge: "Client data scattered across multiple tools, making it impossible to track ROI and manage relationships effectively.",
                                solution: "Consolidated all client interactions into ibigdata with full integration stack.",
                                results: [
                                    { metric: "85%", label: "Client Retention" },
                                    { metric: "40%", label: "Efficiency Gain" },
                                    { metric: "50+", label: "Clients Managed" }
                                ],
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                industry: "E-commerce",
                                company: "ShopFlow",
                                logo: <IoCart className="text-cyan-100"/>,
                                challenge: "Rapid growth created chaos in customer communications and follow-up processes.",
                                solution: "Automated customer journey tracking and personalized communication at scale.",
                                results: [
                                    { metric: "60%", label: "Customer Satisfaction" },
                                    { metric: "25%", label: "Repeat Purchase Rate" },
                                    { metric: "5x", label: "Support Efficiency" }
                                ],
                                color: "from-purple-500 to-pink-500"
                            }
                        ].map((story, i) => (
                            <CaseStudyCard key={i} caseStudy={story} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Final CTA Section - LIGHT THEME */}
            <section className="py-18 px-4 bg-white">
                <div className="max-w-4xl md:mx-auto text-center">
                    <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-4 text-white shadow-2xl">
                        <h2 className="text-4xl lg:text-5xl font-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Ready to Transform Your Customer Relationships
                        </h2>
                        <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
                            Join thousands of businesses that chose simplicity over complexity. 
                            Start your free trial today—no credit card required.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <button 
                                onClick={() => navigate("/signup")}
                                className="px-10 py-4 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                            >
                                Start Free Trial
                            </button>
                            <button 
                                onClick={() => navigate("/demo")}
                                className="px-10 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/30 transition-all"
                            >
                                Schedule Demo
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 text-cyan-50 text-sm">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>14-day free trial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Setup in 5 minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>24/7 support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={aboutFAQ} />



            {/* Footer */}
            <footer className="py-12 px-4 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/about" className="block hover:text-cyan-600">About Us</Link>
                                <Link href="/careers" className="block hover:text-cyan-600">Careers</Link>
                                <Link href="/press" className="block hover:text-cyan-600">Press</Link>
                                <Link href="/contact" className="block hover:text-cyan-600">Contact</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/features" className="block hover:text-cyan-600">Features</Link>
                                <Link href="/pricing" className="block hover:text-cyan-600">Pricing</Link>
                                <Link href="/integrations" className="block hover:text-cyan-600">Integrations</Link>
                                <Link href="/ai-core" className="block hover:text-cyan-600">AI Core</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/docs" className="block hover:text-cyan-600">Documentation</Link>
                                <Link href="/tutorials" className="block hover:text-cyan-600">Tutorials</Link>
                                <Link href="/blog" className="block hover:text-cyan-600">Blog</Link>
                                <Link href="/community" className="block hover:text-cyan-600">Community</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/privacy" className="block hover:text-cyan-600">Privacy Policy</Link>
                                <Link href="/terms" className="block hover:text-cyan-600">Terms of Service</Link>
                                <Link href="/security" className="block hover:text-cyan-600">Security</Link>
                                <Link href="/compliance" className="block hover:text-cyan-600">Compliance</Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                        <p>© 2024 ibigdata. All rights reserved.</p>
                    </div>
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