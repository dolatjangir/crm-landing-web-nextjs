import React from "react";

export interface Step {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode | string;
}

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  className?: string; // optional extra classes for the section
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({
  title,
  subtitle,
  steps,
  className = "",
}) => {
  return (
    <section
      className={`py-20 bg-gradient-to-br from-slate-900 to-cyan-900 text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
        </div>

        {/* Steps Grid */}
        <div className={`grid md:grid-cols-${steps.length} gap-8`}>
          {steps.map((item, i) => (
            <div key={i} className="relative">
              {/* Connecting line except last step */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent" />
              )}

              {/* Step Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="text-6xl mb-4">{item.icon}</div>
                <div className="text-cyan-400 font-bold mb-2">STEP {item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
