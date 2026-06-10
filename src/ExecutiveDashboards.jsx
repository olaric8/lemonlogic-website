import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ExecutiveDashboards() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Executive Dashboards & Operational Intelligence | LemonLogic</title>
        <meta
          name="description"
          content="Gain real-time visibility into business performance through executive dashboards, operational intelligence, KPI monitoring, and reporting automation."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Executive Dashboards & Operational Intelligence
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Empower leadership teams with real-time visibility into performance,
            operations, reporting, KPIs, and business intelligence.
          </p>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-semibold"
            >
              Request A Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Why Leadership Struggles To See What Matters
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Many organizations rely on spreadsheets, manual reports, and
            disconnected systems to understand business performance. By the time
            reports are compiled, the information is often outdated.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Executive dashboards provide a centralized view of operational
            performance, enabling faster decisions, improved visibility, and
            stronger accountability across the organization.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Common Executive Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Delayed Reporting",
              "Limited KPI Visibility",
              "Spreadsheet Dependency",
              "Fragmented Business Data",
              "Lack Of Operational Intelligence",
              "Reactive Decision-Making",
              "Cross-Department Visibility Gaps",
              "Difficulty Tracking Performance",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 shadow-sm"
              >
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
            Dashboard Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Executive Dashboards
              </h3>
              <p className="text-slate-700">
                Provide leadership teams with real-time visibility into business
                performance, KPIs, and strategic objectives.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Operational Intelligence
              </h3>
              <p className="text-slate-700">
                Monitor operational performance and identify issues before they
                become business problems.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                KPI Monitoring
              </h3>
              <p className="text-slate-700">
                Track critical performance indicators across departments,
                teams, and business units.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Reporting Automation
              </h3>
              <p className="text-slate-700">
                Eliminate manual reporting and provide timely, accurate business
                intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            What We Can Build
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Executive Performance Dashboards",
              "Operations Dashboards",
              "Logistics Intelligence Platforms",
              "Sales Dashboards",
              "Customer Service Dashboards",
              "Financial Reporting Dashboards",
              "Management Scorecards",
              "Business Intelligence Portals",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Dashboard Transformation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-600">
                Before
              </h3>

              <div className="space-y-4 text-lg">
                <p>Spreadsheet Reports</p>
                <p>↓</p>
                <p>Manual Consolidation</p>
                <p>↓</p>
                <p>Delayed Decisions</p>
              </div>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-600">
                After
              </h3>

              <div className="space-y-4 text-lg">
                <p>Real-Time Dashboard</p>
                <p>↓</p>
                <p>Operational Visibility</p>
                <p>↓</p>
                <p>Faster Decisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-yellow-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Expected Business Outcomes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Faster Decision-Making",
              "Improved Visibility",
              "Better Reporting Accuracy",
              "Increased Accountability",
              "Enhanced Operational Intelligence",
              "Data-Driven Leadership",
              "Reduced Reporting Delays",
              "Improved Business Performance",
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
            Ready To Gain Real-Time Visibility Into Your Business?
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            Discover how executive dashboards and operational intelligence can
            help leadership teams make faster, more informed decisions.
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