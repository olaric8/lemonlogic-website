import { Link } from "react-router-dom";

const posts = [
  {
    slug: "how-dashboards-improve-executive-decision-making",
    title: "How Dashboards Improve Executive Decision-Making",
    excerpt: "Discover how centralized executive dashboards provide real-time visibility, strengthen strategic planning, and support data-driven decision-making.",
    image: "/blog-images/executive-dashboard.png",
    readTime: "5 min read",
  },
  {
    slug: "operational-intelligence-why-it-matters",
    title: "What Is Operational Intelligence And Why Does It Matter?",
    excerpt: "Learn how operational intelligence transforms raw data into real-time visibility, faster decision-making, and improved efficiency.",
    image: "/blog-images/operational-intelligence.png",
    readTime: "6 min read",
  },
  {
    slug: "workflow-automation-signs",
    title: "5 Signs Your Business Needs Workflow Automation",
    excerpt: "Learn the warning signs that indicate manual processes are slowing down your business.",
    image: "/blog-images/workflow-automation.png",
    readTime: "5 min read",
  },
  {
    slug: "logistics-intelligence-operational-visibility",
    title: "How Logistics Intelligence Improves Operational Visibility",
    excerpt: "Discover how logistics intelligence platforms provide real-time visibility and better decision-making across operations.",
    image: "/blog-images/logistics-intelligence.png",
    readTime: "5 min read",
  },
  {
    slug: "spreadsheets-business-risk",
    title: "When Spreadsheets Become a Business Risk",
    excerpt: "Understand the limitations of spreadsheets and when organizations should move to dedicated business systems.",
    image: "/blog-images/spreadsheets-business-risk.png",
    readTime: "4 min read",
  },
  {
    slug: "automated-invoicing-reduces-administrative-costs",
    title: "How Automated Invoicing Reduces Administrative Costs",
    excerpt: "Explore how invoice automation streamlines financial workflows, improves accuracy, and reduces operational overhead.",
    image: "/blog-images/automated-invoicing.png",
    readTime: "6 min read",
  },
  {
    slug: "why-growing-businesses-outgrow-excel",
    title: "Why Growing Businesses Outgrow Excel",
    excerpt: "Discover the hidden risks of spreadsheet dependency and learn the signs that indicate your business is ready for a dedicated system.",
    image: "/blog-images/outgrow-excel.png",
    readTime: "5 min read",
  },
  {
    slug: "hidden-costs-manual-processes",
    title: "7 Hidden Costs Of Manual Business Processes",
    excerpt: "Discover the hidden costs of manual business processes and learn how automation improves productivity, visibility, scalability, and customer satisfaction.",
    image: "/blog-images/hidden-costs-manual-processes.png",
    readTime: "7 min read",
  },
];

const FEATURED_SLUG = "how-dashboards-improve-executive-decision-making";

export default function Blog() {
  const featuredPost = posts.find((p) => p.slug === FEATURED_SLUG);
  const remainingPosts = posts.filter((p) => p.slug !== FEATURED_SLUG);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Insights & Resources</h1>
          <p className="mt-6 text-xl text-slate-300">
            Practical insights on automation, business systems, operational intelligence, and digital transformation.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      {featuredPost && (
        <section className="pt-16 pb-0 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-yellow-600 font-semibold uppercase tracking-wider mb-3">
                    Featured Article
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-xl transition"
                  >
                    Read Featured Article
                  </Link>
                </div>
                <div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full rounded-2xl border border-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid Section */}
      <section className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              ) : (
                <div className="w-full h-64 bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400 font-medium">Article Preview</span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold leading-tight">
                  {post.title}
                </h2>
                <p className="mt-4 text-slate-600 line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  {post.readTime}
                </p>
                
                <div className="mt-auto">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-block pt-6 text-yellow-600 font-semibold hover:text-yellow-700"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}