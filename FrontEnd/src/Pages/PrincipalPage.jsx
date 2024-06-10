/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import logo from "../assets/logo_jaz.png";

const PrincipalPage = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: black)').matches) {
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
    <div className="bg-gray-100 p-4 dark:bg-neutral-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md mb-4">
        <img src={logo} alt="Logo" className="h-24 py-5" />
        <nav className="hidden md:flex space-x-10 text-black text-lg">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Personal</a>
          <a href="#" className="hover:text-blue-600">Buzon</a>
          <a href="#" className="hover:text-blue-600">Opiniones</a>
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <button className="text-2xl font-mono text-white bg-blue-600 hover:bg-blue-500 italic rounded-full w-36 h-12">Empezar</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            {menuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md">
          <a href="#" className="block py-2 hover:text-blue-600">Home</a>
          <a href="#" className="block py-2 hover:text-blue-600">Personal</a>
          <a href="#" className="block py-2 hover:text-blue-600">Buzon</a>
          <a href="#" className="block py-2 hover:text-blue-600">Opiniones</a>
          <button className="mt-4 w-full text-2xl font-mono text-white bg-blue-600 hover:bg-blue-500 italic rounded-full h-12">Empezar</button>
        </nav>
      )}
    </div>
  );
};

export default PrincipalPage;
