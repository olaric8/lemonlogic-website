export default function WhyUs() {
  const benefits = [
    {
      title: "Operational Efficiency",
      description:
        "We help organizations reduce manual processes and improve productivity.",
    },
    {
      title: "Custom Solutions",
      description:
        "Every business is different. We build solutions tailored to your operations.",
    },
    {
      title: "Enterprise Mindset",
      description:
        "We design systems with scalability, security, and long-term growth in mind.",
    },
    {
      title: "Practical Innovation",
      description:
        "Technology should solve real business problems, not create new ones.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why LemonLogic
          </h2>

          <p className="mt-4 text-slate-600">
            Solutions designed around business outcomes, not technology buzzwords.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>

              <p className="text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}