"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Clock, Shield, CreditCard, Users, Zap, Play, Check, ArrowRight, Star } from "lucide-react";

export default function GetStartedPage() {
  const [selectedOption, setSelectedOption] = useState("trial");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    role: ""
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    { id: "sales", name: "Sales & Marketing", icon: "📈", description: "Lead management & conversion tracking" },
    { id: "real-estate", name: "Real Estate", icon: "🏠", description: "Property listings & client management" },
    { id: "ecommerce", name: "E-commerce", icon: "🛒", description: "Customer lifecycle & order tracking" },
    { id: "manufacturing", name: "Manufacturing", icon: "🏭", description: "B2B sales & production pipeline" },
    { id: "finance", name: "Finance", icon: "💰", description: "Client portfolios & compliance" },
    { id: "education", name: "Education", icon: "🎓", description: "Student enrollment & engagement" }
  ];

  const roles = [
    "Sales Manager",
    "Business Owner", 
    "Marketing Director",
    "Real Estate Agent",
    "Operations Manager",
    "Customer Success Manager",
    "Other"
  ];

  const startOptions = [
    {
      id: "trial",
      title: "Start Free Trial",
      description: "Full access for 14 days",
      icon: "🚀",
      timeframe: "2 minutes to setup",
      primary: true
    },
    {
      id: "demo",
      title: "Book Live Demo",
      description: "Personalized 30-min walkthrough",
      icon: "👥",
      timeframe: "Schedule for later",
      primary: false
    },
    {
      id: "explore",
      title: "Explore Sample Data",
      description: "Test drive with dummy data",
      icon: "🔍",
      timeframe: "No signup required",
      primary: false
    }
  ];

  const onboardingSteps = [
    { step: 1, title: "Create Account", description: "30 seconds", icon: "👤" },
    { step: 2, title: "Choose Industry", description: "Personalize experience", icon: "🎯" },
    { step: 3, title: "Add First Lead", description: "Import or create", icon: "📋" },
    { step: 4, title: "Launch Automation", description: "Start growing", icon: "🚀" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Director",
      company: "TechFlow Solutions",
      avatar: "👩‍💼",
      text: "Setup took literally 5 minutes. Had my first automation running before lunch!"
    },
    {
      name: "Mike Rodriguez", 
      role: "Real Estate Broker",
      company: "Premier Properties",
      avatar: "👨‍💼",
      text: "Closed 3 deals in first month using the pre-built real estate pipeline."
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically redirect to the app or dashboard
    console.log("Form submitted:", { ...formData, selectedIndustry, selectedOption });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-green-700">Free 14-Day Trial</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Launch Your CRM in
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Under 5 Minutes
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Manage leads, automate follow-ups, and track growth instantly. 
            No technical skills required. Get results today, not weeks from now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="w-4 h-4 text-green-500" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CreditCard className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Start Options */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {startOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                  selectedOption === option.id
                    ? option.primary 
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-purple-500 bg-purple-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-4xl mb-3">{option.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${
                  selectedOption === option.id && option.primary ? 'text-blue-700' : 
                  selectedOption === option.id ? 'text-purple-700' : 'text-gray-900'
                }`}>
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{option.description}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{option.timeframe}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Start Free – Takes 2 Minutes
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Onboarding Steps Visualization */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Your Journey to CRM Success
            </h2>
            <p className="text-lg text-gray-600">
              See exactly what happens after you sign up – no surprises, just results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {onboardingSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 mb-4 hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">0{step.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < onboardingSteps.length  && (
                  <div className="hidden md:block absolute -top-2 left-1/2  w-8 h-0.5 bg-blue-300 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Value Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              See What You'll Get Instantly
            </h2>
            <p className="text-lg text-gray-600">
              No waiting, no setup headaches – just immediate value
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Pre-Built Dashboard</h3>
                  <p className="text-gray-600">Your industry-specific dashboard loads automatically with sample data and relevant metrics</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Smart Automations</h3>
                  <p className="text-gray-600">Email sequences, task reminders, and follow-ups ready to go – just add your branding</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Lead Management</h3>
                  <p className="text-gray-600">Capture, qualify, and nurture leads with proven workflows that convert</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm opacity-75">Total Revenue</span>
                  <span className="text-2xl font-bold">$127,450</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold">247</div>
                    <div className="text-xs opacity-75">Leads</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">89</div>
                    <div className="text-xs opacity-75">Deals</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold">36</div>
                    <div className="text-xs opacity-75">Won</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Play className="w-4 h-4" />
                <span>30-second walkthrough video</span>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎥</div>
                <p className="text-sm text-gray-600">See how easy it is to add your first lead and close your first deal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section id="signup-form" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Create Your Account
            </h2>
            <p className="text-lg text-gray-600">
              Takes less than 2 minutes – we kept it simple on purpose
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 lg:p-12 border-2 border-blue-100">
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
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Role *
                  </label>
                  <select
                    required
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select your role</option>
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Industry Selector */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  What's Your Industry? (Helps us personalize your experience)
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      type="button"
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedIndustry === industry.id
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{industry.icon}</span>
                        <div>
                          <div className="font-semibold text-sm text-gray-900">{industry.name}</div>
                          <div className="text-xs text-gray-500">{industry.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Setting Up Your CRM...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Launch My CRM Now
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </button>

              <div className="flex justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>256-bit SSL</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Free 14 days</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Join 10,000+ Teams Already Growing
            </h2>
            <p className="text-lg text-gray-600">
              From startups to enterprises, businesses trust us to power their growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* Trust Logos */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-6">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">TechCorp</div>
              <div className="text-2xl font-bold text-gray-400">GrowthLabs</div>
              <div className="text-2xl font-bold text-gray-400">SalesFlow</div>
              <div className="text-2xl font-bold text-gray-400">DataDrive</div>
              <div className="text-2xl font-bold text-gray-400">MarketPro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to Close More Deals?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of sales teams who've transformed their results. 
            Your competition is already here – don't get left behind.
          </p>
          <button
            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-black text-lg hover:shadow-2xl transition-all hover:scale-105"
          >
            Start Free Trial Now
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>2-minute setup</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>SSL secured</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}