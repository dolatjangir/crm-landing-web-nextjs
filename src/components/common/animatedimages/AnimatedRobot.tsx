"use client";

import React, { useEffect, useState } from "react";

type AnimatedRobotProps = {
  width?: number; // SVG width
  height?: number; // SVG height
  particleCount?: number; // Number of floating particles
  showScanLine?: boolean; // Enable scan line
  showShield?: boolean; // Enable shield rotation
  showEnergyPulse?: boolean; // Enable energy pulse
};

export const AnimatedRobot: React.FC<AnimatedRobotProps> = ({
  width = 500,
  height = 500,
  particleCount = 20,
  showScanLine = true,
  showShield = true,
  showEnergyPulse = true,
}) => {
  const [particles, setParticles] = useState<any[]>([]);
  const [scanLine, setScanLine] = useState(0);
  const [shieldRotation, setShieldRotation] = useState(0);
  const [energyPulse, setEnergyPulse] = useState(0);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);

    // Animate scan line
    const scanInterval = showScanLine
      ? setInterval(() => setScanLine((prev) => (prev + 2) % 300), 30)
      : null;

    // Rotate shield
    const shieldInterval = showShield
      ? setInterval(() => setShieldRotation((prev) => (prev + 1) % 360), 50)
      : null;

    // Energy pulse
    const pulseInterval = showEnergyPulse
      ? setInterval(() => setEnergyPulse((prev) => (prev + 1) % 100), 50)
      : null;

    return () => {
      if (scanInterval) clearInterval(scanInterval);
      if (shieldInterval) clearInterval(shieldInterval);
      if (pulseInterval) clearInterval(pulseInterval);
    };
  }, [particleCount, width, height, showScanLine, showShield, showEnergyPulse]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width, height }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="absolute"
        style={{ filter: "drop-shadow(0 0 40px rgba(6, 182, 212, 0.6))" }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="robotBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity={1} />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.8} />
          </linearGradient>
          <radialGradient id="glowGradient">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity={0} />
          </radialGradient>

          {/* Filters */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="#06b6d4"
            opacity={0.6}
            className="animate-particle"
            style={{
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}

        {/* Outer Rotating Shield */}
        {showShield && (
          <g
            style={{
              transformOrigin: `${width / 2}px ${height / 2}px`,
              transform: `rotate(${shieldRotation}deg)`,
            }}
          >
            <circle
              cx={width / 2}
              cy={height / 2}
              r={180}
              fill="none"
              stroke="url(#shieldGradient)"
              strokeWidth="3"
              strokeDasharray="10 10"
              opacity={0.4}
            />
          </g>
        )}

        {/* Energy Core */}
        {showEnergyPulse && (
          <circle
            cx={width / 2}
            cy={height / 2}
            r={60 + energyPulse * 0.2}
            fill="url(#glowGradient)"
            opacity={0.3}
          />
        )}

        {/* Robot Main Body */}
        <rect
          x={width / 2 - 50}
          y={height / 2 - 25}
          width={100}
          height={90}
          rx={15}
          fill="url(#robotBodyGradient)"
          stroke="#06b6d4"
          strokeWidth="4"
          filter="url(#glow)"
        />

        {/* Scan Line */}
        {showScanLine && (
          <rect
            x={width / 2 - 40}
            y={height / 2 - 50 + (scanLine % 60)}
            width={80}
            height={2}
            fill="#06b6d4"
            opacity={0.7}
          />
        )}
      </svg>
    </div>
  );
};
