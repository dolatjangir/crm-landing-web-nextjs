"use client";

import { useState, useEffect } from "react";
import { Send, MessageCircle, Calendar, Mail, Phone, Clock, Shield, Check, ChevronRight, Star, ArrowRight, Users } from "lucide-react";

export default function ContactUsPage() {
  const [selectedPath, setSelectedPath] = useState<"sales" | "support" | "partnerships" | "general">("general");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    subject: "",
    message: "",
    aiAssist: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiGeneratedMessage, setAiGeneratedMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
      icon: "💬",
      action: "Start Chat",
      available: "24/7",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Book Meeting",
      description: "Schedule a call at your convenience",
      icon: "📅",
      action: "Book Time",
      available: "Business hours",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Call Sales",
      description: "Speak with our sales team directly",
      icon: "📞",
      action: "Call Now",
      available: "9 AM - 6 PM EST",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateAIMessage = async () => {
    if (!formData.fullName || !formData.subject) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aiTemplates = {
      sales: `Hi team,

I'm ${formData.fullName} from ${formData.companyName || '[Company]'} and I'm interested in learning more about your CRM solution for ${formData.subject.toLowerCase()}.

Could we schedule a brief call to discuss:
- Pricing and features
- Implementation timeline  
- ROI expectations

Best regards,
${formData.fullName}`,
      
      support: `Hello Support,

I'm experiencing an issue with ${formData.subject.toLowerCase()} in my CRM account.

Here are the details:
- Account: ${formData.email}
- Issue: [Please describe what's happening]
- Expected behavior: [What should happen]
- Steps to reproduce: [How to recreate the issue]

Any help would be appreciated.

Thanks,
${formData.fullName}`,
      
      partnerships: `Hi Partnerships Team,

I'm ${formData.fullName} from ${formData.companyName || '[Company]'} exploring ${formData.subject.toLowerCase()} opportunities with your platform.

I'd love to discuss:
- Partnership requirements
- Technical integration details
- Mutual business benefits

Looking forward to connecting.

Best,
${formData.fullName}`,
      
      general: `Hello,

I'm ${formData.fullName} reaching out regarding ${formData.subject.toLowerCase()}.

[Please provide more details about your inquiry]

Thank you for your time.

Best regards,
${formData.fullName}`
    };
    
    setAiGeneratedMessage(aiTemplates[selectedPath]);
    setIsGenerating(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        subject: "",
        message: "",
        aiAssist: false
      });
      setAiGeneratedMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-700">Average response: 47 minutes</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Talk About Growing
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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

      {/* Contact Path Selector */}
      <section className="py-16 px-6 bg-white">
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
                className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 text-left ${
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
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
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

      {/* Contact Form */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              We'll get back to you as quickly as possible
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
            {showSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. Our team will respond within the timeframe specified above.
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto">
                  <p className="text-sm text-gray-600">
                    <strong>What happens next:</strong><br />
                    • You'll receive a confirmation email<br />
                    • Our expert will review your inquiry<br />
                    • We'll respond with helpful solutions<br />
                    • Follow-up support if needed
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Company Name <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes[selectedPath]?.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* AI Assist Toggle */}
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">🤖</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">AI-Assisted Message</h4>
                        <p className="text-sm text-gray-600">Let AI help format your message for faster response</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleInputChange('aiAssist', !formData.aiAssist)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        formData.aiAssist ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        formData.aiAssist ? 'translate-x-7' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>

                  {formData.aiAssist && (
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={generateAIMessage}
                        disabled={isGenerating || !formData.fullName || !formData.subject}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isGenerating ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Generating...
                          </span>
                        ) : (
                          'Generate AI Message'
                        )}
                      </button>

                      {aiGeneratedMessage && (
                        <div className="mt-4">
                          <textarea
                            value={aiGeneratedMessage}
                            onChange={(e) => setAiGeneratedMessage(e.target.value)}
                            rows={6}
                            className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none bg-white"
                            placeholder="AI-generated message (you can edit it)"
                          />
                          <p className="text-xs text-gray-500 mt-2">
                            💡 Pro tip: Feel free to edit the AI-generated message to add your personal touch
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.aiAssist && aiGeneratedMessage ? aiGeneratedMessage : formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </button>

                <div className="text-center text-sm text-gray-500">
                  By contacting us, you agree to our Privacy Policy. We respect your privacy and will never share your information.
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-16 px-6 bg-white">
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
              { icon: "🔒", title: "SOC 2 Type II", description: "Security compliance certified" },
              { icon: "🇪🇺", title: "GDPR Compliant", description: "Full data protection rights" },
              { icon: "🏥", title: "HIPAA Ready", description: "Healthcare data security" },
              { icon: "📊", title: "ISO 27001", description: "Information security standard" }
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">👤</div>
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
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
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