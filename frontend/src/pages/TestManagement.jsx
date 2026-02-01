
import { useEffect, useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import TestStats from "../components/admin/TestStats";
// import FiltersBar from "../components/admin/FiltersBar";
import TestsTable from "../components/admin/TestsTable";
import api from "../services/api";

const TestsManagement = () => {

  const [tests, setTests] = useState([]);
  const [questionType, setQuestionType] = useState("objective"); // 🔹 TOGGLE STATE

  const [filters, setFilters] = useState({
    search: "",
    course: "All",
    difficulty: "All",
  });

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchTests = async () => {
    const token = localStorage.getItem("token")
    try {
      const res = await api.get("/questions", {
        headers: {Authorization: `Bearer ${token}`}
      });
      setTests(res.data.data);
    } catch (err) {
      console.log("Error fetching questions", err);
    }
  };

  // 🔹 DELETE
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token")
    try {
      await api.delete(`/questions/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
     } );
      fetchTests();
    } catch (err) {
      console.log("Delete failed", err);
    }
  };

  // 🔹 FILTER BY QUESTION TYPE
  const filteredTests = tests.filter(
    (test) => test.questionType === questionType
  );

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          <TestStats />

          {/* 🔁 TOGGLE BUTTONS */}
          <div className="flex gap-3">
            <button
              onClick={() => setQuestionType("objective")}
              className={`px-4 py-2 rounded-lg text-sm font-bold ${
                questionType === "objective"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              Objective
            </button>

            <button
              onClick={() => setQuestionType("subjective")}
              className={`px-4 py-2 rounded-lg text-sm font-bold ${
                questionType === "subjective"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              Subjective
            </button>
          </div>

          {/* <FiltersBar filters={filters} setFilters={setFilters} /> */}

          {/* 🔹 TABLE */}
          <TestsTable
            tests={filteredTests}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  );
};

export default TestsManagement;

