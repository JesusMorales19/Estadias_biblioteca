/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import logo from "../assets/logo_jaz.png";
import CarouselDefault from "../componente/carousel.jsx";
import metas from "../assets/metas.png";
import alcances from "../assets/alcances.png";
import logros from "../assets/logros.png"; 
import presidenteImg from "../assets/hassan.png";
import escudo from "../assets/escudo.jpg"; 
import { FaGlobe, FaFacebook, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

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
    <div className="bg-gray-50 p-4 dark:bg-neutral-900 min-h-screen relative">
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

      <CarouselDefault />

      {/* Sección de metas, alcances y logros */}
      <div className="flex flex-col md:flex-row justify-around items-start mt-8 space-y-8 md:space-y-0 relative z-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:w-1/2">
          <div className="flex flex-col items-center">
            <img src={metas} className="w-20 md:w-40 lg:w-60 object-contain" alt="Metas" />
            <h1 className="text-green-500 font-serif text-xl font-semibold mt-2">Metas</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={alcances} className="w-20 md:w-40 lg:w-60 object-contain" alt="Alcances" />
            <h1 className="text-blue-500 font-serif text-xl font-semibold mt-2">Alcances</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <img src={logros} className="w-20 md:w-40 lg:w-60 object-contain" alt="Logros" />
            <h1 className="text-yellow-500 font-serif text-xl font-semibold mt-2">Logros</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Formulario */}
        <div className="relative z-10 mx-auto mt-4 mb-8 w-full md:w-1/3 bg-gray-100 p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Comparte tus opiniones con nosotros</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                Correo
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="correo"
                type="email"
                placeholder="Correo"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mensaje"
                placeholder="Mensaje"
                rows="5"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enviar
              </button>
            </div>
          </form>

          {/* Círculos de fondo */}
          <div className="hidden md:block absolute top-0 left-0 w-32 h-32 bg-green-300 rounded-full opacity-50 -z-10"></div>
          <div className="hidden md:block absolute top-1/2 left-1/3 w-48 h-48 bg-yellow-300 rounded-full opacity-50 -z-10"></div>
          <div className="hidden md:block absolute bottom-0 right-0 w-32 h-32 bg-pink-300 rounded-full opacity-50 -z-10"></div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-5xl p-4">
          <div className="text-center lg:text-left lg:w-1/3 lg:mr-8 mb-8 lg:mb-0">
            <h2 className="text-green-700 text-lg font-semibold text-center">presidente municipal:</h2>
            <p className="text-black text-lg">hassan silvano garduño serrano</p>
            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti voluptas autem inventore temporibus officiis aliquid in quis dolores, soluta explicabo, sunt odio magnam quia eius, illum doloremque maiores magni alias.</p>
            <div className="flex justify-center lg:justify-center space-x-4 mt-4">
              <button className="text-blue-500 text-2xl"><FaGlobe /></button>
              <button className="text-blue-700 text-2xl"><FaFacebook /></button>
              <button className="text-blue-700 text-2xl"><FaPhone /></button>
              <button className="text-gray-400 text-2xl"><FaEnvelope /></button>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
            <img src={presidenteImg} alt="Presidente Municipal" className="w-64 h-64 object-cover rounded-lg shadow-md" />
          </div>
          <div className="text-center lg:text-right lg:w-1/3 lg:ml-8 justify-center">
            <h2 className="text-black text-lg font-semibold text-center">¡hacer mas por la gente!</h2>
            <img src={escudo} alt="Escudo" className="w-32 h-32 mx-auto my-4" />
            <p className="text-black text-center">somos un municipio unido por la humildad, trabajo y compromiso</p>
            <div className="flex justify-center lg:justify-center space-x-4 mt-4">
              <button className="text-blue-700 text-2xl"><FaFacebook /></button>
              <button className="text-2xl rounded-lg" style={{ 
                background: 'linear-gradient(5deg, yellow, red, blue)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                justifyContent: 'center'
              }}>
                <FaInstagram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalPage;
