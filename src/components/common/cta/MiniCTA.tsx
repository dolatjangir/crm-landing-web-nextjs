type CTAProps = {
  title: string;
  description: React.ReactNode;
  buttonText: string;
  onClick?: () => void;
  className?: string;
};

export function MiniCTA({
  title,
  description,
  buttonText,
  onClick,
  className = "",
}: CTAProps) {
  return (
    <div
      className={`mt-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-4 md:p-12 text-center shadow-xl ${className}`}
    >
      <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>

      <p className="text-cyan-50 mb-8 text-lg">
        {description}
      </p>

      <button
        onClick={onClick}
        className="px-8 py-4 cursor-pointer bg-white text-cyan-600 rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
      >
        {buttonText}
      </button>
    </div>
  );
}
