import React, { useEffect, useState } from "react";
import Sidebar from "../components/admin/Sidebar"
import Header from "../components/admin/Header";
import QuickActions from "../components/admin/QuickActions";
import api from "../services/api"
//import TopStudentsTable from "../components/admin/TopStudentsTable";
import UserStats from "../components/admin/userManagemnt/UserStats";
import Trendchart from "../components/Trendchart";

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
      //pendingRequests: { label: "Pending Requests", value: 0, color: "text-orange-500" },
    });
  }, [students, instructors, users]);


  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/allusers", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(res.data.data);
    } catch (err) {
      console.log("user data not found", err);
    }

  }

  const fetchStudents = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/students", {
        headers: { Authorization: `Bearer ${token}` }
      })
      setStudents(res.data.data)
    } catch (err) {
      console.log("studenst not found", err);
    }
  }


  const fetchInstructors = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/inst", {
        headers: { Authorization: `Bearer ${token}` }
      })
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
          <UserStats stats={stats} />

          {/* Charts & Secondary Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6  mb-6">
            <div className="xl:col-span-2 items-start justify-center flex flex-col bg-urface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 min-h-[300px]">
           

              <Trendchart/>
            </div>

            <QuickActions />
          </div>

        

          {/* <TopStudentsTable /> */}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;


