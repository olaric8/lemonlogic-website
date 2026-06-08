import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function InvoiceAutomation() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Helmet>
        <title>
          Invoice Automation System | LemonLogic Portfolio
        </title>

        <meta
          name="description"
          content="Discover how LemonLogic automates invoice generation, document management, customer records, and administrative workflows."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-red-900 via-black to-red-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-red-600 rounded-full text-sm font-semibold">
            Case Study
          </span>
          <h1 className="mt-8 text-5xl md:text-7xl font-black">
            INVOICE AUTOMATION
          </h1>
          <p className="mt-8 max-w-4xl text-xl text-slate-300">
            Intelligent financial automation platform designed to streamline 
            billing workflows, reduce manual data entry, and accelerate 
            payment cycles for enterprise operations.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Project Overview</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The Invoice Automation project was developed to eliminate bottlenecks 
            in financial processing. By replacing manual, error-prone invoicing 
            with an automated system, the platform provides real-time tracking, 
            seamless integration with existing accounting software, and improved 
            financial visibility for stakeholders.
          </p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              High volume of manual invoice generation and processing errors.
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Delayed payment cycles impacting operational cash flow.
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Fragmented data silos between billing and customer management.
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Lack of real-time visibility into outstanding receivables.
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Solution Delivered</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Automated Invoice Generation",
              "Custom Workflow Integration",
              "Real-time Payment Tracking",
              "Dynamic Reporting Dashboards",
              "Multi-Format Export Options",
              "Error-Reduction Logic",
              "Scalable API Architecture",
              "Secure Audit Trails",
              "Automated Client Notifications"
            ].map((item) => (
              <div
                key={item}
                className="border border-slate-200 rounded-2xl p-8 hover:border-red-500 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Key System Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              Smart Data Parsing & Validation
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Automated Follow-up & Reminder Systems
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Enterprise-Grade Data Encryption
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Custom Tax & Regulatory Compliance Logic
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              ERP & CRM Data Synchronization
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Performance Analytics & Forecasting
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Technology Stack</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "React",
              "Node.js",
              "PostgreSQL",
              "TypeScript",
              "Tailwind CSS",
              "Cloud Automation"
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 border border-red-300 rounded-full bg-red-50/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-24 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Business Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">Significant Reduction in Processing Time</div>
            <div className="bg-white p-8 rounded-2xl shadow">Higher Billing Accuracy Rate</div>
            <div className="bg-white p-8 rounded-2xl shadow">Improved Cash Flow Velocity</div>
            <div className="bg-white p-8 rounded-2xl shadow">Seamless Compliance & Auditing</div>
            <div className="bg-white p-8 rounded-2xl shadow">Better Client Relationship Management</div>
            <div className="bg-white p-8 rounded-2xl shadow">Scalability for Growing Transaction Volumes</div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="mt-20 mx-6 md:mx-auto max-w-5xl rounded-2xl bg-slate-900 text-white p-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Need Something Similar?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          LemonLogic builds intelligent automation, business systems, dashboards,
          and operational platforms tailored to organizational needs.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Book A Free Consultation
        </Link>
      </section>
      
      <div className="h-20"></div>
    </div>
  );
}