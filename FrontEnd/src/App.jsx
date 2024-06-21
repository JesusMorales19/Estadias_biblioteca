// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Consultas from "./Pages/Admin/consultas";
import Bandeja from "./Pages/Admin/Bandeja";
import Dashboard from "./Pages/Admin/HomeAdmin";
import Registros from "./Pages/Admin/registro/estilo_registro";
import ProtectedRoute_admin from "./protecterRoute_admin";
import PrincipalPage from "./Pages/PrincipalPage";
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route path="/PrincipalPage" element={<PrincipalPage />} />
          {/* Enlace para dirigirse a la página de inicio de sesión */}
          <Route path="/login" element={<Login />} />
          
          <Route element={<ProtectedRoute_admin />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path='/Bandeja' element={<Bandeja />} />
            <Route path='/Registros' element={<Registros />} />
            <Route path='/Consulta' element={<Consultas />} />
          </Route>
          
          {/* Rutas protegidas para clientes */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
