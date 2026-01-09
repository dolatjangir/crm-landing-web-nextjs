interface AppButtonProps {
    onClick?: () => void;
    text?: string; // simple text for the button
    children?: React.ReactNode; // for custom JSX inside button
    className?: string; // extra styling
    bgColor?: string;
    textcolor?: string;
    type?: "button" | "submit" | "reset"; // default "button"
    disabled?: boolean;
}

export default function AppButton({
    onClick,
    text,
    children,
    className = `px-8 py-4 rounded-xl font-semibold
        hover:shadow-xl hover:shadow-cyan-600/30
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed`,
    bgColor = "bg-gradient-to-r from-cyan-600 to-blue-600",
    textcolor = "text-white",
    type = "button",
    disabled = false,
}: AppButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
       ${bgColor}
        ${textcolor} 
        ${className}
      `}
        >
            {text || children}
        </button>
    );
}
