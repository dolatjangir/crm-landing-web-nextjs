import React from "react";

interface Feature {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="group bg-white border-2 border-cyan-100 rounded-2xl p-8 hover:border-cyan-300 hover:shadow-xl transition-all hover:-translate-y-2">
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 mb-6">{feature.description}</p>
      <div className="space-y-2">
        {feature.features.map((item, j) => (
          <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
