
import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const RecentActivityTable = ({ tests = [], onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">

      {/* Header */}
      <div className="p-6 border-b flex border-gray-200 justify-between">
        <h3 className="text-lg font-bold">Recent Results</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead>
            <tr className="bg-gray-100 text-sm">
              <th className="p-4">Course</th>
              <th className="p-4">Type</th>
              <th className="p-4">Difficulty</th>
              <th className="p-4">Marks</th>
              <th className="p-4">Percentage</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {tests.map((result, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">

                {/* Course */}
                <td className="p-4 font-semibold">
                  {result.courseTitle}
                </td>

                {/* Question Type */}
                <td className="p-4">
                  {result.questionType}
                </td>

                {/* Difficulty */}
                <td className="p-4 capitalize">
                  {result.difficulty}
                </td>

                {/* Marks */}
                <td className="p-4">
                  {result.obtainedMarks}/{result.totalMarks}
                </td>

                {/* Percentage */}
                <td className="p-4 font-bold">
                  {result.percentage}%
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${result.status === "pass"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {result.status.toUpperCase()}
                  </span>
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
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default RecentActivityTable;
