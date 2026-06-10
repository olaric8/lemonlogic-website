import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AISolutions() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI-Powered Business Solutions | LemonLogic</title>
        <meta
          name="description"
          content="AI-powered business advisors, workflow automation, knowledge assistants, customer support systems, and intelligent business solutions."
        />
      </Helmet>

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Business Solutions
          </h1>

          <p className="text-xl text-slate-300 max-w-4xl">
            Leverage artificial intelligence to improve efficiency,
            automate repetitive work, support decision-making,
            and enhance customer experiences.
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
            AI Is Transforming Business Operations
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Organizations are increasingly using AI to streamline operations,
            improve customer interactions, accelerate decision-making,
            and unlock new opportunities for growth.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed">
            The key is applying AI strategically to solve real business problems
            and create measurable value.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">
            Common Business Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "High Administrative Workload",
              "Slow Customer Response Times",
              "Knowledge Silos",
              "Manual Decision Support",
              "Limited Automation",
              "Process Inefficiencies",
              "Information Retrieval Challenges",
              "Scaling Customer Support",
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
            AI Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                AI Business Advisors
              </h3>
              <p className="text-slate-700">
                Intelligent advisory systems that support business analysis and decision-making.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Knowledge Assistants
              </h3>
              <p className="text-slate-700">
                AI assistants that help employees access information quickly.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Customer Support AI
              </h3>
              <p className="text-slate-700">
                AI-powered support solutions that improve response times and service quality.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Intelligent Automation
              </h3>
              <p className="text-slate-700">
                Combine AI and automation to streamline business processes.
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
              "Increased Efficiency",
              "Faster Decision-Making",
              "Reduced Administrative Work",
              "Improved Customer Experience",
              "Better Knowledge Access",
              "Enhanced Scalability",
              "Higher Productivity",
              "Operational Innovation",
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
            Ready To Explore AI For Your Business?
          </h2>

          <p className="text-lg text-slate-600 mb-8">
            Discover practical AI solutions that create measurable business value.
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