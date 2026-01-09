"use client";

interface DarkHeroSectionProps {
    className?: string; // additional custom classes
    backgroundImage: string; // path to background image
    children: React.ReactNode; // content inside the hero section
}

export default function DarkHeroSection({ backgroundImage, children, className }: DarkHeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-900">

            {/* ================= MOVING IMAGE LAYER ================= */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className}`}
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                    }}
                />
            </div>

            {/* ================= STATIC GRADIENT OVERLAY ================= */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(rgba(0,0,0,0.80), rgba(8, 51, 68, 0.80))",
                }}
            />

            {/* ================= GLOW EFFECTS ================= */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {children}
            </div>

            {/* ================= ANIMATIONS ================= */}
            <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          50% { transform: translateY(50px); }
          100% { transform: translateY(0); }
        }

        .animate-grid-move {
          animation: gridMove 20s ease-in-out infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
        </section>
    );
}
