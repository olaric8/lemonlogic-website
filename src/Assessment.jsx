import { useState } from "react";
import { Helmet } from "react-helmet-async";

const questions = [
  "Do you rely on spreadsheets for critical business operations?",
  "Are reports manually compiled from multiple sources?",
  "Are approvals handled through email or messaging apps?",
  "Is operational data stored in multiple disconnected systems?",
  "Can leadership access real-time performance dashboards?",
  "Are repetitive administrative tasks automated?",
  "Are business processes documented and standardized?",
  "Can you easily track workflow bottlenecks?",
  "Do teams have visibility into operational performance?",
  "Are decisions supported by timely and accurate business data?"
];

export default function Assessment() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const allAnswered = answers.every((a) => a !== "");
  const answeredCount = answers.filter((a) => a !== "").length;
  const progress = (answeredCount / questions.length) * 100;
  const score = answers.reduce((total, value) => total + (Number(value) || 0), 0);

  const getResult = () => {
    if (score <= 6) return { level: "Level 1 – Reactive", description: "Your organization relies heavily on manual processes and has significant opportunities for automation.", recommendations: ["Reduce spreadsheet dependency", "Document key business processes", "Introduce workflow automation", "Improve operational visibility"] };
    if (score <= 12) return { level: "Level 2 – Emerging", description: "Some processes are digitized, but automation and visibility remain limited.", recommendations: ["Standardize operational workflows", "Automate repetitive administrative tasks", "Improve reporting processes", "Create centralized business data sources"] };
    if (score <= 18) return { level: "Level 3 – Structured", description: "Your organization has established processes and is beginning to benefit from automation.", recommendations: ["Implement executive dashboards", "Improve workflow tracking", "Increase process automation", "Enhance operational reporting"] };
    if (score <= 24) return { level: "Level 4 – Optimized", description: "Strong operational visibility and automation capabilities support efficient operations.", recommendations: ["Expand operational intelligence initiatives", "Integrate business systems", "Improve predictive reporting", "Strengthen data-driven decision making"] };
    return { level: "Level 5 – Intelligent Enterprise", description: "Your organization demonstrates advanced operational intelligence and data-driven decision making.", recommendations: ["Explore advanced analytics", "Leverage AI-assisted decision support", "Continuously optimize business processes", "Scale automation across departments"] };
  };

  const result = getResult();
  const readinessPercentage = Math.round((score / 30) * 100);

  return (
    <>
      <Helmet>
        <title>Automation Readiness Assessment | LemonLogic</title>
        <meta name="description" content="Assess your organization's automation maturity." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Automation Readiness Assessment</h1>
          
          {!submitted ? (
            <>
              <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>Progress</span>
                  <span>{answeredCount} of {questions.length} answered</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div className="bg-yellow-400 h-3 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>
              
              <div className="space-y-8">
                {questions.map((question, index) => (
                  <div key={index} className="border rounded-xl p-6 shadow-sm">
                    <label htmlFor={`q-${index}`} className="block font-semibold mb-4 text-lg">
                      {index + 1}. {question}
                    </label>
                    <select
                      id={`q-${index}`}
                      className="w-full border rounded-lg p-3 bg-white"
                      value={answers[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                    >
                      <option value="">Select an answer</option>
                      <option value="0">Never</option>
                      <option value="1">Sometimes</option>
                      <option value="2">Often</option>
                      <option value="3">Always</option>
                    </select>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSubmitted(true)}
                disabled={!allAnswered}
                className={`mt-10 px-8 py-4 rounded-lg font-semibold transition-colors ${
                  allAnswered ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {allAnswered ? "View My Results" : "Please answer all questions"}
              </button>
            </>
          ) : (
            <div className="bg-slate-50 border rounded-2xl p-10">
              {/* Executive Automation Scorecard */}
              <div className="bg-white border rounded-2xl p-8 mb-8 shadow-sm">
                <div className="text-sm uppercase tracking-wider text-slate-500 mb-4">
                  Executive Automation Scorecard
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Automation Readiness</div>
                    <div className="text-4xl font-bold">{score} / 30</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Maturity Level</div>
                    <div className="text-xl font-semibold text-yellow-600">{result.level}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Readiness Percentage</div>
                    <div className="text-4xl font-bold text-yellow-500">{readinessPercentage}%</div>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 mb-8 text-lg">{result.description}</p>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Recommended Priorities</h4>
                <ul className="space-y-3">
                  {result.recommendations.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-yellow-500 mr-3">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
<div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
  <h4 className="text-xl font-bold mb-4">
    Email My Executive Scorecard
  </h4>

  <p className="text-slate-600 mb-6">
    Receive a copy of your assessment results and recommendations directly in your inbox.
  </p>

  <form
    action="https://formspree.io/f/xojzqzzv"
    method="POST"
    className="space-y-4"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full border rounded-lg p-3"
    />

    <input
      type="text"
      name="company"
      placeholder="Company Name"
      className="w-full border rounded-lg p-3"
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      className="w-full border rounded-lg p-3"
    />

    <input
      type="hidden"
      name="score"
      value={score}
    />

    <input
      type="hidden"
      name="level"
      value={result.level}
    />

    <input
      type="hidden"
      name="readiness_percentage"
      value={readinessPercentage}
    />

    <button
      type="submit"
      className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
    >
      Email My Scorecard
    </button>
  </form>
</div>
              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-4">Next Step</h4>
                <p className="mb-6">Discover practical opportunities to improve efficiency and operational performance.</p>
                <a href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Request a Consultation
                </a>
              </div>

              <button
                onClick={() => { setSubmitted(false); setAnswers(Array(questions.length).fill("")); }}
                className="mt-8 text-slate-500 hover:text-slate-800 underline transition-colors"
              >
                Retake Assessment
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}