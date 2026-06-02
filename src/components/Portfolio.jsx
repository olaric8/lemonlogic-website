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
    },
    {
      title: "LAAUTOWORKSLTD",
      description:
        "Professional automotive services website designed to improve customer engagement, showcase services, and strengthen online presence.",
      tags: [
        "Website",
        "Business",
        "Responsive",
        "UI/UX",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured Work
          </h2>

          <p className="mt-4 text-slate-600">
            Real projects demonstrating our expertise in business systems,
            operational intelligence, and digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

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
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}