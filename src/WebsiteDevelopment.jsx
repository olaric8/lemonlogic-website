import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Website & Portal Development | LemonLogic</title>
        <meta
          name="description"
          content="Professional business websites, customer portals, corporate websites, landing pages, and digital platforms designed to support growth and customer engagement."
        />
      </Helmet>

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Website & Portal Development
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            We create professional websites, portals, and digital platforms
            that help organizations build credibility, generate leads,
            improve customer engagement, and support business growth.
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

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Your Website Is Often Your First Impression
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            In today's digital environment, potential customers often evaluate
            a business online before making contact. An outdated website can
            reduce credibility and limit growth opportunities.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            Modern websites should support business objectives, generate leads,
            communicate value clearly, and create confidence in your brand.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Common Website Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Outdated Website Design",
              "Poor User Experience",
              "Low Lead Generation",
              "Limited Mobile Optimization",
              "Weak Search Visibility",
              "Slow Website Performance",
              "Poor Brand Presentation",
              "Lack Of Conversion Focus",
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

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Corporate Websites
              </h3>
              <p className="text-slate-700">
                Professional business websites that build trust and credibility.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Customer Portals
              </h3>
              <p className="text-slate-700">
                Secure platforms that improve customer engagement and service delivery.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Landing Pages
              </h3>
              <p className="text-slate-700">
                Conversion-focused pages designed to generate leads and enquiries.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Business Portals
              </h3>
              <p className="text-slate-700">
                Interactive digital platforms tailored to business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Expected Business Outcomes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Professional Online Presence",
              "Increased Lead Generation",
              "Improved Customer Experience",
              "Stronger Brand Credibility",
              "Better Search Visibility",
              "Higher Conversion Rates",
              "Improved Mobile Experience",
              "Business Growth Support",
            ].map((item, index) => (
              <div key={index} className="bg-white border rounded-xl p-6">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready To Elevate Your Digital Presence?
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            Let's create a website or portal that supports your growth objectives.
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