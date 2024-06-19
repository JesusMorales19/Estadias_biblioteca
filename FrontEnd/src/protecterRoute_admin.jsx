// src/protectedRoute_admin.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext"; // Use the correct path
import HeaderAdmin from "./components/HeaderAdmin"; // Import the new HeaderAdmin

function ProtectedRoute() {
  const { loading, isAuth } = useAuth();

  if (loading) return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-70 flex justify-center items-center">
      <div className="border-8 border-gray-300 border-t-blue-500 rounded-full w-20 h-20 animate-spin"></div>
    </div>
  );
  
  if (!isAuth && !loading) return <Navigate to="/PrincipalPage" replace />;

  return (
    <div>
      <HeaderAdmin /> {/* Replace SidePage with HeaderAdmin */}
      <Outlet />
    </div>
  );
}

export default ProtectedRoute;
