module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/agent/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
function getSimulatedResponse(userMessage) {
    const message = userMessage.toLowerCase();
    if (message.includes("appointment") || message.includes("booking")) {
        return "Great question! For appointment automation, I'd recommend a 3-step flow:\n\n1. **Initial Confirmation** - Send SMS immediately after booking with appointment details\n2. **24-Hour Reminder** - Automated reminder with 'Reply YES to confirm or CANCEL to reschedule'\n3. **Follow-up** - Post-appointment feedback request\n\nThis reduces no-shows by ~40%. Would you like me to design the specific message templates?";
    }
    if (message.includes("lead") || message.includes("qualify")) {
        return "Lead qualification can be automated beautifully! Here's a proven approach:\n\n1. **Instant Response** - Thank them for inquiry within 60 seconds\n2. **Smart Questions** - Use conversational AI to ask 2-3 qualifying questions\n3. **Hot Lead Alert** - Notify your team immediately if they match your criteria\n4. **Nurture Sequence** - Auto-drip for warm/cold leads\n\nWhat industry are you in? I can customize this for your specific needs.";
    }
    if (message.includes("crm") || message.includes("integrate")) {
        return "CRM integration is key to seamless automation! KenZen AI connects with:\n\n- **Salesforce** - Bidirectional sync of contacts, deals, tasks\n- **HubSpot** - Automated lead scoring and lifecycle stages\n- **Custom CRMs** - API integration via webhooks\n\nWe handle data mapping, deduplication, and real-time updates. Which CRM are you currently using?";
    }
    if (message.includes("message") || message.includes("template") || message.includes("sms")) {
        return "Message templates are crucial! Here's what works:\n\n**Best Practices:**\n- Keep SMS under 160 characters for single messages\n- Include clear CTAs (call-to-action)\n- Personalize with {Name}, {Date}, {Service} variables\n- A/B test different tones\n\n**Example:** 'Hi {Name}! Your {Service} appointment is confirmed for {Date} at {Time}. Reply YES to confirm or CANCEL to reschedule. - {BusinessName}'\n\nWhat type of message do you need help crafting?";
    }
    if (message.includes("price") || message.includes("cost") || message.includes("pricing")) {
        return "KenZen AI pricing is based on your automation complexity and message volume:\n\n- **Starter** - $299/mo - Up to 1,000 automations\n- **Professional** - $599/mo - Up to 5,000 automations + CRM integration\n- **Enterprise** - Custom - Unlimited + white-label + dedicated support\n\nAll plans include the AI agent builder, multi-channel messaging, and analytics. Want to schedule a demo to see which fits your needs?";
    }
    // Default response
    return "I'm here to help you design automation workflows that save time and increase conversions. I can assist with:\n\n- Creating appointment reminder sequences\n- Lead qualification and follow-up strategies\n- Message template optimization\n- CRM integration planning\n- Multi-channel automation (SMS, WhatsApp, Email)\n\nWhat specific automation challenge are you facing?";
}
async function POST(request) {
    try {
        const { messages } = await request.json();
        const lastMessage = messages[messages.length - 1]?.content || "";
        // Check if OpenAI API key is configured and has quota
        const apiKey = process.env.OPENAI_API_KEY;
        if (apiKey) {
            try {
                const systemPrompt = {
                    role: "system",
                    content: `You are KenZen AI, an automation expert assistant. You help clinics, real estate teams, and small businesses design automation flows, message templates, and follow-up logic. 

Your expertise includes:
- Designing multi-step automation workflows
- Creating smart reminder sequences
- Lead qualification and follow-up strategies
- CRM integration patterns
- SMS, WhatsApp, and email automation

Explain things in simple, clear language. Be practical and actionable. Keep responses concise but helpful.`
                };
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: "gpt-4o-mini",
                        messages: [
                            systemPrompt,
                            ...messages
                        ],
                        temperature: 0.7,
                        max_tokens: 500
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    const reply = data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        reply
                    });
                } else {
                    console.log("[v0] OpenAI API quota exceeded, using simulated response");
                }
            } catch (error) {
                console.log("[v0] OpenAI API error, falling back to simulated response:", error);
            }
        }
        const reply = getSimulatedResponse(lastMessage);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply
        });
    } catch (error) {
        console.error("[v0] Agent API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to process your request. Please try again."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ccad9d32._.js.map