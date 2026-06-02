import WhatsAppButton from "./components/WhatsAppButton";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <nav className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Lemon<span className="text-yellow-500">Logic</span>
            </h1>
          </div>

          <div className="hidden md:flex gap-8">
            <a href="#">Home</a>
<a href="#services">Services</a>
<a href="#portfolio">Portfolio</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-sm font-medium text-slate-700 mb-8">
  AI Automation • Business Systems • Operational Intelligence
</div>
          <h1 className="text-6xl font-bold leading-tight">
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

          <div className="mt-10 flex gap-4">
            <a
              href="https://wa.me/2348144664481"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold inline-block"
            >
              Book Consultation
            </a>

            <a
  href="#portfolio"
  className="border border-slate-300 px-6 py-3 rounded-lg font-semibold inline-block"
>
  View Portfolio
</a>
          </div>
        </div>
                  </section>

      <Services />
<Portfolio />
<WhyUs />
<CTA />
<Footer />
<WhatsAppButton />
    </div>
  )
}