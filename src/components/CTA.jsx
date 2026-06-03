export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Streamline Your Operations?
        </h2>

        <p className="mt-6 text-xl text-slate-600">
          Let's discuss how intelligent automation, business systems,
          and operational intelligence can help your organization
          operate more efficiently.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://wa.me/2348144664481?text=Hello%20LemonLogic,%20I'd%20like%20to%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold transition"
          >
            Schedule Consultation
          </a>

          <a
            href="/contact"
            className="border border-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            Submit Project Inquiry
          </a>

        </div>

      </div>
    </section>
  );
}