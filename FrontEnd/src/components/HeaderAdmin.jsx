// src/components/HeaderAdmin.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Import the authentication context
import logo from '../assets/logo_jaz.png';

const HeaderAdmin = () => {
  // eslint-disable-next-line no-unused-vars
  const { logout, user } = useAuth(); // Destructure logout and user from context
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
    logout();
  };

  return (
    <div className="relative flex flex-col justify-between items-center bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md mb-4">
      <div className="flex justify-between items-center w-full">
        <img src={logo} alt="Logo" className="h-24 py-5" />
        <nav className="hidden md:flex space-x-10 text-black text-xl">
          <Link to="/" className="hover:text-blue-600 text-center font-serif">
            Home
          </Link>
          <Link to="/bandeja" className="hover:text-blue-600 text-center font-serif">
            Bandeja
          </Link>
          <Link to="/registros" className="hover:text-blue-600 text-center font-serif">
            Registros
          </Link>
          <Link to="/libros" className="hover:text-blue-600 text-center font-serif">
            Libros
          </Link>
          <button onClick={handleLogout} className="hover:text-blue-600 text-center font-serif">
            Salir
          </button>
        </nav>
        <div className="flex items-center space-x-2">
          <button className="text-xl text-white" onClick={changeTheme}>
            {theme === 'dark' ? '☀' : '🌙'}
          </button>
          <button className="text-xl text-white">👤</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black z-50">
            {menuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md w-full mt-4">
          <Link to="/" className="block py-2 hover:text-blue-600">
            Home
          </Link>
          <Link to="/bandeja" className="block py-2 hover:text-blue-600">
            Bandeja
          </Link>
          <Link to="/registros" className="block py-2 hover:text-blue-600">
            Registros
          </Link>
          <Link to="/libros" className="block py-2 hover:text-blue-600">
            Libros
          </Link>
          <button onClick={handleLogout} className="block py-2 hover:text-blue-600">
            Salir
          </button>
        </nav>
      )}
    </div>
  );
};

export default HeaderAdmin;
