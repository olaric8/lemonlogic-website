import { Helmet } from "react-helmet-async";

export default function TermsOfUse() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | LemonLogic</title>
        <meta
          name="description"
          content="Terms governing the use of LemonLogic's website, assessments, and services."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-8">
            Terms of Use
          </h1>

          <p className="text-slate-600 mb-8">
            Last Updated: June 2026
          </p>

          <div className="space-y-8 text-slate-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using the LemonLogic website,
                assessments, content, and related services, you
                agree to these Terms of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Informational Purpose
              </h2>
              <p>
                Information provided through the LemonLogic website,
                blog articles, assessments, scorecards, and advisory
                tools is intended for general informational purposes
                only and should not be considered professional,
                legal, financial, or business advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Assessment Results
              </h2>
              <p>
                Automation readiness assessments, executive
                scorecards, recommendations, and advisory guidance
                are intended to provide general insights and do not
                guarantee specific business outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Intellectual Property
              </h2>
              <p>
                All content, frameworks, methodologies, graphics,
                articles, branding, and materials published by
                LemonLogic remain the intellectual property of
                LemonLogic unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Limitation of Liability
              </h2>
              <p>
                LemonLogic shall not be liable for any direct,
                indirect, incidental, or consequential damages
                resulting from the use of information, assessments,
                recommendations, or services provided through this
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Changes to These Terms
              </h2>
              <p>
                LemonLogic may update these Terms of Use from time
                to time. Continued use of the website constitutes
                acceptance of any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Contact
              </h2>
              <p>
                Questions regarding these Terms of Use may be
                submitted through the LemonLogic Contact page.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}