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
import { FaCalendarAlt, FaHeartbeat } from "react-icons/fa";
import { FaHandHoldingMedical, FaRegChartBar, FaUser } from "react-icons/fa6";
import { GiBrain, GiCrossedChains, GiMoebiusStar } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";

export default function HealthcareCRMLanding() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        practiceName: "",
        specialty: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const healthcareFAQ = [
        {
            q: "Is ibigdata HIPAA compliant?",
            a: "Absolutely. We meet all HIPAA requirements with SOC 2 Type II certification, 256-bit encryption, and comprehensive audit trails. Your patient data is safer with us than on your own servers."
        },
        {
            q: "How does the AI help with patient management?",
            a: "Our AI automates appointment reminders, identifies at-risk patients, predicts no-shows, and suggests optimal appointment times. It learns from your practice patterns to improve efficiency continuously."
        },
        {
            q: "Can we integrate with our existing EHR system?",
            a: "Yes! We integrate with 50+ EHR systems including Epic, Cerner, Allscripts, and more. Data flows bidirectionally while maintaining full security and compliance."
        },
        {
            q: "What's the setup process like?",
            a: "Most practices are fully operational within 24-48 hours. Our team handles data migration, staff training, and system configuration. No technical expertise required from your end."
        },
        {
            q: "How much does it cost?",
            a: "Transparent per-provider pricing starting at $99/month. No hidden fees, no setup costs, no long-term contracts. Enterprise features included at every level."
        }
    ];

    const testimonials = [
        {
            quote: "Patient no-shows dropped 40% in the first month. The AI appointment reminders are incredibly effective.",
            author: "Dr. Sarah Chen",
            role: "Practice Manager",
            company: "Family Health Associates",
            avatar: <FaUser/>,
            metric: "40% reduction in no-shows"
        },
        {
            quote: "We saw 300% ROI within 90 days. The AI identifies patients who need follow-up care automatically.",
            author: "Dr. Michael Rodriguez",
            role: "Chief Medical Officer",
            company: "Metro Health Network",
            avatar: <FaUser/>,
            metric: "300% ROI in 90 days"
        },
        {
            quote: "Staff productivity increased 60%. My team spends more time with patients and less on paperwork.",
            author: "Emily Thompson",
            role: "Practice Administrator",
            company: "Wellness Medical Group",
            avatar: <FaUser/>,
            metric: "60% productivity increase"
        }
    ];

    const specialties = [
        "Primary Care", "Cardiology", "Dermatology", "Orthopedics", "Pediatrics", 
        "OBGYN", "Ophthalmology", "Dentistry", "Mental Health", "Other"
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
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Navigate to thank you page
        navigate("/thank-you-healthcare");
        setIsSubmitting(false);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME with Healthcare Focus */}
            <DarkHeroSection backgroundImage="/healthcareimg.png">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">Healthcare CRM</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Healthcare That
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Actually Works
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Reduce no-shows by 40%, improve patient outcomes, and streamline your practice 
                    with AI-powered healthcare CRM built for modern medical practices.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "40%", label: "Fewer No-Shows", icon:<FaCalendarAlt /> },
                        { value: "60%", label: "More Efficient", icon: <IoIosFlash /> },
                        { value: "300%", label: "ROI in 90 Days", icon: <FaRegChartBar /> },
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
                            <div className=" mb-3 group-hover:scale-110 transition-transform text-3xl flex items-center justify-center text-cyan-100 ">{stat.icon}</div>
                            <div className=" font-bold text-cyan-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300 max-md:col-start-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => document.getElementById('healthcare-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-green-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Get Started Free
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                        Watch Demo
                    </button>
                </div> */}
            </DarkHeroSection>



            {/* Problem Agitation - LIGHT THEME */}
            <section className="py-32 px-6 relative bg-gradient-to-br from-red-50 via-white to-orange-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Healthcare Practices Are Losing Patients
                    </h2>
                    
                    <div className="space-y-8 text-left">
                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"We're losing 30% of our revenue to no-shows and last-minute cancellations."</strong>
                            </p>
                            <p className="text-gray-600">
                                Manual reminder systems aren't working. Patients forget, double-book, or simply don't show up.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"My staff spends more time on paperwork than patient care."</strong>
                            </p>
                            <p className="text-gray-600">
                                Data entry, appointment scheduling, and follow-ups consume hours that should be spent with patients.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"We can't identify patients who need follow-up care."</strong>
                            </p>
                            <p className="text-gray-600">
                                Without intelligent tracking, patients slip through the cracks, leading to poor outcomes and lost revenue.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"Our practice management system can't scale with our growth."</strong>
                            </p>
                            <p className="text-gray-600">
                                Add more providers? Watch your "scalable" system slow to a crawl while costs skyrocket.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl">
                        <p className="text-xl font-bold text-gray-900 mb-4">
                            Healthcare practices lose an average of $150,000 annually to inefficiencies.
                        </p>
                        <p className="text-gray-700">
                            It doesn't have to be this way.
                        </p>
                    </div>
                </div>
            </section>



            {/* Healthcare Solutions - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Healthcare CRM That
                            <br />
                            <span className="text-cyan-600">Works for You</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built by healthcare technology experts who understand the unique challenges of modern medical practices
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl  text-cyan-700 flex-shrink-0"><IoIosFlash/></div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">Automated Patient Management</h3>
                                    <p className="text-gray-600">AI-powered appointment reminders, follow-ups, and care coordination that reduce no-shows by 40% and improve patient engagement.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl  text-cyan-700 flex-shrink-0"><GiBrain /></div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">Predictive Health Insights</h3>
                                    <p className="text-gray-600">Identify at-risk patients, predict no-shows, and suggest optimal appointment times. Our AI learns your practice patterns and improves continuously.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 text-cyan-700 flex items-center justify-center text-2xl flex-shrink-0"><GiCrossedChains /></div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">Seamless EHR Integration</h3>
                                    <p className="text-gray-600">Connect with Epic, Cerner, Allscripts, and 50+ other EHR systems. Patient data flows bidirectionally while maintaining full HIPAA compliance.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl  text-cyan-700 flex-shrink-0"><FaRegChartBar /></div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">Practice Intelligence</h3>
                                    <p className="text-gray-600">Track patient outcomes, monitor practice performance, and identify growth opportunities with real-time analytics and reporting.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">Practice Performance</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                        <span className="text-gray-700">No-Show Rate</span>
                                        <span className="text-2xl font-bold text-green-600">-40%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                        <span className="text-gray-700">Schedule Efficiency</span>
                                        <span className="text-2xl font-bold text-blue-600">+85%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                        <span className="text-gray-700">Patient Satisfaction</span>
                                        <span className="text-2xl font-bold text-purple-600">+92%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                                        <span className="text-gray-700">Staff Productivity</span>
                                        <span className="text-2xl font-bold text-orange-600">+60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Success Stories - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Healthcare Practices
                            <br />
                            <span className="text-cyan-600">Transformed</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real results from medical practices that made the switch
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                industry: "Family Medicine",
                                company: "Family Health Associates",
                                logo: <FaHandHoldingMedical className="text-green-100"/>,
                                challenge: "40% no-show rate was costing $150K annually while staff spent hours on manual appointment management.",
                                solution: "Implemented AI-powered appointment reminders and predictive scheduling to optimize patient flow.",
                                results: [
                                    { metric: "40%", label: "Reduction in No-Shows" },
                                    { metric: "$150K", label: "Annual Savings" },
                                    { metric: "85%", label: "Staff Satisfaction" }
                                ],
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                industry: "Cardiology",
                                company: "Metro Heart Center",
                                logo: <FaHeartbeat className="text-red-100"/>,
                                challenge: "Complex patient follow-up requirements led to missed appointments and poor outcomes tracking.",
                                solution: "Automated care coordination with AI identifying high-risk patients needing immediate attention.",
                                results: [
                                    { metric: "60%", label: "Better Outcomes Tracking" },
                                    { metric: "92%", label: "Patient Satisfaction" },
                                    { metric: "35%", label: "Improved Follow-up Rate" }
                                ],
                                color: "from-red-500 to-pink-500"
                            },
                            {
                                industry: "Multi-Specialty",
                                company: "Wellness Medical Group",
                                logo: <GiMoebiusStar className="text-blue-100" />,
                                challenge: "Managing 50+ providers across 5 locations with disconnected systems and poor visibility.",
                                solution: "Unified platform with real-time analytics and automated workflows for all specialties.",
                                results: [
                                    { metric: "300%", label: "ROI in 90 Days" },
                                    { metric: "50+", label: "Providers Connected" },
                                    { metric: "95%", label: "System Adoption" }
                                ],
                                color: "from-blue-500 to-indigo-500"
                            }
                        ].map((caseStudy, i) => (
                            <CaseStudyCard key={i} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Testimonials Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            What Healthcare
                            <br />
                            <span className="text-cyan-600">Professionals Say</span>
                        </h2>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-12 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="text-8xl text-start pl-40 mb-6 opacity-30">"</div>
                            <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
                                {testimonials[activeTestimonial].quote}
                            </blockquote>
                        </div>

                        <div className="flex items-center justify-center gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl">
                                    {testimonials[activeTestimonial].avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].author}</div>
                                    <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                                    <div className="text-cyan-600 font-semibold">{testimonials[activeTestimonial].company}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold text-green-600">{testimonials[activeTestimonial].metric}</div>
                            </div>
                        </div>

                        {/* Testimonial Indicators */}
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
                    </div>
                </div>
            </section>



            {/* Healthcare Form Section - LIGHT THEME */}
            <section id="healthcare-form" className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Transform Your Practice Today
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">Start your free trial • No credit card required • Setup in 24 hours</p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Smith"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="john@practice.com"
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
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Practice Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.practiceName}
                                        onChange={(e) => handleInputChange('practiceName', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                        placeholder="Family Health Associates"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Specialty *</label>
                                    <select
                                        required
                                        value={formData.specialty}
                                        onChange={(e) => handleInputChange('specialty', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    >
                                        <option value="">Select specialty</option>
                                        {specialties.map((specialty, i) => (
                                            <option key={i} value={specialty}>{specialty}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Tell us about your practice</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    placeholder="What challenges are you facing? What are you hoping to achieve?"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                                />
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-green-50 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-green-700">HIPAA Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-green-700">SOC 2 Certified</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-green-700">No Commitment</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-green-300 via-cyan-600 to-cyan-500 hover:bg-green-700 hover:shadow-xl text-white'
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Setting Up Your Demo...</span>
                                    </div>
                                ) : (
                                    'Start Your Free Trial'
                                )}
                            </button>

                            <p className="text-center text-sm text-gray-500">
                                By submitting this form, you agree to our{' '}
                                <Link href="/privacy" className="text-green-600 hover:underline">Privacy Policy</Link>{' '}
                                and{' '}
                                <Link href="/terms" className="text-green-600 hover:underline">Terms of Service</Link>.
                                Your information is protected under HIPAA.
                            </p>
                        </form>

                        {/* Contact Alternatives */}
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-4">Prefer to talk first? We're here to help.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a 
                                    href="tel:+1-555-123-4567" 
                                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-green-200 text-green-600 rounded-lg font-semibold hover:border-green-300 transition-all"
                                >
                                    <span>📞</span>
                                    <span>Call (555) 123-4567</span>
                                </a>
                                <div className="text-gray-500 text-sm">
                                    Available Mon-Fri 9am-6pm EST
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={healthcareFAQ} />



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
                        Transform Your Practice Today
                    </h2>
                    <p className="text-2xl text-cyan-50 mb-12">
                        Join thousands of healthcare providers working smarter with ibigdata
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button 
                            onClick={() => document.getElementById('healthcare-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                        >
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
                            <span>HIPAA compliant</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">For Practices</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/healthcare/features" className="block hover:text-cyan-600">Features</Link>
                                <Link href="/healthcare/pricing" className="block hover:text-cyan-600">Pricing</Link>
                                <Link href="/healthcare/integrations" className="block hover:text-cyan-600">Integrations</Link>
                                <Link href="/healthcare/security" className="block hover:text-cyan-600">Security</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Specialties</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/healthcare/primary-care" className="block hover:text-cyan-600">Primary Care</Link>
                                <Link href="/healthcare/specialists" className="block hover:text-cyan-600">Specialists</Link>
                                <Link href="/healthcare/hospitals" className="block hover:text-cyan-600">Hospitals</Link>
                                <Link href="/healthcare/clinics" className="block hover:text-cyan-600">Clinics</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/healthcare/blog" className="block hover:text-cyan-600">Healthcare Blog</Link>
                                <Link href="/healthcare/webinars" className="block hover:text-cyan-600">Webinars</Link>
                                <Link href="/healthcare/case-studies" className="block hover:text-cyan-600">Case Studies</Link>
                                <Link href="/healthcare/support" className="block hover:text-cyan-600">Support</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Compliance</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/healthcare/hipaa" className="block hover:text-cyan-600">HIPAA Compliance</Link>
                                <Link href="/healthcare/soc2" className="block hover:text-cyan-600">SOC 2 Type II</Link>
                                <Link href="/healthcare/security" className="block hover:text-cyan-600">Security</Link>
                                <Link href="/healthcare/privacy" className="block hover:text-cyan-600">Privacy Policy</Link>
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