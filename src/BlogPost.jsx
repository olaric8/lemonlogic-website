import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import articles from "./articles";

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
    <title>
      {article.title} | LemonLogic
    </title>

    <meta
      name="description"
      content={article.description}
    />
  </Helmet>
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-6">
          {article.title}
        </h1>

        <p className="text-slate-600 text-lg mb-8">
          {article.description}
        </p>

        <div className="space-y-6">
          {article.content.map((block, index) => {
            if (block.type === "p") {
              return (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-slate-700"
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "h2") {
              return (
                <h2
                  key={index}
                  className="text-3xl font-bold mt-10 mb-4"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "image") {
              return (
                <img
                  key={index}
                  src={block.src}
                  alt={block.alt}
                  className="w-full rounded-2xl my-8"
                />
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
    </>
  );
}