import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../src/pages/Home"
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import AdminDashboard from "./pages/AdminDashbaord";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile"
import InstructorDashboard from "./pages/InstructorDashboard"
import Not404Page from "./pages/Not404Page"
import StdManagement from './pages/StdManagement'
import InstManagement from "./pages/InstManagement"
import EditUser from "./pages/EditUser"
import Courses from "./pages/Courses"
import PostCourses from "./pages/PostCourses"
import CourseDetails from "./pages/CourseDetails"
import ManageCourses from "./pages/ManageCourses"
import PostAllQuestions from "./pages/PostAllQuestions"
import TestsManagement from "./pages/TestManagement"
import Announcements from "./pages/Announcements";
import DemoTest from "./pages/DemoTest"
import SubjectiveTest from "./pages/SubjectiveTest"
import ObjectiveTest from "./pages/ObjectiveTest"
import ResultDashboard from "./pages/ResultDashboard"
import PostAnnouncement from "./pages/PostAnnouncement";
import ProtectedRoute from "../src/util/ProtectedRoute"
import UnAuthorisedPage from "../src/pages/UnAuthorisedPage"


function App() {
  return (

    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-300">
      <Router>
        <Routes>
          <Route path="/unauthorized" element={<UnAuthorisedPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminDashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/userDashboard" element={
            <ProtectedRoute allowedRoles={["Student"]}>
              <UserDashboard />
            </ProtectedRoute>
          } />
          <Route path="/instrctorDashbord" element={
            <ProtectedRoute allowedRoles={["Instructor"]}>
              <InstructorDashboard />
            </ProtectedRoute>
          } />
          <Route path="/UserProfile" element={
            <ProtectedRoute allowedRoles={["Instructor", "Student", "admin"]}>
              <UserProfile />
            </ProtectedRoute>
          } />
          <Route path="/usermanagement" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              < StdManagement />
            </ProtectedRoute>
          } />
          <Route path="/InstManagement" element={
            <ProtectedRoute allowedRoles={["admin"]}>
              < InstManagement />
            </ProtectedRoute>
          } />
          <Route path="/edituser/:id" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <EditUser />
            </ProtectedRoute>

          } />
          <Route path="/courses" element={<Courses />} />
          <Route path="/postcourses" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <PostCourses />
            </ProtectedRoute>
          } />
          <Route path="/postcourses/:id" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <PostCourses />
            </ProtectedRoute>
          } /> {/* edit mode */}
          <Route path="/coursedetails/:id" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin", "Student"]}>
              <CourseDetails />
            </ProtectedRoute>
          } />
          <Route path="/managecourse" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <ManageCourses />
            </ProtectedRoute>} />
          <Route path="/postquestions" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <PostAllQuestions />
            </ProtectedRoute>
          } />
          <Route path="/editquestion/:courseId/:id" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <PostAllQuestions />
            </ProtectedRoute>

          } />
          {/* <Route path="/postquestions/:id" element={<PostAllQuestions />} /> edit test */}
          <Route path="/tests" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <TestsManagement />
            </ProtectedRoute>
          } />
          <Route path="/announcement" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <Announcements />
            </ProtectedRoute>
          } />
          <Route path="/demo" element={<DemoTest />} />
          <Route path="/objective" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin", "Student"]}>
              <ObjectiveTest />
            </ProtectedRoute>
          } />
          <Route path="/subjective" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin", "Student"]}>
              <SubjectiveTest />
            </ProtectedRoute>} />
          <Route path="/results" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <ResultDashboard />
            </ProtectedRoute>
          } />
          <Route path="/postannouncement" element={
            <ProtectedRoute allowedRoles={["Instructor", "admin"]}>
              <PostAnnouncement />
            </ProtectedRoute>
          } />
          <Route path="/postannouncement/:id" element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <PostAnnouncement />
            </ProtectedRoute>
          } />
          {/* edit page */}

          <Route path="*" element={<Not404Page />} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;
