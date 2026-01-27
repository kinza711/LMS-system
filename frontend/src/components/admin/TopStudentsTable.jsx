import React from "react";

const students = [
  { name: "Emma Watson", course: "Advanced Mathematics", score: "98%", progress: "95%", status: "Active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqj2-CcH20vkXt_oUfghIBxLp5wWExtLws-zoCF_AZJV06VPiXIRvqeU3tHpE89dMWlB3bSqraT3KoXvct6P6jqm74YxLYnFVRx0DGa4CUfBSD8b_eAIkfJHANqofD3sLeL4jAfO_elK5CBAyLk2Ps2O24KSi-WFiJF5x1krezAyqKRgutQ0fsY7mLXyl6ZynSWiTQ4T8Q3BWqK2yzCGnjUM_hROvC7CbgtY20rDdBdCwVZhtI6IVjueppj3v-hbKgx6ZPPH5Z4FM" },
  { name: "Liam Johnson", course: "Physics 101", score: "92%", progress: "88%", status: "Active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcyhEqIImE5qRQ631nZ080SVVugrNn5NAyWQJFwacAGJVJ4jmtUPp361ARgVM6scDI4831I85BUgp7oZI98GBNggAl2cGsCd76vNUI-xFbOKGOsK-i0N0rlHYBmL1_dI4MMD33CC3IrqZ2XYVzuYcuMfRYTDPTxhC1su96dvxaKpmQU1zwtg8_HyWfGkaHV7s7wPttnkw-uLPyD-tzleuoigFbOp8kTm32oyCPW7twlXkgZbiQ3vhSM5UbNTmwpHU927YJi4R15Bw" },
  { name: "Sophia Davis", course: "English Literature", score: "89%", progress: "75%", status: "Pending", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqdktdreAWwPpVjZB3U4XNwKNqJjhEnRNgS6__G_eivV76KuMQ3FDLH5XZYGREBGsdgddJPAHVx8k0GMWD2kwdGvlVnkilASn0-414uxsbfyPJpgVmlNziZsjgWEDpGf0zX6043pRrMs71r2dT5jIHNYjO3kErOgOyc1Y2yvPbwKx2U9ZPXK-iKx7zZJcqFCY3mnKcOZLuVY26resOSgiqidDLHhSiccrMQfCKaoJADnOX4vOiIDf93_6yVfxGC7Y9Sk0eZ8O0sBw" },
];

const TopStudentsTable = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Top Performing Students</h3>
        <button className="text-sm font-medium text-slate-500 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          Export List
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
          <thead className="text-xs uppercase bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-bold">
            <tr>
              <th className="px-4 py-3 rounded-l-lg">Student Name</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Average Score</th>
              <th className="px-4 py-3">Progress</th>
              <th className="px-4 py-3 rounded-r-lg text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {students.map((s, i) => (
              <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${s.img}')` }}></div>
                  {s.name}
                </td>
                <td className="px-4 py-3">{s.course}</td>
                <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">{s.score}</td>
                <td className="px-4 py-3">
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 max-w-[100px]">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: s.progress }}></div>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`bg-${s.status === "Active" ? "green-100 text-green-800" : "yellow-100 text-yellow-800"} text-xs font-bold px-2.5 py-0.5 rounded-full dark:bg-${s.status === "Active" ? "green-900" : "yellow-900"} dark:text-${s.status === "Active" ? "green-300" : "yellow-300"}`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopStudentsTable;
