import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function BusinessProcessAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Business Process Automation | LemonLogic</title>
        <meta
          name="description"
          content="Reduce manual work, eliminate bottlenecks, and improve operational efficiency through business process automation solutions."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Business Process Automation
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            We help organizations streamline operations, reduce manual effort,
            eliminate bottlenecks, and improve efficiency through intelligent
            workflow automation.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Why Business Process Automation Matters
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Many organizations rely on spreadsheets, emails, messaging apps,
            and manual approvals to manage critical business processes.
            While these methods may work initially, they often create
            inefficiencies, delays, reporting challenges, and limited
            operational visibility.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Business process automation helps organizations standardize
            workflows, improve accountability, accelerate decision-making,
            and create scalable operational systems.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Common Operational Challenges
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Spreadsheet-dependent operations",
              "Manual reporting processes",
              "Email-based approvals",
              "Workflow bottlenecks",
              "Limited visibility into performance",
              "Disconnected business systems",
              "Administrative overload",
              "Slow decision-making"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 shadow-sm"
              >
                <span className="text-yellow-500 mr-3">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            How LemonLogic Helps
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Workflow Automation
              </h3>
              <p className="text-slate-700">
                Automate repetitive tasks, approvals, notifications,
                and operational workflows.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Reporting Automation
              </h3>
              <p className="text-slate-700">
                Eliminate manual reporting and improve visibility with
                automated business intelligence solutions.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Process Optimization
              </h3>
              <p className="text-slate-700">
                Analyze and improve inefficient workflows to support
                operational excellence.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Operational Visibility
              </h3>
              <p className="text-slate-700">
                Provide leadership teams with real-time visibility into
                business performance and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-yellow-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Expected Business Outcomes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reduced manual effort",
              "Improved operational efficiency",
              "Faster decision-making",
              "Better reporting accuracy",
              "Enhanced visibility",
              "Improved accountability",
              "Scalable business processes",
              "Higher productivity"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready To Improve Operational Efficiency?
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            Discover how automation can help streamline operations,
            improve visibility, and support business growth.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-semibold"
          >
            Request A Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}