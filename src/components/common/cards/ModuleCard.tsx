interface ModuleCardProps {
  name: string;
  icon: string | React.ReactNode; // can be an emoji or a React icon component
  color: string; // Tailwind gradient, e.g., "from-purple-500 to-pink-500"
  description?: string; // optional, defaults to "AI-Enhanced"
  className?: string; // for extra customization if needed
}

export default function ModuleCard({
  name,
  icon,
  color,
  description = "AI-Enhanced",
  className = "",
}: ModuleCardProps) {
  return (
    <div
      className={`group relative bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-cyan-400 hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
    >
      {/* Connection Line Effect */}
      <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="text-center">
        <div
          className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-3xl shadow-lg`}
        >
          {icon}
        </div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
    </div>
  );
}
