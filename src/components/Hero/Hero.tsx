"use client";

export default function Hero() {

  return (
    <section id="home"  className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className=" py-14 flex flex-col-reverse lg:flex-row items-center gap-12">

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
                ✨ AI-POWERED CRM AUTOMATION

              </span>
            </div>

            <h1
              className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              AI That Runs Your CRM.
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Automate Leads, Tasks & Growth.
              </span>

            </h1>

            <p
              className="mt-6 text-lg leading-relaxed text-gray-600 lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-once="true"
            >
              ibigdata is an AI-powered CRM platform that automatically captures,
qualifies, and manages your leads while handling tasks, follow-ups,
and data workflows. With an intelligent AI virtual assistant working
24/7, your business grows faster — with less manual effort.

            </p>

            {/* CTA */}
            <div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <a
                href="#get-started"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-600/30 transition-all hover:scale-105"
              >
                Get Started
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-xl border-2 border-cyan-600 px-8 py-4 font-semibold text-cyan-700 hover:bg-cyan-50 transition-all"
              >
                Explore Solutions
              </a>
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
              src="/heroImage.png"
              alt="CRM Dashboard Illustration"
              className="w-full max-w-md lg:max-w-full rounded-2xl shadow-2xl"
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
