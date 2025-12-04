import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { AIAgentDemo } from "@/components/ai-agent-demo"
import { MetricsAndDemo } from "@/components/metrics-and-demo"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Left fog */}
      <div className="fixed left-0 top-0 bottom-0 w-64 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at left center, rgba(147, 51, 234, 0.4), rgba(236, 72, 153, 0.3), transparent 70%)",
          }}
        />
      </div>

      {/* Right fog */}
      <div className="fixed right-0 top-0 bottom-0 w-64 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at right center, rgba(236, 72, 153, 0.4), rgba(147, 51, 234, 0.3), transparent 70%)",
          }}
        />
      </div>

      {/* Content with relative positioning to appear above fog */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <HowItWorks />
        <AIAgentDemo />
        <MetricsAndDemo />
        <Footer />
      </div>
    </main>
  )
}
