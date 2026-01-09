"use client";

const AIRobot = () => {
    return (
        <div>
        <div className="relative max-sm:hidden">
            {/* Glowing Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl animate-pulse" />
            </div>

            {/* AI Robot Container */}
            <div className="relative">
                {/* Main Robot Circle */}
                <div className="relative mx-auto w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1 shadow-2xl shadow-cyan-500/50 animate-float">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        {/* Robot Face */}
                        <div className="text-center">
                            {/* Eyes */}
                            <div className="flex justify-center gap-8 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-pulse shadow-lg shadow-cyan-400/50" />
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-pulse animation-delay-1000 shadow-lg shadow-cyan-400/50" />
                            </div>
                            {/* Mouth/Interface */}
                            <div className="space-y-2">
                                <div className="h-2 w-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse animation-delay-2000" />
                                <div className="h-2 w-24 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse animation-delay-3000" />
                                <div className="h-2 w-28 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orbiting Data Points */}
                <div className="absolute inset-0 animate-spin-slow">
                    {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                        <div
                            key={i}
                            className="absolute top-1/2 left-1/2 w-16 h-16"
                            style={{
                                transform: `rotate(${rotation}deg) translateY(-200px)`,
                            }}
                        >
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50"
                                style={{ transform: `rotate(-${rotation}deg)` }}
                            >
                                <span className="text-2xl">
                                    {["🎯", "⚡", "🔒", "📊", "🚀", "💡"][i]}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'blur(1px)' }}>
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        const startX = 160;
                        const startY = 160;
                        const endX = Math.round((startX + Math.sin(rad) * 200) * 100) / 100;
                        const endY = Math.round((startY - Math.cos(rad) * 200) * 100) / 100;

                        return (
                            <line
                                key={i}
                                x1={startX}
                                y1={startY}
                                x2={endX}
                                y2={endY}
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                opacity="0.3"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.5}s` }}
                            />
                        );
                    })}
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -left-8 max-md:-left-4 top-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl animate-float animation-delay-1000">
                <div className="text-cyan-400 text-2xl font-bold">10M+</div>
                <div className="text-white text-sm">Tasks Automated</div>
            </div>

            <div className="absolute -right-8 bottom-32 max-md:-right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl animate-float animation-delay-2000">
                <div className="text-blue-400 text-2xl font-bold">99.9%</div>
                <div className="text-white text-sm">Uptime SLA</div>
            </div>
        </div>
        
         <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
      </div>
    )
}

export default AIRobot
