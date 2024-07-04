// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext1.jsx';
import logo from '../assets/logo_jaz.png';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { IoLogOut, IoPencilOutline,   } from 'react-icons/io5';

const MySwal = withReactContent(Swal);

const HeaderAdmin = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: white)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    Swal.fire({
      title: 'Seguro de salir?',
      text: "Estás a punto de cerrar sesión",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };

  const handlePerfil = () => {
    MySwal.fire({
      title: 'User Information',
      html: (
        <div>
          <div className="relative flex flex-col items-center bg-white p-4 rounded-md shadow-md">
            <div className="flex flex-col items-center">
              <div className="rounded-full h-24 w-24 border-2 border-gray-300 mb-4"></div>
              <p>Nombre: John Doe</p>
              <p>Apellido: Doe</p>
              <p>Cel: 123-456-7890</p>
              <p>Dirección: 123 Main St</p>
            </div>
            <div className="flex mt-4 space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded"> <IoPencilOutline/></button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleLogout()}>
                <IoLogOut/>
              </button>
            </div>
          </div>
        </div>
      ),
      showConfirmButton: false
    });
  };

  return (
    <div className="relative flex flex-col justify-between items-center bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md mb-4">
      <div className="flex justify-between items-center w-full">
        <img src={logo} alt="Logo" className="h-24 py-5" />
        <nav className="hidden md:flex space-x-10 text-xl">
      <Link
        to="/Dashboard"
        className={`${
          location.pathname === '/Dashboard' ? 'text-blue-600' : 'text-black'
        } hover:text-blue-600 text-center font-serif`}
      >
        Home
      </Link>
      <Link
        to="/Bandeja"
        className={`${
          location.pathname === '/Bandeja' ? 'text-blue-600' : 'text-black'
        } hover:text-blue-600 text-center font-serif`}
      >
        Bandeja
      </Link>
      <Link
        to="/Registros"
        className={`${
          location.pathname === '/Registros' ? 'text-blue-600' : 'text-black'
        } hover:text-blue-600 text-center font-serif`}
      >
        Registros
      </Link>
      <Link
        to="/Consulta"
        className={`${
          location.pathname === '/Consulta' ? 'text-blue-600' : 'text-black'
        } hover:text-blue-600 text-center font-serif`}
      >
        Consultas
      </Link>
    </nav>
        <div className="flex items-center space-x-2">
          <button className="text-xl text-white" onClick={changeTheme}>
            {theme === 'dark' ? '☀' : '🌙'}
          </button>
          <button onClick={handlePerfil} className="text-xl text-white">👤</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black z-50">
            {menuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md w-full mt-4">
          <Link to="/Dashboard" className="block py-2 hover:text-blue-600">
            Home
          </Link>
          <Link to="/Bandeja" className="block py-2 hover:text-blue-600">
            Bandeja
          </Link>
          <Link to="/Registros" className="block py-2 hover:text-blue-600">
            Registros
          </Link>
          <Link to="/Consulta" className="block py-2 hover:text-blue-600">
            Consultas
          </Link>
        </nav>
      )}
    </div>
  );
};

export default HeaderAdmin;
