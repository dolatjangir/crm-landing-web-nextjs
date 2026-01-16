"use client";

import Link from "next/link";


export default function Ecosystem() {
  return (
    <section
      className="relative  py-20 sm:py-28 lg:py-32 overflow-hidden"
     
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">

        {/* Badge */}
        <div
          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 mb-10"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <span className="text-xs font-semibold text-white tracking-wide">
           ⚡ CRM, Powered by Intelligence
          </span>
        </div>

        {/* Section Header */}
        <h2
          className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          An Intelligent CRM{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Ecosystem
          </span>

        </h2>

        <p
          className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          ibigdata is an AI-powered CRM ecosystem where a single intelligent core
automates leads, tasks, and data across every industry. Each
AI-enhanced sub-CRM is connected to a centralized platform and guided
by a built-in AI virtual assistant that continuously optimizes your
business operations.

        </p>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "AI-Powered Core",
    desc: "A centralized AI engine that automatically manages users, data, insights, and workflows across all CRMs.",
              delay: 100,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              )
            },
            {
              title: "AI Industry Intelligence",
    desc: "Industry-specific CRMs trained with AI to automate leads, tasks, and decisions for each vertical.",
              delay: 200,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2" />
              )
            },
            {
              title: "Self-Scaling Architecture",
    desc: "AI-ready infrastructure that grows with your business and adapts automatically as you scale.",
              delay: 300,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              )
            },
            {
             title: "Secure by AI Design",
    desc: "AI-monitored security with role-based access, encrypted data, and compliance built in.",
              delay: 400,
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944" />
              )
            }
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 border-2 border-cyan-100 rounded-2xl bg-white/80 backdrop-blur-sm text-left transition-all duration-300 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-600/10 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 inline-flex items-center gap-2 text-cyan-700 font-semibold group cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Link href={"/ecosystem"} className="text-lg">Discover how it all connects</Link>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Blob Animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}
