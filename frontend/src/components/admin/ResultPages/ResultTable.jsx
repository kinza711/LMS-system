
import { RiDeleteBin5Fill } from "react-icons/ri";

const ResultsTable = ({ results = [], onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      {/* HEADER */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-bold text-lg">Student Results</h3>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="bg-slate-50">
            <tr>
              {["#", "Name", "Course", "Type", "Marks", "Per %", "Status", "Date", "Action"].map(h => (
                <th
                  key={h}
                  className="px-6 py-4 text-xs uppercase text-slate-500"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {results.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-10 text-gray-500 font-semibold"
                >
                  No results found
                </td>
              </tr>
            ) : (
              results.map((result, index) => (
                <tr
                  key={result._id}
                  className="border-t border-gray-200 hover:bg-blue-50"
                >
                  {/* ID */}
                  <td className="px-6 py-4 font-bold">
                    {index + 1}
                  </td>

                  {/* Student */}
                  <td className="px-6 py-4 font-mono">
                    {result.userName || "Guest"}
                  </td>

                  {/* Course */}
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                      {result.courseTitle}
                    </span>
                  </td>

                  {/* Course type*/}
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-50 text-purple-700">
                      {result.questionType}
                    </span>
                  </td>

                  {/* Marks */}
                  <td className="px-6 py-4">
                    {result.obtainedMarks} / {result.totalMarks}
                  </td>

                  {/* Percentage */}
                  <td className="px-6 py-4 font-bold">
                    {result.percentage}%
                  </td>

                  {/* Status */}
                  <td
                    className={`px-6 py-4 font-bold ${result.status === "pass"
                        ? "text-green-600"
                        : "text-red-600 animate-pulse"
                      }`}
                  >
                    {result.status.toUpperCase()}
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4">
                    {new Date(result.submittedAt).toLocaleDateString()}
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 text-right">
                    <button
                      className="p-2 hover:text-red-500"
                      onClick={() => onDelete(result._id)}
                    >
                      <RiDeleteBin5Fill size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default ResultsTable;
