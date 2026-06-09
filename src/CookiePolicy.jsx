import { Helmet } from "react-helmet-async";

export default function CookiePolicy() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | LemonLogic</title>
        <meta
          name="description"
          content="Learn how LemonLogic uses cookies and similar technologies."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-8">
            Cookie Policy
          </h1>

          <p className="text-slate-600 mb-8">
            Last Updated: June 2026
          </p>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3">
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files stored on your device
                that help websites function properly and improve
                user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                How LemonLogic Uses Cookies
              </h2>
              <p>
                LemonLogic may use cookies and similar technologies
                to improve website performance, understand visitor
                interactions, and enhance user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Analytics
              </h2>
              <p>
                We may use analytics services to understand how
                visitors interact with our website. These services
                may use cookies to collect anonymous usage data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Managing Cookies
              </h2>
              <p>
                Most web browsers allow you to control, disable,
                or delete cookies through browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">
                Changes To This Policy
              </h2>
              <p>
                LemonLogic may update this Cookie Policy from time
                to time. Updates will be reflected on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}