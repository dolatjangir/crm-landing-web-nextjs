import React from "react";

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface FeatureShowcaseProps {
  // Left side
  badgeText?: string;
  badgeColor?: string; // tailwind gradient like "from-purple-600 to-pink-600"
  title: string;
  subtitle?: string;
  features: FeatureItem[];

  // Right side visual
  visualContent?: React.ReactNode;

  // Optional buttons below visual
  actions?: string[];
  actionButtonClassName?: string;

  // Section styling
  className?: string;
  bgClassName?: string;
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  badgeText,
  badgeColor = "from-purple-600 to-pink-600",
  title,
  subtitle,
  features,
  visualContent,
  actions,
  actionButtonClassName = "bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl py-3 px-6 text-white text-sm font-semibold transition-colors",
  className = "",
  bgClassName = "bg-white",
}) => {
  return (
    <section className={`py-20 ${bgClassName} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            {badgeText && (
              <div
                className={`inline-flex items-center rounded-full px-4 py-2 mb-6 bg-gradient-to-r ${badgeColor}`}
              >
                <span className="text-sm font-semibold text-white">{badgeText}</span>
              </div>
            )}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            {subtitle && (
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{subtitle}</p>
            )}

            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${badgeColor} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            {visualContent}
          </div>
        </div>

        {/* Optional Actions Below Visual */}
        {actions && actions.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {actions.map((action, i) => (
              <button key={i} className={actionButtonClassName}>
                {action}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureShowcase;
