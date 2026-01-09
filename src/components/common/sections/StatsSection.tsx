import React from "react";
import Counter from "@/utils/Counter";

export interface StatItem {
  value: number;             // target value for the counter
  label: string;             // label under the counter
  prefix?: string;           // optional prefix
  suffix?: string;           // optional suffix
}

interface StatsSectionProps {
  stats: StatItem[];
  className?: string;        // optional additional section classes
  bgClassName?: string;      // optional background gradient or color
}

const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  className = "",
  bgClassName = "bg-gradient-to-br from-cyan-600 to-blue-600",
}) => {
  return (
    <section className={`py-20 ${bgClassName} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-5xl font-bold mb-2">
                <Counter
                  end={stat.value}
                  duration={3}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </div>
              <div className="text-cyan-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
