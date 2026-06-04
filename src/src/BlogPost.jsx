import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-8">
          {slug.replaceAll("-", " ")}
        </h1>

        <p className="text-lg text-slate-600">
          Blog content coming soon.
        </p>
      </section>
    </div>
  );
}