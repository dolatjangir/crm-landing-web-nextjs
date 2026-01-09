
interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  icon: React.ReactNode;
}

export function ProductCard({
  title,
  description,
  features,
  link,
  icon,
}: ProductCardProps) {
  return (
    <div className="group relative border-2 border-cyan-100 rounded-2xl p-8 bg-white/80 backdrop-blur-sm hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-2">
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
            <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="flex-1 text-left">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-600/40 group-hover:scale-105"
      >
        <span>Visit CRM</span>
        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}