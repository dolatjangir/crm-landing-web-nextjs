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

export default function AICorePage() {
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        phone: "",
        company: "",
        role: "",
        interest: "",
        message: ""
    });
    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeDemo, setActiveDemo] = useState(0);
    const navigate = useNavigate();

    const aiCoreFAQ = [
        {
            q: "How does the AI learn our business processes?",
            a: "Our AI analyzes your CRM data, communication patterns, and workflow history to understand your unique business context. It starts providing value immediately and gets smarter over time."
        },
        {
            q: "Is the AI secure and compliant?",
            a: "Absolutely. Our AI meets enterprise security standards with SOC 2, GDPR, and industry-specific compliance. Your data is encrypted and never shared with third parties."
        },
        {
            q: "How long does it take to see results from AI automation?",
            a: "Most customers see immediate improvements in task completion speed. Full optimization typically occurs within 2-4 weeks as the AI learns your patterns."
        },
        {
            q: "Can we control what the AI automates?",
            a: "Yes! You have full control over AI automation with customizable rules, approval workflows, and the ability to review or override any AI decision."
        },
        {
            q: "What if the AI makes a mistake?",
            a: "Our AI includes confidence scoring and human-in-the-loop validation. You can easily correct mistakes, and the AI learns from feedback to improve accuracy."
        }
    ];

    const interestOptions = [
        "Automate repetitive tasks",
        "Improve lead scoring and qualification",
        "Enhance customer support",
        "Predict sales outcomes",
        "Optimize marketing campaigns",
        "Streamline operations"
    ];

    // AI Demo scenarios
    const aiDemos = [
        {
            title: "Lead Scoring Intelligence",
            description: "AI automatically scores and prioritizes leads based on behavior patterns",
            before: "Manual review of 100+ leads daily",
            after: "AI identifies top 20 prospects automatically",
            timeSaved: "3 hours/day",
            accuracy: "94%"
        },
        {
            title: "Smart Email Assistant",
            description: "AI drafts personalized responses and suggests follow-up timing",
            before: "30 minutes per email draft",
            after: "AI drafts in 30 seconds",
            timeSaved: "2.5 hours/day",
            accuracy: "96%"
        },
        {
            title: "Predictive Deal Insights",
            description: "AI predicts deal closure probability and suggests next actions",
            before: "Subjective deal forecasting",
            after: "Data-driven predictions with 89% accuracy",
            timeSaved: "1 hour/day",
            accuracy: "89%"
        }
    ];

    // Auto-rotate demo
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDemo(prev => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};
        
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.fullName) {
            newErrors.fullName = "Full name is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setShowSuccess(true);
        setIsSubmitting(false);
        
        // Reset form after success
        setTimeout(() => {
            setShowSuccess(false);
            setFormData({
                email: "",
                fullName: "",
                phone: "",
                company: "",
                role: "",
                interest: "",
                message: ""
            });
        }, 3000);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME */}
            <DarkHeroSection backgroundImage="/ai-core-hero.png">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">AI-Powered CRM</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    AI That Powers
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Your Entire CRM
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Automate repetitive tasks, predict customer behavior, and make smarter decisions 
                    with AI that learns your business. Save 15+ hours per week while increasing accuracy to 99.2%.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "99.2%", label: "AI Accuracy", icon: "🎯" },
                        { value: "15+", label: "Hours Saved/Week", icon: "⚡" },
                        { value: "10M+", label: "AI Decisions/Day", icon: "🚀" },
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

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => document.getElementById('ai-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Try AI Free
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                        Watch Demo
                    </button>
                </div>
            </DarkHeroSection>



            {/* AI Capabilities - LIGHT THEME */}
            <section className="py-32 px-6 relative bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Three Ways AI Transforms
                            <br />
                            <span className="text-cyan-600">Your CRM</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From automation to prediction to assistance, our AI Core handles the heavy lifting 
                            so you can focus on building relationships and closing deals.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🤖",
                                title: "AI Automation",
                                headline: "Eliminate Repetitive Work",
                                description: "Let AI handle data entry, follow-ups, and routine tasks while you focus on high-value activities.",
                                capabilities: [
                                    "Auto-update contact records from emails",
                                    "Schedule follow-ups based on engagement",
                                    "Assign leads to the right reps",
                                    "Generate personalized email drafts"
                                ],
                                timeSaved: "8+ hours/week",
                                accuracy: "97%"
                            },
                            {
                                icon: "🧠",
                                title: "Predictive Intelligence",
                                headline: "Make Smarter Decisions",
                                description: "AI analyzes patterns in your data to predict outcomes and recommend the best next actions.",
                                capabilities: [
                                    "Predict deal closure probability",
                                    "Identify at-risk opportunities",
                                    "Recommend optimal contact timing",
                                    "Forecast revenue with 89% accuracy"
                                ],
                                timeSaved: "4+ hours/week",
                                accuracy: "89%"
                            },
                            {
                                icon: "👥",
                                title: "Virtual Assistant",
                                headline: "Get Instant Help 24/7",
                                description: "Your AI assistant answers questions, provides insights, and helps you work faster.",
                                capabilities: [
                                    "Answer questions about any contact or deal",
                                    "Generate reports and analytics",
                                    "Provide talking points for calls",
                                    "Summarize long email threads"
                                ],
                                timeSaved: "3+ hours/week",
                                accuracy: "94%"
                            }
                        ].map((capability, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{capability.icon}</div>
                                <div className="text-sm font-semibold text-cyan-600 mb-2">{capability.title}</div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{capability.headline}</h3>
                                <p className="text-gray-600 mb-6">{capability.description}</p>
                                
                                <div className="space-y-3 mb-6">
                                    {capability.capabilities.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                            <span className="text-cyan-500 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-xs text-gray-500">Time Saved</div>
                                            <div className="font-bold text-green-600">{capability.timeSaved}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Accuracy</div>
                                            <div className="font-bold text-blue-600">{capability.accuracy}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* AI in Action Demo - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            See AI in <span className="text-cyan-600">Action</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Watch how our AI Core transforms complex tasks into simple, automated workflows
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Demo Visualization */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-black text-gray-900">AI Demo</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm text-green-600 font-semibold">Live</span>
                                    </div>
                                </div>

                                {/* Demo Scenarios */}
                                <div className="space-y-4 mb-6">
                                    {aiDemos.map((demo, i) => (
                                        <div 
                                            key={i}
                                            className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                                activeDemo === i 
                                                    ? 'border-cyan-500 bg-cyan-50' 
                                                    : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                                            }`}
                                            onClick={() => setActiveDemo(i)}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-bold text-gray-900">{demo.title}</span>
                                                <span className="text-sm text-cyan-600 font-semibold">{demo.accuracy} accurate</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-3">{demo.description}</p>
                                            <div className="flex items-center gap-4 text-sm">
                                                <span className="text-green-600 font-semibold">⏱️ {demo.timeSaved}</span>
                                                <span className="text-blue-600 font-semibold">🎯 {demo.accuracy}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Active Demo Details */}
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-cyan-400 font-semibold">Before AI</span>
                                        <span className="text-green-400 font-semibold">After AI</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-300 text-sm">{aiDemos[activeDemo].before}</span>
                                            <span className="text-gray-500">→</span>
                                            <span className="text-green-400 text-sm">{aiDemos[activeDemo].after}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-black text-gray-900">What Makes Our AI Different</h3>
                            
                            {[
                                {
                                    icon: "🚀",
                                    title: "Instant Value",
                                    description: "Start seeing results immediately - no training period required"
                                },
                                {
                                    icon: "🧠",
                                    title: "Continuous Learning",
                                    description: "AI gets smarter with every interaction, adapting to your unique business"
                                },
                                {
                                    icon: "🛡️",
                                    title: "Human-in-the-Loop",
                                    description: "You stay in control with approval workflows and override capabilities"
                                },
                                {
                                    icon: "📊",
                                    title: "Transparent Decisions",
                                    description: "Every AI recommendation includes clear reasoning and confidence scores"
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



            {/* AI Core Form Section - LIGHT THEME */}
            <section id="ai-form" className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Start Your <span className="text-cyan-600">AI Journey</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get instant access to AI automation. No credit card required. 
                            Set up in less than 5 minutes.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                        {showSuccess ? (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-6">🎉</div>
                                <h3 className="text-3xl font-black text-gray-900 mb-4">Welcome to AI Core!</h3>
                                <p className="text-gray-600 mb-6">
                                    Check your email for instant access. Your AI assistant is ready to help you work smarter.
                                </p>
                                <button 
                                    onClick={() => setShowSuccess(false)}
                                    className="text-cyan-600 font-semibold hover:text-cyan-700"
                                >
                                    Submit another form
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Required Fields - Top Section */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            placeholder="you@company.com"
                                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                                                errors.email ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                            required
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            value={formData.fullName}
                                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                                            placeholder="John Smith"
                                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 ${
                                                errors.fullName ? 'border-red-500' : 'border-gray-200'
                                            }`}
                                            required
                                        />
                                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                                    </div>
                                </div>

                                {/* Optional Fields - Middle Section */}
                                <div className="border-t border-gray-200 pt-6">
                                    <div className="text-sm text-gray-600 mb-4">Optional information (helps us personalize your experience)</div>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Phone Number <span className="text-gray-500 text-xs">(optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                placeholder="+1 (555) 123-4567"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Company <span className="text-gray-500 text-xs">(optional)</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                value={formData.company}
                                                onChange={(e) => handleInputChange('company', e.target.value)}
                                                placeholder="Acme Corp"
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                                        <div>
                                            <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Your Role <span className="text-gray-500 text-xs">(optional)</span>
                                            </label>
                                            <select
                                                id="role"
                                                value={formData.role}
                                                onChange={(e) => handleInputChange('role', e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                            >
                                                <option value="">Select your role</option>
                                                <option value="sales">Sales Representative</option>
                                                <option value="sales-manager">Sales Manager</option>
                                                <option value="marketing">Marketing Professional</option>
                                                <option value="support">Customer Support</option>
                                                <option value="executive">Executive/VP</option>
                                                <option value="operations">Operations</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="interest" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Primary Interest <span className="text-gray-500 text-xs">(optional)</span>
                                            </label>
                                            <select
                                                id="interest"
                                                value={formData.interest}
                                                onChange={(e) => handleInputChange('interest', e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                            >
                                                <option value="">What interests you most?</option>
                                                {interestOptions.map((option, i) => (
                                                    <option key={i} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Field - Bottom Section */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                        How can we help? <span className="text-gray-500 text-xs">(optional)</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        placeholder="Tell us about your goals or specific challenges you'd like AI to solve..."
                                        rows={4}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                                    />
                                </div>

                                {/* Privacy Notice */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-green-600 text-xs">✓</span>
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            <p className="mb-2">
                                                <strong>Privacy Promise:</strong> We respect your privacy and will never share your information with third parties.
                                            </p>
                                            <p>
                                                By submitting this form, you agree to our{' '}
                                                <Link href="/privacy" className="text-cyan-600 hover:underline">Privacy Policy</Link>{' '}
                                                and{' '}
                                                <Link href="/terms" className="text-cyan-600 hover:underline">Terms of Service</Link>.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-cyan-600 hover:bg-cyan-700 hover:shadow-xl hover:scale-105 text-white'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Setting up your AI...</span>
                                        </div>
                                    ) : (
                                        'Get Instant Access to AI Core'
                                    )}
                                </button>

                                {/* Trust Indicators */}
                                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>Instant setup</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>No credit card required</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>Cancel anytime</span>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>



            {/* Trust & Social Proof - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Trusted by AI-Driven
                            <br />
                            <span className="text-cyan-600">Companies</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join thousands of teams using AI Core to work smarter, not harder
                        </p>
                    </div>

                    {/* Company Logos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
                        {["TechCorp", "DataFlow", "SalesPro", "MarketMax", "CloudSync", "GrowthLab"].map((company, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-cyan-300 hover:shadow-lg transition-all group">
                                <div className="text-xl font-bold text-gray-400 group-hover:text-cyan-600 transition-colors">
                                    {company}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                quote: "AI Core increased our sales productivity by 40%. The lead scoring alone saved us 8 hours per week.",
                                author: "Sarah Chen",
                                role: "VP of Sales",
                                company: "TechFlow Inc",
                                avatar: "👩‍💼",
                                metric: "40% productivity gain"
                            },
                            {
                                quote: "The predictive insights are game-changing. We're closing 25% more deals with better timing and targeting.",
                                author: "Michael Rodriguez",
                                role: "Sales Director",
                                company: "GrowthCo",
                                avatar: "👨‍💼",
                                metric: "25% more deals closed"
                            },
                            {
                                quote: "Our team loves the virtual assistant. It answers questions instantly and helps new reps get up to speed faster.",
                                author: "Emily Thompson",
                                role: "Sales Operations Manager",
                                company: "MarketPro",
                                avatar: "👩‍💼",
                                metric: "50% faster onboarding"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all">
                                <div className="text-6xl mb-6 opacity-30 text-cyan-600">"</div>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">{testimonial.quote}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{testimonial.author}</div>
                                            <div className="text-sm text-gray-600">{testimonial.role}</div>
                                            <div className="text-sm text-cyan-600 font-semibold">{testimonial.company}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-green-600">{testimonial.metric}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Security & Compliance */}
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-black text-gray-900 mb-4">Enterprise-Grade AI Security</h3>
                            <p className="text-gray-600">Your data is protected with the highest security standards</p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { icon: "🔒", title: "SOC 2 Type II", description: "Certified secure" },
                                { icon: "🛡️", title: "GDPR Compliant", description: "Privacy protected" },
                                { icon: "📊", title: "256-bit Encryption", description: "Data secured" },
                                { icon: "🏆", title: "99.99% Uptime", description: "Always available" }
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                                    <div className="text-sm text-gray-600">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={aiCoreFAQ} />



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
                        Transform Your CRM with AI
                    </h2>
                    <p className="text-2xl text-cyan-50 mb-12">
                        Join thousands of teams working smarter with AI Core
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button 
                            onClick={() => document.getElementById('ai-form')?.scrollIntoView({ behavior: 'smooth' })}
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
                            <span>Free 14-day trial</span>
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
                            <span>Setup in 5 minutes</span>
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