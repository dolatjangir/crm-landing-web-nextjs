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

export default function EducationCRMLanding() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        programType: "data-science", // data-science, digital-marketing, business-analytics, ui-ux
        experienceLevel: "beginner",
        careerGoal: "",
        preferredStart: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const educationFAQ = [
        {
            q: "How long does it take to complete the program?",
            a: "Most students complete our programs in 12-16 weeks while working full-time. You can study at your own pace with lifetime access to all materials."
        },
        {
            q: "Do I need prior experience in tech or data?",
            a: "No prior experience required! Our programs start from fundamentals and build up to advanced concepts. We provide additional support for beginners."
        },
        {
            q: "Will I get a certificate or credential?",
            a: "Yes! You'll receive an industry-recognized certificate upon completion. Plus, our CRM tracks your progress and generates a detailed skills portfolio."
        },
        {
            q: "How does the CRM integration help my learning?",
            a: "Our CRM tracks your progress, identifies areas where you need help, schedules personalized reviews, and connects you with mentors based on your learning patterns."
        },
        {
            q: "What kind of job support do you provide?",
            a: "We provide resume optimization, interview preparation, job placement assistance, and lifetime career support through our CRM-powered network."
        }
    ];

    const testimonials = [
        {
            quote: "The CRM tracking helped me identify exactly which skills I needed to focus on. Landed my dream job at Google within 3 months of graduation!",
            author: "Sarah Chen",
            role: "Data Scientist",
            company: "Google",
            avatar: "👩‍💼",
            metric: "Hired at Google in 3 months"
        },
        {
            quote: "The personalized learning path through CRM was game-changing. I went from marketing to data analytics and doubled my salary.",
            author: "Michael Rodriguez",
            role: "Data Analyst",
            company: "Meta",
            avatar: "👨‍💼",
            metric: "Doubled salary"
        },
        {
            quote: "The CRM-connected mentorship and job placement support were incredible. Worth every penny and more.",
            author: "Emily Thompson",
            role: "Business Analyst",
            company: "Microsoft",
            avatar: "👩‍💼",
            metric: "300% ROI in 6 months"
        }
    ];

    const programFeatures = [
        {
            icon: "🎓",
            features:[],
            title: "Industry-Recognized Certification",
            description: "Earn credentials that employers actually look for, backed by real-world projects and portfolio"
        },
        {
            icon: "💼",
            features:[],
            title: "Career-Focused Curriculum",
            description: "Learn exactly what companies need with curriculum designed by industry professionals"
        },
        {
            icon: "🤖",
            features:[],
            title: "AI-Powered Learning",
            description: "Personalized learning paths that adapt to your pace and style with CRM integration"
        },
        {
            icon: "👥",
            features:[],
            title: "Expert Mentorship",
            description: "Get guidance from professionals working at top companies in your field"
        },
        {
            icon: "📊",
            features:[],
            title: "Real-World Projects",
            description: "Build portfolio-worthy projects that demonstrate your skills to employers"
        },
        {
            icon: "🚀",
            features:[],
            title: "Job Placement Support",
            description: "Lifetime career support with resume optimization and interview preparation"
        }
    ];

    const programs = [
        {
            name: "Data Science Mastery",
            duration: "16 weeks",
            level: "Beginner to Advanced",
            price: "$2,499",
            originalPrice: "$3,999",
            description: "Master Python, SQL, machine learning, and data visualization",
            outcomes: ["Data Scientist", "ML Engineer", "Business Analyst"],
            color: "from-blue-500 to-indigo-500"
        },
        {
            name: "Digital Marketing Pro",
            duration: "12 weeks",
            level: "Beginner to Intermediate",
            price: "$1,999",
            originalPrice: "$2,999",
            description: "SEO, SEM, social media, analytics, and marketing automation",
            outcomes: ["Digital Marketer", "Growth Analyst", "Marketing Manager"],
            color: "from-green-500 to-emerald-500"
        },
        {
            name: "Business Analytics",
            duration: "14 weeks",
            level: "Intermediate",
            price: "$2,199",
            originalPrice: "$3,299",
            description: "Excel, Tableau, Power BI, and business intelligence tools",
            outcomes: ["Business Analyst", "Data Analyst", "BI Specialist"],
            color: "from-purple-500 to-pink-500"
        },
        {
            name: "UI/UX Design",
            duration: "12 weeks",
            level: "Beginner to Intermediate",
            price: "$1,799",
            originalPrice: "$2,699",
            description: "Figma, Adobe XD, user research, and design thinking",
            outcomes: ["UI/UX Designer", "Product Designer", "Design Lead"],
            color: "from-orange-500 to-red-500"
                        }
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
                programType: "data-science",
                experienceLevel: "beginner",
                careerGoal: "",
                preferredStart: "",
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

            {/* Hero Section - DARK THEME with Education Focus */}
            <DarkHeroSection backgroundImage="/education-hero.jpg">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-sm font-medium text-blue-400">Career-Focused Learning</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Master Data Science
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-green-500 to-purple-500 bg-clip-text text-transparent">
                        In 12 Weeks
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    From beginner to job-ready in 12 weeks with AI-powered learning and CRM-driven career support. 
                    94% job placement rate with average salary increase of $45,000.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "94%", label: "Job Placement Rate", icon: "🎯" },
                        { value: "$45K", label: "Avg Salary Increase", icon: "💰" },
                        { value: "12", label: "Weeks to Job Ready", icon: "⚡" },
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
                            <div className=" font-bold text-blue-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300 max-md:col-start-2">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => document.getElementById('education-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-blue-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        Start Learning Today
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                        Download Syllabus
                    </button>
                </div> */}
            </DarkHeroSection>



            {/* Learning Outcomes & Benefits - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Learn Skills That
                            <br />
                            <span className="text-cyan-600">Get You Hired</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Master the exact skills employers are looking for with our CRM-powered learning platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {programFeatures.map((benefit, i) => (
                            <FeatureCard key={i} feature={benefit} />
                        ))}
                    </div>

                    {/* Learning Outcomes */}
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-black text-gray-900 mb-6">Your Learning Journey</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">📚</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Week 1-4</div>
                                <div className="text-gray-600">Foundations & Core Skills</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🔧</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Week 5-8</div>
                                <div className="text-gray-600">Advanced Techniques</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">💼</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Week 9-12</div>
                                <div className="text-gray-600">Real-World Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🚀</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Week 13+</div>
                                <div className="text-gray-600">Job Placement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Program Details - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Choose Your Path to
                            <br />
                            <span className="text-cyan-600">Success</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find the perfect program for your career goals
                        </p>
                    </div>

                    <div className="space-y-8">
                        {programs.map((program, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                                <div className="grid lg:grid-cols-3 gap-8 items-center">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl text-white`}>
                                            {i === 0 ? "📊" : i === 1 ? "📈" : i === 2 ? "📊" : "🎨"}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900">{program.name}</h3>
                                            <div className="text-gray-600">{program.level} • {program.duration}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <p className="text-gray-700">{program.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {program.outcomes.map((outcome, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                                                    {outcome}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-lg text-gray-500 line-through">{program.originalPrice}</div>
                                        <div className="text-3xl font-black text-gray-900">{program.price}</div>
                                        <div className="text-sm text-green-600 font-semibold">Save 25%</div>
                                        <button 
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, programType: program.name.toLowerCase().replace(/\s+/g, '-') }));
                                                document.getElementById('education-form')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-all"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Student Success Stories - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Student Success
                            <br />
                            <span className="text-cyan-600">Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real transformations from our CRM-powered learning community
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-12 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="text-8xl mb-6 opacity-30">"</div>
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



            {/* Instructor & Curriculum - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Learn from Industry
                            <br />
                            <span className="text-cyan-600">Experts</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get mentored by professionals working at top companies
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left Column - Instructor Bios */}
                        <div className="space-y-8">
                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl">
                                        👨‍🏫
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-gray-900">Dr. Sarah Chen</h4>
                                        <div className="text-cyan-600 font-semibold">Senior Data Scientist, Google</div>
                                        <div className="text-gray-600">10+ years industry experience</div>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    Former Google Data Scientist with 10+ years of experience building ML systems. 
                                    PhD in Computer Science from MIT. Passionate about making complex topics accessible.
                                </p>
                            </div>

                            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-3xl">
                                        👩‍💼
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-gray-900">Michael Rodriguez</h4>
                                        <div className="text-green-600 font-semibold">Director of Analytics, Meta</div>
                                        <div className="text-gray-600">8+ years industry experience</div>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    Analytics Director at Meta with expertise in business intelligence and data strategy. 
                                    MBA from Stanford, passionate about helping students transition into tech careers.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Curriculum Highlights */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">Curriculum Highlights</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                        <span className="text-gray-700">Real-World Projects</span>
                                        <span className="text-lg font-bold text-blue-600">15+</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                        <span className="text-gray-700">Industry Mentors</span>
                                        <span className="text-lg font-bold text-green-600">24/7</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                        <span className="text-gray-700">Career Support</span>
                                        <span className="text-lg font-bold text-purple-600">Lifetime</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Curriculum Details */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-xl">
                        <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Sample Curriculum</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Week 1-4: Foundations</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Python programming fundamentals</li>
                                    <li>• Data manipulation with Pandas</li>
                                    <li>• SQL database querying</li>
                                    <li>• Data visualization with matplotlib</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-4">Week 5-8: Advanced Topics</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Machine learning algorithms</li>
                                    <li>• Statistical analysis methods</li>
                                    <li>• Big data processing</li>
                                    <li>• Cloud platforms (AWS/Azure)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CRM Integration Benefits - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            CRM-Powered Learning That
                            <br />
                            <span className="text-cyan-600">Adapts to You</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Personalized learning experience that evolves with your progress and career goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: "🎯",
                                features:[],
                                title: "Personalized Learning Paths",
                                description: "AI analyzes your progress and adapts content to your learning style and pace"
                            },
                            {
                                icon: "📊",
                                features:[],
                                title: "Progress Tracking",
                                description: "Real-time analytics show exactly where you stand and what to focus on next"
                            },
                            {
                                icon: "💬",
                                features:[],
                                title: "Smart Mentorship",
                                description: "Get matched with mentors based on your learning patterns and career goals"
                            },
                            {
                                icon: "🚀",
                                features:[],
                                title: "Career Acceleration",
                                description: "CRM tracks your skills and automatically suggests relevant job opportunities"
                            },
                            {
                                icon: "📚",
                                features:[],
                                title: "Lifetime Access",
                                description: "Keep learning with updated content and new modules added regularly"
                            },
                            {
                                icon: "🤝",
                                features:[],
                                title: "Network Building",
                                description: "Connect with alumni and industry professionals through our CRM-powered network"
                            }
                        ].map((benefit, i) => (
                            <FeatureCard key={i} feature={benefit} />
                        ))}
                    </div>

                    {/* CRM Workflow */}
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12 text-center">
                        <h3 className="text-3xl font-black text-gray-900 mb-6">Your Personalized Journey</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl mb-4">📋</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Assessment</div>
                                <div className="text-gray-600">AI evaluates your skills and goals</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">🎯</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Personalization</div>
                                <div className="text-gray-600">Custom learning path created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">📈</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Optimization</div>
                                <div className="text-gray-600">Path adapts to your progress</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-4">💼</div>
                                <div className="text-2xl font-bold text-gray-900 mb-2">Placement</div>
                                <div className="text-gray-600">Job placement assistance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Education Form Section - LIGHT THEME */}
            <section id="education-form" className="py-32 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Start Your Learning Journey Today
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">Apply now • No commitment required • Start learning in 2 weeks</p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Program of Interest *</label>
                                    <select
                                        value={formData.programType}
                                        onChange={(e) => handleInputChange('programType', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="data-science">Data Science Mastery</option>
                                        <option value="digital-marketing">Digital Marketing Pro</option>
                                        <option value="business-analytics">Business Analytics</option>
                                        <option value="ui-ux">UI/UX Design</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Experience Level</label>
                                    <select
                                        value={formData.experienceLevel}
                                        onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="beginner">Beginner (0-2 years)</option>
                                        <option value="intermediate">Intermediate (2-5 years)</option>
                                        <option value="advanced">Advanced (5+ years)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Career Goal</label>
                                    <input
                                        type="text"
                                        value={formData.careerGoal}
                                        onChange={(e) => handleInputChange('careerGoal', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Data Scientist, Business Analyst, etc."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Preferred Start Date</label>
                                    <input
                                        type="date"
                                        value={formData.preferredStart}
                                        onChange={(e) => handleInputChange('preferredStart', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Tell us about your goals (Optional)</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                    placeholder="What are your career goals? What challenges are you facing?"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                />
                            </div>

                            {/* Trust Indicators */}
                            <div className="bg-blue-50 rounded-lg p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-blue-700">Money-back guarantee</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-blue-700">CRM-powered support</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-600 text-xs">✓</span>
                                        </div>
                                        <span className="text-sm text-blue-700">Lifetime access</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
                                    isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl text-white'
                                }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Processing Your Application...</span>
                                    </div>
                                ) : (
                                    'Start Your Learning Journey'
                                )}
                            </button>

                            <p className="text-center text-sm text-gray-500">
                                By submitting this form, you agree to our{' '}
                                <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>{' '}
                                and{' '}
                                <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>.
                                Your information will be used to create your personalized learning profile in our CRM system.
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
                                        <div className="font-semibold text-green-800">Application Submitted!</div>
                                        <div className="text-sm text-green-700">Check your email for next steps and your personalized learning plan.</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Contact Alternatives */}
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-4">Need help choosing the right program? We're here for you.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 rounded-lg font-semibold hover:border-blue-300 transition-all">
                                    <span>💬</span>
                                    <span>Program Advisor</span>
                                </button>
                                <a 
                                    href="tel:+1-555-123-4567" 
                                    className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 text-blue-600 rounded-lg font-semibold hover:border-blue-300 transition-all"
                                >
                                    <span>📞</span>
                                    <span>Call Admissions</span>
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
            <FAQSection items={educationFAQ} />



            {/* Final CTA Section - DARK THEME */}
            <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-4xl mx-auto relative text-center">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Transform Your Career Today
                    </h2>
                    <p className="text-2xl text-blue-50 mb-12">
                        Join thousands of graduates who landed their dream jobs with our CRM-powered learning
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button 
                            onClick={() => document.getElementById('education-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-white text-blue-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                        >
                            Start Learning Today
                        </button>
                        <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Download Brochure
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-blue-50">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>94% job placement rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Money-back guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Lifetime career support</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="py-12 px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Programs</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/programs/data-science" className="block hover:text-blue-600">Data Science</Link>
                                <Link href="/programs/digital-marketing" className="block hover:text-blue-600">Digital Marketing</Link>
                                <Link href="/programs/business-analytics" className="block hover:text-blue-600">Business Analytics</Link>
                                <Link href="/programs/ui-ux" className="block hover:text-blue-600">UI/UX Design</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">For Students</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/students/apply" className="block hover:text-blue-600">Apply Now</Link>
                                <Link href="/students/financing" className="block hover:text-blue-600">Financing Options</Link>
                                <Link href="/students/career-services" className="block hover:text-blue-600">Career Services</Link>
                                <Link href="/students/alumni" className="block hover:text-blue-600">Alumni Network</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/resources/blog" className="block hover:text-blue-600">Learning Blog</Link>
                                <Link href="/resources/webinars" className="block hover:text-blue-600">Free Webinars</Link>
                                <Link href="/resources/guides" className="block hover:text-blue-600">Career Guides</Link>
                                <Link href="/resources/support" className="block hover:text-blue-600">Student Support</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
                            <div className="space-y-2 text-sm text-gray-600">
                                <Link href="/about" className="block hover:text-blue-600">About Us</Link>
                                <Link href="/careers" className="block hover:text-blue-600">Careers</Link>
                                <Link href="/press" className="block hover:text-blue-600">Press</Link>
                                <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
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