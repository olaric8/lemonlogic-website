import { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ExecutiveReportPDF from "./components/ExecutiveReportPDF";
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
const [name, setName] = useState("");
const [company, setCompany] = useState("");
const [email, setEmail] = useState("");
const navigate = useNavigate();
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
    if (Number(answers[1]) <= 1 || Number(answers[4]) <= 1 || Number(answers[8]) <= 1) {
      priorities.push("Executive Dashboards & Operational Visibility");
      priorities.push("Reporting Automation");
    }
    if (Number(answers[2]) <= 1 || Number(answers[5]) <= 1 || Number(answers[7]) <= 1) {
      priorities.push("Workflow Automation");
      priorities.push("Process Standardization");
    }
    if (Number(answers[0]) <= 1 || Number(answers[3]) <= 1 || Number(answers[9]) <= 1) {
      priorities.push("System Integration");
      priorities.push("Centralized Business Data");
    }
    return [...new Set(priorities)];
  };

  const getExecutiveNarrative = () => {
    const priorities = getPriorityFocusAreas();
    const visibility = priorities.includes("Executive Dashboards & Operational Visibility");
    const workflow = priorities.includes("Workflow Automation");
    const integration = priorities.includes("System Integration");

    if (visibility && workflow && integration) return "Your assessment suggests that the organization is currently constrained by a combination of limited operational visibility, fragmented information management, and manual workflow execution. A phased modernization initiative focused on operational intelligence, workflow automation, and system integration would likely deliver substantial business value.";
    if (visibility && workflow) return "Your assessment indicates that reporting visibility and workflow efficiency represent the primary barriers to operational performance. Improving reporting automation and workflow management would likely generate immediate operational benefits.";
    if (visibility) return "Your assessment suggests that operational visibility and reporting effectiveness are the most significant opportunities for improvement.";
    if (workflow) return "Your assessment indicates that workflow consistency and process automation represent the largest opportunities for operational improvement.";
    if (integration) return "Your assessment suggests that disconnected systems and fragmented business data may be limiting organizational effectiveness.";
    return "Your organization demonstrates a relatively mature operational environment with opportunities for continued optimization and strategic automation.";
  };

  const getRecommendedSolution = useMemo(() => {
    const priorities = getPriorityFocusAreas();
    if (priorities.includes("Executive Dashboards & Operational Visibility")) {
      return { 
        title: "Executive Dashboards & Operational Intelligence", 
        description: "Your assessment suggests that improving operational visibility and reporting processes will likely deliver the fastest business impact.",
        link: "/services/executive-dashboards" 
      };
    }
    if (priorities.includes("Workflow Automation")) {
      return { 
        title: "Workflow Automation & Process Optimization", 
        description: "Your assessment indicates that workflow efficiency and process consistency represent key opportunities for improvement.",
        link: "/services/workflow-automation" 
      };
    }
    if (priorities.includes("System Integration")) {
      return { 
        title: "Custom Business Systems",
        description: "Your responses suggest that disconnected systems and fragmented information may be affecting decision-making.",
        link: "/services/custom-business-systems" 
      };
    }
    return { 
      title: "Business Process Optimization",
      description: "Your organization demonstrates a solid operational foundation with opportunities for continued improvement.",
      link: "/services/business-process-automation",
    };
  }, [answers]);

  const result = useMemo(() => {
    if (score <= 6) return { level: "Level 1 — Reactive", description: "Your organization relies heavily on manual processes.", recommendations: ["Reduce spreadsheet dependency", "Document key business processes"] };
    if (score <= 12) return { level: "Level 2 — Emerging", description: "Some processes are digitized, but automation remains limited.", recommendations: ["Standardize operational workflows", "Automate repetitive tasks"] };
    if (score <= 18) return { level: "Level 3 — Structured", description: "Your organization has established processes.", recommendations: ["Implement executive dashboards", "Increase process automation"] };
    if (score <= 24) return { level: "Level 4 — Optimized", description: "Strong operational visibility.", recommendations: ["Expand operational intelligence", "Integrate business systems"] };
    return { level: "Level 5 — Intelligent Enterprise", description: "Advanced operational intelligence.", recommendations: ["Leverage AI-assisted decision support", "Continuously optimize"] };
  }, [score]);

  const getAdvisorResponse = () => {
    if (!challenge.trim()) {
      setAdvisorResponse("Please describe your operational challenge.");
      return;
    }
    const basePhrase = "Based on your assessment, the immediate opportunity is";
    if (challenge.toLowerCase().includes("excel") || challenge.toLowerCase().includes("report")) {
      setAdvisorResponse(`${basePhrase} centralizing your data into a unified dashboard.`);
    } else {
      setAdvisorResponse(`${basePhrase} standardizing workflows followed by targeted automation.`);
    }
  };
