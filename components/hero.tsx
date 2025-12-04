"use client"

import { Button } from "@/components/ui/button"
import { OrbLogo } from "@/components/orb-logo"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Subtle gradient grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* Left side - Content */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-primary font-medium">
            AI Automation Studio
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Automation from the Shadows
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
            KenZen AI builds automation systems that run your routine work in the background, so clinics, real estate
            teams, and small businesses can focus on customers instead of manual tasks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Button
              size="lg"
              onClick={() => scrollToSection("book-demo")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg shadow-primary/20"
            >
              Book a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("ai-demo")}
              className="border-border hover:bg-secondary/50"
            >
              See AI in Action
            </Button>
          </div>
        </div>

        {/* Right side - 3D Orb Logo */}
        <div className="flex items-center justify-center">
          <OrbLogo />
        </div>
      </div>
    </section>
  )
}
