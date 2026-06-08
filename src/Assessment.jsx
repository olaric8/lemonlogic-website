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
    updated[index] = value; // Keep as string to handle empty state
    setAnswers(updated);
  };

  const allAnswered = answers.every((a) => a !== "");
  const score = answers.reduce((total, value) => total + (Number(value) || 0), 0);

  const getResult = () => {
    if (score <= 6) return { level: "Level 1 – Reactive", description: "Your organization relies heavily on manual processes and has significant opportunities for automation." };
    if (score <= 12) return { level: "Level 2 – Emerging", description: "Some processes are digitized, but automation and visibility remain limited." };
    if (score <= 18) return { level: "Level 3 – Structured", description: "Your organization has established processes and is beginning to benefit from automation." };
    if (score <= 24) return { level: "Level 4 – Optimized", description: "Strong operational visibility and automation capabilities support efficient operations." };
    return { level: "Level 5 – Intelligent Enterprise", description: "Your organization demonstrates advanced operational intelligence and data-driven decision making." };
  };

  const result = getResult();

  return (
    <>
      <Helmet>
        <title>Automation Readiness Assessment | LemonLogic</title>
        <meta name="description" content="Assess your organization's automation maturity and discover opportunities to improve efficiency, visibility, and operational performance." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">Automation Readiness Assessment</h1>
          <p className="text-xl text-slate-600 mb-12">
            Answer 10 quick questions to evaluate your organization's automation maturity.
          </p>

          {!submitted ? (
            <>
              <div className="space-y-8">
                {questions.map((question, index) => (
                  <div key={index} className="border rounded-xl p-6 shadow-sm">
                    <h3 className="font-semibold mb-4 text-lg">
                      {index + 1}. {question}
                    </h3>
                    <select
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
                  allAnswered 
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black" 
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {allAnswered ? "View My Results" : "Please answer all questions"}
              </button>
            </>
          ) : (
            <div className="bg-slate-50 border rounded-2xl p-10">
              <h2 className="text-4xl font-bold mb-4">Your Score: {score} / 30</h2>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-600">{result.level}</h3>
              <p className="text-slate-700 mb-8 text-lg">{result.description}</p>

              <div className="bg-white border rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-bold mb-4">Next Step</h4>
                <p className="mb-6">
                  Discover practical opportunities to improve automation, operational visibility, and business performance.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Request a Consultation
                </a>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setAnswers(Array(questions.length).fill(""));
                }}
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