import { useState, useMemo, useEffect } from "react";
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
  const [challenge, setChallenge] = useState("");
  const [advisorResponse, setAdvisorResponse] = useState("");

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const allAnswered = answers.every((a) => a !== "");
  const answeredCount = answers.filter((a) => a !== "").length;
  const progress = (answeredCount / questions.length) * 100;
  const score = answers.reduce((total, value) => total + (Number(value) || 0), 0);

  const getAssessmentInsight = () => {
    const insights = [];
    if (Number(answers[0]) <= 1) insights.push("Your responses indicate a significant dependence on spreadsheets for operational management.");
    if (Number(answers[1]) <= 1) insights.push("Reporting processes appear to rely heavily on manual effort, potentially delaying decision-making.");
    if (Number(answers[4]) <= 1) insights.push("Leadership visibility may be constrained by limited access to real-time performance dashboards.");
    if (Number(answers[5]) <= 1) insights.push("Several repetitive business activities remain candidates for automation.");
    if (Number(answers[8]) <= 1) insights.push("Operational performance visibility across teams appears limited.");
    return insights;
  };

  const getPriorityFocusAreas = () => {
    const priorities = [];

    // Visibility & Reporting
    if (
      Number(answers[1]) <= 1 ||
      Number(answers[4]) <= 1 ||
      Number(answers[8]) <= 1
    ) {
      priorities.push("Executive Dashboards & Operational Visibility");
      priorities.push("Reporting Automation");
    }

    // Workflow & Process Automation
    if (
      Number(answers[2]) <= 1 ||
      Number(answers[5]) <= 1 ||
      Number(answers[7]) <= 1
    ) {
      priorities.push("Workflow Automation");
      priorities.push("Process Standardization");
    }

    // Data & Systems
    if (
      Number(answers[0]) <= 1 ||
      Number(answers[3]) <= 1 ||
      Number(answers[9]) <= 1
    ) {
      priorities.push("System Integration");
      priorities.push("Centralized Business Data");
    }

    return [...new Set(priorities)];
  };

  const getExecutiveSummary = () => {
    const priorities = getPriorityFocusAreas();

    if (priorities.includes("Executive Dashboards & Operational Visibility")) {
      return "Your assessment suggests that improving visibility into operational performance and reporting processes is likely to deliver the fastest business impact.";
    }

    if (priorities.includes("Workflow Automation")) {
      return "Your assessment indicates that workflow efficiency and process consistency represent the largest opportunities for operational improvement.";
    }

    if (priorities.includes("System Integration")) {
      return "Your assessment suggests that disconnected systems and fragmented data may be limiting organizational efficiency and decision-making.";
    }

    return "Your organization demonstrates a solid operational foundation with opportunities for continuous optimization.";
  };

  const result = useMemo(() => {
    if (score <= 6) return { level: "Level 1 – Reactive", description: "Your organization relies heavily on manual processes and has significant opportunities for automation.", recommendations: ["Reduce spreadsheet dependency", "Document key business processes", "Introduce workflow automation", "Improve operational visibility"] };
    if (score <= 12) return { level: "Level 2 – Emerging", description: "Some processes are digitized, but automation and visibility remain limited.", recommendations: ["Standardize operational workflows", "Automate repetitive administrative tasks", "Improve reporting processes", "Create centralized business data sources"] };
    if (score <= 18) return { level: "Level 3 – Structured", description: "Your organization has established processes and is beginning to benefit from automation.", recommendations: ["Implement executive dashboards", "Improve workflow tracking", "Increase process automation", "Enhance operational reporting"] };
    if (score <= 24) return { level: "Level 4 – Optimized", description: "Strong operational visibility and automation capabilities support efficient operations.", recommendations: ["Expand operational intelligence initiatives", "Integrate business systems", "Improve predictive reporting", "Strengthen data-driven decision making"] };
    return { level: "Level 5 – Intelligent Enterprise", description: "Your organization demonstrates advanced operational intelligence and data-driven decision making.", recommendations: ["Explore advanced analytics", "Leverage AI-assisted decision support", "Continuously optimize business processes", "Scale automation across departments"] };
  }, [score]);

  useEffect(() => {
    setAdvisorResponse("");
  }, [score, submitted]);

  const getAdvisorResponse = () => {
    if (!challenge.trim()) {
      setAdvisorResponse("Please describe your operational challenge.");
      return;
    }
    const challengeText = challenge.toLowerCase();
    const basePhrase = "Based on your assessment results, the most immediate opportunity for operational improvement appears to be";
    
    if (challengeText.includes("excel") || challengeText.includes("spreadsheet") || challengeText.includes("report")) {
      setAdvisorResponse(`${basePhrase} centralizing your data into a unified dashboard to eliminate the need for manual spreadsheet reporting.`);
    } else if (challengeText.includes("inventory") || challengeText.includes("stock") || challengeText.includes("warehouse")) {
      setAdvisorResponse(`${basePhrase} the implementation of automated stock tracking to provide real-time inventory visibility.`);
    } else {
      setAdvisorResponse(`${basePhrase} the standardization of your workflows, followed by targeted automation to reduce manual overhead.`);
    }
  };

  const readinessPercentage = Math.round((score / 30) * 100);

  return (
    <>
      <Helmet>
        <title>Automation Readiness Assessment | LemonLogic</title>
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
                  <div className="bg-yellow-400 h-3 rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
              <div className="space-y-8">
                {questions.map((question, index) => (
                  <div key={index} className="border rounded-xl p-6 shadow-sm">
                    <label className="block font-semibold mb-4 text-lg">{index + 1}. {question}</label>
                    <select className="w-full border rounded-lg p-3 bg-white" value={answers[index]} onChange={(e) => handleChange(index, e.target.value)}>
                      <option value="">Select an answer</option>
                      <option value="0">Never</option>
                      <option value="1">Sometimes</option>
                      <option value="2">Often</option>
                      <option value="3">Always</option>
                    </select>
                  </div>
                ))}
              </div>
              <button onClick={() => setSubmitted(true)} disabled={!allAnswered} className={`mt-10 px-8 py-4 rounded-lg font-semibold ${allAnswered ? "bg-yellow-400 hover:bg-yellow-500" : "bg-slate-200 cursor-not-allowed"}`}>
                {allAnswered ? "View My Results" : "Please answer all questions"}
              </button>
            </>
          ) : (
            <div className="bg-slate-50 border rounded-2xl p-10">
              <div className="bg-white border rounded-2xl p-8 mb-8 shadow-sm">
                <div className="grid md:grid-cols-3 gap-6">
                  <div><div className="text-sm text-slate-500 mb-2">Score</div><div className="text-4xl font-bold">{score} / 30</div></div>
                  <div><div className="text-sm text-slate-500 mb-2">Level</div><div className="text-xl font-semibold text-yellow-600">{result.level}</div></div>
                  <div><div className="text-sm text-slate-500 mb-2">Readiness</div><div className="text-4xl font-bold text-yellow-500">{readinessPercentage}%</div></div>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Executive Summary</h4>
                <p className="text-slate-700 leading-relaxed italic">
                  {getExecutiveSummary()}
                </p>
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Executive Diagnosis</h4>
                <p className="text-slate-700 leading-relaxed">
                  {score <= 10 && "Your organization currently relies heavily on manual processes and has significant opportunities to improve efficiency, visibility, and operational consistency through automation."}
                  {score > 10 && score <= 20 && "Your organization has established some operational structure, but several manual workflows and reporting processes continue to limit efficiency and scalability."}
                  {score > 20 && "Your organization demonstrates strong automation maturity. The next opportunity is optimizing visibility, intelligence, and decision-making through advanced operational systems."}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold mb-4">Assessment Insights</h4>
                <ul className="space-y-3">
                  {getAssessmentInsight().map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 text-blue-600">•</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold mb-4">Priority Focus Areas</h4>
                <ul className="space-y-3">
                  {getPriorityFocusAreas().map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-green-600 mr-3">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold mb-4">Primary Business Challenges</h4>
                <ul className="space-y-3">
                  {score <= 10 && <><li>• High dependence on manual administrative work</li><li>• Limited operational visibility</li><li>• Inefficient reporting processes</li></>}
                  {score > 10 && score <= 20 && <><li>• Inconsistent workflows across operations</li><li>• Reporting delays impacting decision-making</li><li>• Limited system integration</li></>}
                  {score > 20 && <><li>• Scaling operational visibility</li><li>• Advanced performance monitoring</li><li>• Executive decision intelligence</li></>}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Recommended Priorities</h4>
                <ul className="space-y-3">
                  {result.recommendations.map((item, index) => (
                    <li key={index} className="flex items-center"><span className="text-yellow-500 mr-3">✓</span>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold mb-4">Expected Business Impact</h4>
                <ul className="space-y-3">
                  <li>✓ Faster decision-making</li>
                  <li>✓ Improved operational visibility</li>
                  <li>✓ Reduced administrative workload</li>
                  <li>✓ Better process consistency</li>
                  <li>✓ Increased organizational scalability</li>
                </ul>
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Executive Advisory Analysis</h4>
                <textarea rows="4" value={challenge} onChange={(e) => setChallenge(e.target.value)} placeholder="Describe a business, reporting, workflow, visibility, or operational challenge you are currently facing..." className="w-full border rounded-lg p-4 mb-4" />
                <button onClick={getAdvisorResponse} className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold">Get Analysis</button>
                {advisorResponse && <div className="mt-6 bg-slate-50 border rounded-lg p-4"><p>{advisorResponse}</p></div>}
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4">Email My Executive Scorecard</h4>
                <form action="https://formspree.io/f/xojzqzzv" method="POST" className="space-y-4">
                  <input type="text" name="name" placeholder="Name" required className="w-full border rounded-lg p-3" />
                  <input type="email" name="email" placeholder="Email" required className="w-full border rounded-lg p-3" />
                  <input type="hidden" name="score" value={score} />
                  <button type="submit" className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold">Email My Scorecard</button>
                </form>
              </div>

              <button onClick={() => { setSubmitted(false); setAnswers(Array(questions.length).fill("")); }} className="text-slate-500 underline">Retake Assessment</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}