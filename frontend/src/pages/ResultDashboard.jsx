// import Header from "../components/admin/Header";
// import Sidebar from "../components/admin/Sidebar";
// import StatsGrid from "../components/admin/ResultPages/StatsGrid";
// import ResultTable from "../components/admin/ResultPages/ResultTable";
// import api from "../services/api";
// import { useEffect, useState } from "react";

// const AdminResults = () => {
//   const [results, setResults] = useState([]);
//   const [stats, setStats] = useState(null);


//   useEffect(() => {
//     setStats(
//      [
//       {
//         title: "Avg Score",
//         value: stats.averageScore,
//         icon: <FaArrowTrendUp />,
//         color: "green"
//       },
//       {
//         title: "Pass Rate",
//         value: stats.passingRate,
//         icon: <FaCheckCircle />,
//         color: "purple"
//       },
//       {
//         title: "Top Score",
//         value: stats.maxScore,
//         icon: <MdEmojiEvents />,
//         color: "orange"
//       },
//     ]
//   )
// },[stats])



//   useEffect(() => {
//     api.get("/submit/analytics")
//       .then(res => setStats(res.data));
//   }, []);

// useEffect(() => {
//   fetchResults();
// }, [])

// const fetchResults = async () => {
//   try {
//     const res = await api.get("/submit");
//     setResults(res.data.data);
//   } catch (err) {
//     console.log("courses not found", err);
//   }
// }


// const handleDelete = async (resultId) => {
//   console.log("Delete course:");
//   try {
//     await api.delete(`/submit/${resultId}`);
//     // setCourses(res.data.data)
//     fetchResults();
//   } catch (err) {
//     console.error("Error deleting user:", err);
//   }
// };



// return (
//   <div className="bg-background-light min-h-screen font-display">

//     {/* ===== Header (Top) ===== */}
//     <Header />

//     {/* ===== Layout Wrapper ===== */}
//     <div className="flex">

//       {/* ===== Sidebar (Left) ===== */}
//       <aside className="w-64 min-h-[calc(100vh-72px)]  bg-white sticky top-[72px]">
//         <Sidebar />
//       </aside>

//       {/* ===== Main Content (Right) ===== */}
//       <main className="flex-1 py-8 px-4 md:px-10">
//         <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">

//           {/* Page Header */}
//           <div className="flex flex-col md:flex-row justify-between gap-4">
//             <div>
//               <h1 className="text-3xl md:text-4xl font-black">
//                 Results & Performance
//               </h1>
//               <p className="text-slate-500">
//                 Overview of student assessment data and cohort analytics.
//               </p>
//             </div>
//           </div>

//           {/* Stats */}
//           <StatsGrid />

//           {/* Charts */}
//           {/* <ChartsSection /> */}

//           {/* Table */}
//           <ResultTable results={results} onDelete={handleDelete} />

//         </div>
//       </main>

//     </div>
//   </div>
// );
// };

// export default AdminResults;


import { useEffect, useState } from "react";
import api from "../services/api";

import Header from "../components/admin/Header";
import Sidebar from "../components/admin/Sidebar";
import StatsGrid from "../components/admin/ResultPages/StatsGrid";
import ResultTable from "../components/admin/ResultPages/ResultTable";

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";

const AdminResults = () => {
  const [results, setResults] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  // ✅ fetch analytics
  useEffect(() => {
    const token = localStorage.getItem("token")
    api.get("/submit/analytics",{
      headers:{Authorization: `Bearer ${token}`}
    })
      .then(res => setAnalytics(res.data))
      .catch(err => console.log(err));
  }, []);

  // ✅ fetch results table
  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/submit", {
        headers: {Authorization: `Bearer ${token}`}
      });
      setResults(res.data.data);
    } catch (err) {
      console.log("Results not found", err);
    }
  };

  const handleDelete = async (id) => {
     const token = localStorage.getItem("token");
    try {
      await api.delete(`/submit/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
      });
      fetchResults();
    } catch (err) {
      console.log("Delete failed", err);
    }
  };

  // ✅ cards data
  const statsCards = analytics
    ? [
        {
          title: "Avg Score",
          value: analytics.averageScore + "%",
          icon: <FaArrowTrendUp />,
          color: "green"
        },
        {
          title: "Pass Rate",
          value: analytics.passingRate + "%",
          icon: <FaCheckCircle />,
          color: "purple"
        },
        {
          title: "Top Score",
          value: analytics.maxScore + "%",
          icon: <MdEmojiEvents />,
          color: "orange"
        }
      ]
    : [];

  return (
    <div className="bg-background-light min-h-screen font-display">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-[calc(100vh-72px)] bg-white sticky top-[72px]">
          <Sidebar />
        </aside>

        {/* Main */}
        <main className="flex-1 py-8 px-6 mx-10">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">

            {/* Page title */}
            <div>
              <h1 className="text-4xl font-black">
                Results & Performance
              </h1>
              <p className="text-slate-500">
                Student assessment analytics overview
              </p>
            </div>

            {/* Stats */}
            <StatsGrid stats={statsCards} />

            {/* Table */}
            <ResultTable
              results={results}
              onDelete={handleDelete}
            />

          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminResults;
