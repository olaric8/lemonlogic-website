import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Business Process Automation",
      description: "Streamline operations, reduce manual effort, and improve efficiency through intelligent workflow automation.",
      link: "/services/business-process-automation",
    },
    {
      title: "Executive Dashboards & Operational Intelligence",
      description: "Give leadership teams real-time visibility into performance, reporting, KPIs, and operational intelligence.",
      link: "/services/executive-dashboards",
    },
    {
      title: "Custom Business Systems",
      description: "Build centralized platforms tailored to your workflows, reporting requirements, and operational objectives.",
      link: "/services/custom-business-systems",
    },
    {
      title: "Website & Portal Development",
      description: "Professional websites and digital platforms designed to support growth, engagement, and credibility.",
      link: "/services/website-development",
    },
    {
      title: "AI-Powered Business Solutions",
      description: "Leverage AI to automate work, improve decision-making, and enhance customer experiences.",
      link: "/services/ai-solutions",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            We help organizations improve efficiency, visibility, reporting, automation, and business performance through intelligent technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="font-semibold text-yellow-600 hover:text-yellow-700"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}