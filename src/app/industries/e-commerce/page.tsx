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
import { FaShieldAlt } from "react-icons/fa";
import { FaBoxOpen, FaCameraRetro, FaRegChartBar, FaRegStar, FaSackDollar, FaUser } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { GiArcheryTarget } from "react-icons/gi";
import { ImHappy } from "react-icons/im";
import { IoIosGift } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { MdLocalFireDepartment } from "react-icons/md";

export default function EcommerceProductLanding() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        quantity: "1",
        size: "medium",
        color: "black",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
    const [stockCount, setStockCount] = useState(47); // Limited stock
    const navigate = useNavigate();

    const ecommerceFAQ = [
        {
            q: "How quickly will I receive my order?",
            a: "Most orders ship within 24-48 hours. Express delivery options are available at checkout for guaranteed 2-day delivery."
        },
        {
            q: "Is this product really worth the price?",
            a: "Absolutely! With our 30-day money-back guarantee and lifetime warranty, you're making a risk-free investment. Plus, the current 25% discount makes it an exceptional value."
        },
        {
            q: "What if I'm not satisfied with my purchase?",
            a: "We offer a 30-day money-back guarantee. If you're not completely satisfied, return it for a full refund. No questions asked."
        },
        {
            q: "How does the CRM integration work?",
            a: "Your purchase automatically creates a customer profile in our system. You'll receive personalized follow-ups, exclusive offers, and priority support for life."
        },
        {
            q: "Is my payment information secure?",
            a: "Absolutely. We use bank-level encryption and never store your payment details. Your information is protected with the highest security standards."
        }
    ];

    const testimonials = [
        {
            quote: "This product changed my daily routine completely. Worth every penny and the CRM follow-up has been amazing!",
            author: "Sarah Johnson",
            role: "Verified Buyer",
            company: "New York, NY",
            avatar: <FaUser/>,
            metric: "5-Star Rating"
        },
        {
            quote: "Best purchase I've made this year. The quality is outstanding and the customer service through their CRM is exceptional.",
            author: "Michael Chen",
            role: "Verified Buyer",
            company: "San Francisco, CA",
            avatar: <FaUser/>,
            metric: "5-Star Rating"
        },
        {
            quote: "I was skeptical at first, but this exceeded all expectations. The 25% discount made it an incredible deal.",
            author: "Emily Rodriguez",
            role: "Verified Buyer",
            company: "Miami, FL",
            avatar: <FaUser/>,
            metric: "5-Star Rating"
        }
    ];

    const productFeatures = [
        {
            icon: "⚡",
            title: "Instant Results",
            description: "See noticeable improvements from day one with our advanced formula"
        },
        {
            icon: "🛡️",
            title: "Lifetime Warranty",
            description: "Built to last with our comprehensive lifetime guarantee"
        },
        {
            icon: "🌟",
            title: "Premium Quality",
            description: "Crafted with the finest materials for exceptional performance"
        },
        {
            icon: "📱",
            title: "Smart Integration",
            description: "Seamlessly connects with your existing setup via our app"
        },
        {
            icon: "🌍",
            title: "Eco-Friendly",
            description: "Sustainable materials and carbon-neutral shipping"
        },
        {
            icon: "🏆",
            title: "Award-Winning",
            description: "Recognized by industry experts for innovation and quality"
        }
    ];

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Stock countdown simulation
    useEffect(() => {
        const stockTimer = setInterval(() => {
            setStockCount(prev => prev > 5 ? prev - 1 : prev);
        }, 30000); // Reduce stock every 30 seconds
        return () => clearInterval(stockTimer);
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
                quantity: "1",
                size: "medium",
                color: "black",
                message: ""
            });
        }, 3000);
        
        setIsSubmitting(false);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Format time remaining
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME with Product Focus */}
            <DarkHeroSection backgroundImage="/product-hero.jpg">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 " />
                    <span className="text-sm font-medium text-cyan-400">25% OFF • Limited Time</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Upgrade Your Daily Routine
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        25% Off Today Only
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Join 25,000+ customers who transformed their daily routine. Limited stock - only {stockCount} left!
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "25K+", label: "Happy Customers", icon: <ImHappy /> },
                        { value: "4.9/5", label: "Customer Rating", icon: <FaRegStar /> },
                        { value: "{stockCount}", label: "Left in Stock", icon: <MdLocalFireDepartment /> },
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
                            <div className=" mb-3 group-hover:scale-110 transition-transform flex items-center justify-center text-cyan-100">{stat.icon}</div>
                            <div className=" font-bold text-cyan-400 mb-2">{i === 2 ? stockCount : stat.value}</div>
                            <div className="text-sm text-gray-300 max-md:col-start-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => document.getElementById('product-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-orange-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Buy Now - 25% Off
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                        Watch Demo
                    </button>
                </div>

                {/* Urgency Indicator */}
                <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-orange-400">
                        <span className="text-3xl text-red-500"><FcAlarmClock /></span>
                        <span className="text-xl text-cyan-400 font-semibold animate-pulse">Offer ends in: {formatTime(timeLeft)}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
                    <div className="flex items-center gap-2 text-red-500 py-4">
                        <span className="text-3xl text-orange-500 "><MdLocalFireDepartment /></span>
                        <span className="text-xl font-semibold animate-pulse">Only {stockCount} left!</span>
                    </div>
                </div>
            </DarkHeroSection>



            {/* Product Value & Benefits - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-orange-50 via-white to-pink-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Column - Product Images */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                <div className="aspect-square bg-gradient-to-br from-cyan-400 to-pink-500  rounded-2xl flex items-center justify-center text-white text-8xl">
                                    <GiArcheryTarget />
                                </div>
                                <div className="mt-6 grid grid-cols-3 gap-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-2xl">
                                            <FaCameraRetro />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Product Details */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                    Transform Your Daily Routine
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Experience the difference that premium quality and smart technology make. 
                                    This isn't just another product — it's your new daily essential.
                                </p>
                            </div>

                            {/* Key Benefits */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">Why Customers Love It:</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">✓</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Instant Results</h4>
                                            <p className="text-gray-600 text-sm">See noticeable improvements from day one</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">✓</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Premium Quality</h4>
                                            <p className="text-gray-600 text-sm">Crafted with the finest materials for lasting performance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm flex-shrink-0">✓</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Smart Technology</h4>
                                            <p className="text-gray-600 text-sm">Seamlessly integrates with your existing setup</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Value Proposition */}
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                                <h4 className="font-bold text-gray-900 mb-4">Your Investment Includes:</h4>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-600">Lifetime warranty</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-600">30-day money-back guarantee</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-600">Free shipping & returns</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-600">✓</span>
                                        <span className="text-gray-600">24/7 customer support</span>
                                    </div>
                                </div>
                            </div>

                            {/* Price and CTA */}
                            <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <span className="text-lg text-gray-600 line-through">$199.99</span>
                                        <div className="text-3xl font-black text-gray-900">$149.99</div>
                                        <div className="text-sm text-green-600 font-semibold">Save $50 (25% OFF)</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-600">Only {stockCount} left!</div>
                                        <div className="text-sm text-red-600 font-semibold">Ends in {formatTime(timeLeft)}</div>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => document.getElementById('product-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-black text-lg hover:bg-orange-700 hover:shadow-lg transition-all"
                                >
                                    Add to Cart - 25% Off
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Social Proof & Trust - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            What Our Customers
                            <br />
                            <span className="text-cyan-600">Are Saying</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real reviews from verified buyers
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-12 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="text-8xl mb-6 text-start pl-40 opacity-20">"</div>
                            <blockquote className="text-2xl text-gray-700 italic leading-relaxed mb-8">
                                "{testimonials[activeTestimonial].quote}"
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



            {/* CRM Integration Benefits - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            More Than Just a Purchase
                            <br />
                            <span className="text-cyan-600">Lifetime Value</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get instant access to exclusive offers, personalized recommendations, and VIP support
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - CRM Benefits */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black text-gray-900">Your Purchase Includes:</h3>
                                <p className="text-gray-600">
                                    Beyond the product itself, you're joining our exclusive community with lifetime benefits.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        icon: <GiArcheryTarget />,
                                        title: "Personalized Recommendations",
                                        description: "AI learns your preferences and suggests products you'll love"
                                    },
                                    {
                                        icon: <IoIosGift />,
                                        title: "Exclusive Member Perks",
                                        description: "Early access to new products and member-only discounts"
                                    },
                                    {
                                        icon: <IoChatboxEllipsesOutline />,
                                        title: "VIP Customer Support",
                                        description: "Priority assistance and personalized service for life"
                                    },
                                    {
                                        icon:  <FaRegChartBar />,
                                        title: "Smart Usage Insights",
                                        description: "Track your progress and optimize your experience"
                                    }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="text-2xl text-cyan-500">{benefit.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                                            <p className="text-gray-600 text-sm">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - CRM Features */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">CRM-Powered Experience</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                        <span className="text-gray-700">Personalized Offers</span>
                                        <span className="text-lg font-bold text-blue-600">AI-Powered</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                        <span className="text-gray-700">Usage Tracking</span>
                                        <span className="text-lg font-bold text-purple-600">Real-Time</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                        <span className="text-gray-700">Support Priority</span>
                                        <span className="text-lg font-bold text-green-600">VIP Level</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Objection Handling - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Your Questions,
                            <br />
                            <span className="text-cyan-600">Answered</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to know before making your purchase
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                question: "Is it really worth the price?",
                                answer: "Absolutely! With our 25% discount, lifetime warranty, and 30-day money-back guarantee, you're getting exceptional value. Most customers save more than the purchase price within the first month.",
                                icon: <FaSackDollar />,
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                question: "Will it work for my specific needs?",
                                answer: "Our product adapts to your unique situation through AI-powered personalization. Take our quick quiz to get matched with the perfect configuration for your lifestyle.",
                                icon: <GiArcheryTarget />,
                                color: "from-blue-500 to-indigo-500"
                            },
                            {
                                question: "What if I'm not satisfied?",
                                answer: "No risk! We offer a 30-day money-back guarantee. If you're not completely satisfied, return it for a full refund. Plus, our lifetime warranty ensures you're covered forever.",
                                icon: <FaShieldAlt />,
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                question: "How does shipping and delivery work?",
                                answer: "Free shipping on all orders, usually delivered within 2-3 business days. Express options available for urgent needs. You'll receive tracking info and SMS updates.",
                                icon: <FaBoxOpen />,
                                color: "from-orange-500 to-red-500"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl text-white flex-shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-gray-900 mb-3">{item.question}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 inline-block">
                            <h3 className="text-2xl font-black text-gray-900 mb-4">Still Have Questions?</h3>
                            <p className="text-gray-600 mb-6">Talk to a real human who can help you decide.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-all">
                                    Chat with Expert
                                </button>
                                <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 transition-all">
                                    Email Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Final Product Form - LIGHT THEME */}
            <section id="product-form" className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Secure Your Order Now
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">Complete your purchase in 2 minutes • Secure checkout</p>
                        
                        {/* Urgency Banner */}
                        <div className="bg-gradient-to-r from-pink-400 to-cyan-500 text-white rounded-2xl p-6 mb-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl text-red-500"><FcAlarmClock /></div>
                                    <div>
                                        <div className="font-bold text-lg">Limited Time Offer Ends Soon!</div>
                                        <div className="text-sm">Only {stockCount} left in stock</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold">{formatTime(timeLeft)}</div>
                                    <div className="text-sm">Remaining</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Quantity</label>
                                    <select
                                        value={formData.quantity}
                                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Size</label>
                                    <select
                                        value={formData.size}
                                        onChange={(e) => handleInputChange('size', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Color</label>
                                    <select
                                        value={formData.color}
                                        onChange={(e) => handleInputChange('color', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        <option value="black">Black</option>
                                        <option value="white">White</option>
                                        <option value="blue">Blue</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Special Instructions (Optional)</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    placeholder="Any special requests or questions?"
                                    rows={3}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                                />
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-orange-50 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="text-cyan-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-cyan-700">30-day money-back guarantee</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="text-cyan-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-cyan-700">Free shipping & returns</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                                            <span className="text-cyan-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-cyan-700">Lifetime warranty</span>
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
                                        <span>Processing Your Order...</span>
                                    </div>
                                ) : (
                                    'Complete Purchase - 25% Off'
                                )}
                            </button>

                            <p className="text-center text-sm text-gray-500">
                                By submitting this form, you agree to our{' '}
                                <Link href="/privacy" className="text-cyan-600 hover:underline">Privacy Policy</Link>{' '}
                                and{' '}
                                <Link href="/terms" className="text-cyan-600 hover:underline">Terms of Service</Link>.
                                Your information is protected and will be used to create your CRM profile for personalized service.
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
                                        <div className="font-semibold text-green-800">Order Confirmed!</div>
                                        <div className="text-sm text-green-700">Welcome to our exclusive CRM community. Check your email for tracking info.</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contact Alternatives */}
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-4">Need help with your order? We're here for you.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-cyan-200 text-cyan-600 rounded-lg font-semibold hover:border-cyan-300 transition-all">
                                    <span>💬</span>
                                    <span>Live Chat</span>
                                </button>
                                <a 
                                    href="tel:+1-555-123-4567" 
                                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-cyan-200 text-cyan-600 rounded-lg font-semibold hover:border-cyan-300 transition-all"
                                >
                                    <span>📞</span>
                                    <span>Call Support</span>
                                </a>
                                <div className="text-gray-500 text-sm">
                                    Available 24/7
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={ecommerceFAQ} />



            {/* Final CTA Section - DARK THEME */}
            <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-500  to-pink-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(16,185,129,0.45),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.5),transparent_50%)]"
                   /><div  className="absolute inset-0 opacity-20 pointer-events-none" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-4xl mx-auto relative text-center z-10">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Don't Miss Out on This Deal
                    </h2>
                    <p className="text-2xl text-orange-50 mb-12">
                        Join thousands of satisfied customers who transformed their daily routine
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button 
                            onClick={() => document.getElementById('product-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-white text-cyan-700 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                        >
                            Complete Purchase Now
                        </button>
                        <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Learn More
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-orange-50">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>30-day money-back guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Lifetime warranty included</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Free shipping & returns</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/shop" className="block hover:text-orange-600">All Products</Link>
                                <Link href="/shop/new" className="block hover:text-orange-600">New Arrivals</Link>
                                <Link href="/shop/bestsellers" className="block hover:text-orange-600">Bestsellers</Link>
                                <Link href="/shop/sale" className="block hover:text-orange-600">Sale Items</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/support" className="block hover:text-orange-600">Customer Support</Link>
                                <Link href="/returns" className="block hover:text-orange-600">Returns & Exchanges</Link>
                                <Link href="/shipping" className="block hover:text-orange-600">Shipping Info</Link>
                                <Link href="/warranty" className="block hover:text-orange-600">Warranty</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Account</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/account" className="block hover:text-orange-600">My Account</Link>
                                <Link href="/orders" className="block hover:text-orange-600">Order History</Link>
                                <Link href="/wishlist" className="block hover:text-orange-600">Wishlist</Link>
                                <Link href="/rewards" className="block hover:text-orange-600">Rewards</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">About</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/about" className="block hover:text-orange-600">About Us</Link>
                                <Link href="/careers" className="block hover:text-orange-600">Careers</Link>
                                <Link href="/press" className="block hover:text-orange-600">Press</Link>
                                <Link href="/contact" className="block hover:text-orange-600">Contact</Link>
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