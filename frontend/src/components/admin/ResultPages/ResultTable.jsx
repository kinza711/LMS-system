// import Pagination from "./Pagination";

const ResultsTable = () => {
  return (
    <div className="bg-white rounded-2xl  shadow-sm overflow-hidden">
      <div className="p-6 border-b  border-gray-200">
        <h3 className="font-bold text-lg">Student Results</h3>
        <p className="text-sm text-slate-500">Detailed performance log</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              {["Student", "ID", "Test", "Subject", "Score", ""].map((h) => (
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
            <tr className="border-t border-gray-200 hover:bg-blue-50">
              <td className="px-6 py-4 font-bold">Alice Johnson</td>
              <td className="px-6 py-4 font-mono">#STU-001</td>
              <td className="px-6 py-4">Mid-Term</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                  Math
                </span>
              </td>
              <td className="px-6 py-4 font-bold">92%</td>
              <td className="px-6 py-4 text-right">
                <span className="material-symbols-outlined text-slate-400 cursor-pointer">
                  visibility
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <Pagination /> */}
    </div>
  );
};

export default ResultsTable;
