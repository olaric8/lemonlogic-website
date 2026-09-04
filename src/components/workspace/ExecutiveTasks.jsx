import useExecutiveData from "../../hooks/useExecutiveData";

function Badge({ children }) {
  return (
    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
      {children}
    </span>
  );
}

export default function ExecutiveTasks() {

  const {
    tasks,
    toggleTask,
    executiveProgramme,
  } = useExecutiveData();

  
const recommendation =
    executiveProgramme?.recommendation;
  

  const insights =
    executiveProgramme?.insights;

  const completed =
    tasks.filter(
      (task) => task.completed
    ).length;

  return (

    <section className="bg-white rounded-3xl shadow-lg p-8">

      <div className="flex flex-col xl:flex-row justify-between gap-8 mb-8">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Executive Delivery Centre
          </h2>

          <p className="text-slate-500 mt-2">
            Enterprise execution driven by Executive Intelligence.
          </p>

        </div>

        <div className="flex gap-4 flex-wrap">

          <Badge>
  Pulse • {executiveProgramme?.executivePulse?.pulse}%
</Badge>

<Badge>
  Impact • {recommendation?.businessImpact}
</Badge>

<Badge>
  ROI • {recommendation?.roi}
</Badge>

<Badge>
  Timeline • {recommendation?.timeline}
</Badge>

<Badge>
  Confidence • {recommendation?.confidence}
</Badge>

<Badge>
  Risk • {recommendation?.risk}
</Badge>
        </div>

      </div>

      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 mb-10">

  <div className="flex items-start justify-between">

    <div>

      <p className="text-sm uppercase tracking-widest text-slate-500">
        AI Executive Recommendation
      </p>

      <h3 className="text-3xl font-bold text-slate-900 mt-2">
        {recommendation?.programme}
      </h3>

    </div>

    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
      {recommendation?.priority}
    </span>

  </div>

  <div className="grid md:grid-cols-4 gap-6 mt-8">

    <div>

      <p className="text-sm text-slate-500">
        Business Impact
      </p>

      <p className="text-xl font-bold mt-2">
        {recommendation?.businessImpact}
      </p>

    </div>

    <div>

      <p className="text-sm text-slate-500">
        Expected ROI
      </p>

      <p className="text-xl font-bold mt-2 text-green-600">
        {recommendation?.roi}
      </p>

    </div>

    <div>

      <p className="text-sm text-slate-500">
        Timeline
      </p>

      <p className="text-xl font-bold mt-2">
        {recommendation?.timeline}
      </p>

    </div>

    <div>

      <p className="text-sm text-slate-500">
        Confidence
      </p>

      <p className="text-xl font-bold mt-2 text-cyan-600">
        {recommendation?.confidence}
      </p>

    </div>

  </div>

  <div className="mt-8 border-t pt-6">

    <p className="text-sm uppercase tracking-widest text-slate-500">
      Recommended First Action
    </p>

    <p className="mt-3 text-slate-700 leading-8">
      {recommendation?.firstAction}
    </p>

  </div>

</div>

      <div className="flex justify-between items-center mb-8">

        <h3 className="text-xl font-semibold">
          Transformation Tasks
        </h3>

        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">

          {completed}

          {" / "}

          {tasks.length}

          {" Completed"}

        </span>

      </div>

      <div className="space-y-5">

        {tasks.map((task) => (

          <div
            key={task.id}
            className="border rounded-2xl p-6 flex justify-between items-start hover:shadow transition"
          >

            <div className="flex-1">

              <h3 className="text-xl font-semibold">

                {task.title}

              </h3>

              <p className="text-slate-600 mt-2">

                {task.description}

              </p>

              <div className="flex gap-3 mt-4 flex-wrap">

                <Badge>
                  {task.owner}
                </Badge>

                <Badge>
                  {task.priority}
                </Badge>

                <Badge>
                  {task.dueWeek}
                </Badge>

              </div>

            </div>

            <button
              onClick={() =>
                toggleTask(task.id)
              }
              className={`px-5 py-3 rounded-xl font-bold transition ${
                task.completed
                  ? "bg-green-600 text-white"
                  : "bg-yellow-500 hover:bg-yellow-600 text-black"
              }`}
            >

              {task.completed
                ? "Completed"
                : "Mark Complete"}

            </button>

          </div>

        ))}

      </div>

      <div className="mt-10">

  <div className="flex items-center justify-between mb-6">

    <div>

      <h3 className="text-2xl font-bold text-slate-900">
        ⚡ Executive Quick Wins
      </h3>

      <p className="text-slate-500 mt-1">
        Immediate high-impact opportunities identified by Executive Intelligence.
      </p>

    </div>

    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
      AI Generated
    </span>

  </div>

  <div className="grid md:grid-cols-3 gap-5">

  <div className="bg-gradient-to-br from-white to-slate-50 border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

    <div className="flex items-center justify-between mb-5">

      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
        ✓
      </div>

      <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">
        Immediate
      </span>

    </div>

    <h4 className="font-semibold text-lg">
      First Executive Action
    </h4>

    <p className="text-slate-700 mt-3 leading-7">
      {recommendation?.firstAction}
    </p>

  </div>

  <div className="bg-gradient-to-br from-white to-slate-50 border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

    <div className="flex items-center justify-between mb-5">

      <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
        📈
      </div>

      <span className="text-xs font-semibold bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
        Impact
      </span>

    </div>

    <h4 className="font-semibold text-lg">
      Business Impact
    </h4>

    <p className="text-slate-700 mt-3">
      {recommendation?.businessImpact}
    </p>

  </div>

  <div className="bg-gradient-to-br from-white to-slate-50 border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

    <div className="flex items-center justify-between mb-5">

      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
        🚀
      </div>

      <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
        Outcome
      </span>

    </div>

    <h4 className="font-semibold text-lg">
      Expected ROI
    </h4>

    <p className="text-3xl font-bold text-green-600 mt-3">
      {recommendation?.roi}
    </p>

  </div>


</div>

  </div>

  </section>

  );
}