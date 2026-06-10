import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CustomBusinessSystems() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Custom Business Systems | LemonLogic</title>
        <meta
          name="description"
          content="Custom business systems, operations platforms, logistics solutions, inventory systems, workflow portals, and business intelligence tools designed around your unique processes."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Custom Business Systems
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            We design and develop custom business platforms tailored to your
            workflows, reporting requirements, operational processes, and
            strategic objectives.
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

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            When Off-The-Shelf Software Is No Longer Enough
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            As organizations grow, spreadsheets, disconnected tools, and
            generic software solutions often struggle to support increasingly
            complex operational requirements.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Custom business systems provide a centralized platform designed
            specifically around your business processes, reporting needs,
            workflows, and operational objectives.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Common Business Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Spreadsheet Dependency",
              "Disconnected Systems",
              "Manual Reporting",
              "Data Silos",
              "Limited Visibility",
              "Workflow Bottlenecks",
              "Scaling Challenges",
              "Inefficient Processes",
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
            Solutions We Build
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Operations Platforms
              </h3>
              <p className="text-slate-700">
                Centralized operational systems that improve visibility,
                coordination, and performance management.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Workflow Management Systems
              </h3>
              <p className="text-slate-700">
                Automate approvals, task management, reporting, and
                operational workflows.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Reporting & Intelligence Systems
              </h3>
              <p className="text-slate-700">
                Provide leadership with accurate reporting, dashboards,
                analytics, and operational intelligence.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Business Portals
              </h3>
              <p className="text-slate-700">
                Secure web-based platforms designed around your specific
                business requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Example Systems We Can Build
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Logistics Management Platforms",
              "Inventory Management Systems",
              "Operations Portals",
              "Customer Relationship Management (CRM) Systems",
              "Project Management Platforms",
              "Approval Workflow Systems",
              "Business Intelligence Platforms",
              "Enterprise Reporting Systems",
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
            Business Transformation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                Before
              </h3>

              <div className="space-y-4 text-lg">
                <p>Multiple Spreadsheets</p>
                <p>↓</p>
                <p>Disconnected Tools</p>
                <p>↓</p>
                <p>Limited Visibility</p>
              </div>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-600 mb-6">
                After
              </h3>

              <div className="space-y-4 text-lg">
                <p>Centralized Platform</p>
                <p>↓</p>
                <p>Automated Workflows</p>
                <p>↓</p>
                <p>Operational Intelligence</p>
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
              "Centralized Operations",
              "Improved Visibility",
              "Reduced Manual Work",
              "Faster Reporting",
              "Better Decision-Making",
              "Higher Productivity",
              "Improved Accountability",
              "Scalable Business Processes",
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
            Ready To Build A System Around Your Business?
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            Discover how a custom business platform can improve efficiency,
            visibility, reporting, and long-term scalability.
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