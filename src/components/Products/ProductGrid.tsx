"use client";
import { ProductCard } from "./ProductCard";

export default function ProductGrid() {
  const products = [
    {
      title: "Property CRM",
      description: "Complete CRM for real estate sales, inventory, and lead management.",
      features: [
        "Lead & inquiry management",
        "Property inventory tracking",
        "Broker & channel partner CRM",
        "Site visit & deal pipeline",
      ],
      link: "https://property.ibigdata.in",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Consultancy CRM",
      description: "Optimized CRM for consulting firms to manage clients and projects.",
      features: [
        "Client management",
        "Project tracking",
        "Invoices & billing",
        "Consultant performance metrics",
      ],
      link: "https://consult.ibigdata.in",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Travel CRM",
      description: "Streamline travel bookings, itineraries, and customer relations.",
      features: [
        "Tour & package management",
        "Customer booking lifecycle",
        "Payments & invoices",
        "Travel agent dashboard",
      ],
      link: "https://travel.ibigdata.in",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "WBH CRM",
      description: "Industry-specific CRM solution for WBH enterprises.",
      features: [
        "Custom workflow automation",
        "Client & partner management",
        "Analytics & reporting",
        "Scalable architecture",
      ],
      link: "https://wbh.ibigdata.in",
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="platform"
      className="relative scroll-mt-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 overflow-hidden"
      data-aos="fade-up"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Badge */}
        <div
          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-1.5 mb-6"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <span className="text-xs font-semibold text-white tracking-wide">
            🚀 INDUSTRY SOLUTIONS
          </span>
        </div>

        {/* Section Header */}
        <h2
          className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore Our{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Industry-Specific CRMs
          </span>
        </h2>

        <p
          className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          Each sub-CRM is tailored to its industry while powered by the same core platform.
        </p>

        {/* Products Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.title}
              data-aos="fade-up"
              data-aos-delay={100 + index * 150} // stagger by index
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
