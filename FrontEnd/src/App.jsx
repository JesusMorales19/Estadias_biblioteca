import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Consultas from "./Pages/Admin/consultas";
import Bandeja from "./Pages/Admin/Bandeja";
import Dashboard from "./Pages/Admin/HomeAdmin"; // Asumiendo que HomeAdmin es tu página de inicio para administradores
import Registros from "./Pages/Admin/registro/estilo_registro";
import ProtectedRoute_admin from "./protecterRoute_admin";
import ProtectedRoute_client from "./protectedRoute_client";
import PrincipalPage from "./Pages/PrincipalPage";
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta predeterminada */}
          <Route path="/" element={<PrincipalPage />} />
          <Route path="/PrincipalPage" element={<PrincipalPage />} />
          <Route path="/login" element={<Login />} />
          
          {/* Rutas protegidas para administradores */}
          <Route element={<ProtectedRoute_admin />}>
            <Route path='/Dashboard' element={<Dashboard />} /> {/* HomeAdmin */}
            <Route path='/Bandeja' element={<Bandeja />} />
            <Route path='/Registros' element={<Registros />} />
            <Route path='/Consulta' element={<Consultas />} />
          </Route>
          
          {/* Rutas protegidas para clientes */}
          <Route element={<ProtectedRoute_client />}>
            {/* Define client protected routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
