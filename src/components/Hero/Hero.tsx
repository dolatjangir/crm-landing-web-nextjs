"use client";

import Link from "next/link";

export default function Hero() {

  return (
    <section id="home" className="relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="py-14 flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div
            className="max-w-3xl lg:max-w-2xl text-center lg:text-left"
            data-aos="fade-up"
            data-aos-once="true"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 mb-6"
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span className="text-xs font-semibold text-white tracking-wide">
                🤖 10+ AI AGENTS WORKING 24/7 FOR YOU
              </span>
            </div>

            <h1
              className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              Your AI Agent Army
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Automate. Qualify. Grow.
              </span>
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed text-gray-600 lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-once="true"
            >
              Deploy intelligent AI agents that handle lead qualification, property matching, 
              content creation, calling, follow-ups, data mining, SEO, social media, and campaign 
              with ai agents — all on autopilot. ibigdata puts a full team of AI agents to work 
              for your business, so you scale faster with less manual effort.
            </p>

            {/* CTA */}
            <div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link
                href="/get-started"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-600/30 transition-all hover:scale-105"
              >
                Get Started With AI Agents
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/explore-ai-agent"
                className="inline-flex items-center justify-center rounded-xl border-2 border-cyan-600 px-8 py-4 font-semibold text-cyan-700 hover:bg-cyan-50 transition-all"
              >
                Explore All Agents
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <img
              src="/robot-with-crm.png"
              alt="AI Agents Illustration"
              className="w-full max-w-md lg:max-w-full"
            />
          </div>

        </div>
      </div>

      {/* Blob Animation */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}