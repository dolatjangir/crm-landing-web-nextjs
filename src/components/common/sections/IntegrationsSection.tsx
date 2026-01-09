import React from "react";
import MiniLightCard from "../cards/MiniLightCard";
import AppButton from "../buttons/AppButton";

export interface Integration {
  name: string;
  logo: React.ReactNode | string;
}

interface IntegrationsSectionProps {
  title: string;
  subtitle?: string;
  integrations: Integration[];
  buttonText?: string;
  buttonOnClick?: () => void;
  className?: string;
  bgClassName?: string; // default white
}

const IntegrationsSection: React.FC<IntegrationsSectionProps> = ({
  title,
  subtitle,
  integrations,
  buttonText,
  buttonOnClick,
  className = "",
  bgClassName = "bg-white",
}) => {
  return (
    <section className={`py-20 ${bgClassName} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {integrations.map((integration, i) => (
           <MiniLightCard key={i} title={integration.name} icon={integration.logo}  />
          ))}
        </div>

        {/* Button */}
        {buttonText && (
          <div className="mt-12 text-center">
            <AppButton text={buttonText} onClick={buttonOnClick} />
          </div>
        )}
      </div>
    </section>
  );
};

export default IntegrationsSection;
