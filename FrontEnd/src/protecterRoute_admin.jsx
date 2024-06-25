// src/protectedRoute_admin.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext1.jsx"; // Use the correct path
import HeaderAdmin from "./components/HeaderAdmin.jsx"; // Import the new HeaderAdmin

function ProtectedRoute() {
    const { loading, isAuth } = useAuth();
  
    if (loading) return <div>Cargando...</div>; // Muestra un spinner de carga si todavía se está cargando
  
    if (!isAuth && !loading) return <Navigate to="/PrincipalPage" replace />; // Redirige si no está autenticado
  
    return (
      <div>
        <HeaderAdmin /> {/* Renderiza el encabezado de administrador */}
        <Outlet /> {/* Renderiza las rutas anidadas */}
      </div>
    );
  }
  

export default ProtectedRoute;
