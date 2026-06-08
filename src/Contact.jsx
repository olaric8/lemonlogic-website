import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact LemonLogic | Intelligent Automation Solutions</title>
        <meta
          name="description"
          content="Contact LemonLogic to discuss automation, operational intelligence, dashboards, workflow optimization, and custom business systems."
        />
      </Helmet>

      <div className="min-h-screen bg-white text-slate-800">
        <section className="bg-slate-900 text-white py-24">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free Business Process Consultation
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
              Discover opportunities to reduce manual work, improve operational visibility, 
              and streamline business processes through intelligent automation and custom 
              business systems.
            </p>
            
            <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
              During your consultation, we'll review your current workflows, identify 
              potential bottlenecks, and discuss practical solutions tailored to your business.
            </p>
            
            <p className="text-lg font-semibold text-yellow-400">
              No obligation. No generic recommendations. Just actionable insights 
              designed around your operational needs.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            
            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">What You'll Gain</h2>
              <ul className="space-y-3">
                {[
                  "Identify inefficient manual processes",
                  "Discover automation opportunities",
                  "Improve reporting and operational visibility",
                  "Reduce administrative workload",
                  "Receive practical recommendations tailored to your business"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-3 font-bold">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notification Banner */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-slate-700 font-medium">
                We typically respond to consultation requests within 24 hours.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xojzqzzv"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 font-medium">Company</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  What problem are you trying to solve?
                </label>
                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  required
                  placeholder="Describe your challenge, workflow, or business process..."
                  className="w-full border border-slate-300 rounded-lg p-4 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold transition-transform active:scale-95"
              >
                Request Consultation
              </button>
            </form>

            {/* Trust Indicators Section */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-xl font-bold mb-6 text-slate-900">Why Businesses Choose LemonLogic</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Custom-built solutions designed around your operations",
                  "Operational intelligence and executive dashboard expertise",
                  "Business process automation and workflow optimization",
                  "Logistics intelligence and GIS-powered solutions",
                  "Practical implementation focused on measurable results"
                ].map((point, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">Prefer WhatsApp?</p>
              <a
                href="https://wa.me/2348144664481"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-lg transition"
              >
                Start a WhatsApp Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}