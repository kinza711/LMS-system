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

function App() {
  return (

    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-300">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/instrctorDashbord" element={<InstructorDashboard />} />
          <Route path="/UserProfile" element={<UserProfile />} />

          <Route path="/usermanagement" element={< StdManagement />} />
          <Route path="/InstManagement" element={< InstManagement />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/postcourses" element={<PostCourses />} />
          <Route path="/postcourses/:id" element={<PostCourses />} /> {/* edit mode */}
          <Route path="/coursedetails/:id" element={<CourseDetails />} />
          <Route path="/managecourse" element={<ManageCourses />} />
          <Route path="/postquestions" element={<PostAllQuestions />} />
          <Route path="/editquestion/:courseId/:id" element={<PostAllQuestions />} />
          {/* <Route path="/postquestions/:id" element={<PostAllQuestions />} /> edit test */}
          <Route path="/tests" element={<TestsManagement />} />
          <Route path="/announcement" element={<Announcements />} />
          <Route path="/demo" element={<DemoTest />} />
          <Route path="/objective" element={<ObjectiveTest />} />
          <Route path="/subjective" element={<SubjectiveTest />} />
          <Route path="/results" element={<ResultDashboard />} />
          <Route path="/postannouncement" element={<PostAnnouncement />} />
          <Route path="/postannouncement/:id" element={<PostAnnouncement />} />

          <Route path="*" element={<Not404Page />} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;
