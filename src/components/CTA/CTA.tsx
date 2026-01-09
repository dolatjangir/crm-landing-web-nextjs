"use client";
export default function CTA() {
  return (
    <section
      id="get-started"
      className="relative bg-gradient-to-br from-cyan-950 via-cyan-800 to-cyan-900 py-20 sm:py-28 lg:py-32 text-center overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        {/* Badge */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 mb-6"
        >
          <span className="text-xs font-semibold text-white tracking-wide">
            🚀 GET STARTED TODAY
          </span>
        </div>

        {/* Section Header */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6"
        >
          Ready to Transform Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            CRM Experience?
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-gray-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          Join hundreds of businesses already using ibigdata to streamline their operations and scale effortlessly.
        </p>

        {/* Trust Indicators */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-8 flex flex-wrap justify-center items-center gap-8 text-gray-300 text-sm"
        >
          {[
            "Free 14-day trial",
            "No credit card required",
            "Cancel anytime",
          ].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-cyan-600/50 transition-all duration-200 hover:shadow-cyan-600/60 hover:scale-105"
          >
            <span>Get Started Free</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            Book a Demo
          </a>
        </div>

        {/* Social Proof */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-gray-300 text-sm mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white/40 font-semibold text-lg">Company A</div>
            <div className="text-white/40 font-semibold text-lg">Company B</div>
            <div className="text-white/40 font-semibold text-lg">Company C</div>
            <div className="text-white/40 font-semibold text-lg">Company D</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0px,0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}
