    "use client";

    import CaseStudyCard from "@/components/common/cards/CaseStudyCard";
    import FeatureCard from "@/components/common/cards/FeatureCard";
    import { MiniCTA } from "@/components/common/cta/MiniCTA";
    import { FAQSection } from "@/components/common/FAQ/FAQSection";
    import Scrollindicator from "@/components/common/indicators/Scrollindicator";
import IntegrationsFinder from "@/components/common/intigrationSearching/IntegrationsFinder";
    import DarkHeroSection from "@/components/common/sections/DarkHeroSection";
    import { useNavigate } from "@/hooks/useNavigate";
    import Link from "next/link";
    import { useState, useEffect } from "react";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import { FaArrowsRotate, FaUser } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { GiArcheryTarget, GiBreakingChain, GiCrossedChains } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { IoIosFlash } from "react-icons/io";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { TiChartLine } from "react-icons/ti";
import { VscGraph } from "react-icons/vsc";

    export default function IntegrationsPage() {
        const [selectedIntegration, setSelectedIntegration] = useState<number | null>(null);
        const [searchTerm, setSearchTerm] = useState("");
        const [selectedCategory, setSelectedCategory] = useState("All");
        const navigate = useNavigate();

        const integrationsFAQ = [
            {
                q: "How long does it take to set up an integration?",
                a: "Most integrations can be connected in under 5 minutes with our one-click setup. Complex enterprise integrations typically take 15-30 minutes with guided setup."
            },
            {
                q: "Do I need technical skills to connect integrations?",
                a: "No! Our no-code interface makes it easy for anyone to connect tools. For advanced customizations, we provide step-by-step guides and support."
            },
            {
                q: "Are integrations secure and compliant?",
                a: "Absolutely. All integrations use enterprise-grade encryption and meet SOC 2, GDPR, and industry-specific compliance standards. Your data is always protected."
            },
            {
                q: "What happens if an integration breaks?",
                a: "Our monitoring system detects issues instantly and sends alerts. Most problems auto-resolve, and our support team is available 24/7 for complex issues."
            },
            {
                q: "Can I build custom integrations for my specific tools?",
                a: "Yes! Use our API and webhook builder to create custom connections. Our team can also build bespoke integrations for enterprise customers."
            }
        ];

        const integrationCategories = ["All", "Sales", "Marketing", "Support", "Productivity", "Analytics", "Communication", "Finance"];

        const integrations = [
            {
                id: 1,
                name: "Salesforce",
                category: "Sales",
                logo: "☁️",
                partnerLogo: "🟦",
                status: "Popular",
                statusColor: "bg-green-100 text-green-700",
                headline: "Sync CRM data bidirectionally",
                description: "Keep your sales data in perfect sync across both platforms. Never lose a lead or duplicate effort again.",
                benefits: ["Automatic lead sync", "Opportunity tracking", "Contact management", "Real-time updates"],
                rating: 4.9,
                installs: "50K+",
                plans: ["Professional", "Enterprise"],
                useCases: [
                    { role: "Sales Teams", benefit: "Sync leads and opportunities automatically" },
                    { role: "Sales Managers", benefit: "Get unified pipeline visibility across platforms" },
                    { role: "RevOps", benefit: "Maintain data consistency and reporting accuracy" }
                ],
                howItWorks: [
                    { step: "Connect", description: "One-click OAuth connection to your Salesforce account" },
                    { step: "Configure", description: "Choose sync direction and field mappings" },
                    { step: "Sync", description: "Data flows automatically between platforms" },
                    { step: "Monitor", description: "Track sync status and resolve conflicts easily" }
                ]
            },
            {
                id: 2,
                name: "HubSpot",
                category: "Marketing",
                logo: "🟧",
                partnerLogo: "🟧",
                status: "Enterprise-Ready",
                statusColor: "bg-blue-100 text-blue-700",
                headline: "Align marketing and sales data",
                description: "Bridge the gap between marketing campaigns and sales execution. Track the entire customer journey.",
                benefits: ["Lead attribution", "Campaign tracking", "Marketing automation", "ROI analytics"],
                rating: 4.8,
                installs: "35K+",
                plans: ["All Plans"],
                useCases: [
                    { role: "Marketing Teams", benefit: "Track campaign performance through to sales" },
                    { role: "Sales Reps", benefit: "See full lead history and engagement data" },
                    { role: "Marketing Ops", benefit: "Automate lead scoring and qualification" }
                ],
                howItWorks: [
                    { step: "Authenticate", description: "Secure OAuth connection to HubSpot" },
                    { step: "Map Fields", description: "Configure contact, company, and deal mappings" },
                    { step: "Set Triggers", description: "Define when data syncs between systems" },
                    { step: "Automate", description: "Let workflows handle the rest automatically" }
                ]
            },
            {
                id: 3,
                name: "Slack",
                category: "Communication",
                logo: "💬",
                partnerLogo: "🟣",
                status: "New",
                statusColor: "bg-purple-100 text-purple-700",
                headline: "Get CRM updates in Slack",
                description: "Stay informed without switching contexts. Get notified about important CRM events directly in Slack.",
                benefits: ["Instant notifications", "Deal alerts", "Team collaboration", "Mobile updates"],
                rating: 4.7,
                installs: "25K+",
                plans: ["Professional", "Enterprise"],
                useCases: [
                    { role: "Sales Teams", benefit: "Get instant deal updates in team channels" },
                    { role: "Managers", benefit: "Monitor pipeline changes without checking CRM" },
                    { role: "Remote Teams", benefit: "Stay connected across time zones" }
                ],
                howItWorks: [
                    { step: "Connect Slack", description: "Authorize Slack workspace connection" },
                    { step: "Choose Channels", description: "Select which channels receive notifications" },
                    { step: "Set Events", description: "Pick CRM events to notify about" },
                    { step: "Customize", description: "Personalize message format and frequency" }
                ]
            },
            {
                id: 4,
                name: "Google Workspace",
                category: "Productivity",
                logo: "📧",
                partnerLogo: "🌈",
                status: "Popular",
                statusColor: "bg-green-100 text-green-700",
                headline: "Sync contacts and calendar events",
                description: "Keep your Google contacts and calendar in sync with your CRM. Never miss a follow-up or double-book again.",
                benefits: ["Contact sync", "Calendar integration", "Email tracking", "Meeting scheduling"],
                rating: 4.6,
                installs: "40K+",
                plans: ["All Plans"],
                useCases: [
                    { role: "Sales Reps", benefit: "Sync contacts and schedule meetings easily" },
                    { role: "Executives", benefit: "Keep CRM calendar in sync with Google Calendar" },
                    { role: "Account Managers", benefit: "Track email conversations in CRM" }
                ],
                howItWorks: [
                    { step: "Google Auth", description: "Connect with your Google account" },
                    { step: "Sync Settings", description: "Choose what to sync and when" },
                    { step: "Bidirectional Flow", description: "Data updates in both directions" },
                    { step: "Conflict Resolution", description: "Smart handling of duplicate entries" }
                ]
            },
            {
                id: 5,
                name: "Zapier",
                category: "Productivity",
                logo: "⚡",
                partnerLogo: "🟢",
                status: "Popular",
                statusColor: "bg-green-100 text-green-700",
                headline: "Connect to 5,000+ apps",
                description: "Unlock unlimited automation possibilities. Connect your CRM to any app in Zapier's massive ecosystem.",
                benefits: ["5,000+ app connections", "No-code automation", "Custom workflows", "Trigger-based actions"],
                rating: 4.8,
                installs: "60K+",
                plans: ["All Plans"],
                useCases: [
                    { role: "Operations", benefit: "Automate repetitive tasks across all tools" },
                    { role: "Marketing", benefit: "Create complex multi-app workflows" },
                    { role: "IT Teams", benefit: "Build custom integrations without coding" }
                ],
                howItWorks: [
                    { step: "Zapier Account", description: "Connect your existing Zapier account" },
                    { step: "Create Zaps", description: "Build automated workflows with CRM triggers" },
                    { step: "Test & Deploy", description: "Verify workflows work correctly" },
                    { step: "Monitor", description: "Track automation performance and errors" }
                ]
            },
            {
                id: 6,
                name: "Microsoft Teams",
                category: "Communication",
                logo: "💬",
                partnerLogo: "🟦",
                status: "Enterprise-Ready",
                statusColor: "bg-blue-100 text-blue-700",
                headline: "Collaborate on deals in Teams",
                description: "Bring CRM data into Microsoft Teams conversations. Collaborate on deals without leaving your chat environment.",
                benefits: ["Deal collaboration", "Team notifications", "File sharing", "Video meeting integration"],
                rating: 4.5,
                installs: "30K+",
                plans: ["Professional", "Enterprise"],
                useCases: [
                    { role: "Enterprise Teams", benefit: "Collaborate on large deals in Teams channels" },
                    { role: "Remote Workers", benefit: "Access CRM data during Teams meetings" },
                    { role: "Sales Managers", benefit: "Review deals with teams in real-time" }
                ],
                howItWorks: [
                    { step: "Teams Integration", description: "Install CRM app in Microsoft Teams" },
                    { step: "Configure Tabs", description: "Add CRM tabs to relevant channels" },
                    { step: "Set Notifications", description: "Configure deal update notifications" },
                    { step: "Collaborate", description: "Work on deals directly in Teams" }
                ]
            }
        ];

        // Filter integrations based on search and category
        const filteredIntegrations = integrations.filter(integration => {
            const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                integration.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        return (
            <div className="bg-white text-gray-900 overflow-hidden ">

                {/* Hero Section - DARK THEME */}
                <DarkHeroSection backgroundImage="/integrations-hero.png">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 animate-fade-in">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-sm font-medium text-cyan-400">2000+ Integrations</span>
                    </div>

                    <h1 className="text-6xl lg:text-8xl max-md:text-4xl font-black mb-6 animate-slide-up text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Connect Your CRM
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            With Everything
                        </span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-500">
                        Automate workflows, eliminate data silos, and boost productivity by connecting 
                        your CRM with the tools you already use. Set up in minutes, not hours.
                    </p>

                    <div className="grid grid-cols-3 max-md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in animation-delay-1000">
                        {[
                            { value: "5 min", label: "Average Setup", icon: <IoIosFlash /> },
                            { value: "2000+", label: "Integrations", icon: <GiCrossedChains /> },
                            { value: "99.9%", label: "Success Rate", icon: <FiTarget /> },
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
                                <div className=" mb-3 group-hover:scale-110 flex items-center justify-center text-cyan-100 transition-transform">{stat.icon}</div>
                                <div className=" font-bold text-cyan-400 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-300 max-md:col-start-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
{/* 
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
                        <button className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
                            Browse Integrations
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                            Schedule Demo
                        </button>
                    </div> */}
                </DarkHeroSection>


                {/* intigration finder  */}
                {/* Search & Filter Bar - LIGHT THEME */}
             
             <IntegrationsFinder 
             integrations={integrations}
             categories={integrationCategories}
             onSelect={(id) => setSelectedIntegration(id)}
             />
                {selectedIntegration && (
  <IntegrationModal
    integration={integrations.find((i) => i.id === selectedIntegration)!}
    onClose={() => setSelectedIntegration(null)}
  />
)}


                {/* Popular Integrations Showcase - LIGHT THEME */}
                <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Most Popular <span className="text-cyan-600">Connections</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                See how leading companies automate their workflows with our most-loved integrations
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-black text-gray-900">Why Companies Choose Our Integrations</h3>
                                
                                {[
                                    {
                                        icon: <IoIosFlash />,
                                        title: "5-Minute Setup",
                                        description: "Most integrations connect in under 5 minutes with our guided setup process"
                                    },
                                    {
                                        icon: <FaArrowsRotate />,
                                        title: "Real-Time Sync",
                                        description: "Data flows instantly between systems with sub-second synchronization"
                                    },
                                    {
                                        icon: <FaShieldAlt />,
                                        title: "Enterprise Security",
                                        description: "Bank-level encryption and compliance certifications keep your data safe"
                                    },
                                    {
                                        icon: <VscGraph />,
                                        title: "Powerful Analytics",
                                        description: "Track integration performance and ROI with built-in analytics dashboards"
                                    }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-white border-2 border-cyan-100 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all group">
                                        <div className="text-4xl group-hover:scale-110 text-cyan-600 transition-transform">{benefit.icon}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-2xl">
                                    <h3 className="text-2xl font-black text-gray-900 mb-6">Integration Success Metrics</h3>
                                    
                                    <div className="space-y-6">
                                        {[
                                            { metric: "Average Setup Time", value: "4.2 minutes", change: "-15% vs last month", trend: "down" },
                                            { metric: "Data Sync Accuracy", value: "99.97%", change: "+0.02% vs last month", trend: "up" },
                                            { metric: "User Satisfaction", value: "4.8/5", change: "+0.3 vs last month", trend: "up" },
                                            { metric: "Monthly Active Integrations", value: "2.3M", change: "+45% vs last month", trend: "up" }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                                <div>
                                                    <div className="text-sm text-gray-600 mb-1">{stat.metric}</div>
                                                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                                                        {stat.change}
                                                    </div>
                                                    <div className="text-xs text-gray-500">vs last month</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Use Cases by Role - LIGHT THEME */}
                <section className="py-32 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Integrations for <span className="text-cyan-600">Every Team</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover how different teams use integrations to streamline their workflows and boost productivity
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    role: "Sales Teams",
                                    icon: <GiArcheryTarget className="text-green-100 text-3xl"/>,
                                    color: "from-green-500 to-emerald-500",
                                    integrations: ["Salesforce", "HubSpot", "LinkedIn", "Calendly"],
                                    benefits: ["Auto-update CRM from calls", "Sync meeting notes", "Track email opens", "Schedule follow-ups"]
                                },
                                {
                                    role: "Marketing Teams",
                                    icon: <TiChartLine className="text-blue-100 text-3xl"/>,
                                    color: "from-blue-500 to-indigo-500",
                                    integrations: ["HubSpot", "Mailchimp", "Google Ads", "Facebook"],
                                    benefits: ["Track campaign ROI", "Sync lead sources", "Automate nurturing", "Measure attribution"]
                                },
                                {
                                    role: "Support Teams",
                                    icon: <IoChatboxEllipsesOutline className="text-purple-100 text-3xl"/>,
                                    color: "from-purple-500 to-pink-500",
                                    integrations: ["Zendesk", "Intercom", "Slack", "Microsoft Teams"],
                                    benefits: ["View customer history", "Escalate issues", "Track resolution time", "Collaborate on tickets"]
                                },
                                {
                                    role: "Operations Teams",
                                    icon: <MdOutlineSettings className="text-orange-100 text-3xl"  />,
                                    color: "from-orange-500 to-red-500",
                                    integrations: ["Zapier", "Google Sheets", "Airtable", "QuickBooks"],
                                    benefits: ["Automate reporting", "Sync financial data", "Track inventory", "Manage projects"]
                                }
                            ].map((team, i) => (
                                <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${team.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                        {team.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-4">{team.role}</h3>
                                    
                                    <div className="mb-6">
                                        <div className="text-sm text-gray-600 mb-3">Popular Integrations:</div>
                                        <div className="flex flex-wrap gap-2">
                                            {team.integrations.map((integration, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                                                    {integration}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {team.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                                <span className="text-cyan-500">✓</span>
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Trust & Social Proof - LIGHT THEME */}
                <section className="py-32 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Trusted by <span className="text-cyan-600">Thousands</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Join companies automating their workflows and saving time with our integrations
                            </p>
                        </div>

                        {/* Company Logos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
                            {["Shopify", "Slack", "Google", "Microsoft", "Salesforce", "HubSpot"].map((company, i) => (
                                <div key={i} className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-cyan-300 hover:shadow-lg transition-all group">
                                    <div className="text-2xl font-bold text-gray-400 group-hover:text-cyan-600 transition-colors">
                                        {company}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Testimonials */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {[
                                {
                                    quote: "The Salesforce integration saved our sales team 10 hours per week. Setup took 5 minutes and everything just works.",
                                    author: "Sarah Chen",
                                    role: "VP of Sales",
                                    company: "TechFlow Inc",
                                    avatar: <FaUser />,
                                    rating: 5
                                },
                                {
                                    quote: "We connected 15 different tools through ibigdata. Our productivity increased 40% and data accuracy improved dramatically.",
                                    author: "Michael Rodriguez",
                                    role: "Operations Director",
                                    company: "GrowthCo",
                                    avatar: <FaUser />,
                                    rating: 5
                                },
                                {
                                    quote: "The HubSpot integration gave us complete visibility into our marketing ROI. Best integration platform we've used.",
                                    author: "Emily Thompson",
                                    role: "Marketing Manager",
                                    company: "MarketPro",
                                    avatar: <FaUser />,
                                    rating: 5
                                }
                            ].map((testimonial, i) => (
                                <div key={i} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-xl">⭐</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">{testimonial.quote}</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">{testimonial.author}</div>
                                            <div className="text-sm text-gray-600">{testimonial.role}</div>
                                            {/* <div className="text-sm text-cyan-600 font-semibold">{testimonial.company}</div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Support & Documentation - LIGHT THEME */}
                <section className="py-32 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                Expert <span className="text-cyan-600">Support</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Get help when you need it with comprehensive documentation, tutorials, and expert support
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: <ImBooks />,
                                    title: "Documentation",
                                    description: "Step-by-step guides for every integration",
                                    link: "View Docs →",
                                    href: "/docs/integrations"
                                },
                                {
                                    icon: <BsFillCameraReelsFill />,
                                    title: "Video Tutorials",
                                    description: "Watch setup videos for popular integrations",
                                    link: "Watch Tutorials →",
                                    href: "/tutorials"
                                },
                                {
                                    icon: <IoChatboxEllipsesOutline />,
                                    title: "Live Chat",
                                    description: "Get instant help from integration experts",
                                    link: "Start Chat →",
                                    href: "/support/chat"
                                },
                                {
                                    icon: <GiArcheryTarget />,
                                    title: "Best Practices",
                                    description: "Learn integration optimization techniques",
                                    link: "Learn More →",
                                    href: "/best-practices"
                                }
                            ].map((resource, i) => (
                                <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all group">
                                    <div className="text-5xl mb-6 group-hover:scale-110 text-cyan-600 transition-transform">{resource.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                                    <p className="text-gray-600 mb-6">{resource.description}</p>
                                    <Link href={resource.href} className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                                        {resource.link}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* FAQ Section - LIGHT THEME */}
                <FAQSection items={integrationsFAQ} />



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
                            Connect Your Tools Today
                        </h2>
                        <p className="text-2xl text-cyan-50 mb-12">
                            Join 50,000+ companies automating their workflows with our integrations
                        </p>
                    

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <button className="px-10 py-5 bg-white text-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105">
                                Browse Integrations
                            </button>
                            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 transition-all">
                                Talk to Sales
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-cyan-50">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Free to start</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>5-minute setup</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>24/7 support</span>
                            </div>
                        </div>
                    </div>
                    // 
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

    // Integration Card Component
    function IntegrationCard({ integration, onClick }: { integration: any; onClick: () => void }) {
        return (
            <div 
                onClick={onClick}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-xl transition-all group cursor-pointer"
            >
                {/* Header with logos and status */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl">{integration.logo}</div>
                        <div className="text-2xl">{integration.partnerLogo}</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${integration.statusColor}`}>
                        {integration.status}
                    </span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {integration.name}
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-3">{integration.headline}</p>
                <p className="text-gray-600 text-sm mb-4">{integration.description}</p>

                {/* Key benefits */}
                <div className="space-y-2 mb-4">
                    {integration.benefits.slice(0, 3).map((benefit: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-cyan-500">✓</span>
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

                {/* Footer with stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-400">⭐</span>
                            <span>{integration.rating}</span>
                        </div>
                        <div>{integration.installs} installs</div>
                    </div>
                    <div className="text-cyan-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        View Details →
                    </div>
                </div>
            </div>
        );
    }

    // Integration Modal Component
    function IntegrationModal({ integration, onClose }: { integration: any; onClose: () => void }) {
        return (
            <div className="fixed pt-20 inset-0 bg-black/90  bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Modal Header */}
                    <div className="p-8 border-b border-gray-200">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-4xl">{integration.logo}</div>
                                    <div className="text-3xl">{integration.partnerLogo}</div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-gray-900">{integration.name}</h2>
                                    <p className="text-lg text-gray-600">{integration.headline}</p>
                                </div>
                            </div>
                            <button 
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 text-2xl"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-8">
                        {/* Status and Rating */}
                        <div className="flex items-center gap-6 mb-8">
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${integration.statusColor}`}>
                                {integration.status}
                            </span>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400 text-xl">⭐</span>
                                <span className="font-bold">{integration.rating}</span>
                                <span className="text-gray-500">({integration.installs} installs)</span>
                            </div>
                            <div className="text-gray-600">
                                Available on: <span className="font-semibold">{integration.plans.join(", ")}</span>
                            </div>
                        </div>

                        {/* Description and Benefits */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-4">Overview</h3>
                                <p className="text-gray-600 mb-6">{integration.description}</p>
                                
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Key Benefits</h4>
                                <div className="space-y-2">
                                    {integration.benefits.map((benefit: string, i: number) => (
                                        <div key={i} className="flex items-center gap-2 text-gray-600">
                                            <span className="text-cyan-500">✓</span>
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-4">How It Works</h3>
                                <div className="space-y-4">
                                    {integration.howItWorks.map((step: any, i: number) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{step.step}</div>
                                                <div className="text-sm text-gray-600">{step.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Use Cases */}
                        <div className="mb-8">
                            <h3 className="text-xl font-black text-gray-900 mb-4">Use Cases by Role</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {integration.useCases.map((useCase: any, i: number) => (
                                    <div key={i} className="bg-gray-50 rounded-xl p-6">
                                        <div className="font-bold text-gray-900 mb-2">{useCase.role}</div>
                                        <div className="text-sm text-gray-600">{useCase.benefit}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="mb-8">
                            <h3 className="text-xl font-black text-gray-900 mb-4">Requirements</h3>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="font-semibold text-gray-900 mb-2">Plan Requirements</div>
                                        <div className="text-sm text-gray-600">{integration.plans.join(", ")}</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 mb-2">Setup Time</div>
                                        <div className="text-sm text-gray-600">5-10 minutes</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-4 bg-cyan-600 text-white rounded-xl font-black text-lg hover:bg-cyan-700 transition-all">
                                Connect {integration.name}
                            </button>
                            <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-gray-300 transition-all">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

