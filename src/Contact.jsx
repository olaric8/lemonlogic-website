import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Let's Build Something Better
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Tell us about your business challenges and
            opportunities for automation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">

          <form
            action="https://formspree.io/f/xojzqzzv"
            method="POST"
            className="space-y-6"
          >

            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-slate-300 rounded-lg p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Company
              </label>

              <input
                type="text"
                name="company"
                className="w-full border border-slate-300 rounded-lg p-4"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="w-full border border-slate-300 rounded-lg p-4"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                What problem are you trying to solve?
              </label>

              <textarea
                rows="6"
                name="message"
                placeholder="Describe your challenge, workflow, or business process..."
                className="w-full border border-slate-300 rounded-lg p-4"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold transition"
            >
              Request Consultation
            </button>

          </form>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">
              Prefer WhatsApp?
            </p>

            <a
              href="https://wa.me/2348144664481"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-slate-300 px-6 py-3 rounded-lg"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}