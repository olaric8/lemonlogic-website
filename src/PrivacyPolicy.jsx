import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | LemonLogic</title>
        <meta
          name="description"
          content="Learn how LemonLogic collects, uses, and protects your information."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-8">
            Privacy Policy
          </h1>

          <p className="text-slate-600 mb-8">
            Last Updated: June 2026
          </p>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">
                Introduction
              </h2>
              <p>
                LemonLogic respects your privacy and is committed
                to protecting the personal information you provide
                through our website, assessment tools, contact
                forms, and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Information We Collect
              </h2>
              <p>
                We may collect information including your name,
                company name, email address, assessment responses,
                consultation requests, and other information you
                voluntarily submit through our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                How We Use Information
              </h2>
              <p>
                Information collected may be used to deliver
                assessment results, provide consultation services,
                respond to inquiries, improve our services, and
                communicate relevant business automation insights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Data Protection
              </h2>
              <p>
                We take reasonable measures to protect personal
                information from unauthorized access, disclosure,
                alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Third-Party Services
              </h2>
              <p>
                LemonLogic may utilize third-party service
                providers including website hosting, analytics,
                form processing, and communication tools. These
                providers may process information necessary to
                deliver their services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of
                personal information submitted through our website
                by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Contact
              </h2>
              <p>
                For privacy-related inquiries, please contact
                LemonLogic through our Contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}