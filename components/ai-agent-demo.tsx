"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export function AIAgentDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Thanks for visiting. I'm KenZen AI, built by Dikshan Chhikara. I'll help you think through how automation can support your business.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const quickPrompts = ["Draft clinic reminders", "Follow up with a real estate lead", "Automate invoice reminders"]

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")

    // Add user message immediately
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      // Call the real API
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from agent")
      }

      const data = await response.json()

      // Add assistant response
      setMessages([...newMessages, { role: "assistant", content: data.reply }])
    } catch (error) {
      console.error("[v0] Error calling agent API:", error)
      // Fallback to demo message on error
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "I'm currently in demo mode. To enable full functionality, please set the OPENAI_API_KEY environment variable.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
  }

  return (
    <section id="ai-demo" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            See the AI Agent in Action
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This demo shows how a KenZen AI agent drafts messages, follows up with leads, and logs actions into your
            systems. Set OPENAI_API_KEY in your environment to enable real AI responses.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card rounded-xl p-6 space-y-3">
              <h3 className="text-lg font-semibold">What This Agent Does</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This AI agent can draft reminders, follow up with leads, and log actions to your tools. Connect your
                OpenAI API key to enable real-time AI responses.
              </p>
            </div>
          </div>

          {/* Right - Chat Interface */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-xl overflow-hidden shadow-xl shadow-primary/5">
              {/* Chat messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2.5 text-sm flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick prompts */}
              <div className="px-6 py-3 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickPrompt(prompt)}
                      disabled={isLoading}
                      className="px-3 py-1.5 text-xs rounded-full bg-secondary hover:bg-secondary/70 text-secondary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
                    placeholder="Ask the KenZen AI agent to automate a task..."
                    className="bg-secondary border-border"
                    disabled={isLoading}
                  />
                  <Button onClick={handleSend} size="sm" className="px-6" disabled={isLoading}>
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
