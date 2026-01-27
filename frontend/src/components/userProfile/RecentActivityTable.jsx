import React from "react";

const RecentActivityTable = ({ tests }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold">Recent Test Results</h3>
        <a className="text-primary text-sm font-bold hover:underline" href="#">View All</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
              <th className="p-4 pl-6 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Test Name</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Date</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Score</th>
              <th className="p-4 pr-6 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {tests.map((test, idx) => (
              <tr key={idx} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="p-4 pl-6">
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-lg ${test.color} flex items-center justify-center text-${test.textColor}`}>
                      <span className="material-symbols-outlined icon-filled">{test.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm">{test.name}</p>
                      <p className="text-xs text-slate-500">{test.teacher} • {test.code}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4"><span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{test.date}</span></td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${test.statusBg} ${test.statusText} border ${test.statusBorder}`}>
                    <span className="size-1.5 rounded-full" style={{ backgroundColor: test.statusDotColor }}></span> {test.status}
                  </span>
                </td>
                <td className="p-4 text-right"><span className="text-slate-900 dark:text-white font-bold text-sm">{test.score}</span></td>
                <td className="p-4 pr-6 text-right">
                  <button className={`text-slate-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20`}>
                    <span className="material-symbols-outlined !text-xl">visibility</span>
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
