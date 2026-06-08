import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function GSCA() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Helmet>
        <title>
          GSCA Logistics Intelligence Platform | LemonLogic Portfolio
        </title>

        <meta
          name="description"
          content="Explore GSCA, a logistics intelligence platform featuring GIS mapping, boundary intelligence, enterprise dashboards, notifications, audit logs, and operational visibility."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-slate-900 font-semibold">
            Case Study
          </span>
          <h1 className="mt-6 text-5xl font-bold">
            GSCA Logistics Intelligence Platform
          </h1>
          <p className="mt-6 text-xl text-slate-300">
            Enterprise logistics intelligence platform designed to improve
            operational visibility, geographic intelligence, and administrative
            control across logistics operations.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500">8+</div>
              <div className="text-slate-600">Core Modules</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">GIS</div>
              <div className="text-slate-600">Intelligence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">RBAC</div>
              <div className="text-slate-600">Security Model</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">Enterprise</div>
              <div className="text-slate-600">Architecture</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            GSCA is an enterprise logistics intelligence platform developed by
            LemonLogic to provide centralized operational visibility, geographic
            intelligence, administrative governance, and enterprise-grade
            management capabilities. The platform combines GIS intelligence,
            role-based access control, operational dashboards, audit tracking,
            and notification systems into a unified solution designed to support
            complex logistics operations.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Logistics organizations often struggle with fragmented operational
            data, limited geographic visibility, and inefficient administrative
            processes. GSCA required a centralized platform capable of providing
            enterprise-grade operational intelligence and management tools.
          </p>
        </div>
      </section>

      {/* Solution Delivered */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Solution Delivered</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-xl mb-2">GIS Intelligence</h3>
              <p className="text-slate-600">
                Interactive geographic intelligence tools for operational visibility,
                territory analysis, and location-based decision making.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-xl mb-2">Smart Boundary Intelligence</h3>
              <p className="text-slate-600">
                Coverage area management and intelligent boundary controls to improve
                logistics planning and operational oversight.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-xl mb-2">Role-Based Access Control</h3>
              <p className="text-slate-600">
                Enterprise-grade permission management ensuring users only access
                information relevant to their responsibilities.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-xl mb-2">Enterprise Dashboards</h3>
              <p className="text-slate-600">
                Centralized dashboards providing visibility into operational activities,
                performance metrics, and key business indicators.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-xl mb-2">Notifications & Alerts</h3>
              <p className="text-slate-600">
                Real-time notification system designed to keep stakeholders informed of
                important operational events and updates.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border">
              <h3 className="font-bold text-xl mb-2">Audit & Compliance Tracking</h3>
              <p className="text-slate-600">
                Comprehensive audit trails providing accountability, transparency, and
                operational governance across the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Flutter",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Neon",
              "GIS Intelligence",
              "Render",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Business Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border">
              Centralized operational visibility across logistics activities.
            </div>
            <div className="p-6 bg-white rounded-xl border">
              Improved geographic intelligence and decision-making capabilities.
            </div>
            <div className="p-6 bg-white rounded-xl border">
              Streamlined administrative workflows and governance processes.
            </div>
            <div className="p-6 bg-white rounded-xl border">
              Enhanced accountability through comprehensive audit tracking.
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="mt-20 mx-6 md:mx-auto max-w-5xl rounded-2xl bg-slate-900 text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Interested in a similar solution for your business?
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-yellow-400 text-slate-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105"
        >
          Request a Consultation
        </Link>
      </section>
      
      <div className="h-20"></div>
    </div>
  );
}