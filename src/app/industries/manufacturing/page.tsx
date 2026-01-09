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

export default function ManufacturingCRMLanding() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        industry: "manufacturing", 
        companySize: "50-200",
        primaryChallenge: "",
        currentSystem: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const manufacturingFAQ = [
        {
            q: "How long does implementation typically take?",
            a: "Most manufacturing clients are fully operational within 4-6 weeks. Our team handles data migration from your existing ERP/MES systems and provides comprehensive training to ensure smooth adoption."
        },
        {
            q: "Will this integrate with our existing ERP/MES systems?",
            a: "Absolutely. We integrate seamlessly with SAP, Oracle, Microsoft Dynamics, and 50+ other manufacturing systems. Data flows bidirectionally while maintaining full security and compliance."
        },
        {
            q: "How does this handle complex B2B sales cycles?",
            a: "Our CRM is built specifically for manufacturing with features like multi-stage quoting, custom order tracking, long lead time management, and supply chain coordination that generic CRMs simply don't have."
        },
        {
            q: "What kind of ROI can we expect?",
            a: "Most clients see 25-40% improvement in sales efficiency, 30% reduction in lead times, and 20% increase in customer retention within the first year. ROI is typically achieved in 6-8 months."
        },
        {
            q: "Is our data secure and compliant?",
            a: "Absolutely. We meet all manufacturing industry security standards with SOC 2 Type II certification, GDPR compliance, and bank-level encryption. Your proprietary data is protected with the highest security standards."
        }
    ];

    const testimonials = [
        {
            quote: "Lead times dropped from 8 weeks to 5 weeks. Our sales team can now track custom orders through production in real-time. Game changer for our manufacturing operations.",
            author: "Sarah Chen",
            role: "VP of Sales",
            company: "Precision Manufacturing Corp",
            avatar: "👩‍💼",
            metric: "37% reduction in lead times"
        },
        {
            quote: "The ERP integration eliminated 15 hours of manual work per week. Our sales pipeline is now perfectly synced with production schedules.",
            author: "Michael Rodriguez",
            role: "Operations Director",
            company: "Industrial Solutions Ltd",
            avatar: "👨‍💼",
            metric: "15 hours/week saved"
        },
        {
            quote: "Customer satisfaction increased 28% in 6 months. The CRM's production tracking gives our clients complete visibility into their orders.",
            author: "Emily Thompson",
            role: "Customer Success Manager",
            company: "Tech Manufacturing Inc",
            avatar: "👩‍💼",
            metric: "28% customer satisfaction increase"
        }
    ];

    const manufacturingFeatures = [
        {
            icon: "🏭",
            features:[],
            title: "Production Pipeline Management",
            description: "Track orders from raw material to finished goods with real-time visibility into every stage of your manufacturing process"
        },
        {
            icon: "📊",
            features:[],
            title: "Inventory & Order Management",
            description: "Real-time inventory tracking with automatic reorder points and seamless integration with your ERP system"
        },
        {
            icon: "✅",
            features:[],
            title: "Quality Control & Compliance",
            description: "Centralized quality audits, documentation, and compliance tracking with automated quality checks"
        },
        {
            icon: "🔗",
            features:[],
            title: "Supply Chain Collaboration",
            description: "Better coordination with suppliers and distributors through shared dashboards and automated workflows"
        },
        {
            icon: "📈",
            features:[],
            title: "Sales Forecasting & Analytics",
            description: "AI-powered demand planning and production optimization based on sales pipeline and historical data"
        },
        {
            icon: "⚡",
            features:[],
            title: "ERP/MES Integration",
            description: "Seamless integration with SAP, Oracle, Microsoft Dynamics, and 50+ other manufacturing systems"
        }
    ];

    const industries = [
        "Manufacturing", "Automotive", "Aerospace", "Electronics", "Pharmaceuticals", "Food & Beverage", "Chemicals", "Textiles"
    ];

    const companySizes = [
        "1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"
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
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setShowSuccess(true);
        
        setTimeout(() => {
            setShowSuccess(false);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                companyName: "",
                industry: "manufacturing",
                companySize: "50-200",
                primaryChallenge: "",
                currentSystem: "",
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

            {/* Hero Section - DARK THEME with Manufacturing Focus */}
            <DarkHeroSection backgroundImage="/manufacturing-hero.jpg">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                    <span className="text-sm font-medium text-orange-400">Manufacturing CRM</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Streamline Manufacturing
                    <br />
                    <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
                        Operations
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Connect sales, production, inventory, and supply chain data in one platform. 
                    Reduce lead times by 37% and improve production efficiency by 28% with CRM built for manufacturing.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "37%", label: "Lead Time Reduction", icon: "⚡" },
                        { value: "28%", label: "Production Efficiency", icon: "📈" },
                        { value: "45%", label: "Customer Retention", icon: "🎯" },
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
                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                            <div className="font-bold text-orange-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300 max-md:col-start-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => document.getElementById('manufacturing-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-orange-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Request Demo Now
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                        See It in Action
                    </button>
                </div> */}
            </DarkHeroSection>

            {/* Manufacturing Challenges → Solutions - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-orange-50 via-white to-red-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Manufacturing Pain Points We Solve
                    </h2>
                    
                    <div className="space-y-8 text-left">
                        <div className="bg-white border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"Our sales team has no visibility into production schedules or inventory levels."</strong>
                            </p>
                            <p className="text-gray-600">
                                Sales promises delivery dates without knowing production capacity, leading to missed deadlines and frustrated customers.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"Custom orders get lost in translation between sales and production."</strong>
                            </p>
                            <p className="text-gray-600">
                                Complex B2B sales with custom specifications result in errors, rework, and extended lead times when details aren't communicated properly.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"We can't track orders through our 6-month production cycle."</strong>
                            </p>
                            <p className="text-gray-600">
                                Long manufacturing lead times make it impossible to give customers accurate updates or manage expectations throughout the process.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"Our CRM doesn't connect to ERP/MES systems - everything is manual."</strong>
                            </p>
                            <p className="text-gray-600">
                                Data silos between sales, production, and inventory systems force manual updates and create opportunities for costly errors.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
                        <p className="text-xl font-bold text-gray-900 mb-4">
                            The average manufacturer loses 23% of revenue to operational inefficiencies.
                        </p>
                        <p className="text-gray-700">
                            It doesn't have to be this way.
                        </p>
                    </div>
                </div>
            </section>

            {/* Manufacturing Features as Benefits - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Built for Manufacturing,
                            <br />
                            <span className="text-cyan-600">Not Retrofitted</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every feature designed specifically for manufacturing workflows and challenges
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {manufacturingFeatures.map((benefit, i) => (
                            <FeatureCard key={i} feature={benefit} />
                        ))}
                    </div>

                    {/* Manufacturing Workflow Visualization */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-black text-gray-900 mb-6">Your Complete Manufacturing Workflow</h3>
                        <div className="grid md:grid-cols-5 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">📋</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Lead</div>
                                <div className="text-gray-600">Track opportunities</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🏭</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Quote</div>
                                <div className="text-gray-600">Custom order specs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">⚙️</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Produce</div>
                                <div className="text-gray-600">Track production</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">📦</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Ship</div>
                                <div className="text-gray-600">Monitor delivery</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">💰</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Support</div>
                                <div className="text-gray-600">Lifetime service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Manufacturing Success
                            <br />
                            <span className="text-cyan-600">Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real results from manufacturers who transformed their operations
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                industry: "Precision Manufacturing",
                                company: "TechFab Industries",
                                logo: "🏭",
                                challenge: "Complex custom orders with 6-month lead times and no visibility into production status for customers or sales team.",
                                solution: "Implemented manufacturing CRM with real-time production tracking and automated customer updates throughout the manufacturing process.",
                                results: [
                                    { metric: "37%", label: "Lead Time Reduction" },
                                    { metric: "28%", label: "Customer Satisfaction" },
                                    { metric: "45%", label: "Sales Efficiency" }
                                ],
                                color: "from-blue-500 to-indigo-500"
                            },
                            {
                                industry: "Automotive Parts",
                                company: "Auto Components Ltd",
                                logo: "🚗",
                                challenge: "Manual order tracking across multiple production facilities with frequent miscommunication between sales and production teams.",
                                solution: "Unified CRM system connecting all facilities with automated workflows and real-time production status updates.",
                                results: [
                                    { metric: "42%", label: "Order Accuracy" },
                                    { metric: "15 hrs", label: "Weekly Time Saved" },
                                    { metric: "32%", label: "Error Reduction" }
                                ],
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                industry: "Industrial Equipment",
                                company: "Industrial Solutions Inc",
                                logo: "⚙️",
                                challenge: "Disconnected sales and production systems leading to missed deadlines and inventory management issues across multiple warehouses.",
                                solution: "Integrated CRM with ERP system providing complete visibility from sales to delivery with automated inventory management.",
                                results: [
                                    { metric: "50%", label: "Inventory Accuracy" },
                                    { metric: "23%", label: "Stock Reduction" },
                                    { metric: "89%", label: "On-Time Delivery" }
                                ],
                                color: "from-orange-500 to-red-500"
                            }
                        ].map((caseStudy, i) => (
                            <CaseStudyCard key={i} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Integration - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Seamless Integration with
                            <br />
                            <span className="text-cyan-600">Your Systems</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Connect with your existing manufacturing systems without disrupting operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            { name: "SAP", icon: "🏢", description: "Full ERP integration" },
                            { name: "Oracle", icon: "🔷", description: "Complete data sync" },
                            { name: "Microsoft Dynamics", icon: "🪟", description: "Seamless workflow" },
                            { name: "50+ Systems", icon: "🔗", description: "Full compatibility" }
                        ].map((system, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-cyan-300 hover:shadow-xl transition-all group">
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{system.icon}</div>
                                <div className="text-xl font-bold text-gray-900 mb-2">{system.name}</div>
                                <div className="text-gray-600">{system.description}</div>
                            </div>
                        ))}
                    </div>

                    {/* Integration Process */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
                        <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Integration Process</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">📊</div>
                                <div className="text-xl font-bold text-gray-900 mb-2">Assessment</div>
                                <div className="text-gray-600">Analyze current systems</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🔧</div>
                                <div className="text-xl font-bold text-gray-900 mb-2">Configuration</div>
                                <div className="text-gray-600">Customize integration</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🔄</div>
                                <div className="text-xl font-bold text-gray-900 mb-2">Migration</div>
                                <div className="text-gray-600">Transfer data safely</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">✅</div>
                                <div className="text-xl font-bold text-gray-900 mb-2">Go Live</div>
                                <div className="text-gray-600">Full system sync</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            What Manufacturing
                            <br />
                            <span className="text-cyan-600">Leaders Say</span>
                        </h2>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12 mb-8">
                        <div className="text-6xl mb-6 text-center">💬</div>
                        <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center italic">
                            "{testimonials[activeTestimonial].quote}"
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="text-4xl">{testimonials[activeTestimonial].avatar}</div>
                            <div>
                                <div className="font-bold text-lg text-gray-900">{testimonials[activeTestimonial].author}</div>
                                <div className="text-gray-600">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</div>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-orange-200">
                                <div className="text-orange-500 font-bold">{testimonials[activeTestimonial].metric}</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTestimonial(i)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    i === activeTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - DARK THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
                        <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                        <span className="text-sm font-medium text-orange-400">Limited Time Offer</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Ready to Transform Your
                        <br />
                        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
                            Manufacturing Operations?
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                        Join 500+ manufacturers who've reduced lead times by 37% and increased efficiency by 28%. 
                        Get started with a free consultation and demo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button 
                            onClick={() => document.getElementById('manufacturing-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-orange-500 text-white rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                        >
                            Book Free Consultation
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Schedule Demo
                        </button>
                    </div>

                    <div className="flex justify-center gap-8 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>Free Setup Included</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>30-Day Money Back Guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Capture Form - LIGHT THEME */}
            <section id="manufacturing-form" className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Get Your Free Manufacturing
                            <br />
                            <span className="text-cyan-600">CRM Assessment</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Schedule a 30-minute consultation with our manufacturing experts. 
                            Get a customized ROI analysis and implementation roadmap.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-3xl p-8 lg:p-12 border-2 border-orange-100">
                        {showSuccess ? (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-6">🎉</div>
                                <h3 className="text-3xl font-black text-gray-900 mb-4">Thank You!</h3>
                                <p className="text-xl text-gray-600 mb-6">
                                    Your consultation request has been received. Our manufacturing expert will contact you within 24 hours.
                                </p>
                                <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                                    <div className="text-green-600 font-bold mb-2">What happens next:</div>
                                    <ul className="text-left text-gray-700 space-y-2">
                                        <li>• 30-minute discovery call scheduled</li>
                                        <li>• Custom ROI analysis prepared</li>
                                        <li>• Manufacturing workflow assessment</li>
                                        <li>• Implementation timeline provided</li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Company Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.companyName}
                                            onChange={(e) => handleInputChange('companyName', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                            placeholder="Tech Manufacturing Inc"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Industry</label>
                                        <select
                                            value={formData.industry}
                                            onChange={(e) => handleInputChange('industry', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        >
                                            {industries.map(industry => (
                                                <option key={industry} value={industry.toLowerCase()}>{industry}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Company Size</label>
                                        <select
                                            value={formData.companySize}
                                            onChange={(e) => handleInputChange('companySize', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        >
                                            {companySizes.map(size => (
                                                <option key={size} value={size}>{size} employees</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Primary Challenge</label>
                                        <select
                                            value={formData.primaryChallenge}
                                            onChange={(e) => handleInputChange('primaryChallenge', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                        >
                                            <option value="">Select your biggest challenge</option>
                                            <option value="lead-times">Long lead times</option>
                                            <option value="inventory">Inventory management</option>
                                            <option value="production-tracking">Production tracking</option>
                                            <option value="erp-integration">ERP integration</option>
                                            <option value="custom-orders">Custom order management</option>
                                            <option value="quality-control">Quality control</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Current System</label>
                                        <input
                                            type="text"
                                            value={formData.currentSystem}
                                            onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                                            placeholder="Excel, SAP, Salesforce, etc."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Additional Information</label>
                                    <textarea
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your specific manufacturing challenges and goals..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Processing...
                                        </span>
                                    ) : (
                                        'Get Free Manufacturing CRM Assessment'
                                    )}
                                </button>

                                <p className="text-center text-sm text-gray-500">
                                    By submitting this form, you agree to our privacy policy. 
                                    We'll never share your information with third parties.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQ Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Frequently Asked
                            <br />
                            <span className="text-cyan-600">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about manufacturing CRM
                        </p>
                    </div>

                    <FAQSection items={manufacturingFAQ} />
                </div>
            </section>

            {/* Final CTA - DARK THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-black via-gray-900 to-purple-900">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
                        <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                        <span className="text-sm font-medium text-orange-400">Last Chance</span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-black mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Don't Let Another Day
                        <br />
                        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
                            Pass You By
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                        Every day without proper CRM integration costs you money in inefficiencies, 
                        missed opportunities, and frustrated customers. Take action now.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button 
                            onClick={() => document.getElementById('manufacturing-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-orange-500 text-white rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                        >
                            Start Your Transformation
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Download ROI Calculator
                        </button>
                    </div>

                    <div className="text-center text-gray-400 text-sm">
                        <p>Join 500+ manufacturers who've transformed their operations</p>
                        <p className="mt-2">Average ROI achieved in 6-8 months</p>
                    </div>
                </div>
            </section>

            <Scrollindicator />
        </div>
    );
}