const saveToLEIPDashboard = () => {
  const leipResults = {
  score,
  readinessPercentage,
  level: result.level,
  recommendations: result.recommendations,
  executiveNarrative: getExecutiveNarrative(),
  insights: getAssessmentInsight(),
  priorities: getPriorityFocusAreas(),
  solution: getRecommendedSolution.title,

  companyName:
    name || "Client Organization",

  assessmentDate:
    new Date().toLocaleDateString(),

  reportId:
    `LEIP-${Date.now()}`,

  classification:
    "Executive Confidential",

  timestamp:
    new Date().toISOString(),
};
const history =
  JSON.parse(
    localStorage.getItem("leipAssessmentHistory")
  ) || [];

history.push(leipResults);

localStorage.setItem(
  "leipAssessmentHistory",
  JSON.stringify(history)
);
  localStorage.setItem(
    "leipResults",
    JSON.stringify(leipResults)
  );

  // Fire-and-forget: notify the backend of the new lead.
  // The prospect continues to the dashboard regardless of the result.
  fetch("https://leip-backend.onrender.com/api/v1/onboarding/assessment-leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: leipResults.companyName !== "Client Organization" ? name : name,
      company: company || "Unknown",
      email: email || "",
      score: leipResults.score,
      readinessPercentage: leipResults.readinessPercentage,
      level: leipResults.level,
      recommendations: leipResults.recommendations,
      insights: leipResults.insights,
      priorities: leipResults.priorities,
      executiveSummary: leipResults.executiveNarrative,
      solution: leipResults.solution,
      assessmentDate: leipResults.assessmentDate,
      reportId: leipResults.reportId,
    }),
  }).catch(() => {}); // swallow errors — never block the user journey

  navigate("/dashboard");
};
  const readinessPercentage = Math.round((score / 30) * 100);
