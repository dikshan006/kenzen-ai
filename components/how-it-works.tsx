export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "In a short call, we map your workflows and find where automation will save the most time.",
    },
    {
      number: "02",
      title: "Design & Build",
      description: "We design your automation blueprint and build AI agents that plug into the tools you already use.",
    },
    {
      number: "03",
      title: "Launch & Improve",
      description: "We launch, monitor performance, and keep improving the flows as your business grows.",
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            How KenZen AI Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting lines */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card rounded-xl p-6 space-y-3 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-sm border border-primary/30">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
