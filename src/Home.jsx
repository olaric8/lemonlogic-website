import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-24 bg-white text-slate-800">
      <Helmet>
        <title>
          LemonLogic | Intelligent Automation & Business Systems
        </title>

        <meta
          name="description"
          content="LemonLogic helps organizations streamline operations through intelligent automation, dashboards, workflow optimization, operational intelligence, and custom business systems."
        />
      </Helmet>

      <nav className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold">
              Lemon<span className="text-yellow-500">Logic</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <Link to="/assessment">Assessment</Link>
            <Link to="/blog">Blog</Link>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Slide-Out Menu */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-6 text-lg">
            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <Link to="/assessment" onClick={() => setMenuOpen(false)}>Assessment</Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>

        {/* Dark Overlay */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-sm font-medium text-slate-700 mb-8">
            AI Automation • Business Systems • Operational Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Automate Operations.
            <br />
            Eliminate Manual Work.
            <br />
            Scale Faster.
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-slate-600">
            LemonLogic helps organizations streamline operations through
            intelligent automation, business systems, dashboards, and logistics
            intelligence solutions.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
            <a
              href="https://wa.me/2348144664481?text=Hello%20LemonLogic,%20I'd%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold text-center inline-block"
            >
              Schedule Consultation
            </a>

            <a
              href="#portfolio"
              className="w-full sm:w-auto border border-slate-300 px-6 py-3 rounded-lg font-semibold text-center inline-block"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <Services />
      <Portfolio />

      {/* Proven Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proven Outcomes</h2>
            <p className="text-gray-600">
              Examples of the business capabilities we've delivered.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-gray-600 mt-2">Locations Managed</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold">GIS</div>
              <div className="text-gray-600 mt-2">Intelligence Platform</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold">Automation</div>
              <div className="text-gray-600 mt-2">Workflows</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold">RBAC</div>
              <div className="text-gray-600 mt-2">Multi-Role Systems</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold">Cloud</div>
              <div className="text-gray-600 mt-2">Deployment Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Readiness Assessment */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Assess Your Automation Readiness
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Take the LemonLogic Automation Readiness Assessment to discover
            opportunities to improve efficiency, operational visibility,
            workflow automation, and business performance.
          </p>
          <Link
            to="/assessment"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition"
          >
            Start My Assessment
          </Link>
        </div>
      </section>

      {/* Why Businesses Choose LemonLogic */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Businesses Choose LemonLogic</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We build intelligent automation and business systems that help 
              organizations operate more efficiently, reduce manual work, and 
              scale with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Enterprise Focus</h3>
              <p className="text-gray-600">Practical systems built around real operational challenges, not experimental technology.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Real Business Results</h3>
              <p className="text-gray-600">From logistics intelligence to automated invoicing, every solution is designed to save time.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Custom Built</h3>
              <p className="text-gray-600">Every business is different. We tailor systems around your workflows and objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Client Impact</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-slate-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 italic mb-4">"The logistics intelligence platform provided a centralized view of operations and significantly improved visibility."</p>
              <strong>GSCA Project</strong>
            </div>
            <div className="p-8 border border-slate-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700 italic mb-4">"Invoice generation became faster, more consistent, and easier to manage across multiple transactions."</p>
              <strong>Invoice Automation Project</strong>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                What types of businesses do you work with?
              </h3>
              <p className="text-slate-600">
                We work with organizations that need automation,
                operational dashboards, workflow systems, logistics
                intelligence, and internal business tools.
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Do you build custom solutions?
              </h3>
              <p className="text-slate-600">
                Yes. Every system is designed around your processes,
                workflows, and operational requirements.
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Can existing systems be improved?
              </h3>
              <p className="text-slate-600">
                Absolutely. We can enhance, modernize, and automate
                existing business processes and software platforms.
              </p>
            </div>
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                How do we get started?
              </h3>
              <p className="text-slate-600">
                Schedule a consultation and we'll discuss your
                processes, goals, and opportunities for automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}