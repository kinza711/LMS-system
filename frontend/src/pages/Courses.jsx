import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import AllCourses from "../components/user/userCoursepages/AllCourses"
function Courses() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-300">
      <Navbar /> 
       {/* if user not found then show this componnet else hide it */}
      <AllCourses/>
      <Footer />
    </div>
  );
}

export default Courses;
