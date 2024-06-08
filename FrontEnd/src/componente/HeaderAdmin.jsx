// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo_jaz.png";

function HeaderAdmin() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="p-0 dark:bg-neutral-900 bg-transparent">
      {/* Header */}
      <div className="flex justify-between items-center bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md mb-4">
        <img src={logo} alt="Logo" className="h-24 py-5" />
        <nav className="flex space-x-10 text-black text-lg">
          <Link to="../Pages/Admin/HomeAdmin.jsx" className="hover:text-blue-500">Home</Link>
          <Link to="#" className="hover:text-blue-500">Bandeja</Link>
          <Link to="../Pages/Admin/registros.jsx" className="hover:text-blue-500">Registros</Link>
          <Link to="#" className="hover:text-blue-500">Libros</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <button className="text-xl text-white" onClick={changeTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="text-xl text-white">👤</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderAdmin;
