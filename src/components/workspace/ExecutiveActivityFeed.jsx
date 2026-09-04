import useExecutiveData from "../../hooks/useExecutiveData";

export default function ExecutiveActivityFeed() {

  const { executiveProgramme } = useExecutiveData();

  if (!executiveProgramme) return null;

  const {
    executivePulse,
    completion,
    phase,
  } = executiveProgramme;

  const activities = [

    {
      time: "09:15",
      title: "Executive Pulse Updated",
      description: `Executive Pulse increased to ${executivePulse.pulse}%.`,
      colour: "bg-cyan-500",
    },

    {
      time: "09:45",
      title: "Programme Review",
      description: `${phase} phase reviewed by Executive Intelligence.`,
      colour: "bg-yellow-500",
    },

    {
      time: "10:20",
      title: "Transformation Progress",
      description: `${completion}% of programme completed.`,
      colour: "bg-green-500",
    },

    {
      time: "11:10",
      title: "Executive Recommendation Generated",
      description: "AI generated new transformation recommendation.",
      colour: "bg-purple-500",
    },

    {
      time: "12:00",
      title: "Board Readiness Updated",
      description: "Board readiness recalculated.",
      colour: "bg-blue-500",
    },

    {
      time: "13:15",
      title: "Executive Dashboard Refreshed",
      description: "Executive Intelligence refreshed automatically.",
      colour: "bg-pink-500",
    },

  ];

  return (

    <section className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <div className="px-8 py-6 border-b">

        <h2 className="text-3xl font-bold">
          Executive Intelligence Activity
        </h2>

        <p className="text-slate-500 mt-2">
          Live operational intelligence generated throughout the programme.
        </p>

      </div>

      <div className="p-8 space-y-8">

        {activities.map((item, index) => (

          <div
            key={index}
            className="flex gap-6"
          >

            <div className="flex flex-col items-center">

              <div className={`w-5 h-5 rounded-full ${item.colour}`} />

              {index !== activities.length - 1 && (
                <div className="w-px flex-1 bg-slate-200 mt-2" />
              )}

            </div>

            <div className="pb-8">

              <p className="text-sm text-slate-500">
                {item.time}
              </p>

              <h3 className="text-xl font-semibold mt-1">
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