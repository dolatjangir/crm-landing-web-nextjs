"use client";

import CaseStudyCard from "@/components/common/cards/CaseStudyCard";
import FeatureCard from "@/components/common/cards/FeatureCard";
import { MiniCTA } from "@/components/common/cta/MiniCTA";
import { FAQSection } from "@/components/common/FAQ/FAQSection";
import Scrollindicator from "@/components/common/indicators/Scrollindicator";
import DarkHeroSection from "@/components/common/sections/DarkHeroSection";
import { useNavigate } from "@/hooks/useNavigate";
import Link from "next/link";
import { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { FaShieldAlt, FaUser } from "react-icons/fa";
import { FaChartLine, FaRegChartBar, FaSackDollar } from "react-icons/fa6";
import { FcAlarmClock } from "react-icons/fc";
import { LuAlarmClock } from "react-icons/lu";
import { GiArcheryTarget, GiBrain, GiCrossedChains } from "react-icons/gi";
import { IoIosFlash, IoIosRocket } from "react-icons/io";
export default function WhyChooseUsPage() {
    const navigate = useNavigate();
    const [activeComparison, setActiveComparison] = useState(0);

    const whyChooseUsFAQ = [
        {
            q: "Is ibigdata really easier than other CRMs?",
            a: "Yes. Most customers are fully operational within 5 minutes of signing up. Our AI learns your workflow patterns and adapts automatically—no manual configuration required."
        },
        {
            q: "Will ibigdata work with my existing tools?",
            a: "Absolutely. We integrate with 2,000+ tools including Gmail, Outlook, Slack, Zoom, and every major business platform. If it exists, we probably connect to it."
        },
        {
            q: "What if my team resists changing CRMs?",
            a: "That's why we built ibigdata to feel familiar. Your team keeps using the same tools—they just work better together. Most users say \"this finally makes sense\" within their first day."
        },
        {
            q: "Can ibigdata handle my business as we grow?",
            a: "Built for growth. Our platform automatically scales from 10 to 10,000 users without performance issues, expensive upgrades, or migration headaches."
        },
        {
            q: "How reliable is the AI automation?",
            a: "Our AI achieves 97% accuracy and includes human-in-the-loop controls. You can review, adjust, or override any automated action. It learns from your feedback and gets smarter over time."
        }
    ];

    const comparisonPoints = [
        {
            traditional: "Months of setup and configuration",
            ibigdata: "Live in 5 minutes with your existing data",
            icon: <IoIosFlash/>
        },
        {
            traditional: "Expensive consultants required",
            ibigdata: "Self-configuring AI that learns your business",
            icon: <GiBrain />
        },
        {
            traditional: "Disconnected tools and manual work",
            ibigdata: "Everything works together automatically",
            icon: <GiCrossedChains />
        },
        {
            traditional: "One-size-fits-all workflows",
            ibigdata: "Adapts to how you actually work",
            icon: <GiArcheryTarget />
        },
        {
            traditional: "Surprise costs and hidden fees",
            ibigdata: "Transparent pricing that scales with you",
            icon: <FaSackDollar />
        }
    ];

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME */}
            <DarkHeroSection backgroundImage="/whychoseusimg.png" className="animate-grid-move bg-cover bg-center bg-fixed  min-h-screen">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">Why ibigdata?</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Stop Managing Tools.
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Start Growing Your Business.
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    While your competitors wrestle with complicated CRMs, you'll be closing deals 
                    with AI that works as hard as you do.
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                    <button 
                        onClick={() => navigate("/signup")}
                        className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                    >
                        See How It Works
                    </button>
                    <button 
                        onClick={() => navigate("/demo")}
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all"
                    >
                        Watch 2-Min Demo
                    </button>
                </div> */}
            </DarkHeroSection>



            {/* Problem Agitation - LIGHT THEME */}
            <section className="py-32 px-4 md:px-6 bg-gradient-to-br from-red-50 via-white to-orange-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Does This Sound Like You?
                    </h2>
                    
                    <div className="space-y-8 text-left">
                        <div className="bg-white border-l-4 border-red-500 p-4 md:p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"I'm spending more time managing tools than managing customers."</strong>
                            </p>
                            <p className="text-gray-600">
                                Between your CRM, email, calendar, and spreadsheets, you're jumping through hoops just to update a contact's status.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-orange-500 p-4 md:p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"My team avoids the CRM because it's too complicated."</strong>
                            </p>
                            <p className="text-gray-600">
                                You invested in a "powerful" system that sits unused while deals slip through the cracks.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-yellow-500 p-4 md:p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"I'm paying for features I'll never use."</strong>
                            </p>
                            <p className="text-gray-600">
                                Enterprise CRM pricing means paying for complexity you don't need, with surprise fees around every corner.
                            </p>
                        </div>

                        <div className="bg-white border-l-4 border-blue-500 p-4 md:p-6 rounded-r-xl shadow-sm">
                            <p className="text-lg text-gray-700 mb-2">
                                <strong>"My CRM breaks every time we try to grow."</strong>
                            </p>
                            <p className="text-gray-600">
                                Add more users? Integrate new tools? Watch your "scalable" system slow to a crawl.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 p-4 md:p-8 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl">
                        <p className="text-xl font-bold text-gray-900 mb-4">
                            You're not alone. 73% of CRM users say their system makes them less productive.
                        </p>
                        <p className="text-gray-700">
                            It doesn't have to be this way.
                        </p>
                    </div>
                </div>
            </section>



            {/* Value Shift - LIGHT THEME */}
            <section className="py-18 md:py-32 px-4 md:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Finally, A CRM That
                            <br />
                            <span className="text-cyan-600">Works Like You Do</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Built by people who've been in your shoes and designed the CRM we wished we had
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl flex-shrink-0 text-green-600"><IoIosFlash/></div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">Setup That Takes Minutes, Not Months</h3>
                                    <p className="text-gray-600">Import your data, connect your tools, and start seeing value today. Our AI learns your workflow patterns and adapts automatically—no manual configuration marathon.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0 text-blue-600"><GiBrain /></div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">AI That Handles the Busy Work</h3>
                                    <p className="text-gray-600">While you're closing deals, our AI is updating records, scheduling follow-ups, and scoring leads. It learns from your actions and gets smarter every day.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl flex-shrink-0 text-purple-600"><GiCrossedChains /></div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">Everything Works Together</h3>
                                    <p className="text-gray-600">Your email, calendar, phone, and 2,000+ other tools sync automatically. No more copy-pasting between systems or hunting for information.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl flex-shrink-0 text-orange-600"><FaChartLine /></div>
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-2">Grows With You, Not Against You</h3>
                                    <p className="text-gray-600">Add users, connect new tools, handle more data—ibigdata scales automatically. No performance issues, no expensive upgrades, no migration headaches.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 shadow-2xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">The Result?</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                        <span className="text-gray-700">Time Saved Per Week</span>
                                        <span className="text-2xl font-bold text-green-600">15+ hours</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                        <span className="text-gray-700">Deal Close Rate</span>
                                        <span className="text-2xl font-bold text-blue-600">+32%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                        <span className="text-gray-700">Team Adoption</span>
                                        <span className="text-2xl font-bold text-purple-600">94%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                                        <span className="text-gray-700">Setup Time</span>
                                        <span className="text-2xl font-bold text-orange-600">5 minutes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Proof That It Works - LIGHT THEME */}
            <section className="py-18 md:py-32 px-4 md:px-6 bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Proof That It
                            <br />
                            <span className="text-cyan-600">Actually Works</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real results from real businesses who made the switch
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                metric: "15+ hours",
                                label: "saved per week",
                                detail: "Average time teams get back with automation",
                                icon: <LuAlarmClock />
                            },
                            {
                                metric: "32%",
                                label: "higher close rate",
                                detail: "Improvement in deal conversion with AI insights",
                                icon: <FaChartLine />
                            },
                            {
                                metric: "94%",
                                label: "team adoption",
                                detail: "Teams that actively use ibigdata after 30 days",
                                icon: <RiTeamFill className=""/>
                            }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 text-center hover:border-cyan-300 hover:shadow-xl transition-all group">
                                <div className="text-4xl mb-4  text-cyan-600 group-hover:scale-110 flex items-center justify-center transition-transform">{stat.icon}</div>
                                <div className="text-3xl font-black text-gray-900 mb-2">{stat.metric}</div>
                                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                                <div className="text-sm text-gray-600">{stat.detail}</div>
                            </div>
                        ))}
                    </div>

                    {/* Customer Testimonials */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                quote: "I was skeptical about switching CRMs, but ibigdata paid for itself in the first month. The AI automation alone saves me 3 hours every day.",
                                author: "Sarah Chen",
                                role: "Sales Director",
                                company: "TechFlow Solutions",
                                avatar: <FaUser/>,
                                metric: "3 hours saved daily"
                            },
                            {
                                quote: "Finally, a CRM my team actually uses. The AI suggestions are spot-on, and setup took less time than my morning coffee.",
                                author: "Michael Rodriguez",
                                role: "VP of Sales",
                                company: "Growth Dynamics",
                                avatar: <FaUser/>,
                                metric: "Live in 5 minutes"
                            },
                            {
                                quote: "We tried three CRMs before ibigdata. This is the first one that didn't require a full-time admin to manage.",
                                author: "Emily Thompson",
                                role: "Operations Manager",
                                company: "MarketMax Inc",
                                avatar: <FaUser/>,
                                metric: "Zero admin needed"
                            }
                        ].map((testimonial, i) => (
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

                    {/* Trust Signals */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 text-center">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Trusted by Growing Businesses Worldwide</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-3xl font-black text-cyan-600 mb-2">10,000+</div>
                                <div className="text-sm text-gray-600">Companies</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-cyan-600 mb-2">50M+</div>
                                <div className="text-sm text-gray-600">Contacts Managed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-cyan-600 mb-2">99.99%</div>
                                <div className="text-sm text-gray-600">Uptime</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-cyan-600 mb-2">4.8/5</div>
                                <div className="text-sm text-gray-600">Customer Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Comparison Section - LIGHT THEME */}
            <section className="py-18 md:py-32 px-4 md:px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Traditional CRM vs
                            <br />
                            <span className="text-cyan-600">ibigdata</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See exactly what you're missing (and what you're paying for)
                        </p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden shadow-xl">
                        <div className="grid md:grid-cols-2">
                            <div className="bg-gray-50 p-4 md:p-8 border-r border-gray-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="text-3xl">😩</div>
                                    <h3 className="text-2xl font-black text-gray-700">Traditional CRMs</h3>
                                </div>
                                <div className="space-y-4">
                                    {comparisonPoints.map((point, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                            <span className="text-gray-600">{point.traditional}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="text-3xl"><IoIosRocket /></div>
                                    <h3 className="text-2xl font-black text-cyan-600">ibigdata</h3>
                                </div>
                                <div className="space-y-4">
                                    {comparisonPoints.map((point, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{point.ibigdata}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Differentiators */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div className="text-center p-4 md:p-6 ">
                            <div className="text-4xl mb-4 flex items-center justify-center text-cyan-600"><IoIosFlash /></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">93% Faster Setup</h4>
                            <p className="text-gray-600">Most customers are fully operational in under 5 minutes, not 5 months.</p>
                        </div>
                        <div className="text-center p-4 md:p-6 ">
                            <div className="text-4xl mb-4 flex items-center justify-center text-cyan-600"><GiBrain /></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">97% AI Accuracy</h4>
                            <p className="text-gray-600">Our automation learns your patterns and gets smarter every day.</p>
                        </div>
                        <div className="text-center p-4 md:p-6">
                            <div className="text-4xl mb-4 flex items-center justify-center text-cyan-600"><FaSackDollar /></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">60% Lower Cost</h4>
                            <p className="text-gray-600">Transparent pricing with no hidden fees or consultant costs.</p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Objection Handling - LIGHT THEME */}
            <section className="py-32 px-4 md:px-6 bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Your Questions,
                            <br />
                            <span className="text-cyan-600">Answered</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We get it—switching CRMs feels risky. Here's why it's not.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                question: "Is it hard to set up?",
                                answer: "No. Most customers import their data and connect their tools in under 5 minutes. Our AI learns your workflow patterns automatically—no manual configuration required.",
                                icon: <IoIosFlash/>,
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                question: "Will it scale with my business?",
                                answer: "Built for growth. Our platform automatically handles from 10 to 10,000 users without performance issues. Add users, connect tools, handle more data—ibigdata grows with you.",
                                icon: <FaRegChartBar />,
                                color: "from-blue-500 to-indigo-500"
                            },
                            {
                                question: "Is my data safe?",
                                answer: "Bank-level security with SOC 2 Type II certification, 256-bit encryption, and 99.99% uptime. Your data is safer with us than on your own servers.",
                                icon: <FaShieldAlt />,
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                question: "What if my team resists change?",
                                answer: "That's why we built ibigdata to feel familiar. Your team keeps using the same tools—they just work better together. Most users say \"this finally makes sense\" within their first day.",
                                icon:  <RiTeamFill className=""/>,
                                color: "from-orange-500 to-red-500"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 hover:border-cyan-300 hover:shadow-xl transition-all">
                                <div className="flex flex-col items-start gap-4">
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
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 inline-block">
                            <h3 className="text-2xl font-black text-gray-900 mb-4">Still Have Questions?</h3>
                            <p className="text-gray-600 mb-6">Talk to a real human who gets it.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-4 md:px-6 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-all">
                                    Chat with Sales
                                </button>
                                <button className="px-4 md:px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 transition-all">
                                    Email Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Final CTA Section - DARK THEME */}
            <section className="py-32 px-4 md:px-6 relative overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-600">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-4xl mx-auto relative text-center">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Make the Switch Today
                    </h2>
                    <p className="text-2xl text-cyan-50 mb-12">
                        Join thousands of businesses who stopped managing tools and started growing revenue
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button 
                            onClick={() => navigate("/signup")}
                            className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
                        >
                            Start Growing Smarter
                        </button>
                        <button 
                            onClick={() => navigate("/demo")}
                            className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all"
                        >
                            See How It Works
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-cyan-50 text-sm">
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
                            <span>Cancel anytime</span>
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



            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={whyChooseUsFAQ} />



            {/* Footer */}
            <footer className="py-12 px-4 md:px-6 border-t border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
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