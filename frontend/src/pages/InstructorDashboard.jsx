import React, { useEffect, useState } from "react";
import Sidebar from "../components/instructor/Sidebar"
import Header from "../components/instructor/Header";
import StateCards from "../components/instructor/StateCards";
import QuickActions from "../components/instructor/QuickActions";
//import RecentActivity from "../components/admin/RecentActivity";
import TopStudentsTable from "../components/instructor/TopStudentsTable";
import api from "../services/api"
import UserStats from "../components/admin/userManagemnt/UserStats";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchStudents();
    fetchInstructors();

  }, [])
  
  useEffect(() => {
    setStats({
      totalUsers: { label: "Total Users", value: users.length },
      totalStudents: { label: "Total Students", value: students.length, color: "text-green-500" },
      totalInstructors: { label: "Total Instructors", value: instructors.length, color: "text-red-500" },
      pendingRequests: { label: "Pending Requests", value: 0, color: "text-orange-500" },
    });
  }, [students, instructors, users]);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/allusers");
      setUsers(res.data.data);
    } catch (err) {
      console.log("user data not found", err);
    }

  }

  const fetchStudents = async () => {
    try {
      const res = await api.get("/students")
      setStudents(res.data.data)
    } catch (err) {
      console.log("studenst not found", err);
    }

  }

  const fetchInstructors = async () => {
    try {
      const res = await api.get("/inst")
      setInstructors(res.data.data)
    } catch (err) {
      console.log("instructor not found", err);
    }

  }
  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 space-y-5 overflow-y-auto p-6 md:p-8">
          {/* Stats Section */}
          {/* Stats Section */}
          <UserStats stats={stats} />

          {/* Charts & Secondary Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
            <div className="xl:col-span-2 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 min-h-[300px]">
              {/* Placeholder for chart */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Assessment Completion Trends</h3>
            </div>
            <QuickActions />
          </div>
          <TopStudentsTable />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
