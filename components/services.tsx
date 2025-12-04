"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const services = [
    {
      icon: "🦷",
      title: "Dental Clinics",
      description: "Automate patient bookings, reminders, and follow-ups.",
      features: [
        "Automatic appointment reminders via SMS/WhatsApp",
        "Missed-appointment follow-up flows",
        "Centralized inbox for staff",
      ],
      detailParagraph:
        "KenZen AI connects to your booking system and messaging tools to handle repetitive communication with patients. It sends smart reminders, reschedules missed appointments, and follows up after visits without your staff having to chase anyone. This keeps your chairs full, reduces no-shows, and frees your team to focus on patient care instead of admin work.",
    },
    {
      icon: "🏡",
      title: "Real Estate Teams",
      description: "Turn leads into showings without manual chasing.",
      features: [
        "Instant lead response sequences",
        "Auto-scheduled showings & reminders",
        "Pipeline updates pushed to your CRM",
      ],
      detailParagraph:
        "For real estate teams, KenZen AI responds to new leads within minutes, qualifies them, and helps schedule showings based on their availability. It keeps the conversation going with personalized follow-ups and automatically updates your CRM with notes from each interaction, so your agents spend more time closing deals and less time typing.",
    },
    {
      icon: "🏪",
      title: "Small Businesses",
      description: "Automate messages, reminders, and sales follow-ups.",
      features: ["Abandoned-inquiry follow-ups", "Invoice + payment nudges", "Support replies with AI drafting"],
      detailParagraph:
        "Small businesses use KenZen AI to handle day-to-day follow-ups: sending quotes, nudging unpaid invoices, answering simple questions, and routing more complex requests to the right person. The system runs quietly in the background, so customers always feel looked after even when your team is busy or offline.",
    },
  ]

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="services" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            KenZen AI builds custom automation systems that save hours every week.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <span className="text-xs text-primary font-medium">
                  {expandedIndex === index ? "Show less" : "Learn more"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-primary transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed pt-4 border-t border-border/30">
                  {service.detailParagraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
