"use client";

import CaseStudyCard from "@/components/common/cards/CaseStudyCard";
import FeatureCard from "@/components/common/cards/FeatureCard";
import { MiniCTA } from "@/components/common/cta/MiniCTA";
import { FAQSection } from "@/components/common/FAQ/FAQSection";
import DarkHeroSection from "@/components/common/sections/DarkHeroSection";
import { useNavigate } from "@/hooks/useNavigate";
import { useState, useEffect } from "react";
import { AiOutlineHeatMap } from "react-icons/ai";
import { BsBarChartLine, BsCart4, BsFillPieChartFill, BsGraphUpArrow, BsPlugFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaCloud, FaLock, FaRegBell, FaStar, FaUsers } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { GiArcheryTarget, GiCrossedChains, GiRobotAntennas } from "react-icons/gi";
import { IoIosAnalytics, IoIosFlash, IoIosRocket } from "react-icons/io";
import { IoFunnelSharp } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { RiExportFill } from "react-icons/ri";
import { TiChartLine } from "react-icons/ti";
import { VscGraph } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
export default function AdvancedAnalyticsPage() {
    const [activeMetric, setActiveMetric] = useState(0);
    const navigate = useNavigate();
    
    const analyticsFAQ = [
        {
            q: "Can I connect multiple CRM platforms simultaneously?",
            a: "Yes! Our unified dashboard aggregates data from Salesforce, HubSpot, Zoho, Pipedrive, and 50+ other CRMs in real-time. All your data in one place, updated every minute."
        },
        {
            q: "How does AI-powered insights work?",
            a: "Our AI analyzes millions of data points across your CRMs to identify trends, predict outcomes, and recommend actions. It learns from your business patterns and continuously improves its predictions."
        },
        {
            q: "Is my data secure and compliant?",
            a: "Absolutely. We use bank-level 256-bit encryption, are SOC 2 Type II certified, GDPR compliant, and maintain strict data privacy standards. Your data never leaves our secure infrastructure."
        },
        {
            q: "Can I create custom reports and dashboards?",
            a: "Yes! Drag-and-drop dashboard builder, custom metrics, scheduled reports, and white-label options. Save unlimited dashboard configurations and share with your team."
        },
        {
            q: "What kind of predictions can the AI make?",
            a: "Deal close probability, revenue forecasting, churn risk, optimal contact timing, lead scoring, pipeline health, and custom predictions based on your specific business metrics."
        }
    ];

    // Auto-rotate analytics demo
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMetric(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME */}
            <DarkHeroSection backgroundImage="/aianalytics.png">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-sm font-medium text-purple-400">AI-Powered Intelligence</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Advanced
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                        Analytics
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Transform raw CRM data into actionable insights with AI-powered analytics.
                    Make data-driven decisions with real-time dashboards and predictive intelligence.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "50+", label: "CRM Integrations", icon: <GiCrossedChains /> },
                        { value: "Real-time", label: "Data Sync", icon: <IoIosFlash /> },
                        { value: "95%", label: "Accuracy", icon: <FiTarget /> },
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
                            <div className="mb-3 group-hover:scale-110 text-cyan-500 flex justify-center items-center text-5xl transition-transform">{stat.icon}</div>
                            <div className="font-bold text-purple-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </DarkHeroSection>

            {/* What It Does Section - LIGHT THEME */}
            <section className="py-32 px-6 relative bg-gradient-to-br from-purple-50 via-white to-pink-50">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            What It <span className="text-cyan-600">Does</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our AI-powered analytics platform unifies data from all your CRMs, provides real-time insights,
                            and uses machine learning to predict outcomes and recommend actions.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Visual Demo - Analytics Dashboard */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                {/* Dashboard Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-gray-900">Real-Time Dashboard</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-gray-500">Live</span>
                                    </div>
                                </div>

                                {/* Key Metrics Cards */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {[
                                        { label: "Revenue", value: "$124.5K", change: "+23%", up: true },
                                        { label: "Conversion", value: "34.2%", change: "+8%", up: true },
                                        { label: "Avg Deal", value: "$8.4K", change: "-2%", up: false },
                                        { label: "Pipeline", value: "$2.1M", change: "+45%", up: true }
                                    ].map((metric, i) => (
                                        <div 
                                            key={i} 
                                            className={`p-4 rounded-xl transition-all ${
                                                activeMetric === i 
                                                    ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300' 
                                                    : 'bg-gray-50 border-2 border-gray-200'
                                            }`}
                                        >
                                            <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
                                            <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                                            <div className={`text-xs font-semibold ${metric.up ? 'text-green-600' : 'text-red-600'}`}>
                                                {metric.change} {metric.up ? '↑' : '↓'}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart Visualization */}
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                                    <div className="flex items-end justify-between h-32 gap-2">
                                        {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                                            <div key={i} className="flex-1 flex flex-col justify-end">
                                                <div 
                                                    className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-t transition-all duration-500"
                                                    style={{ height: `${height}%` }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                                        <span>Mon</span>
                                        <span>Tue</span>
                                        <span>Wed</span>
                                        <span>Thu</span>
                                        <span>Fri</span>
                                        <span>Sat</span>
                                        <span>Sun</span>
                                    </div>
                                </div>

                                {/* AI Insight */}
                                <div className="mt-4 p-4 bg-purple-50 border-2 border-purple-200 rounded-xl">
                                    <div className="flex items-start gap-3">
                                        <div className="text-2xl">🤖</div>
                                        <div>
                                            <div className="text-xs font-semibold text-cyan-600 mb-1">AI INSIGHT</div>
                                            <div className="text-sm text-gray-700">
                                                Deal close probability increased by 15% this week. Consider focusing on high-value leads.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: <VscGraph />,
                                    title: "Unified Data Dashboard",
                                    description: "Connect all your CRMs into one powerful dashboard. See everything in real-time with automatic data synchronization every 60 seconds."
                                },
                                {
                                    icon: <GiRobotAntennas />,
                                    title: "AI-Powered Predictions",
                                    description: "Machine learning algorithms analyze patterns to predict deal outcomes, revenue forecasts, and identify at-risk opportunities."
                                },
                                {
                                    icon: <IoIosFlash />,
                                    title: "Real-Time Alerts",
                                    description: "Get instant notifications when metrics hit thresholds, deals stall, or opportunities require attention. Never miss a critical moment."
                                },
                                {
                                    icon: <FiTarget />,
                                    title: "Custom Reporting",
                                    description: "Build unlimited custom reports with drag-and-drop simplicity. Schedule automatic delivery and share insights across teams."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border-2 border-purple-100 rounded-2xl hover:border-purple-300 hover:shadow-lg transition-all group">
                                    <div className="text-4xl group-hover:scale-110 transition-transform text-purple-500">{feature.icon}</div>
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

            {/* Real-World Examples Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Real-World <span className="text-cyan-600">Success Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how companies leverage advanced analytics to drive growth and make smarter decisions.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                industry: "E-Commerce",
                                company: "ShopTech Solutions",
                                logo: <BsCart4 className="text-purple-100 text-4xl"/>,
                                challenge: "Managing data from 5 different CRMs led to siloed insights and poor decision-making. Sales forecasting was off by 30%.",
                                solution: "Unified all CRMs into one analytics dashboard with AI-powered forecasting and automated reporting across departments.",
                                results: [
                                    { metric: "95%", label: "Forecast accuracy improvement" },
                                    { metric: "60%", label: "Faster decision-making" },
                                    { metric: "3x", label: "ROI from data insights" }
                                ],
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                industry: "SaaS",
                                company: "CloudScale Inc",
                                logo: <FaCloud className="text-blue-100 text-4xl"/>,
                                challenge: "Unable to identify churn signals early. Lost 25% of customers before understanding why they were leaving.",
                                solution: "Implemented AI churn prediction and customer health scoring with real-time alerts for at-risk accounts.",
                                results: [
                                    { metric: "80%", label: "Reduction in churn rate" },
                                    { metric: "2 weeks", label: "Earlier churn detection" },
                                    { metric: "$500K", label: "Annual revenue saved" }
                                ],
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                industry: "Manufacturing",
                                company: "IndustrialPro Corp",
                                logo: <LiaIndustrySolid  className="text-green-100 text-4xl"/>,
                                challenge: "Sales team had no visibility into pipeline health. Deals were slipping through cracks with no predictive insights.",
                                solution: "Deployed predictive deal scoring and pipeline analytics with automated alerts for stalled opportunities.",
                                results: [
                                    { metric: "45%", label: "Increase in win rate" },
                                    { metric: "90%", label: "Pipeline visibility" },
                                    { metric: "35%", label: "Revenue growth" }
                                ],
                                color: "from-green-500 to-teal-500"
                            }
                        ].map((caseStudy, i) => (
                            <CaseStudyCard key={i} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Analytics Capabilities - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Powerful <span className="text-cyan-600">Capabilities</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to turn data into decisions and insights into action.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <IoIosAnalytics className="text-cyan-600" />,
                                title: "Predictive Analytics",
                                description: "AI forecasts revenue, predicts deal outcomes, and identifies risks before they impact your business.",
                                features: ["Revenue forecasting", "Deal probability", "Churn prediction"]
                            },
                            {
                                icon: <BsGraphUpArrow className="text-cyan-600" />,
                                title: "Custom Dashboards",
                                description: "Drag-and-drop builder for unlimited dashboards tailored to any team or use case.",
                                features: ["No-code builder", "Real-time updates", "Mobile responsive"]
                            },
                            {
                                icon: <GiArcheryTarget className="text-cyan-600" />,
                                title: "Smart Segmentation",
                                description: "AI automatically segments customers based on behavior, value, and engagement patterns.",
                                features: ["Auto-clustering", "Behavior tracking", "Value scoring"]
                            },
                            {
                                icon: <VscGraph className="text-cyan-600" />,
                                title: "Advanced Reporting",
                                description: "Generate comprehensive reports with custom metrics, filters, and scheduled delivery.",
                                features: ["Custom reports", "Auto-scheduling", "Export options"]
                            },
                            {
                                icon: <FaRegBell className="text-cyan-600" />,
                                title: "Intelligent Alerts",
                                description: "Get notified when metrics change, deals stall, or opportunities need attention.",
                                features: ["Custom triggers", "Multi-channel alerts", "Smart routing"]
                            },
                            {
                                icon: <GiCrossedChains className="text-cyan-600"/>,
                                title: "50+ Integrations",
                                description: "Connect Salesforce, HubSpot, Zoho, Pipedrive, and 50+ other CRM platforms seamlessly.",
                                features: ["Pre-built connectors", "Real-time sync", "Two-way updates"]
                            }
                        ].map((feature, i) => (
                            <FeatureCard key={i} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Visualization Types - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Visualize <span className="text-cyan-600">Any Metric</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose from 20+ chart types to visualize your data exactly how you need it
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { type: "Line Charts", icon: <TiChartLine />, color: "from-blue-500 to-cyan-500" },
                            { type: "Bar Charts", icon: <BsBarChartLine />, color: "from-purple-500 to-pink-500" },
                            { type: "Pie Charts", icon: <BsFillPieChartFill />, color: "from-green-500 to-teal-500" },
                            { type: "Heat Maps", icon: <AiOutlineHeatMap />, color: "from-red-500 to-orange-500" },
                            { type: "Funnels", icon: <IoFunnelSharp />, color: "from-indigo-500 to-purple-500" },
                            { type: "Cohort Analysis", icon: <FaUsers/>, color: "from-cyan-500 to-blue-500" },
                            { type: "Scatter Plots", icon: <IoIosFlash />, color: "from-yellow-500 to-orange-500" },
                            { type: "Gauges", icon: <FiTarget/>, color: "from-pink-500 to-rose-500" }
                        ].map((viz, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className={`bg-gradient-to-br ${viz.color} rounded-2xl p-8 text-center hover:shadow-2xl transition-all hover:scale-105`}>
                                    <div className="text-5xl mb-3 group-hover:scale-110 flex justify-center items-center text-gray-100 transition-transform">{viz.icon}</div>
                                    <h3 className="text-xl font-bold text-white">{viz.type}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Before vs <span className="text-cyan-600">After</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            See the transformation advanced analytics brings to your business
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-red-200 flex items-center justify-center">
                                    <span className="text-2xl">❌</span>
                                </div>
                                <h3 className="text-2xl font-bold text-red-600">Without Analytics</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Data scattered across multiple CRMs",
                                    "Manual report creation takes hours",
                                    "30% inaccuracy in forecasting",
                                    "No visibility into pipeline health",
                                    "React to problems after they occur",
                                    "Decisions based on gut feeling"
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

                        {/* After */}
                        <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center">
                                    <span className="text-2xl">✓</span>
                                </div>
                                <h3 className="text-2xl font-bold text-green-600">With Advanced Analytics</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Unified dashboard across all CRMs",
                                    "Real-time reports in seconds",
                                    "95% forecast accuracy with AI",
                                    "Complete pipeline visibility",
                                    "Predict and prevent issues early",
                                    "Data-driven decisions with confidence"
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
                        title="Calculate Your Analytics ROI"
                        description={
                            <>
                                Companies using our analytics see 3x ROI within 3 months
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
                            Technical <span className="text-purple-400">Specs</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Enterprise-grade analytics infrastructure built for scale and performance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Data Refresh", value: "60 sec", icon: <IoIosFlash /> },
                            { label: "Query Speed", value: "< 1s", icon: <IoIosRocket /> },
                            { label: "Data Retention", value: "Unlimited", icon: <CgNotes /> },
                            { label: "API Rate", value: "Unlimited", icon: <GiCrossedChains /> },
                            { label: "Concurrent Users", value: "Unlimited", icon: <FaUsers /> },
                            { label: "Uptime SLA", value: "99.99%", icon: <FaLock />},
                            { label: "CRM Integrations", value: "50+", icon: <BsPlugFill /> },
                            { label: "Export Formats", value: "10+", icon: <RiExportFill /> }
                        ].map((spec, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                                <div className="text-4xl mb-4 group-hover:scale-110 text-purple-400 transition-transform">{spec.icon}</div>
                                <div className="text-sm text-gray-200 mb-2">{spec.label}</div>
                                <div className="text-3xl font-black text-purple-400">{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Supported CRMs */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-white text-center mb-8">Supported CRM Platforms</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive", "Microsoft Dynamics", "Freshsales", "Monday.com", "Copper"].map((crm, i) => (
                                <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300 hover:bg-white/10 transition-all">
                                    {crm}
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
                            What <span className="text-cyan-600">Customers</span> Say
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The AI predictions are scary accurate. We went from 70% to 95% forecast accuracy. Our board meetings are now data-driven instead of guesswork.",
                                author: "David Park",
                                role: "VP of Sales",
                                company: "DataDriven Inc",
                                avatar: <FaUser />
                            },
                            {
                                quote: "Having all our CRM data in one dashboard saved us 20+ hours per week. The real-time insights help us catch issues before they become problems.",
                                author: "Lisa Martinez",
                                role: "Head of Operations",
                                company: "ScaleUp Solutions",
                                avatar: <FaUser />
                            },
                            {
                                quote: "The churn prediction model identified at-risk customers 2 weeks before they churned. We saved $500K in annual revenue in the first quarter alone.",
                                author: "James Wilson",
                                role: "Customer Success Director",
                                company: "CloudTech Pro",
                                avatar: <FaUser />
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-xl transition-all">
                                <div className="text-6xl  opacity-30 text-cyan-600">"</div>
                                <div>
                                    {
                                        Array.from({ length: 5 }).map((_, starIndex) => (
                                            <FaStar key={starIndex} className="inline mb-4 text-yellow-400 mr-1" />
                                        ))
                                    }
                                </div>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">{testimonial.quote}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                        <div className="text-sm text-cyan-600 font-semibold">{testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={analyticsFAQ} />

            {/* Final CTA Section - DARK THEME */}
            <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-4xl mx-auto relative text-center">
                    <h2 className="text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Start Making Data-Driven Decisions
                    </h2>
                    <p className="text-2xl text-purple-50 mb-12">
                        Join 5,000+ companies using AI-powered analytics to grow faster and smarter
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
                            Start Free Trial
                        </button>
                        <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Schedule Demo
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-purple-50">
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
                            <span>Cancel anytime</span>
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

                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }

                .animate-slide-up {
                    animation: slide-up 1s ease-out forwards;
                }

                .animation-delay-500 { animation-delay: 0.5s; }
                .animation-delay-1000 { animation-delay: 1s; }
            `}</style>
        </div>
    );
}