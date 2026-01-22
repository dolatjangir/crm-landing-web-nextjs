"use client";

import { useState, useEffect } from "react";
import { Send, MessageCircle, Calendar, Mail, Phone, Clock, Shield, Check, ChevronRight, Star, ArrowRight, Users } from "lucide-react";
import { FaUser } from "react-icons/fa6";
import { LuLock } from "react-icons/lu";
import { LiaStumbleupon } from "react-icons/lia";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoChatboxEllipsesOutline, IoStatsChartSharp } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import {contactUsapi} from "@/api/contact.api"
 
export default function ContactUsPage() {
  const [selectedPath, setSelectedPath] = useState<"sales" | "support" | "partnerships" | "general">("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phone: "",
    message: "",
   
  });
  //  aiAssist: false
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiGeneratedMessage, setAiGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error , setError] = useState("");
  const contactPaths = [
    {
      id: "sales",
      title: "💼 Talk to Sales",
      description: "Pricing, demos, enterprise solutions",
      responseTime: "Within 2 hours",
      iconColor: "bg-blue-100 text-blue-600",
      primary: true
    },
    {
      id: "support",
      title: "🛠 Product Support", 
      description: "Technical help, setup issues",
      responseTime: "Within 1 hour",
      iconColor: "bg-green-100 text-green-600",
      primary: true
    },
    {
      id: "partnerships",
      title: "🤝 Partnerships & Integrations",
      description: "Partner programs, API access",
      responseTime: "Within 4 hours",
      iconColor: "bg-purple-100 text-purple-600",
      primary: false
    },
    {
      id: "general",
      title: "📩 General Inquiry",
      description: "Questions, feedback, media",
      responseTime: "Within 24 hours",
      iconColor: "bg-gray-100 text-gray-600",
      primary: false
    }
  ];

  const inquiryTypes = {
    sales: [
      "Request Demo",
      "Pricing Question", 
      "Enterprise Features",
      "Migration Support",
      "ROI Calculator"
    ],
    support: [
      "Technical Issue",
      "Setup Help",
      "Integration Problem",
      "Account Access",
      "Feature Request"
    ],
    partnerships: [
      "Integration Partnership",
      "Reseller Program",
      "API Access",
      "Technology Partnership",
      "Affiliate Program"
    ],
    general: [
      "General Question",
      "Media Inquiry",
      "Careers",
      "Feedback",
      "Other"
    ]
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      text: "Sales team responded in 45 minutes with a personalized demo. Closed our deal same week!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Operations Manager", 
      company: "Growth Labs",
      text: "Support team fixed our integration issue in under an hour. Amazing response time.",
      rating: 5
    },
    {
      name: "Emily Thompson",
      role: "Partnership Director",
      company: "Enterprise Corp",
      text: "Partnership discussion was professional and valuable. Great team to work with.",
      rating: 5
    }
  ];

  const alternativeContacts = [
    {
      title: "Live Chat",
      description: "Instant help with AI + human support",
      icon: <IoChatboxEllipsesOutline className=" text-green-500"/>,
      action: "Start Chat",
      available: "24/7",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Book Meeting",
      description: "Schedule a call at your convenience",
      icon: <FaRegCalendarAlt className="text-blue-500"/>,
      action: "Book Time",
      available: "Business hours",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Call Sales",
      description: "Speak with our sales team directly",
      icon: <IoMdCall className="text-red-600" />,
      action: "Call Now",
      available: "9 AM - 6 PM EST",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateAIMessage = async () => {
    if (!formData.name || !formData.phone) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aiTemplates = {
      sales: `Hi team,

I'm ${formData.name} from ${formData.companyName || '[Company]'} and I'm interested in learning more about your CRM solution for ${formData.phone.toLowerCase()}.

Could we schedule a brief call to discuss:
- Pricing and features
- Implementation timeline  
- ROI expectations

Best regards,
${formData.name}`,
      
      support: `Hello Support,

I'm experiencing an issue with ${formData.phone.toLowerCase()} in my CRM account.

Here are the details:
- Account: ${formData.email}
- Issue: [Please describe what's happening]
- Expected behavior: [What should happen]
- Steps to reproduce: [How to recreate the issue]

Any help would be appreciated.

Thanks,
${formData.name}`,
      
      partnerships: `Hi Partnerships Team,

I'm ${formData.name} from ${formData.companyName || '[Company]'} exploring ${formData.phone.toLowerCase()} opportunities with your platform.

I'd love to discuss:
- Partnership requirements
- Technical integration details
- Mutual business benefits

Looking forward to connecting.

Best,
${formData.name}`,
      
      general: `Hello,

I'm ${formData.name} reaching out regarding ${formData.phone.toLowerCase()}.

[Please provide more details about your inquiry]

Thank you for your time.

Best regards,
${formData.name}`
    };
    
    setAiGeneratedMessage(aiTemplates[selectedPath]);
    setIsGenerating(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      setIsSubmitting(true);
      setError("");

      const payload ={
        name:formData.name,
        email:formData.email,
        companyname:formData.companyName,
        phone: formData.phone,
        message: formData.message,
      }
      await contactUsapi(payload)
      alert("successfuly data stored");
         setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        email: "",
        companyName: "",
        phone: "",
        message: "",
        // aiAssist: false
      });
      setAiGeneratedMessage("");
    }, 3000);
    }catch(err:any){
        const msg =
      err.response?.data?.message || "Something went wrong";
    setError(msg);
    console.error(msg);

    }finally{
      setShowSuccess(true);
      setIsSubmitting(false);
    }
   
    
    
    // Reset form after 3 seconds
 
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-sm font-medium text-cyan-700">Average response: 47 minutes</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Talk About Growing
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
              Your Business
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Whether you need a demo, have a technical question, or want to explore partnerships, 
            our team is here to help you scale smarter with AI-powered CRM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-green-500" />
              <span>Fast response guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4 text-blue-500" />
              <span>Real humans, not bots</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-purple-500" />
              <span>Secure & private</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
     <div className="min-h-screen bg-white">
      {/* Hero Section - Matching your styling */}
      <section className="relative w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <div className="h-6" />
              
              <h3 className="text-2xl md:text-3xl text-black font-semibold leading-snug relative pl-6">
                <span className="absolute left-0  top-1 h-8 w-[3px] bg-[#1E88E5]" />
                To make requests for further information,{" "}
                <mark className="bg-transparent text-[#1E88E5] font-semibold">
                  contact us
                </mark>{" "}
                via our social channels.
              </h3>

              <p className="text-gray-600 text-lg">
                We just need a couple of hours!
                <br />
                No more than 2 working days since receiving your issue ticket.
              </p>

              {/* Response Time Info */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Avg response: 47 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>Real humans</span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM - Matching your exact styling */}
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
              {showSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 2 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Contact Path Selector - Integrated into form */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">How can we help?</label>
               
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name *"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#1E88E5] focus:outline-none"
                    />

                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#1E88E5] focus:outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Company (Optional)"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#1E88E5] focus:outline-none"
                  />

                    <input
                    type = "text"
                    placeholder="phone No."
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone',e.target.value)}
                     className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#1E88E5] focus:outline-none"
                    />
                  {/* <select
                    required
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#1E88E5] focus:outline-none"
                  >
                    <option value="">Select inquiry type *</option>
                    {inquiryTypes[selectedPath]?.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select> */}

                  <textarea
                    rows={5}
                    placeholder="Please describe what you need."
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-[#1E88E5] focus:outline-none resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md bg-[#1E88E5] px-4 md:px-8 py-3 text-white font-medium transition hover:bg-[#1565C0] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials - Matching your clean style */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-gray-600 text-lg">
              Here's what our customers say about our support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-cyan-50 rounded-xl shadow-lg p-4 md:p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-xl"><FaUser/></div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Matching your blue theme */}
      <section className="py-16 px-4 md:px-8 bg-[#1E88E5]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Ready to Get Expert Help?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Don't let questions hold you back. Our team is ready to help you succeed.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 md:px-8 py-3 text-[#1E88E5] font-medium transition hover:bg-gray-100"
          >
            Contact Our Team
            <Send className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
      {/* Contact Path Selector */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              How Can We Help You Today?
            </h2>
            <p className="text-lg text-gray-600">
              Choose the path that best describes your needs – we'll route you to the right expert
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id as "sales" | "support" | "partnerships" | "general")}
                className={`p-4 md:p-8 rounded-2xl border-2 transition-all hover:scale-105 text-left ${
                  selectedPath === path.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl ${path.iconColor} flex items-center justify-center text-xl`}>
                    {path.title.split(' ')[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">{path.title}</h3>
                    <p className="text-xs text-gray-600">{path.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <Clock className="w-3 h-3" />
                  <span>{path.responseTime}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Alternative Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {alternativeContacts.map((contact, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 md:p-8 border border-gray-200">
                <div className="text-3xl mb-3">{contact.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{contact.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{contact.available}</span>
                  <button className={`px-4 py-2 rounded-lg text-white text-sm font-medium bg-gradient-to-r ${contact.color} hover:shadow-lg transition-all`}>
                    {contact.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Trust & Security Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Your Security & Privacy Matter
            </h2>
            <p className="text-lg text-gray-600">
              Enterprise-grade security with human-centered support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <LuLock />, title: "SOC 2 Type II", description: "Security compliance certified" },
              { icon: <LiaStumbleupon />, title: "GDPR Compliant", description: "Full data protection rights" },
              { icon: <HiOutlineHomeModern />, title: "HIPAA Ready", description: "Healthcare data security" },
              { icon: <IoStatsChartSharp />, title: "ISO 27001", description: "Information security standard" }
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3 flex items-center justify-center text-cyan-500">{badge.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Trusted by 10,000+ Teams Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Here's what our customers say about our support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 md:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl p-3 rounded-full bg-cyan-100"><FaUser/></div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Get Expert Help?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let questions hold you back. Our team is ready to help you 
            succeed with AI-powered CRM solutions.
          </p>
          <button
            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="mt-8 text-white/80 text-sm">
            <p>No obligation. No pressure. Just helpful answers.</p>
            <p className="mt-2">We typically respond within 2 hours during business hours.</p>
          </div>
        </div>
      </section>
    </div>
  );
}