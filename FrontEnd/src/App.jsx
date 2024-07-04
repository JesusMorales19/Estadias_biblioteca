import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import Consultas from './Pages/Admin/Consultas/Consultas.jsx';
import Bandeja from "./Pages/Admin/Bandeja.jsx";
import Dashboard from "./Pages/Admin/HomeAdmin.jsx";
import Registros from "./Pages/Admin/registro/estilo_registro.jsx";
import Usuarios from './Pages/Client/ejemplo.jsx';
import PrincipalPage from "./Pages/PrincipalPage.jsx";
import { CheckScreen } from './components/checkPage.jsx';
import { AuthProvider } from './context/AuthContext1.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProtectedRoute from './utils/protected.jsx';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PrincipalPage />} />
                        <Route path="/PrincipalPage" element={<PrincipalPage />} />
                        
                        <Route path="/login" element={<Login />} />
                        <Route path="/verificate" element={<CheckScreen />} />
                        
                        <Route element={<ProtectedRoute roles={['admin']} />}>
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path='/Bandeja' element={<Bandeja />} />
                            <Route path='/Registros' element={<Registros />} />
                            <Route path='/Consulta' element={<Consultas />} />
                        </Route>
                        
                        <Route element={<ProtectedRoute roles={['client']} />}>
                            <Route path='/Usuarios' element={<Usuarios />} />
                        </Route>
                        
                        <Route path="/verifyed" element={<CheckScreen />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
