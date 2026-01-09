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

export default function RealEstateCRMLanding() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        interestType: "buyer", // buyer, seller, investor
        priceRange: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const realEstateFAQ = [
        {
            q: "How quickly will I get my home valuation?",
            a: "Instantly! Our AI analyzes current market data, recent sales, and property features to deliver your accurate valuation within minutes of submitting the form."
        },
        {
            q: "Is my information secure?",
            a: "Absolutely. We use bank-level encryption and are fully compliant with data protection regulations. Your information is never shared with third parties without your consent."
        },
        {
            q: "How does the CRM automation work?",
            a: "Leads are instantly captured and saved to your CRM. Our system automatically sends personalized follow-up emails, schedules calls, and tracks your pipeline - all without manual work."
        },
        {
            q: "What makes ibigdata different from other real estate CRMs?",
            a: "We're built specifically for real estate with AI-powered lead scoring, automated follow-ups, and seamless integration with major real estate platforms. Plus, we're more affordable and easier to use."
        },
        {
            q: "Can I integrate with my existing tools?",
            a: "Yes! We integrate with 50+ real estate platforms including MLS systems, Zillow, Realtor.com, and major CRM systems. Your current workflow stays intact while getting better."
        },
    ];

    const testimonials = [
        {
            quote: "Closed 43% more deals in the first 6 months. The AI lead scoring helps me focus on the hottest prospects.",
            author: "Sarah Chen",
            role: "Top Real Estate Agent",
            company: "Elite Properties",
            avatar: "👩‍💼",
            metric: "43% more deals closed"
        },
        {
            quote: "My team saves 15+ hours per week on follow-ups. The automation is incredible - leads never fall through the cracks.",
            author: "Michael Rodriguez",
            role: "Team Leader",
            company: "Metro Realty Group",
            avatar: "👨‍💼",
            metric: "15+ hours saved weekly"
        },
        {
            quote: "ROI was immediate. We saw a 300% return within 90 days. Best investment we've made for our business.",
            author: "Emily Thompson",
            role: "Broker Owner",
            company: "Thompson Real Estate",
            avatar: "👩‍💼",
            metric: "300% ROI in 90 days"
        }
    ];

    const priceRanges = [
        "Under $300K", "$300K - $500K", "$500K - $750K", 
        "$750K - $1M", "$1M - $2M", "Over $2M"
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
                interestType: "buyer",
                priceRange: "",
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

            {/* Hero Section - DARK THEME with Real Estate Focus */}
            <DarkHeroSection backgroundImage="/real-estate-hero.jpg">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">Real Estate CRM</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Get Your Instant
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Home Valuation
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Discover your home's true market value in minutes. Connect with top-rated agents 
                    and access exclusive listings before they hit the market.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "5 Min", label: "Instant Valuation", icon: "⚡" },
                        { value: "97%", label: "Accuracy Rate", icon: "🎯" },
                        { value: "10K+", label: "Happy Clients", icon: "🏠" },
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

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Get My Free Valuation
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                        Browse Listings
                    </button>
                </div> */}
            </DarkHeroSection>



            {/* Lead Magnet Section with Form - LIGHT THEME */}
            <section id="lead-form" className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Value Proposition */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    Unlock Exclusive Real Estate Opportunities
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Get instant access to off-market properties, accurate valuations, and personalized 
                                    market insights that others miss.
                                </p>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">✓</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Off-Market Listings</h4>
                                        <p className="text-gray-600 text-sm">Access properties before they hit public listings</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">✓</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Accurate Valuations</h4>
                                        <p className="text-gray-600 text-sm">AI-powered estimates with 97% accuracy rate</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">✓</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Market Insights</h4>
                                        <p className="text-gray-600 text-sm">Personalized reports for your target areas</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">✓</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Expert Connections</h4>
                                        <p className="text-gray-600 text-sm">Matched with top-rated local agents</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                                <h4 className="font-bold text-gray-900 mb-4">Why Thousands Choose Us</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-600">No commitment required</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-600">Privacy protected</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-600">Local market expertise</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-600">24/7 support available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Lead Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-black text-gray-900 mb-2">Get Started Now</h3>
                                <p className="text-gray-600">Takes 2 minutes • Instant access</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    required
                                    placeholder="Full Name *"
                                    value={formData.fullName}
                                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                                
                                <input
                                    type="email"
                                    required
                                    placeholder="Email Address *"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                                
                                <input
                                    type="tel"
                                    required
                                    placeholder="Phone Number *"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                                
                                <select
                                    value={formData.interestType}
                                    onChange={(e) => handleInputChange('interestType', e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                >
                                    <option value="buyer">I'm looking to buy</option>
                                    <option value="seller">I'm looking to sell</option>
                                    <option value="investor">I'm an investor</option>
                                </select>
                                
                                <select
                                    value={formData.priceRange}
                                    onChange={(e) => handleInputChange('priceRange', e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                >
                                    <option value="">Price Range (Optional)</option>
                                    {priceRanges.map((range, i) => (
                                        <option key={i} value={range}>{range}</option>
                                    ))}
                                </select>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-lg font-black text-lg transition-all ${
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-cyan-600 hover:bg-cyan-700 hover:shadow-xl text-white'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Getting Your Access...</span>
                                        </div>
                                    ) : (
                                        'Get Instant Access'
                                    )}
                                </button>
                                
                                <p className="text-center text-xs text-gray-500">
                                    By submitting, you agree to our{' '}
                                    <Link href="/privacy" className="text-cyan-600 hover:underline">Privacy Policy</Link>
                                    {' and '}
                                    <Link href="/terms" className="text-cyan-600 hover:underline">Terms</Link>
                                </p>
                            </form>

                            {/* Success Message */}
                            {showSuccess && (
                                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 text-sm">✓</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-green-800">Success!</div>
                                            <div className="text-sm text-green-700">Check your email for instant access to exclusive listings.</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>



            {/* Value & Benefits - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Why Top Agents Choose
                            <br />
                            <span className="text-cyan-600">ibigdata</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The CRM that turns leads into closings while you focus on what you do best
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: "⚡",
                                  features:[],
                                title: "Instant Lead Capture",
                                description: "Never lose a lead again. Our CRM captures leads from all sources and automatically qualifies them based on buying intent and timeline."
                            },
                            {
                                icon: "🤖",
                                  features:[],
                                title: "AI-Powered Follow-Up",
                                description: "Automated email sequences, SMS reminders, and call scheduling that adapt to each lead's behavior and preferences."
                            },
                            {
                                icon: "📊",
                                  features:[],
                                title: "Smart Lead Scoring",
                                description: "AI identifies your hottest prospects so you focus on leads most likely to convert, saving you hours of qualification time."
                            },
                            {
                                icon: "🏠",
                                  features:[],
                                title: "Property Matching",
                                description: "Automatically match leads with suitable properties from your MLS and get notified when perfect listings become available."
                            },
                            {
                                icon: "📱",
                                  features:[],
                                title: "Mobile-First Design",
                                description: "Manage your entire pipeline from your phone. Update deals, schedule showings, and communicate with clients on the go."
                            },
                            {
                                icon: "🔗",
                                features:[],
                                title: "Seamless Integrations",
                                description: "Connect with 50+ real estate platforms including MLS, Zillow, Realtor.com, and your favorite marketing tools."
                            }
                        ].map((benefit, i) => (
                            <FeatureCard key={i} feature={benefit} />
                        ))}
                    </div>

                    {/* CRM Automation Highlight */}
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-black text-gray-900 mb-6">CRM Automation That Works 24/7</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">⚡</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Instant</div>
                                <div className="text-gray-600">Leads captured and saved to CRM immediately</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🤖</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Automatic</div>
                                <div className="text-gray-600">Follow-ups sent without manual intervention</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">📈</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Intelligent</div>
                                <div className="text-gray-600">AI learns and optimizes your sales process</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Lead Magnets Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Everything You Need to
                            <br />
                            <span className="text-cyan-600">Succeed in Real Estate</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Instant access to tools and insights that give you the competitive edge
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Lead Magnet 1: Home Valuation */}
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🏠</div>
                            <h3 className="text-xl font-black text-gray-900 mb-4">Instant Home Valuation</h3>
                            <p className="text-gray-600 mb-6">
                                Get your home's true market value in minutes with our AI-powered analysis that considers recent sales, market trends, and property features.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>97% accuracy rate</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>Instant results</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>Market trend analysis</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full px-4 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all"
                            >
                                Get Free Valuation
                            </button>
                        </div>

                        {/* Lead Magnet 2: Exclusive Listings */}
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🔑</div>
                            <h3 className="text-xl font-black text-gray-900 mb-4">Exclusive Listings</h3>
                            <p className="text-gray-600 mb-6">
                                Access off-market properties and exclusive listings before they go public. Get first dibs on the best deals in your area.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>Off-market properties</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>First access</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>Priority notifications</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full px-4 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all"
                            >
                                Access Listings Now
                            </button>
                        </div>

                        {/* Lead Magnet 3: Market Insights */}
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📊</div>
                            <h3 className="text-xl font-black text-gray-900 mb-4">Market Insights</h3>
                            <p className="text-gray-600 mb-6">
                                Receive personalized market reports, price trends, and investment opportunities tailored to your specific interests and areas.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>Personalized reports</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>Price trend analysis</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-600">✓</span>
                                    <span>Investment opportunities</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full px-4 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all"
                            >
                                Get Market Insights
                            </button>
                        </div>
                    </div>

                    {/* CRM Automation Benefits */}
                    <div className="mt-16 bg-white border-2 border-gray-200 rounded-2xl p-8">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Plus: CRM Automation That Works 24/7</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3">What Happens After You Sign Up:</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-600">1.</span>
                                        <span>Instant access to your chosen tools</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-600">2.</span>
                                        <span>AI-powered property matching begins</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-600">3.</span>
                                        <span>Automated follow-ups keep you informed</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-3">Your CRM Benefits:</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-cyan-600">✓</span>
                                        <span>Never miss an opportunity</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-cyan-600">✓</span>
                                        <span>Automated follow-up sequences</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-cyan-600">✓</span>
                                        <span>Smart lead prioritization</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Testimonials Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Success Stories from
                            <br />
                            <span className="text-cyan-600">Real Estate Professionals</span>
                        </h2>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-12 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="text-8xl mb-6 opacity-30">"</div>
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



            {/* Market Insights - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Market Intelligence That
                            <br />
                            <span className="text-cyan-600">Gives You the Edge</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Data-driven insights that help you make better decisions and close more deals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {[
                            {
                                value: "97%",
                                label: "Valuation Accuracy",
                                detail: "AI-powered estimates you can trust",
                                icon: "🎯"
                            },
                            {
                                value: "40%",
                                label: "Faster Sales",
                                detail: "With our optimized process",
                                icon: "⚡"
                            },
                            {
                                value: "300%",
                                label: "ROI Increase",
                                detail: "Average return on investment",
                                icon: "📈"
                            },
                            {
                                value: "24/7",
                                label: "CRM Automation",
                                detail: "Never miss an opportunity",
                                icon: "🤖"
                            }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-cyan-300 hover:shadow-xl transition-all group">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                                <div className="text-3xl font-black text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                                <div className="text-sm text-gray-600">{stat.detail}</div>
                            </div>
                        ))}
                    </div>

                    {/* Market Trends */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
                        <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Real-Time Market Insights</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600 mb-2">+12%</div>
                                <div className="text-gray-600">Home Values This Quarter</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-2">15 Days</div>
                                <div className="text-gray-600">Average Time on Market</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600 mb-2">89%</div>
                                <div className="text-gray-600">Listings Sold Above Ask</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Final Lead Capture Form - LIGHT THEME */}
            <section id="final-form" className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Start Closing More Deals Today
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">Join thousands of successful real estate professionals</p>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 shadow-xl border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                        placeholder="john@realestate.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">I am a...</label>
                                    <select
                                        value={formData.interestType}
                                        onChange={(e) => handleInputChange('interestType', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                    >
                                        <option value="buyer">Real Estate Agent</option>
                                        <option value="seller">Broker/Owner</option>
                                        <option value="investor">Investor</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Team Size</label>
                                    <select
                                        value={formData.priceRange}
                                        onChange={(e) => handleInputChange('priceRange', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                    >
                                        <option value="">Select team size</option>
                                        <option value="solo">Solo Agent</option>
                                        <option value="2-5">2-5 Agents</option>
                                        <option value="6-15">6-15 Agents</option>
                                        <option value="16-50">16-50 Agents</option>
                                        <option value="50+">50+ Agents</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Tell us about your goals</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    placeholder="What are your biggest challenges? What do you hope to achieve?"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                                />
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-green-700">14-day free trial</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-green-700">No credit card required</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-green-700">Setup in 24 hours</span>
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
                                        <span>Setting Up Your Account...</span>
                                    </div>
                                ) : (
                                    'Start Your Free Trial'
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
                                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-cyan-200 text-cyan-600 rounded-lg font-semibold hover:border-cyan-300 transition-all"
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
            <FAQSection items={realEstateFAQ} />



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
                        Transform Your Real Estate Business
                    </h2>
                    <p className="text-2xl text-cyan-50 mb-12">
                        Join thousands of agents closing more deals with less effort
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button 
                            onClick={() => document.getElementById('final-form')?.scrollIntoView({ behavior: 'smooth' })}
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
                            <span>Setup in 24 hours</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">For Agents</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/real-estate/features" className="block hover:text-cyan-600">Features</Link>
                                <Link href="/real-estate/pricing" className="block hover:text-cyan-600">Pricing</Link>
                                <Link href="/real-estate/integrations" className="block hover:text-cyan-600">Integrations</Link>
                                <Link href="/real-estate/crm" className="block hover:text-cyan-600">CRM</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">For Buyers</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/real-estate/listings" className="block hover:text-cyan-600">Browse Listings</Link>
                                <Link href="/real-estate/valuation" className="block hover:text-cyan-600">Home Valuation</Link>
                                <Link href="/real-estate/agents" className="block hover:text-cyan-600">Find Agents</Link>
                                <Link href="/real-estate/market-insights" className="block hover:text-cyan-600">Market Insights</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">For Sellers</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/real-estate/sell" className="block hover:text-cyan-600">Sell Your Home</Link>
                                <Link href="/real-estate/off-market" className="block hover:text-cyan-600">Off-Market Listings</Link>
                                <Link href="/real-estate/pricing" className="block hover:text-cyan-600">Pricing Strategy</Link>
                                <Link href="/real-estate/marketing" className="block hover:text-cyan-600">Marketing Tools</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/about" className="block hover:text-cyan-600">About Us</Link>
                                <Link href="/careers" className="block hover:text-cyan-600">Careers</Link>
                                <Link href="/press" className="block hover:text-cyan-600">Press</Link>
                                <Link href="/contact" className="block hover:text-cyan-600">Contact</Link>
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