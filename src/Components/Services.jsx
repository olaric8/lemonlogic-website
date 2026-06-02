export default function Services() {
  const services = [
    {
      title: "AI Automation",
      description:
        "Automate repetitive business processes and improve operational efficiency.",
    },
    {
      title: "Business Systems",
      description:
        "Custom software solutions tailored to your organization.",
    },
    {
      title: "Intelligence Dashboards",
      description:
        "Transform business data into actionable insights.",
    },
    {
      title: "Logistics & GIS Intelligence",
      description:
        "Advanced mapping, territory management, and operational intelligence.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            What We Do
          </h2>

          <p className="mt-4 text-slate-600">
            Solutions designed to streamline operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}