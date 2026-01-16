"use client";

import Counter from "@/utils/Counter";

export default function Whyus() {
  const reasons = [
    {
      title: "Built for Scale",
      description:
        "Handle multiple sub-CRMs effortlessly as your business grows, without compromising performance.",
      number: "1",
    },
    {
      title: "Industry-Specific Logic",
      description:
        "Each CRM is tailored to its vertical, ensuring workflows, reporting, and features fit your industry.",
      number: "2",
    },
    {
      title: "Centralized Data",
      description:
        "All CRMs are powered by a shared platform, giving you unified analytics and seamless reporting.",
      number: "3",
    },
    {
      title: "Faster Adoption",
      description:
        "Intuitive, clean UI ensures your team can quickly learn and start using the platform.",
      number: "4",
    },
    {
      title: "Customizable Workflows",
      description:
        "Adapt the platform to your business processes without relying on developers or IT teams.",
      number: "5",
    },
    {
      title: "Enterprise-Ready Security",
      description:
        "Role-based access, encryption, and compliance standards built-in to protect your data.",
      number: "6",
    },
  ];

  return (
    <section
      id="why-us"
      data-aos="fade-up"
      className="relative  py-20  overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96  rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Header Section - Centered */}
        <div className="mb-16">
          <div className="inline-flex items-center rounded-full border-2 border-cyan-600 px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-cyan-700 tracking-wide">
              💡 THE IBIGDATA ADVANTAGE
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              ibigdata
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Designed for businesses that need scalable, industry-specific CRM solutions, ibigdata delivers unmatched value and flexibility.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                <Counter end={500} duration={3} suffix="+"/>
              </div>
              <div className="text-sm text-gray-600 mt-1">Active Users</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                <Counter end={99.9} duration={3} suffix="%" />
              </div>
              <div className="text-sm text-gray-600 mt-1">Uptime</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                 <Counter end={24} duration={3} />/<Counter end={7} duration={3} />
              </div>
              <div className="text-sm text-gray-600 mt-1">Support</div>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {reasons.map((reason,index) => (
            <div
              key={reason.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative p-8 bg-gradient-to-br from-white to-cyan-50/30 border border-gray-200 rounded-2xl hover:border-cyan-300 hover:shadow-2xl transition-all duration-300"
            >
              {/* Large Number Background */}
             {/*  <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-bold text-cyan-600/5 group-hover:text-cyan-600/10 transition-colors select-none">
                {reason.number}
              </div> */}

              {/* Content */}
              <div className="relative">
                {/* Small Number Badge */}
                <div  data-aos="zoom-in"
                  data-aos-delay={index * 120}
                   className="inline-flex items-center mb-4 justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-bold mb-2">
                  {reason.number}
                </div>
               
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                 {/* Bottom Line Accent */}
                <div className="h-1 w-0 mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full"></div>

                <p data-aos="fade-left"
                  data-aos-delay={index * 160}
                   className="text-gray-600 leading-relaxed">{reason.description}</p>


              </div>
            </div>
          ))}
        </div>

 
      </div>
    </section>
  );
}