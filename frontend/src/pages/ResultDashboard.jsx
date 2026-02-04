
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
    api.get("/submit/analytics", {
      headers: { Authorization: `Bearer ${token}` }
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
        headers: { Authorization: `Bearer ${token}` }
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
        headers: { Authorization: `Bearer ${token}` }
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
    <div className="flex h-screen bg-background-light dark:bg-background-dark">

      <Sidebar />

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

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

  );
};

export default AdminResults;
