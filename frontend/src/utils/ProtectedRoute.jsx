import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  // token checking (getting)
  const token = localStorage.getItem("token");

  // user checking 
  const user = JSON.parse(localStorage.getItem("user"));

  // Agar user login hi nahi then shoe login page
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  //  Role checking main thing done hare
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // if Sab ok → page show karo    
  return children;
};

export default ProtectedRoute;
