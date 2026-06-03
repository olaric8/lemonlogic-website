export default function InvoiceAutomation() {
  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-400 via-yellow-300 to-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-yellow-300 text-sm font-semibold">
            Business Automation Case Study
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black">
            Intelligent Invoice & Business Document Automation
          </h1>

          <p className="mt-8 max-w-4xl text-xl text-slate-700">
            A custom-built automation platform engineered to streamline
            invoicing, quotations, waybills, document generation,
            calculations, and business workflows while maintaining
            professional print-ready output.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            Project Overview
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            This solution was developed to eliminate repetitive manual
            document preparation and provide businesses with a faster,
            more accurate way to generate invoices, quotations,
            delivery documents, and customer records.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            The Challenge
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              Manual invoice preparation consumed valuable time.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Repeated calculations increased risk of human error.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Business documents lacked consistency.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Printing and record management were inefficient.
            </div>

          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Solution Delivered
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Invoice Generation",
              "Quotation Management",
              "Waybill Creation",
              "Customer Management",
              "Document Number Automation",
              "Dynamic Calculations",
              "Print Optimization",
              "Amount-to-Words Conversion",
              "Workflow Standardization",
            ].map((feature) => (
              <div
                key={feature}
                className="border border-slate-200 rounded-2xl p-8"
              >
                {feature}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Key Automation Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              Dynamic line-item calculations with automatic totals.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Professional A4 print-ready layouts.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Automated document numbering workflows.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Customer information management and reuse.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Mobile-friendly operational interface.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Export, print, and PDF generation workflows.
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Business Automation",
              "Workflow Systems",
              "Invoice Management",
              "Print Optimization",
              "Responsive Design",
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full border border-yellow-300 bg-yellow-50"
              >
                {tech}
              </span>
            ))}

          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-yellow-50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Business Outcomes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow">
              Faster document preparation and processing.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Reduced manual calculation errors.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Consistent professional business documents.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Improved operational efficiency.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Better document management workflows.
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              Scalable automation for growing businesses.
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}