"use client";

import CaseStudyCard from "@/components/common/cards/CaseStudyCard";
import FeatureCard from "@/components/common/cards/FeatureCard";
import { MiniCTA } from "@/components/common/cta/MiniCTA";
import { FAQSection } from "@/components/common/FAQ/FAQSection";
import Scrollindicator from "@/components/common/indicators/Scrollindicator";
import DarkHeroSection from "@/components/common/sections/DarkHeroSection";
import { useNavigate } from "@/hooks/useNavigate";
import Link from "next/link";
import { features } from "process";
import { useState, useEffect } from "react";
import { FaHandshakeSimple, FaLock, FaMobileRetro, FaRegChartBar, FaSackDollar, FaScaleBalanced, FaUser, FaUsers } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";

export default function FinanceLandingPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "personal-loan", // personal-loan, investment, insurance, financial-planning
        amount: "",
        timeline: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const financeFAQ = [
        {
            q: "How quickly will I get approved?",
            a: "Most applications receive approval within minutes. Our AI-powered system analyzes your information instantly and provides immediate pre-qualification decisions."
        },
        {
            q: "Is my financial information secure?",
            a: "Absolutely. We use bank-level encryption and are fully compliant with financial data protection regulations. Your information is encrypted and never shared without your explicit consent."
        },
        {
            q: "What are your rates and fees?",
            a: "We offer competitive rates starting from 5.99% APR with no hidden fees. Your exact rate depends on your credit profile and will be clearly disclosed before you accept any offer."
        },
        {
            q: "How does the process work?",
            a: "Simple: Apply online in minutes, get instant pre-approval, review your personalized offers, and receive funds as quickly as the same day. No paperwork, no hassle."
        },
        {
            q: "Will checking my rate affect my credit score?",
            a: "No. Checking your rate with us uses a soft credit inquiry that doesn't impact your credit score. Only when you accept an offer do we perform a hard credit check."
        }
    ];

    const testimonials = [
        {
            quote: "Approved in 5 minutes and saved $200/month on my loan. The process was incredibly smooth and transparent.",
            author: "Sarah Johnson",
            role: "Homeowner",
            company: "Dallas, TX",
            avatar: <FaUser/>,
            metric: "$200/month savings"
        },
        {
            quote: "The investment platform helped me grow my portfolio by 34% in the first year. Better than any advisor I've worked with.",
            author: "Michael Chen",
            role: "Investor",
            company: "San Francisco, CA",
            avatar: <FaUser/>,
            metric: "34% portfolio growth"
        },
        {
            quote: "Consolidated my debt and cut my interest rate in half. The whole process took less than 10 minutes.",
            author: "Emily Rodriguez",
            role: "Entrepreneur",
            company: "Miami, FL",
            avatar: <FaUser/>,
            metric: "50% rate reduction"
        }
    ];

    const serviceTypes = [
        { value: "personal-loan", label: "Personal Loan" },
        { value: "investment", label: "Investment Account" },
        { value: "insurance", label: "Insurance Quote" },
        { value: "financial-planning", label: "Financial Planning" }
    ];

    const loanAmounts = [
        "Under $5,000", "$5,000 - $25,000", "$25,000 - $50,000", 
        "$50,000 - $100,000", "$100,000 - $250,000", "Over $250,000"
    ];

    const timelines = [
        "ASAP (within 24 hours)", "Within 1 week", "Within 1 month", 
        "Within 3 months", "Just exploring options"
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call and CRM integration
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success and simulate CRM automation
        setShowSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
            setShowSuccess(false);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                serviceType: "personal-loan",
                amount: "",
                timeline: "",
                message: ""
            });
        }, 3000);
        
        setIsSubmitting(false);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME with Finance Focus */}
            <DarkHeroSection backgroundImage="/finance-hero.jpg">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">Fast Approval • No Hidden Fees</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Get Pre-Approved
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        In Minutes
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Fast approvals, competitive rates, and zero hidden fees. Join 50,000+ customers 
                    who saved an average of $247/month on their loans.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "5 Min", label: "Approval Time", icon: <IoIosFlash /> },
                        { value: "5.99%", label: "Starting APR", icon: <FaSackDollar /> },
                        { value: "50K+", label: "Happy Customers", icon: <FaUsers /> },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className={`
        bg-white/5 text-4xl max-md:text-2xl backdrop-blur-sm
        border border-white/10 rounded-2xl p-4 md:p-6
        hover:bg-white/10 transition-all group
        ${i === 2 ? "max-md:col-span-2" : ""}
      `}
                        >
                            <div className=" mb-3 group-hover:scale-110 transition-transform flex items-center justify-center text-cyan-100">{stat.icon}</div>
                            <div className=" font-bold text-cyan-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300 max-md:col-start-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => document.getElementById('finance-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-green-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Apply Now - It's Free
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                        Calculate Savings
                    </button>
                </div> */}
            </DarkHeroSection>



            {/* Problem → Solution Section - LIGHT THEME */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-red-50 via-white to-orange-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className= "text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Tired of Financial Frustration?
                    </h2>
                    
                    <div className="space-y-8 text-left">
                        <div className="bg-white border-l-4 border-red-500 p-4 md:p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"I'm paying way too much interest on my loans."</strong>
                            </p>
                            <p className="text-gray-600">
                                High interest rates are costing you thousands. Traditional banks charge premium rates while offering little transparency.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-orange-500 p-4 md:p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"The approval process takes forever and requires tons of paperwork."</strong>
                            </p>
                            <p className="text-gray-600">
                                Weeks of waiting, endless documents, and confusing requirements. Meanwhile, opportunities pass you by.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-yellow-500 p-4 md:p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"I can't find competitive rates that actually save me money."</strong>
                            </p>
                            <p className="text-gray-600">
                                Hidden fees, prepayment penalties, and surprise charges eat into your savings. The fine print always wins.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-blue-500 p-4 md:p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"I'm confused by all the financial options and don't know what's best for me."</strong>
                            </p>
                            <p className="text-gray-600">
                                Complex terms, conflicting advice, and pressure to make quick decisions. It's overwhelming and stressful.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 p-4 md:p-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl">
                        <p className="text-xl font-bold text-gray-900 mb-4">
                            The average person loses $3,200 annually to high interest rates and hidden fees.
                        </p>
                        <p className="text-gray-700">
                            You deserve better.
                        </p>
                    </div>
                </div>
            </section>



            {/* Value Proposition - LIGHT THEME */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Finance That Actually
                            <br />
                            <span className="text-cyan-600">Works for You</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Smart financial solutions designed to save you money and time
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: <IoIosFlash className="text-cyan-500"/>,
                               features:[],
                                title: "Lightning Fast Approvals",
                                description: "Get pre-approved in minutes, not weeks. Our AI-powered system analyzes your profile instantly and provides immediate decisions."
                            },
                            {
                                icon: <FaSackDollar className="text-cyan-500"/>,
                                features:[],
                                title: "Better Rates, Guaranteed",
                                description: "Access rates starting at 5.99% APR. We negotiate with multiple lenders to ensure you get the best possible deal."
                            },
                            {
                                icon: <FaLock className="text-cyan-500"/>,
                               features:[],
                                title: "Bank-Level Security",
                                description: "Your financial data is encrypted and protected with the same security standards used by major banks. Full transparency, zero risk."
                            },
                            {
                                icon: <FaRegChartBar className="text-cyan-500"/>,
                                features:[],
                                title: "Smart Financial Planning",
                                description: "AI-powered recommendations help you make better financial decisions and optimize your money for maximum returns."
                            },
                            {
                                icon: <FaHandshakeSimple className="text-cyan-500"/>,
                               features:[],
                                title: "Personalized Service",
                                description: "Get matched with financial solutions tailored to your unique situation. No one-size-fits-all approaches here."
                            },
                            {
                                icon: <FaMobileRetro className="text-cyan-500" />,
                                features:[],
                                title: "Mobile-First Experience",
                                description: "Manage your finances from anywhere. Apply, track, and manage everything from your phone with our intuitive app."
                            }
                        ].map((benefit, i) => (
                            <FeatureCard key={i} feature={benefit} />
                        ))}
                    </div>

                    {/* Process Highlight */}
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-black text-gray-900 mb-6">Your Financial Success in 3 Simple Steps</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">1️⃣</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Apply</div>
                                <div className="text-gray-600">Fill out our simple 2-minute application</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">2️⃣</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Get Approved</div>
                                <div className="text-gray-600">Receive instant pre-approval with multiple offers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">3️⃣</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Save Money</div>
                                <div className="text-gray-600">Start saving with your better rate immediately</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Trust & Credibility - LIGHT THEME */}
            <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Trusted by Thousands of
                            <br />
                            <span className="text-cyan-600">Satisfied Customers</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real success stories from people who transformed their finances with us
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 hover:border-cyan-300 hover:shadow-xl transition-all">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                        <div className="text-sm text-cyan-600 font-semibold">{testimonial.company}</div>
                                    </div>
                                </div>
                                <blockquote className="text-gray-700 italic mb-4">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="bg-green-50 rounded-lg p-3">
                                    <div className="text-sm font-semibold text-green-700">{testimonial.metric}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Indicators */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 text-center">
                        <h3 className="text-2xl font-black text-gray-900 mb-8">Trusted & Secure</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl mb-2 flex items-center justify-center text-cyan-500"><FaLock/></div>
                                <div className="font-bold text-gray-900 mb-1">Bank-Level Security</div>
                                <div className="text-sm text-cyan-500">256-bit encryption</div>
                            </div>
                            <div>
                                <div className="text-3xl flex items-center justify-center text-cyan-500 mb-2"><GiFamilyHouse /></div>
                                <div className="font-bold text-gray-900 mb-1">FDIC Insured</div>
                                <div className="text-sm text-cyan-500">Up to $250K protection</div>
                            </div>
                            <div>
                                <div className="text-3xl mb-2 flex items-center justify-center text-cyan-500"><FaRegChartBar /></div>
                                <div className="font-bold text-gray-900 mb-1">Real-Time Data</div>
                                <div className="text-sm text-cyan-500">Always accurate</div>
                            </div>
                            <div>
                                <div className="text-3xl mb-2 flex items-center justify-center text-cyan-500"><FaScaleBalanced /></div>
                                <div className="font-bold text-gray-900 mb-1">Fully Compliant</div>
                                <div className="text-sm text-cyan-500">Regulatory approved</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Finance Form Section - LIGHT THEME */}
            <section id="finance-form" className="py-16 md:py-32 px-4 md:px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Take Control of Your Finances Today
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">Start saving money in minutes • No commitment required</p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="John Smith"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="john@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">What are you looking for? *</label>
                                    <select
                                        value={formData.serviceType}
                                        onChange={(e) => handleInputChange('serviceType', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    >
                                        <option value="personal-loan">Personal Loan</option>
                                        <option value="investment">Investment Account</option>
                                        <option value="insurance">Insurance Quote</option>
                                        <option value="financial-planning">Financial Planning</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Amount Range</label>
                                    <select
                                        value={formData.amount}
                                        onChange={(e) => handleInputChange('amount', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    >
                                        <option value="">Select amount range</option>
                                        {loanAmounts.map((amount, i) => (
                                            <option key={i} value={amount}>{amount}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Timeline</label>
                                <select
                                    value={formData.timeline}
                                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    >
                                    <option value="">When do you need this?</option>
                                    {timelines.map((timeline, i) => (
                                        <option key={i} value={timeline}>{timeline}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Tell us about your situation</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    placeholder="What's your biggest financial challenge? What are you hoping to achieve?"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                                />
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-cyan-50 rounded-lg p-4">
                                <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center">
                                            <span className="text-cyan-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-cyan-700">Bank-level security</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-cyan-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-cyan-700">No commitment</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center">
                                            <span className="text-cyan-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-cyan-700">Privacy protected</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-cyan-600 hover:bg-cyan-700 hover:shadow-xl text-white'
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Getting Your Offers...</span>
                                    </div>
                                ) : (
                                    'Get My Free Quote'
                                )}
                            </button>

                            <p className="text-center text-sm text-gray-500">
                                By submitting this form, you agree to our{' '}
                                <Link href="/privacy" className="text-cyan-600 hover:underline">Privacy Policy</Link>{' '}
                                and{' '}
                                <Link href="/terms" className="text-cyan-600 hover:underline">Terms of Service</Link>.
                                Your information is protected and will never be shared with third parties.
                            </p>
                        </form>

                        {/* Contact Alternatives */}
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-4">Prefer to talk first? We're here to help.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a 
                                    href="tel:+1-555-123-4567" 
                                    className="flex items-center gap-2 px-4 md:px-6 py-3 bg-white border-2 border-green-200 text-cyan-600 rounded-lg font-semibold hover:border-green-300 transition-all"
                                >
                                    <span>📞</span>
                                    <span>Call (555) 123-4567</span>
                                </a>
                                <div className="text-gray-500 text-sm">
                                    Available Mon-Fri 8am-6pm EST
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={financeFAQ} />



            {/* Final CTA Section - DARK THEME */}
            <section className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-4xl mx-auto relative text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Take Control of Your Finances Today
                    </h2>
                    <p className="text-2xl text-green-50 mb-12">
                        Join 50,000+ customers who saved money and gained financial freedom
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button 
                            onClick={() => document.getElementById('finance-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                        >
                            Get Free Quote
                        </button>
                        <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Speak to Expert
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-green-50">
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
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Money-back guarantee</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="py-12 px-4 md:px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">For Individuals</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/finance/personal-loans" className="block hover:text-green-600">Personal Loans</Link>
                                <Link href="/finance/investments" className="block hover:text-green-600">Investments</Link>
                                <Link href="/finance/insurance" className="block hover:text-green-600">Insurance</Link>
                                <Link href="/finance/planning" className="block hover:text-green-600">Financial Planning</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">For Businesses</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/finance/business-loans" className="block hover:text-green-600">Business Loans</Link>
                                <Link href="/finance/merchant-services" className="block hover:text-green-600">Merchant Services</Link>
                                <Link href="/finance/payroll" className="block hover:text-green-600">Payroll Solutions</Link>
                                <Link href="/finance/commercial" className="block hover:text-green-600">Commercial Services</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/finance/calculators" className="block hover:text-green-600">Calculators</Link>
                                <Link href="/finance/blog" className="block hover:text-green-600">Financial Blog</Link>
                                <Link href="/finance/guides" className="block hover:text-green-600">Guides & Tips</Link>
                                <Link href="/finance/support" className="block hover:text-green-600">Support</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/privacy" className="block hover:text-green-600">Privacy Policy</Link>
                                <Link href="/terms" className="block hover:text-green-600">Terms of Service</Link>
                                <Link href="/security" className="block hover:text-green-600">Security</Link>
                                <Link href="/compliance" className="block hover:text-green-600">Compliance</Link>
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