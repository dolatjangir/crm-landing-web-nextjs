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
import { BiBuildingHouse, BiSolidCustomize } from "react-icons/bi";
import { BsPlugFill, BsTools } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaBagShopping, FaLock, FaRegHospital, FaUser } from "react-icons/fa6";
import { GiArcheryTarget, GiCrossedChains, GiRobotAntennas } from "react-icons/gi";
import { GoWorkflow } from "react-icons/go";
import { IoIosFlash } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdDashboardCustomize, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiComputerFill, RiComputerLine } from "react-icons/ri";
import { TbLabelImportantFilled } from "react-icons/tb";
import { TiArrowSync } from "react-icons/ti";
import { VscGraph, VscGraphLine } from "react-icons/vsc";

export default function CustomizableWorkflowsPage() {
    const [selectedIndustry, setSelectedIndustry] = useState(0);
    const [activeWorkflow, setActiveWorkflow] = useState(0);
    const navigate = useNavigate();

    const customizableWorkflowsFAQ = [
        {
            q: "How customizable are the workflows?",
            a: "Our workflows are fully customizable with drag-and-drop builders, custom logic, industry-specific templates, and code-level customization for advanced users."
        },
        {
            q: "Can I create workflows for my specific industry?",
            a: "Yes! We provide pre-built templates for 50+ industries including healthcare, real estate, finance, manufacturing, retail, and more. Each template can be fully customized."
        },
        {
            q: "Do I need technical skills to customize workflows?",
            a: "No coding required for basic customization. Our visual builder makes it easy for anyone to create and modify workflows. Technical users can add custom code if needed."
        },
        {
            q: "How long does it take to set up custom workflows?",
            a: "Industry templates can be deployed in minutes. Custom workflows typically take 15-30 minutes to build and test, depending on complexity."
        },
        {
            q: "Can workflows adapt to changing business needs?",
            a: "Absolutely. Workflows can be modified in real-time, and our AI learns from usage patterns to suggest optimizations as your business evolves."
        }
    ];

    const industries = [
        {
            name: "Healthcare",
            icon: <FaRegHospital />,
            color: "from-green-500 to-emerald-500",
            workflows: [
                { name: "Patient Intake", automation: "85%", time: "75% faster" },
                { name: "Insurance Verification", automation: "92%", time: "90% faster" },
                { name: "Appointment Scheduling", automation: "78%", time: "60% faster" }
            ],
            features: ["HIPAA Compliance", "Medical Record Integration", "Insurance API", "Telehealth Support"]
        },
        {
            name: "Real Estate",
            icon: <BiBuildingHouse />,
            color: "from-blue-500 to-indigo-500",
            workflows: [
                { name: "Lead Nurturing", automation: "88%", time: "70% faster" },
                { name: "Property Matching", automation: "95%", time: "80% faster" },
                { name: "Contract Processing", automation: "82%", time: "65% faster" }
            ],
            features: ["MLS Integration", "Lead Scoring", "Document Automation", "E-signature"]
        },
        {
            name: "Finance",
            icon: <FaBagShopping />,
            color: "from-purple-500 to-pink-500",
            workflows: [
                { name: "Loan Processing", automation: "90%", time: "85% faster" },
                { name: "Compliance Checks", automation: "95%", time: "90% faster" },
                { name: "Risk Assessment", automation: "87%", time: "75% faster" }
            ],
            features: ["KYC/AML Compliance", "Credit Bureau API", "Risk Algorithms", "Audit Trails"]
        },
        {
            name: "Manufacturing",
            icon: <LiaIndustrySolid />,
            color: "from-orange-500 to-red-500",
            workflows: [
                { name: "Supply Chain", automation: "83%", time: "70% faster" },
                { name: "Quality Control", automation: "91%", time: "80% faster" },
                { name: "Inventory Management", automation: "89%", time: "75% faster" }
            ],
            features: ["ERP Integration", "IoT Sensors", "Predictive Maintenance", "Quality Analytics"]
        }
    ];

    // Auto-rotate workflow demo
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWorkflow(prev => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-gray-900 overflow-hidden">

            {/* Hero Section - DARK THEME */}
            <DarkHeroSection backgroundImage="/custom-workflows.png">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">Industry-Specific AI</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Customizable
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Workflows
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Adapt the platform to match your industry-specific processes and unique business needs.
                    Build workflows that work exactly how you do.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "50+", label: "Industries", icon: <LiaIndustrySolid /> },
                        { value: "100%", label: "Customizable", icon: <BiSolidCustomize /> },
                        { value: "10x", label: "ROI", icon: <VscGraphLine  /> },
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
                            <div className=" mb-3 group-hover:scale-110 flex justify-center items-center text-cyan-200 text-5xl transition-transform">{stat.icon}</div>
                            <div className=" font-bold text-cyan-400 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-300 max-md:col-start-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </DarkHeroSection>


            {/* Industry-Specific Solutions - LIGHT THEME */}
            <section className="py-32 px-4 md:px-6 relative bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Industry-Specific <span className="text-cyan-600">Solutions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pre-built workflows designed for your industry's unique challenges,
                            fully customizable to match your exact processes.
                        </p>
                    </div>

                    {/* Industry Selector */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {industries.map((industry, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedIndustry(i)}
                                className={`px-4 md:px-6 py-3 flex rounded-xl font-semibold transition-all ${selectedIndustry === i
                                    ? 'bg-cyan-600 text-white shadow-lg'
                                    : 'bg-white border-2 border-gray-200  hover:border-cyan-300 hover:shadow-md'
                                    }`}
                            >
                                <span className={`mr-2 text-xl md:text-2xl ${selectedIndustry === i ? "text-white " : "text-cyan-600"}`}>{industry.icon}</span>
                                {industry.name}
                            </button>
                        ))}
                    </div>

                    {/* Selected Industry Showcase */}
                    <div className="bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 shadow-2xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="text-5xl md:text-6xl text-cyan-600">{industries[selectedIndustry].icon}</div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-black text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                            {industries[selectedIndustry].name}
                                        </h3>
                                        <p className="text-sm md:text-xl text-gray-600">Industry-specific workflows</p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {industries[selectedIndustry].workflows.map((workflow, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                                            <div>
                                                <div className="font-bold text-gray-900">{workflow.name}</div>
                                                <div className="text-sm text-gray-600">Process automation</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-cyan-600 text-lg">{workflow.automation}</div>
                                                <div className="text-sm text-gray-500">{workflow.time}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {industries[selectedIndustry].features.map((feature, i) => (
                                        <div key={i} className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-medium">
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 md:p-6 text-white">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-4 text-gray-400 text-sm">Workflow Builder</span>
                                    </div>
                                    <div className="space-y-3">
                                        {['Trigger', 'Condition', 'Action', 'Integration', 'Result'].map((step, i) => (
                                            <div key={i} className={`flex items-center gap-3 p-3 rounded-lg ${activeWorkflow === i ? 'bg-cyan-600/20 border border-cyan-500' : 'bg-gray-700/50'}`}>
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${activeWorkflow === i ? 'bg-cyan-600' : 'bg-gray-600'}`}>
                                                    {i + 1}
                                                </div>
                                                <span className="font-medium">{step}</span>
                                                {activeWorkflow === i && (
                                                    <div className="ml-auto w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Customization Features - LIGHT THEME */}
            <section className="py-32 px-4 md:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Unlimited <span className="text-cyan-600">Customization</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every workflow can be tailored to match your exact business processes,
                            from simple modifications to complex custom logic.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="space-y-6">
                            {[
                                {
                                    icon: <MdDashboardCustomize />,
                                    title: "Visual Workflow Builder",
                                    description: "Drag-and-drop interface with 200+ pre-built components. No coding required for 95% of use cases."
                                },
                                {
                                    icon: <BsTools />,
                                    title: "Custom Logic Engine",
                                    description: "Build complex business rules with conditional logic, loops, variables, and custom functions."
                                },
                                {
                                    icon: <GiCrossedChains />,
                                    title: "API & Integration Builder",
                                    description: "Connect to any system with custom APIs, webhooks, and data transformation tools."
                                },
                                {
                                    icon: <GiRobotAntennas />,
                                    title: "AI-Powered Suggestions",
                                    description: "Our AI analyzes your business patterns and suggests workflow optimizations automatically."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 p-4 md:p-6 bg-white border-2 border-cyan-100 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all group">
                                    <div className="text-4xl group-hover:scale-110 transition-transform text-cyan-500">{feature.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-4 md:p-8 shadow-2xl">
                                <h3 className="text-2xl font-black text-gray-900 mb-6">Customization Levels</h3>
                                <div className="space-y-4">
                                    {[
                                        { level: "Basic", description: "Templates + Simple Rules", time: "5-15 mins", color: "bg-green-100 text-green-700" },
                                        { level: "Advanced", description: "Custom Logic + Integrations", time: "15-45 mins", color: "bg-blue-100 text-blue-700" },
                                        { level: "Expert", description: "Full Code + API Development", time: "1-4 hours", color: "bg-purple-100 text-purple-700" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 border-2 border-gray-100 rounded-xl hover:border-gray-300 transition-all">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-bold text-gray-900">{item.level}</span>
                                                <span className={`px-3 py-1 rounded-lg text-sm font-medium ${item.color}`}>{item.time}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Real-World Examples Section - LIGHT THEME */}
            <section className="py-32 px-4 md:px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Customization <span className="text-cyan-600">Examples</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how companies across industries customize workflows to solve their unique challenges.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                industry: "E-commerce",
                                company: "FashionForward",
                                logo: "🛍️",
                                challenge: "Returns processing took 5-7 days with manual verification, causing customer dissatisfaction and inventory issues.",
                                solution: "Custom workflow with AI-powered fraud detection, automated shipping labels, and real-time inventory updates.",
                                results: [
                                    { metric: "24hrs", label: "Return processing time" },
                                    { metric: "60%", label: "Reduction in fraud" },
                                    { metric: "95%", label: "Customer satisfaction" }
                                ],
                                color: "from-pink-500 to-rose-500"
                            },
                            {
                                industry: "Education",
                                company: "EduTech Academy",
                                logo: "🎓",
                                challenge: "Student onboarding involved multiple departments with different requirements and 20+ forms.",
                                solution: "Personalized onboarding workflows based on program type, with automated document collection and compliance tracking.",
                                results: [
                                    { metric: "3x", label: "Faster enrollment" },
                                    { metric: "85%", label: "Fewer errors" },
                                    { metric: "100%", label: "Compliance rate" }
                                ],
                                color: "from-indigo-500 to-blue-500"
                            },
                            {
                                industry: "Hospitality",
                                company: "Luxury Resorts",
                                logo: "🏨",
                                challenge: "Guest requests were handled manually across multiple departments, leading to delays and poor guest experience.",
                                solution: "Smart routing workflow with priority-based assignment, real-time tracking, and automated guest communication.",
                                results: [
                                    { metric: "50%", label: "Faster response time" },
                                    { metric: "40%", label: "Higher guest satisfaction" },
                                    { metric: "25%", label: "Staff efficiency gain" }
                                ],
                                color: "from-teal-500 to-cyan-500"
                            }
                        ].map((caseStudy, i) => (
                            <CaseStudyCard key={i} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Features Deep Dive Section - LIGHT THEME */}
            <section className="py-32 px-4 md:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Customization <span className="text-cyan-600">Features</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to build workflows that perfectly match your business processes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <GiArcheryTarget className="text-cyan-500"/>,
                                title: "Industry Templates",
                                description: "Start with pre-built workflows for your industry and customize every detail.",
                                features: ["50+ Industries", "1000+ Templates", "Best Practices Built-in"]
                            },
                            {
                                icon: <TiArrowSync className="text-cyan-500"/>,
                                title: "Dynamic Routing",
                                description: "Create intelligent paths based on data, conditions, and business rules.",
                                features: ["Conditional Logic", "Data-Driven Paths", "Smart Escalation"]
                            },
                            {
                                icon: <GiRobotAntennas className="text-cyan-500"/>,
                                title: "AI Customization",
                                description: "Let AI learn your processes and suggest optimizations automatically.",
                                features: ["Pattern Recognition", "Smart Suggestions", "Auto-Optimization"]
                            },
                            {
                                icon: <VscGraph className="text-cyan-500"/>,
                                title: "Custom Analytics",
                                description: "Build dashboards that track the metrics that matter to your business.",
                                features: ["Custom KPIs", "Real-time Dashboards", "Predictive Analytics"]
                            },
                            {
                                icon: <FaLock className="text-cyan-500"/>,
                                title: "Flexible Security",
                                description: "Configure security and compliance rules that match your requirements.",
                                features: ["Role-based Access", "Compliance Rules", "Audit Controls"]
                            },
                            {
                                icon: <IoIosFlash className="text-cyan-500" />,
                                title: "Rapid Deployment",
                                description: "Deploy custom workflows in minutes with our visual builder and testing tools.",
                                features: ["Visual Builder", "Instant Testing", "One-click Deploy"]
                            }
                        ].map((feature, i) => (
                            <FeatureCard key={i} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Before vs After Comparison - LIGHT THEME */}
            <section className="py-32 px-4 md:px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Generic vs <span className="text-cyan-600">Customized</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            See the difference customization makes for your workflows
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Generic Workflows */}
                        <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-4 md:p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-red-200 flex items-center justify-center">
                                    <span className="text-2xl">❌</span>
                                </div>
                                <h3 className="text-2xl font-bold text-red-600">Generic Workflows</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "One-size-fits-all approach",
                                    "Forced to change your processes",
                                    "Limited industry support",
                                    "Generic automation rules",
                                    "Poor integration with your tools",
                                    "Manual workarounds required",
                                    "Low adoption by team",
                                    "Limited ROI potential"
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

                        {/* Customized Workflows */}
                        <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-4 md:p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-green-200 flex items-center justify-center">
                                    <span className="text-2xl">✓</span>
                                </div>
                                <h3 className="text-2xl font-bold text-green-600">Customized Workflows</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Tailored to your exact needs",
                                    "Adapts to your existing processes",
                                    "Industry-specific features",
                                    "Custom business logic",
                                    "Seamless tool integration",
                                    "Automated end-to-end",
                                    "High team adoption",
                                    "10x ROI potential"
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
                        title="Calculate Your Customization ROI"
                        description={
                            <>
                                See how much you could save with workflows tailored to your business
                            </>
                        }
                        buttonText="Try ROI Calculator →"
                        onClick={() => navigate("/features/roicalculator")}
                    />
                </div>
            </section>



            {/* Technical Specifications - DARK THEME */}
            <section className="py-32 px-4 md:px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Customization <span className="text-cyan-400">Specs</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Technical capabilities that enable unlimited workflow customization
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Workflow Elements", value: "500+", icon: <GoWorkflow /> },
                            { label: "Custom Fields", value: "Unlimited", icon: <MdOutlineDashboardCustomize /> },
                            { label: "Business Rules", value: "Infinite", icon: <IoSettingsSharp /> },
                            { label: "API Endpoints", value: "1000+", icon: <BsPlugFill /> },
                            { label: "Integrations", value: "2000+", icon: <GiCrossedChains /> },
                            { label: "Templates", value: "1000+", icon: <CgNotes /> },
                            { label: "Custom Code", value: "Full Access", icon: <RiComputerLine /> },
                            { label: "White Label", value: "Available", icon: <TbLabelImportantFilled /> }
                        ].map((spec, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all group">
                                <div className="text-4xl mb-4 group-hover:scale-110 text-cyan-400 transition-transform">{spec.icon}</div>
                                <div className="text-sm text-gray-400 mb-2">{spec.label}</div>
                                <div className="text-3xl font-black text-cyan-400">{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="mt-16 flex flex-wrap justify-center gap-6">
                        {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "PCI DSS", "Custom Compliance"].map((cert, i) => (
                            <div key={i} className="px-4 md:px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300">
                                {cert}
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Testimonials Section - LIGHT THEME */}
            <section className="py-32 px-4 md:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Customization <span className="text-cyan-600">Success</span> Stories
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "We customized the healthcare workflows for our specific compliance needs. The platform adapted perfectly to our unique patient onboarding process.",
                                author: "Dr. Jennifer Walsh",
                                role: "Chief Medical Officer",
                                company: "Premier Health Network",
                                avatar: <FaUser/>
                            },
                            {
                                quote: "The customization capabilities are incredible. We built workflows that match our exact manufacturing processes, saving us 30+ hours per week.",
                                author: "Robert Kim",
                                role: "Operations Director",
                                company: "Tech Manufacturing Co",
                                avatar: <FaUser/>
                            },
                            {
                                quote: "We created custom workflows for each property type we manage. The flexibility allowed us to scale from 50 to 500 properties without adding staff.",
                                author: "Lisa Martinez",
                                role: "Property Management CEO",
                                company: "Elite Properties",
                                avatar: <FaUser/>
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-4 md:p-8 hover:border-cyan-300 hover:shadow-xl transition-all">
                                <div className="text-6xl mb-6 opacity-30 text-cyan-600">"</div>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed">{testimonial.quote}</p>
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* FAQ Section - LIGHT THEME */}
            <FAQSection items={customizableWorkflowsFAQ} />



            {/* Final CTA Section - DARK THEME */}
            <section className="py-32 px-4 md:px-6 relative overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-600">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-4xl mx-auto relative text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Build Your Perfect Workflows
                    </h2>
                    <p className="text-2xl text-cyan-50 mb-12">
                        Start with industry templates and customize everything to match your business
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <button className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
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
            <footer className="py-12 px-4 md:px-6 border-t border-gray-200 bg-white">
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