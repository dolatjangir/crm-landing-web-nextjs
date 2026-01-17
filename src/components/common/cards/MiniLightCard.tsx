interface MiniLightCardProps {
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  className?: string; // extra styling
  children?: React.ReactNode; // for fully custom content
}

export default function MiniLightCard({ title, icon, description, children, className = "" }: MiniLightCardProps) {
  return (
    <div
      className={`bg-gray-50 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 border-2 border-gray-200 hover:border-cyan-400 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg cursor-pointer ${className}`}
    >
      {icon && <div className="text-4xl text-blue-500">{icon}</div>}
      {title && <span className="text-sm font-semibold text-gray-900">{title}</span>}
      {description && <p className="text-xs text-gray-500 text-center">{description}</p>}
      {children}
    </div>
  );
}
