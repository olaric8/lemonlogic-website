import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
export default function Home() {
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

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
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
      <WhyUs />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
