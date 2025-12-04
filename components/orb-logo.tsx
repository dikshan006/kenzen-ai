"use client"

import { useEffect, useState } from "react";

export function OrbLogo() {
  // Fix hydration: don't render on server, only after mount on client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-80 h-80 flex items-center justify-center float-animation">
      <div className="absolute inset-0 rotate-slow">
        <div className="absolute inset-0 rounded-full border border-primary/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
      </div>

      <div className="absolute inset-8">
        <div className="w-full h-full rounded-full border border-primary/20" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        {/* Multiple layers of fog for depth */}
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-transparent blur-3xl" />
        <div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-tl from-pink-500/50 via-purple-500/40 to-transparent blur-2xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-400/60 via-pink-400/50 to-transparent blur-xl" />
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <svg
          width="240"
          height="120"
          viewBox="0 0 240 120"
          className="drop-shadow-2xl animate-pulse"
          style={{
            filter:
              "drop-shadow(0 0 20px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.4))",
            animationDuration: "6s",
          }}
        >
          <defs>
            <filter id="bevel">
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feFlood floodColor="#ffffff" floodOpacity="0.3" />
              <feComposite in2="offsetblur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <text
            x="120"
            y="75"
            fontSize="52"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="300"
            fill="#ffffff"
            textAnchor="middle"
            filter="url(#bevel)"
            style={{
              letterSpacing: "4px",
            }}
          >
            KenZen
          </text>
        </svg>
      </div>

      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

