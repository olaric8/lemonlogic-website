/*
=========================================================
LEMONLOGIC EXECUTIVE INTELLIGENCE PLATFORM (LEIP)
Executive Copilot™
=========================================================
*/

import { useState, useRef, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import useExecutiveData from "../../hooks/useExecutiveData";
import { generateExecutiveIntelligence } from "../../services/executiveIntelligenceEngine";
import ExecutiveReportPDF from "../ExecutiveReportPDF";

// ── Sub-components ──────────────────────────────────────────────────────────

function ActionButton({ title, colour = "bg-slate-900", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${colour} text-white rounded-xl px-5 py-3 font-semibold transition hover:scale-[1.02] hover:opacity-90`}
    >
      {title}
    </button>
  );
}

function AttentionItem({ level, title, description }) {
  const styles = {
    high:   { badge: "bg-red-100 text-red-700",     icon: "🔴" },
    medium: { badge: "bg-amber-100 text-amber-700",  icon: "🟡" },
    low:    { badge: "bg-emerald-100 text-emerald-700", icon: "🟢" },
  };
  const current = styles[level] || styles.low;
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-slate-900">{current.icon} {title}</h3>
          <p className="text-slate-600 mt-2 leading-7">{description}</p>
        </div>
        <span className={`${current.badge} px-3 py-1 rounded-full text-xs font-bold uppercase`}>
          {level}
        </span>
      </div>
    </div>
  );
}

// ── Panel: Explain Recommendation ──────────────────────────────────────────

function ExplainPanel({ intelligence, executiveProgramme, onClose }) {
  const { recommendation, executiveCopilot } = intelligence;
  const pulse = executiveProgramme?.executivePulse?.pulse ?? 0;
  const completion = executiveProgramme?.completion ?? 0;
  const phase = executiveProgramme?.phase ?? "Assessment";

  return (
    <div className="border-t bg-blue-50 p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-slate-900">Why This Recommendation?</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl font-bold">&times;</button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-blue-100">
          <p className="text-xs uppercase tracking-wider text-slate-500">Executive Pulse</p>
          <p className="text-2xl font-bold text-cyan-600 mt-1">{pulse}%</p>
          <p className="text-sm text-slate-500 mt-1">
            {pulse < 40 ? "Below target — immediate action required." : pulse < 70 ? "Building momentum." : "Strong performance."}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-blue-100">
          <p className="text-xs uppercase tracking-wider text-slate-500">Programme Completion</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">{completion}%</p>
          <p className="text-sm text-slate-500 mt-1">
            {completion < 25 ? "Early stage — focus on foundations." : completion < 60 ? "Mid-programme — maintain momentum." : "Advanced — optimise and scale."}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-blue-100">
          <p className="text-xs uppercase tracking-wider text-slate-500">Current Phase</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">{phase}</p>
          <p className="text-sm text-slate-500 mt-1">Determines the priority action sequence.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-blue-100">
        <h4 className="font-bold text-slate-900 mb-3">AI Reasoning</h4>
        <p className="text-slate-600 leading-8">
          Based on your current Executive Pulse of <strong>{pulse}%</strong> and programme completion
          of <strong>{completion}%</strong>, the Executive Intelligence engine has identified{" "}
          <strong>{executiveCopilot?.recommendation ?? "Operational Intelligence & Workflow Automation"}</strong> as
          the highest-impact initiative. This recommendation prioritises actions that deliver measurable
          business outcomes within your current transformation phase while maintaining executive confidence.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-blue-100">
        <h4 className="font-bold text-slate-900 mb-3">Expected Outcomes</h4>
        <ul className="space-y-2">
          {[
            "Increased operational visibility across business units",
            "Reduced manual effort in reporting and approvals",
            "Faster executive decision-making through real-time data",
            `Estimated ROI of ${executiveCopilot?.roi ?? 185}% over the programme timeline`,
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <span className="text-emerald-500 font-bold mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Panel: View Evidence ────────────────────────────────────────────────────

function EvidencePanel({ assessment, onClose }) {
  const questions = [
    "Do you rely on spreadsheets for critical business operations?",
    "Are reports manually compiled from multiple sources?",
    "Are approvals handled through email or messaging apps?",
    "Is operational data stored in multiple disconnected systems?",
    "Can leadership access real-time performance dashboards?",
    "Are repetitive administrative tasks automated?",
    "Are business processes documented and standardised?",
    "Can you easily track workflow bottlenecks?",
    "Do teams have visibility into operational performance?",
    "Are decisions supported by timely and accurate business data?",
  ];

  const labels = ["Never", "Sometimes", "Often", "Usually", "Always"];
  const insights = assessment?.insights ?? [];
  const priorities = assessment?.priorities ?? [];
  const score = assessment?.score ?? 0;
  const readiness = assessment?.readinessPercentage ?? 0;

  return (
    <div className="border-t bg-purple-50 p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-slate-900">Assessment Evidence</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl font-bold">&times;</button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 border border-purple-100">
          <p className="text-xs uppercase tracking-wider text-slate-500">Total Score</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">{score}/30</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-purple-100">
          <p className="text-xs uppercase tracking-wider text-slate-500">Readiness</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">{readiness}%</p>
        </div>
      </div>

      {insights.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-purple-100">
          <h4 className="font-bold text-slate-900 mb-3">Key Insights from Your Assessment</h4>
          <ul className="space-y-2">
            {insights.map((insight, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-7">
                <span className="text-purple-500 font-bold mt-0.5">•</span>
                {insight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {priorities.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-purple-100">
          <h4 className="font-bold text-slate-900 mb-3">Priority Focus Areas</h4>
          <div className="flex flex-wrap gap-2">
            {priorities.map((p, i) => (
              <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {p}
              </span>
            ))}
          </div>
        </div>
      )}

      {insights.length === 0 && priorities.length === 0 && (
        <div className="bg-white rounded-xl p-6 border border-purple-100 text-center text-slate-500">
          <p>Complete the assessment at <a href="/assessment" className="text-purple-600 underline">lemonlogicai.com/assessment</a> to see your evidence here.</p>
        </div>
      )}
    </div>
  );
}

// ── Panel: Ask Copilot (AI Chat) ────────────────────────────────────────────

function CopilotChat({ assessment, executiveProgramme, intelligence, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Good day. I'm your Executive Intelligence Advisor. Based on your assessment, your organisation is at ${assessment?.readinessPercentage ?? 0}% automation readiness (${assessment?.level ?? "Assessment phase"}), with an Executive Pulse of ${executiveProgramme?.executivePulse?.pulse ?? 0}%. How can I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const systemPrompt = `You are an Executive Intelligence Advisor for LemonLogic's Executive Intelligence Platform (LEIP). You provide concise, actionable, executive-level strategic advice.

Executive Context:
- Automation Readiness: ${assessment?.readinessPercentage ?? 0}% (${assessment?.level ?? "Not assessed"})
- Executive Pulse: ${executiveProgramme?.executivePulse?.pulse ?? 0}%
- Programme Completion: ${executiveProgramme?.completion ?? 0}%
- Recommended Programme: ${intelligence?.executiveCopilot?.recommendation ?? "Operational Intelligence & Workflow Automation"}
- Expected ROI: ${intelligence?.executiveCopilot?.roi ?? 185}%
- Current Phase: ${executiveProgramme?.phase ?? "Assessment"}
- Key Insights: ${(assessment?.insights ?? []).join("; ")}
- Priority Areas: ${(assessment?.priorities ?? []).join(", ")}

Respond as a senior business transformation advisor. Be direct, specific, and actionable. Keep responses concise — executives value brevity. Use bullet points for recommendations. Always tie advice to the executive's specific context above.`;

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // Get JWT from storage for authenticated request
      const token = localStorage.getItem("leip_access_token");
      const response = await fetch("https://leip-backend.onrender.com/api/v1/ai/copilot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          systemPrompt,
        }),
      });
      const data = await response.json();
      const reply = data.data?.reply ?? "I'm unable to respond right now. Please try again.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection error. Please check your network and try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border-t bg-slate-900 p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-white">Executive Copilot™</h3>
          <p className="text-slate-400 text-sm mt-1">AI-powered executive advisor — personalised to your assessment</p>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl font-bold">&times;</button>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 h-80 overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-7 whitespace-pre-wrap ${
              msg.role === "user"
                ? "bg-yellow-400 text-slate-900 font-medium"
                : "bg-slate-700 text-slate-100"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 text-slate-400 rounded-2xl px-5 py-3 text-sm">
              Analysing your executive context...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Ask your Executive Advisor..."
          disabled={loading}
          className="flex-1 bg-slate-800 text-white rounded-xl px-5 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-slate-500"
        />
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="bg-yellow-400 text-slate-900 font-bold rounded-xl px-6 py-3 hover:bg-yellow-300 disabled:opacity-50 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function ExecutiveCopilot() {
  const [activePanel, setActivePanel] = useState(null); // "explain" | "evidence" | "copilot"
  const { assessment, executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const intelligence = generateExecutiveIntelligence(assessment, executiveProgramme);
  const { executiveCopilot } = intelligence;

  function togglePanel(panel) {
    setActivePanel(prev => prev === panel ? null : panel);
  }

  return (
    <section className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-slate-400">Executive Copilot™</p>
            <h2 className="text-4xl font-bold mt-4">AI Executive Brief</h2>
            <p className="text-slate-300 mt-5 leading-8 max-w-3xl">
              Executive Intelligence has completed today's strategic assessment and identified the
              highest-priority items requiring executive attention.
            </p>
          </div>
          <span className="bg-emerald-500 rounded-full px-5 py-2 font-semibold">● LIVE</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-slate-50 p-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {[
            { label: "AI Confidence", value: `${executiveCopilot?.confidence ?? 94}%`, colour: "text-cyan-600" },
            { label: "Programme Health", value: executiveCopilot?.programmeHealth ?? "--", colour: "text-green-600" },
            { label: "Executive Pulse", value: `${executiveCopilot?.executivePulse ?? 0}%`, colour: "text-purple-600" },
            { label: "Expected ROI", value: `${executiveCopilot?.roi ?? 185}%`, colour: "text-emerald-600" },
          ].map(({ label, value, colour }) => (
            <div key={label} className="bg-white rounded-2xl p-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
              <h2 className={`text-4xl font-bold ${colour} mt-3`}>{value}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Attention Queue */}
      <div className="p-8 space-y-6">
        <AttentionItem level="high" title="Executive KPI Adoption"
          description="AI has detected slowing KPI adoption within Operations. Executive sponsorship is recommended within the next 48 hours." />
        <AttentionItem level="medium" title="Programme Governance"
          description="The Executive Steering Committee meeting is due. Scheduling this session will help maintain delivery momentum." />
        <AttentionItem level="low" title="Transformation Momentum"
          description="Overall programme health remains stable and Executive Pulse continues to improve across business units." />
      </div>

      {/* AI Recommendation */}
      <div className="border-t bg-white p-8">
        <p className="uppercase tracking-[0.35em] text-xs text-slate-500">AI Recommendation</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-4">
          {executiveCopilot?.recommendation ?? "Prioritise Executive Dashboard Rollout"}
        </h3>
        <p className="text-slate-600 leading-8 mt-5">
          Executive Intelligence has analysed the current transformation programme and recommends
          expanding Executive Dashboard adoption together with Workflow Automation. Current evidence
          indicates this initiative provides the highest expected business impact over the next 60 days
          while maintaining strong executive confidence.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="border-t bg-slate-50 p-8">
        <div className="flex flex-wrap gap-4">
          <ActionButton title="Ask Copilot" onClick={() => togglePanel("copilot")} />
          <ActionButton title="Explain Recommendation" colour="bg-emerald-600" onClick={() => togglePanel("explain")} />
          <ActionButton title="View Evidence" colour="bg-purple-600" onClick={() => togglePanel("evidence")} />
          <PDFDownloadLink
            document={
              <ExecutiveReportPDF
                score={assessment?.score ?? 0}
                readinessPercentage={assessment?.readinessPercentage ?? 0}
                level={assessment?.level ?? "Assessment"}
                summary={assessment?.executiveNarrative ?? ""}
                recommendations={assessment?.recommendations ?? []}
                solution={assessment?.solution ?? ""}
                insights={assessment?.insights ?? []}
                priorities={assessment?.priorities ?? []}
              />
            }
            fileName="LemonLogic-Board-Pack.pdf"
          >
            {({ loading: pdfLoading }) => (
              <button className="bg-cyan-600 text-white rounded-xl px-5 py-3 font-semibold transition hover:scale-[1.02] hover:opacity-90">
                {pdfLoading ? "Preparing..." : "Generate Board Pack"}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>

      {/* Active Panels */}
      {activePanel === "explain" && (
        <ExplainPanel
          intelligence={intelligence}
          executiveProgramme={executiveProgramme}
          onClose={() => setActivePanel(null)}
        />
      )}
      {activePanel === "evidence" && (
        <EvidencePanel
          assessment={assessment}
          onClose={() => setActivePanel(null)}
        />
      )}
      {activePanel === "copilot" && (
        <CopilotChat
          assessment={assessment}
          executiveProgramme={executiveProgramme}
          intelligence={intelligence}
          onClose={() => setActivePanel(null)}
        />
      )}

    </section>
  );
}
