import useExecutiveData from "../../hooks/useExecutiveData";

export default function ExecutiveIntelligenceTimeline() {

  const { executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const timeline = [

    {
      time: "09:15",
      colour: "bg-green-500",
      title: "Executive Pulse Updated",
      description: `Executive Pulse is ${executiveProgramme.executivePulse?.pulse ?? 73}%`
    },

    {
      time: "10:45",
      colour: "bg-yellow-500",
      title: "Programme Review",
      description: executiveProgramme.phase
    },

    {
      time: "13:00",
      colour: "bg-blue-500",
      title: "Transformation Progress",
      description: `${executiveProgramme.completion}% Complete`
    },

    {
      time: "15:20",
      colour: "bg-purple-500",
      title: "AI Recommendation",
      description: executiveProgramme.recommendation?.firstAction
    }

  ];

  return (

    <section className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">

      <div className="px-8 py-6 border-b">

        <h2 className="text-2xl font-bold">
          Executive Intelligence Timeline
        </h2>

      </div>

      <div className="p-8 space-y-8">

        {timeline.map((item, index) => (

          <div
            key={index}
            className="flex gap-5"
          >

            <div className="flex flex-col items-center">

              <div className={`w-4 h-4 rounded-full ${item.colour}`} />

              {index !== timeline.length - 1 && (

                <div className="flex-1 w-px bg-slate-200 mt-2" />

              )}

            </div>

            <div className="flex-1 pb-4">

              <p className="text-sm text-slate-500">
                {item.time}
              </p>

              <h3 className="font-bold mt-1">
                {item.title}
              </h3>

              <p className="text-slate-600 mt-2">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}