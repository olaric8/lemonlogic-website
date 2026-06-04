import { Link } from "react-router-dom";

const posts = [
  {
    slug: "logistics-intelligence-operational-visibility",
    title: "How Logistics Intelligence Improves Operational Visibility",
    excerpt:
      "Discover how logistics intelligence platforms provide real-time visibility and better decision-making across operations.",
  },
  {
    slug: "workflow-automation-signs",
    title: "5 Signs Your Business Needs Workflow Automation",
    excerpt:
      "Learn the warning signs that indicate manual processes are slowing down your business.",
  },
  {
    slug: "spreadsheets-business-risk",
    title: "When Spreadsheets Become a Business Risk",
    excerpt:
      "Understand the limitations of spreadsheets and when organizations should move to dedicated business systems.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Insights & Resources
          </h1>

          <p className="mt-6 text-xl text-slate-300">
            Practical insights on automation, business systems,
            operational intelligence, and digital transformation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="grid gap-8">

            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-slate-200 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold">
                  {post.title}
                </h2>

                <p className="mt-4 text-slate-600">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block mt-6 text-yellow-600 font-semibold"
                >
                  Read Article →
                </Link>
              </article>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
}