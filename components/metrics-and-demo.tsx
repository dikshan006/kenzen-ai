"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function MetricsAndDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    channel: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo request:", formData)
    alert("Thank you! We'll reply within 24 hours.")
  }

  const metrics = [
    {
      value: "10+ hours",
      label: "saved / month",
      description: "for a single clinic using KenZen flows.",
    },
    {
      value: "30–50%",
      label: "fewer no-shows",
      description: "with automated reminders and rescheduling.",
    },
    {
      value: "24/7",
      label: "response coverage",
      description: "without hiring extra staff.",
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">{metric.value}</div>
              <div className="text-lg font-semibold text-foreground">{metric.label}</div>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Book a Demo Form */}
        <div id="book-demo" className="scroll-mt-20">
          <div className="max-w-2xl mx-auto glass-card rounded-xl p-8 shadow-xl shadow-primary/5">
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Book a Demo</h2>
              <p className="text-sm text-muted-foreground">
                Tell us about your business and we'll show you exactly what we'd automate first.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                >
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Business Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dental">Dental Clinic</SelectItem>
                    <SelectItem value="realestate">Real Estate</SelectItem>
                    <SelectItem value="small">Small Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select
                  value={formData.channel}
                  onValueChange={(value) => setFormData({ ...formData, channel: value })}
                >
                  <SelectTrigger className="bg-secondary border-border">
                    <SelectValue placeholder="Preferred Channel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder="What do you want to automate first?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary border-border min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                Schedule Your Demo
              </Button>

              <p className="text-xs text-center text-muted-foreground">We'll reply within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
