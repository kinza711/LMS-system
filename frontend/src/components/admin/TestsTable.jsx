
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TestsTable = ({ tests = [], course = [], onDelete }) => {
  const navigate = useNavigate();


  // Check if any objective/subjective questions exist
  const hasObjective = tests.some(t => t.questionType === "objective");
  const hasSubjective = tests.some(t => t.questionType === "subjective");

  return (
    <div className="bg-white rounded-xl border border-[#E1E3E1] overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr className="font-bold text-slate-600 text-left">
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Difficulty</th>
            <th className="px-4 py-3">Marks</th>

            {hasObjective && (
              <>
                <th className="px-4 py-3">Options</th>
                <th className="px-4 py-3">Public</th>
              </>
            )}

            {hasSubjective && <th className="px-4 py-3">Keywords</th>}

            <th className="px-4 py-3">Answer</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {tests.length === 0 ? (
            <tr>
              <td colSpan="10" className="px-6 py-6 text-center text-slate-500">
                No questions found
              </td>
            </tr>
          ) : (
            tests.map((test) => (
              <tr key={test._id} className="border-t border-[#E1E3E1] hover:bg-slate-50 transition">
                <td className="px-4 py-3 font-medium">{test.title}</td>
                <td className="px-4 py-3 capitalize">{test.questionType}</td>
                <td className="px-4 py-3 capitalize">{test.Difficulty}</td>
                <td className="px-4 py-3">{test.marks}</td>

                {hasObjective && (
                  <>
                    <td className="px-4 py-3 max-w-[220px] truncate">
                      {test.questionType === "objective"
                        ? test.options?.join(", ")
                        : "—"}
                    </td>
                    <td className="px-4 py-3">
                      {test.questionType === "objective"
                        ? test.isPublic
                          ? "Yes"
                          : "No"
                        : "—"}
                    </td>
                  </>
                )}

                {hasSubjective && (
                  <td className="px-4 py-3">
                    {test.questionType === "subjective" ? test.keywords : "—"}
                  </td>
                )}

                <td className="px-4 py-3 max-w-[240px] truncate">{test.correctAnswer}</td>

                <td className="px-4 py-3 text-right flex gap-2">

                  <button
                    onClick={() => navigate(`/editquestion/${test.course}/${test._id}`)}
                    className="p-2 bg-blue-100 text-blue-600 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(test._id)}
                    className="p-2 bg-red-500 rounded hover:bg-red-600"
                  >
                    <RiDeleteBin5Fill size={15} color="white" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TestsTable;


