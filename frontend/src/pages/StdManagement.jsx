import React, { useEffect, useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";
import UserStats from "../components/admin/userManagemnt/UserStats";
import UserTable from "../components/admin/userManagemnt/UserTable";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const StdManagement = () => {
    const [users, setUsers] = useState([]);
    const [students, setStudents] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [stats, setStats] = useState({}); // stats state as object

    // Fetch all data on mount
    useEffect(() => {
        fetchStudents();
        fetchInstructors();
        fetchUsers();
    }, []);

    // Update stats whenever any data changes
    useEffect(() => {
        setStats({
            totalUsers: { label: "Total Users", value: users.length },
            totalStudents: { label: "Total Students", value: students.length, color: "text-green-500" },
            totalInstructors: { label: "Total Instructors", value: instructors.length, color: "text-red-500" },
            //pendingRequests: { label: "Pending Requests", value: 0, color: "text-orange-500" },
        });
    }, [students, instructors, users]);

    const fetchStudents = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await api.get("/students",{
                headers: {Authorization: `Bearer ${token}`}
            });
            // backend me data object me hai
            setStudents(res.data.data);
        } catch (err) {
            console.error("Error fetching students:", err);
            
        }
    };
    // fetxh  all users
    const fetchUsers = async () => {
        const token =localStorage.getItem("token");
        try {
            const res = await api.get("/allusers",{
                headers: {Authorization: `Bearer ${token}`}
            });
            // backend me data object me hai
            setUsers(res.data.data);
        } catch (err) {
            console.error("Error fetching students:", err);
        }
    };

    //  fetch instructors
    const fetchInstructors = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await api.get("/inst",{
                headers: {Authorization: `Bearer ${token}`}
            });
            // backend me data object me hai
            setInstructors(res.data.data);
        } catch (err) {
            console.error("Error fetching students:", err);
        }
    };

    const  navigate = useNavigate();
    const handleEdit = (userId) => {
  navigate(`/edituser/${userId}`);
};

    const handleDelete = async (userId) => {
        const token = localStorage.getItem("token")
        console.log("Delete user:", userId);
        try {
            await api.delete(`/students/${userId}`,{
                headers: {Authorization: `Bearer ${token}`}
            });
            // Refresh data after delete
            fetchStudents();
            fetchInstructors();
            fetchUsers();
        } catch (err) {
            console.error("Error deleting user:", err);
            alert(err)
        }
    };


    return (
        <div className="flex h-screen bg-background-light dark:bg-background-dark">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <div className="flex-col space-y-5 overflow-y-auto p-6 md:p-8">
                    {/* Stats Section */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[#0d141b] dark:text-white text-3xl font-extrabold leading-tight tracking-tight">Students Management</h1>
                        <p className="text-[#4c739a] text-base font-normal">Manage platform administrators, instructors, and student access levels.</p>
                    </div>
                    <UserStats stats={stats} />

                    {/* User Table */}
                    <UserTable users={students}  onEdit={handleEdit} onDelete={handleDelete} />

                </div>
            </main>
        </div>
    );
};

export default StdManagement;
