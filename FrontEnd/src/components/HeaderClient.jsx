// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import logo from "../assets/logo_jaz.png";

const HeaderClient = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: white)').matches) {
      return "dark";
    }
    return "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);
 
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex flex-col justify-between items-center bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md mb-4">
      <div className="flex justify-between items-center w-full">
        <img src={logo} alt="Logo" className="h-24 py-5" />
        <nav className="hidden md:flex space-x-10 text-black text-xl">
          <a href="#" className="hover:text-blue-600 text-center font-serif">Home</a>
          <a href="#" className="hover:text-blue-600 text-center font-serif">Bandeja</a>
          <a href="#" className="hover:text-blue-600 text-center font-serif">Registros</a>
          <a href="#" className="hover:text-blue-600 text-center font-serif">Libros</a>
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
          <a href="#" className="block py-2 hover:text-blue-600">Home</a>
          <a href="#" className="block py-2 hover:text-blue-600">Personal</a>
          <a href="#" className="block py-2 hover:text-blue-600">Buzon</a>
          <a href="#" className="block py-2 hover:text-blue-600">Opiniones</a>
        </nav>
      )}
    </div>
  );
};

export default HeaderClient;
