import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import articles from "./articles";

// Helper component to render the CTA
function CTA() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mt-12 text-center">
      <h3 className="text-2xl font-bold mb-4">
        Ready to identify automation opportunities in your business?
      </h3>
      <Link
        to="/contact"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Request a Consultation
      </Link>
    </div>
  );
}

// Helper component to handle block rendering
function BlockRenderer({ block, index }) {
  switch (block.type) {
    case "p":
      return (
        <p key={index} className="text-lg leading-relaxed text-slate-700">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={index} className="text-3xl font-bold mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "image":
      return (
        <img
          key={index}
          src={block.src}
          alt={block.alt}
          className="w-full rounded-2xl my-8"
        />
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Article Not Found</h1>
        <p className="text-slate-500">{slug}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | LemonLogic</title>
        <meta name="description" content={article.description} />
        <link rel="canonical" href={`https://lemonlogic.com/blog/${slug}`} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-6">{article.title}</h1>
          <p className="text-slate-600 text-lg mb-8">{article.description}</p>

          <div className="space-y-6">
            {article.content.map((block, index) => (
              <BlockRenderer key={index} block={block} index={index} />
            ))}
            
            {/* The CTA is now consistently at the bottom of all articles */}
            <CTA />
          </div>
        </div>
      </div>
    </>
  );
}