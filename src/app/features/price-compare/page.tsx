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

export default function WorkflowAutomationPage() {
    const [activeWorkflow, setActiveWorkflow] = useState(0);
    const navigate = useNavigate();
    const workflowautomationFAQ = [
        {
            q: "Do I need coding skills to create workflows?",
            a: "No! Our visual drag-and-drop builder makes it easy for anyone to create sophisticated workflows. For advanced users, we also offer code-level customization."
        },
        {
            q: "How long does it take to set up?",
            a: "Most workflows can be built in under 10 minutes. We provide templates for common use cases so you can start even faster."
        },
        {
            q: "What happens if a workflow fails?",
            a: "Our system includes automatic retry logic, error handling, and instant notifications. You'll know immediately if something needs attention."
        },
        {
            q: "Can I migrate from another automation tool?",
            a: "Yes! We provide migration assistance and can import workflows from most major platforms. Our team will help ensure a smooth transition."
        },
        {
            q: "Is there a limit to how many workflows I can create?",
            a: "No limits. Create as many workflows as you need, and they all execute in parallel with consistent performance."
        }
    ]


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
            <DarkHeroSection backgroundImage="/airobot.png" className="animate-grid-move">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-sm font-medium text-cyan-400">AI-Powered Automation</span>
                </div>

                <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Workflow
                    <br />
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Automation
                    </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                    Transform manual processes into intelligent, self-optimizing workflows.
                    Save 85% of your time while increasing accuracy to 99.9%.
                </p>

                <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                    {[
                        { value: "85%", label: "Time Saved", icon: "⚡" },
                        { value: "99.9%", label: "Accuracy", icon: "🎯" },
                        { value: "10M+", label: "Tasks/Day", icon: "🚀" },
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
            </DarkHeroSection>


            {/* What It Does Section - LIGHT THEME */}
            <section className="py-32 px-6 relative bg-gradient-to-br from-cyan-50 via-white to-blue-50">

                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            What It <span className="text-cyan-600">Does</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our AI-powered workflow automation eliminates repetitive tasks, reduces human error,
                            and accelerates business processes across your entire organization.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Visual Demo */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                {/* Animated Workflow Visualization */}
                                <div className="space-y-4">
                                    {[
                                        { label: "Lead Captured", status: "completed", color: "green" },
                                        { label: "Data Validation", status: "completed", color: "green" },
                                        { label: "AI Scoring", status: "processing", color: "cyan" },
                                        { label: "Auto-Assignment", status: "pending", color: "gray" },
                                        { label: "Email Sequence", status: "pending", color: "gray" }
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${i * 200}ms` }}>
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.status === 'completed' ? 'bg-green-100 border-2 border-green-500' :
                                                step.status === 'processing' ? 'bg-cyan-100 border-2 border-cyan-500 animate-pulse' :
                                                    'bg-gray-100 border-2 border-gray-300'
                                                }`}>
                                                {step.status === 'completed' && <span className="text-green-600 text-xl font-bold">✓</span>}
                                                {step.status === 'processing' && (
                                                    <div className="w-5 h-5 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin" />
                                                )}
                                                {step.status === 'pending' && <span className="text-gray-400 text-xl">○</span>}
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-semibold text-gray-900">{step.label}</div>
                                                <div className="text-xs text-gray-500 capitalize">{step.status}</div>
                                            </div>
                                            {step.status === 'processing' && (
                                                <div className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full">
                                                    In Progress
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: "🤖",
                                    title: "Intelligent Task Routing",
                                    description: "AI automatically assigns tasks to the right team members based on workload, expertise, and availability."
                                },
                                {
                                    icon: "⚡",
                                    title: "Real-time Optimization",
                                    description: "The system identifies bottlenecks and suggests improvements, learning from every completed workflow."
                                },
                                {
                                    icon: "🔄",
                                    title: "Approval Automation",
                                    description: "Multi-level approval chains execute automatically with configurable rules and notifications."
                                },
                                {
                                    icon: "📊",
                                    title: "Performance Analytics",
                                    description: "Track workflow efficiency, completion rates, and identify areas for improvement."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border-2 border-cyan-100 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all group">
                                    <div className="text-4xl group-hover:scale-110 transition-transform">{feature.icon}</div>
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
                            Real-World <span className="text-cyan-600">Examples</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how leading companies across industries use workflow automation to transform their operations.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            {
                                industry: "Healthcare",
                                company: "MedTech Solutions",
                                logo: "🏥",
                                challenge: "Patient onboarding involved 40+ manual steps across 5 departments, taking 3-4 days on average.",
                                solution: "Automated patient intake, insurance verification, appointment scheduling, and medical record setup.",
                                results: [
                                    { metric: "75%", label: "Reduction in paperwork time" },
                                    { metric: "90%", label: "Fewer data entry errors" },
                                    { metric: "24hrs", label: "Onboarding time (from 4 days)" }
                                ],
                                color: "from-green-500 to-emerald-500"
                            },
                            {
                                industry: "Real Estate",
                                company: "PropTech Realty",
                                logo: "🏢",
                                challenge: "Lead nurturing was inconsistent, causing 60% of leads to go cold before follow-up.",
                                solution: "AI-powered lead scoring, automated follow-up sequences, and smart task assignment to agents.",
                                results: [
                                    { metric: "40%", label: "Increase in conversion rate" },
                                    { metric: "85%", label: "More leads contacted in 24hrs" },
                                    { metric: "3x", label: "Agent productivity" }
                                ],
                                color: "from-blue-500 to-indigo-500"
                            },
                            {
                                industry: "Finance",
                                company: "FinanceFirst Corp",
                                logo: "💼",
                                challenge: "Compliance documentation required 20+ hours per week of manual review and filing.",
                                solution: "Automated document collection, verification, approval routing, and audit trail generation.",
                                results: [
                                    { metric: "100%", label: "Audit-ready documentation" },
                                    { metric: "95%", label: "Time saved on compliance" },
                                    { metric: "Zero", label: "Compliance violations" }
                                ],
                                color: "from-purple-500 to-pink-500"
                            }
                        ].map((caseStudy, i) => (
                            <CaseStudyCard key={i} caseStudy={caseStudy} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Deep Dive Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Powerful <span className="text-cyan-600">Features</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Everything you need to automate complex workflows and scale your operations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🎯",
                                title: "Smart Triggers",
                                description: "AI detects patterns and creates predictive triggers for proactive automation.",
                                features: ["Pattern recognition", "Anomaly detection", "Predictive scheduling"]
                            },
                            {
                                icon: "🔗",
                                title: "1000+ Integrations",
                                description: "Connect with any tool or service through pre-built connectors or custom APIs.",
                                features: ["Pre-built connectors", "REST & GraphQL", "Webhooks"]
                            },
                            {
                                icon: "🤖",
                                title: "AI Assistant",
                                description: "Natural language interface for creating and managing workflows.",
                                features: ["Voice commands", "Natural language", "Smart suggestions"]
                            },
                            {
                                icon: "📊",
                                title: "Advanced Analytics",
                                description: "Track performance, identify bottlenecks, and optimize workflows in real-time.",
                                features: ["Real-time metrics", "Bottleneck detection", "ROI tracking"]
                            },
                            {
                                icon: "🔒",
                                title: "Enterprise Security",
                                description: "Bank-level encryption, compliance automation, and granular access control.",
                                features: ["256-bit encryption", "SOC 2 compliant", "Audit trails"]
                            },
                            {
                                icon: "⚡",
                                title: "Lightning Fast",
                                description: "Execute workflows in milliseconds with distributed cloud infrastructure.",
                                features: ["< 50ms latency", "Global CDN", "Auto-scaling"]
                            }
                        ].map((feature, i) => (
                            <FeatureCard key={i} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section - LIGHT THEME */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Before vs <span className="text-cyan-600">After</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            See the dramatic difference workflow automation makes
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Before */}
                        <div className="bg-red-50 border-2 border-red-300 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-red-200 flex items-center justify-center">
                                    <span className="text-2xl">❌</span>
                                </div>
                                <h3 className="text-2xl font-bold text-red-600">Without Automation</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "40+ hours/week on repetitive tasks",
                                    "Human errors in 15-20% of processes",
                                    "Inconsistent follow-up timing",
                                    "No visibility into bottlenecks",
                                    "Scaling requires hiring more staff",
                                    "Lost opportunities from slow response"
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
                                <h3 className="text-2xl font-bold text-green-600">With Automation</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "6 hours/week (85% time saved)",
                                    "99.9% accuracy with AI validation",
                                    "Instant, consistent follow-up",
                                    "Real-time performance dashboards",
                                    "Auto-scales without new hires",
                                    "Never miss an opportunity"
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
                        title="Calculate Your ROI"
                        description={
                            <>
                                Most companies see 10x ROI within the first 6 months
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
                            Technical <span className="text-cyan-400">Specs</span>
                        </h2>
                        <p className="text-xl text-gray-300">
                            Enterprise-grade infrastructure built for scale and reliability
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Execution Speed", value: "< 50ms", icon: "⚡" },
                            { label: "Uptime SLA", value: "99.99%", icon: "🔒" },
                            { label: "Concurrent Workflows", value: "Unlimited", icon: "♾️" },
                            { label: "API Rate Limit", value: "10K/min", icon: "🚀" },
                            { label: "Data Retention", value: "Forever", icon: "💾" },
                            { label: "Global Regions", value: "15+", icon: "🌍" },
                            { label: "Integrations", value: "1000+", icon: "🔗" },
                            { label: "Support", value: "24/7", icon: "💬" }
                        ].map((spec, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{spec.icon}</div>
                                <div className="text-sm text-gray-400 mb-2">{spec.label}</div>
                                <div className="text-3xl font-black text-cyan-400">{spec.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="mt-16 flex flex-wrap justify-center gap-6">
                        {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "PCI DSS"].map((cert, i) => (
                            <div key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-300">
                                {cert}
                            </div>
                        ))}
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
                                quote: "Workflow automation saved us 200+ hours per month. We've redirected that time to growth initiatives and seen a 40% revenue increase.",
                                author: "Sarah Chen",
                                role: "VP of Operations",
                                company: "TechFlow Inc",
                                avatar: "👩‍💼"
                            },
                            {
                                quote: "The AI-powered routing is incredible. Our response time dropped from 4 hours to 15 minutes, and customer satisfaction scores jumped 35%.",
                                author: "Michael Rodriguez",
                                role: "Customer Success Director",
                                company: "ServicePro",
                                avatar: "👨‍💼"
                            },
                            {
                                quote: "We automated our entire lead nurturing process. Conversion rates tripled and our sales team can focus on closing instead of admin work.",
                                author: "Emily Thompson",
                                role: "Head of Sales",
                                company: "GrowthCo",
                                avatar: "👩‍💼"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all">
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
            <FAQSection items={workflowautomationFAQ} />

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
                        Start Automating Today
                    </h2>
                    <p className="text-2xl text-cyan-50 mb-12">
                        Join 10,000+ companies saving time and scaling faster with workflow automation
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