const handleExecutiveReportRequest = async () => {
  try {
    await fetch("https://formspree.io/f/mjgdeldq", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        company,
        email,
        score,
        readinessPercentage,
        level: result.level,
        executiveSummary: getExecutiveNarrative(),
        recommendedSolution: getRecommendedSolution.title,
        assessmentInsights: getAssessmentInsight().join(", "),
        priorityFocusAreas: getPriorityFocusAreas().join(", "),
      }),
    });

    alert("Executive Report details submitted successfully.");
  } catch (error) {
    console.error(error);
    alert("Submission failed.");
  }
};
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-6">Automation Readiness Assessment</h1>
        {!submitted ? (
          <>
            <div className="mb-8">
              <div className="flex justify-between text-sm text-slate-600 mb-2"><span>Progress</span><span>{answeredCount} of {questions.length} answered</span></div>
              <div className="w-full bg-slate-200 rounded-full h-3"><div className="bg-yellow-400 h-3 rounded-full transition-all" style={{ width: `${progress}%` }} /></div>
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
            <button onClick={() => setSubmitted(true)} disabled={!allAnswered} className={`mt-10 px-8 py-4 rounded-lg font-semibold ${allAnswered ? "bg-yellow-400 hover:bg-yellow-500" : "bg-slate-200 cursor-not-allowed"}`}>{allAnswered ? "View My Results" : "Please answer all questions"}</button>
          </>
        ) : (
          <div className="bg-slate-50 border rounded-2xl p-10">
            {/* Results Header */}
            <div className="bg-white border rounded-2xl p-8 mb-8 shadow-sm">
              <div className="grid md:grid-cols-3 gap-6">
                <div><div className="text-sm text-slate-500 mb-2">Automation Readiness</div><div className="text-4xl font-bold">{score} / 30</div></div>
                <div><div className="text-sm text-slate-500 mb-2">Maturity Level</div><div className="text-xl font-semibold text-yellow-600">{result.level}</div></div>
                <div><div className="text-sm text-slate-500 mb-2">Readiness Percentage</div><div className="text-4xl font-bold text-yellow-500">{readinessPercentage}%</div></div>
              </div>
            </div>

            {/* Recommended Solution */}
            <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
              <h4 className="text-xl font-bold mb-4">Recommended LemonLogic Solution</h4>
              <h5 className="font-semibold text-yellow-600 mb-3">{getRecommendedSolution.title}</h5>
              <p className="text-slate-700 leading-relaxed">{getRecommendedSolution.description}</p>
              <Link to={getRecommendedSolution.link} className="inline-block mt-6 text-yellow-600 font-semibold hover:text-yellow-700">
                Learn More About This Solution &rarr;
              </Link>
            </div>
<div className="bg-white border rounded-xl p-6 shadow-sm mb-8">
  <h4 className="text-xl font-bold mb-4">
    Executive Report
  </h4>

  <p className="text-slate-600 mb-6">
    Download a professional executive report containing your
    assessment results, recommendations, and strategic roadmap.
  </p>
<div className="space-y-4 mb-6">
  <input
    type="text"
    placeholder="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full border rounded-lg p-3"
  />

  <input
    type="text"
    placeholder="Company Name"
    value={company}
    onChange={(e) => setCompany(e.target.value)}
    className="w-full border rounded-lg p-3"
  />
const [companyName, setCompanyName] =
  useState("");
  <input
    type="email"
    placeholder="Email Address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full border rounded-lg p-3"
  />
</div>

<button
  onClick={handleExecutiveReportRequest}
  disabled={!name || !company || !email}
  className={`mb-4 px-6 py-3 rounded-lg font-semibold text-white ${
    name && company && email
      ? "bg-slate-800 hover:bg-slate-900"
      : "bg-slate-300 cursor-not-allowed"
  }`}
>
  Email My Executive Report
</button>
  <PDFDownloadLink
    document={
      <ExecutiveReportPDF
        score={score}
        readinessPercentage={readinessPercentage}
        level={result.level}
        summary={getExecutiveNarrative()}
        recommendations={result.recommendations}
        solution={getRecommendedSolution.title}
        insights={getAssessmentInsight()}
        priorities={getPriorityFocusAreas()}
      />
    }
    fileName="LemonLogic-Executive-Assessment-Report.pdf"
  >
    {({ loading }) => (
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition">
        {loading
          ? "Preparing Executive Report..."
          : "ðŸ“„ Download Executive Report"}
      </button>
    )}
  </PDFDownloadLink>
</div>
            {/* Executive Summary & Insights */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold mb-4">Executive Summary</h4>
              <p className="text-slate-700 leading-relaxed">{getExecutiveNarrative()}</p>
            </div>
<button
  onClick={saveToLEIPDashboard}
  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold mr-4"
>
  Open Executive Dashboard
</button>
            <button onClick={() => { setSubmitted(false); setAnswers(Array(questions.length).fill("")); }} className="text-slate-500 underline">Retake Assessment</button>
          </div>
        )}
      </div>
    </div>
  );
}