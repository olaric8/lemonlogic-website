import useExecutiveData from "../../hooks/useExecutiveData";

export default function ExecutiveNotes() {
  const {
    notes,
    saveNotes,
  } = useExecutiveData();

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Executive Notes
          </h2>

          <p className="text-slate-500 mt-1">
            Strategic observations, board decisions and executive actions.
          </p>

        </div>

      </div>

      <textarea
        value={notes}
        onChange={(e) =>
          saveNotes(e.target.value)
        }
        placeholder="Document executive decisions, meeting outcomes, strategic observations, risks, opportunities and next actions..."
        className="w-full h-56 border rounded-2xl p-5 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <div className="mt-6 flex justify-between items-center">

        <span className="text-sm text-slate-500">
          {notes.length} characters
        </span>

        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

          Automatically Saved

        </div>

      </div>

    </div>
  );
}