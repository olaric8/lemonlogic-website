import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function LAAutoworks() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Helmet>
        <title>
          LA Autoworks Business Management System | LemonLogic Portfolio
        </title>

        <meta
          name="description"
          content="See how LemonLogic developed a business management solution for LA Autoworks to streamline operations, improve visibility, and support business growth."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-red-900 via-black to-red-950 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-red-600 rounded-full text-sm font-semibold">
            Case Study
          </span>
          <h1 className="mt-8 text-5xl md:text-7xl font-black">
            LA AUTOWORKS LTD
          </h1>
          <p className="mt-8 max-w-4xl text-xl text-slate-300">
            Premium automotive service platform designed to showcase
            advanced diagnostics, fleet maintenance expertise,
            vehicle restoration capabilities, and customer engagement
            workflows.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Project Overview</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            LA AUTOWORKS required a modern digital platform capable
            of presenting premium automotive services, showcasing
            workshop capabilities, supporting customer enquiries,
            and strengthening credibility among both individual
            vehicle owners and commercial fleet operators.
          </p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">The Challenge</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              Present specialized automotive expertise online.
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Improve customer trust and workshop visibility.
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Showcase restoration and repair capabilities.
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Support customer enquiries and fleet opportunities.
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
              "Service Booking Experience",
              "WhatsApp Integration",
              "Interactive Workshop Gallery",
              "Fleet Maintenance Presentation",
              "Vehicle Restoration Showcases",
              "Workshop Location Mapping",
              "Responsive Mobile Design",
              "Customer Contact Workflows",
              "Professional Brand Positioning"
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

      {/* SERVICES */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Specialized Services Highlighted</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              Premium Automotive Computer Diagnostics
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Heavy Multi-Plate Powertrain Overhauling
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Dust-Free Paint Oven Baking Restorations
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Suspension & Track Alignment Strengthening
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Toyota & Nissan Specialist Repairs
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              Commercial Fleet Maintenance Networks
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
              "Vite",
              "Netlify",
              "Responsive Design",
              "Tailwind CSS",
              "Business Website"
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
            <div className="bg-white p-8 rounded-2xl shadow">Improved Online Visibility</div>
            <div className="bg-white p-8 rounded-2xl shadow">Stronger Brand Credibility</div>
            <div className="bg-white p-8 rounded-2xl shadow">Better Customer Engagement</div>
            <div className="bg-white p-8 rounded-2xl shadow">Enhanced Mobile Accessibility</div>
            <div className="bg-white p-8 rounded-2xl shadow">Simplified Customer Enquiries</div>
            <div className="bg-white p-8 rounded-2xl shadow">Improved Fleet Service Positioning</div>
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