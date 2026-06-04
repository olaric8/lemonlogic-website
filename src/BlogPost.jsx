import { useParams } from "react-router-dom";

const articles = {
  "logistics-intelligence-operational-visibility": {
    title: "How Logistics Intelligence Improves Operational Visibility",
    content: [
      { type: "p", text: "In today's business environment, organizations are expected to make faster decisions, deliver better customer experiences, and operate with greater efficiency than ever before." },
      { type: "p", text: "Yet many companies still struggle with one fundamental challenge: a lack of operational visibility." },
      { type: "p", text: "When decision-makers cannot clearly see what is happening across their operations, delays increase, costs rise, and opportunities are missed." },
      { type: "h2", text: "What Is Logistics Intelligence?" },
      { type: "p", text: "Logistics intelligence refers to the collection, analysis, and visualization of operational and logistics-related data to support better decision-making." },
      { type: "p", text: "Rather than relying on spreadsheets, manual reports, or fragmented information from multiple systems, logistics intelligence brings critical operational data together into a centralized view." },
      { type: "h2", text: "The Visibility Challenge" },
      { type: "p", text: "Many organizations face a common problem. Information exists, but it is scattered across different systems, departments, and reports." },
      { type: "p", text: "Without operational visibility, organizations often experience delayed decision-making, increased operational costs, inefficient resource allocation, and difficulty identifying performance issues." },
      { type: "h2", text: "How Logistics Intelligence Creates Visibility" },
      { type: "p", text: "A logistics intelligence platform transforms raw operational data into meaningful insights." },
      { type: "p", text: "Instead of asking teams to manually compile information, the platform continuously presents key metrics through dashboards, maps, and reports." },
      { type: "p", text: "This enables organizations to monitor operations, identify bottlenecks, improve resource allocation, and support strategic planning." },
      { type: "h2", text: "Final Thoughts" },
      { type: "p", text: "Operational visibility has become a competitive advantage." },
      { type: "p", text: "By transforming operational data into actionable insights, organizations can make better decisions, improve efficiency, and position themselves for sustainable growth." },
      { type: "p", text: "At LemonLogic, we help organizations design intelligent business systems, operational dashboards, and logistics intelligence solutions that provide greater visibility into day-to-day operations." },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return <div className="p-8 text-center">Article Not Found</div>;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8">{article.title}</h1>

      <div className="prose prose-lg max-w-none">
        {article.content.map((block, index) => {
          if (block.type === "h2") {
            return (
              <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                {block.text}
              </h2>
            );
          }
          return (
            <p key={index} className="mb-4">
              {block.text}
            </p>
          );
        })}
      </div>
    </section>
  );
}