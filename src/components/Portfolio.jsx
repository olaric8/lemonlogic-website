import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      title: "GSCA Logistics Intelligence Platform",
      description:
        "Enterprise logistics intelligence platform featuring GIS intelligence, smart boundary management, analytics, reporting, and operational visibility.",
      tags: [
        "React",
        "Node.js",
        "GIS",
        "Enterprise",
        "Logistics",
      ],
      link: "/portfolio/gsca",
    },
    {
      title: "LA AUTOWORKS LTD",
      description:
        "Premium automotive service platform featuring diagnostics, restoration showcases, fleet maintenance presentation, customer engagement workflows, and responsive digital experiences.",
      tags: [
        "React",
        "Vite",
        "Automotive",
        "Fleet Services",
        "Responsive Design",
      ],
      link: "/portfolio/la-autoworks",
    },
    {
      title: "Intelligent Invoice & Business Document Automation",
      description:
        "Business automation platform featuring invoice generation, quotations, waybill management, workflow automation, professional A4 printing, and operational efficiency improvements.",
      tags: [
        "Automation",
        "Invoices",
        "Workflow",
        "JavaScript",
        "Business Systems",
      ],
      link: "/portfolio/invoice-automation",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-4 text-slate-600">
            Real-world solutions spanning enterprise software, business automation,
            and digital platforms designed to improve efficiency, visibility,
            and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-yellow-50 text-slate-700 border border-yellow-200 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <Link
                  to={project.link}
                  className="inline-block mt-6 text-yellow-600 font-semibold hover:underline"
                >
                  View Case Study →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}