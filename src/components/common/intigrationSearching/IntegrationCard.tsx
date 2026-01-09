"use client";

export default function IntegrationCard({
  integration,
  onClick,
}: {
  integration: any;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-300 hover:shadow-xl transition-all group cursor-pointer"
    >
      {/* Header with logos and status */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{integration.logo}</div>
          <div className="text-2xl">{integration.partnerLogo}</div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${integration.statusColor}`}
        >
          {integration.status}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
        {integration.name}
      </h3>

      <p className="text-lg font-semibold text-gray-700 mb-3">
        {integration.headline}
      </p>

      <p className="text-gray-600 text-sm mb-4">
        {integration.description}
      </p>

      {/* Benefits */}
      <div className="space-y-2 mb-4">
        {integration.benefits.slice(0, 3).map((benefit: string, i: number) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <span className="text-cyan-500">✓</span>
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span>{integration.rating}</span>
          </div>

          <div>{integration.installs} installs</div>
        </div>

        <div className="text-cyan-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          View Details →
        </div>
      </div>
    </div>
  );
}
