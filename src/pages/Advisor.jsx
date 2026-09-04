import { useState } from "react";
import { getAdvisorResponse } from "../services/advisorEngine";
import useExecutiveData from "../hooks/useExecutiveData";

export default function Advisor() {

  const [question, setQuestion] = useState("");

  const [response, setResponse] = useState("");

  const {

    assessment,

    executiveProgramme,

  } = useExecutiveData();

  const assessmentData = assessment;

  const {

    executivePulse,

    kpis,

    decision,

    forecast,

    insights,

  } = executiveProgramme;

  const handleAskAdvisor = () => {

    const advisorResponse =
      getAdvisorResponse(
        question,
        assessmentData
      );

    setResponse(advisorResponse);

  };

  return (

    <div className="min-h-screen bg-slate-50 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            LemonLogic Executive Advisor
          </h1>

          <p className="text-slate-600 mt-2">
            Enterprise Executive Intelligence
          </p>

        </div>

        {/* Executive Intelligence */}

        <div className="bg-slate-900 rounded-3xl p-8 text-white mb-8">

          <h2 className="text-3xl font-bold">
            Executive Intelligence Summary
          </h2>

          <p className="text-slate-300 mt-3 leading-7">

            {insights?.executiveSummary}

          </p>

          <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-5 mt-8">

            <Card
              title="Health"
              value={`${kpis?.executiveHealth}%`}
            />

            <Card
              title="Velocity"
              value={kpis?.velocity}
            />

            <Card
              title="Forecast"
              value={`${forecast?.successProbability}%`}
            />

            <Card
              title="Priority"
              value={decision?.executivePriority}
            />

            <Card
              title="Risk"
              value={executivePulse?.risk}
            />

            <Card
              title="ROI"
              value={kpis?.roiForecast}
            />

          </div>

        </div>

        {/* Executive Recommendation */}

        <div className="bg-white rounded-2xl border shadow-sm p-8 mb-8">

          <h2 className="text-2xl font-bold">
            Executive Recommendation
          </h2>

          <div className="mt-6">

            <p className="font-semibold">
              Current Decision
            </p>

            <p className="text-slate-700 mt-2">
              {decision?.currentDecision}
            </p>

            <p className="text-slate-500 mt-4">
              {decision?.reasoning}
            </p>

          </div>

        </div>

        {/* AI Advisor */}

        <div className="bg-white rounded-2xl border shadow-sm p-8">

          <h2 className="text-2xl font-bold mb-5">
            Ask The Executive Advisor
          </h2>

          <textarea

            value={question}

            onChange={(e) =>
              setQuestion(e.target.value)
            }

            placeholder="Example: What should our executive team prioritise next?"

            className="w-full border rounded-xl p-4 min-h-[140px]"

          />

          <button

            onClick={handleAskAdvisor}

            className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold"

          >

            Generate Executive Advice

          </button>

          {response && (

            <div className="mt-8 bg-slate-50 border rounded-xl p-6">

              <h3 className="font-bold">
                Executive Advisor Response
              </h3>

              <p className="mt-4 leading-8 text-slate-700">
                {response}
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

function Card({

  title,

  value,

}) {

  return (

    <div className="bg-slate-800 rounded-2xl p-5">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>

    </div>

  );

}