/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'chart.js/auto';

import logo from "../assets/logo_jaz.png";
import CarouselDefault from "../components/carousel.jsx";
import metas from "../assets/metas.png";
import alcances from "../assets/alcances.png";
import logros from "../assets/logros.png"; 
import presidenteImg from "../assets/hassan.png";
import escudo from "../assets/escudo.jpg"; 
import { FaGlobe, FaFacebook, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import flor from "../assets/flor.jpg";
import charlie from "../assets/charlie.jpg";
import raul from "../assets/raul.jpg";
import irma from "../assets/irma.jpg";
import paty from "../assets/paty.jpg";
import ade from "../assets/libro_adel.jpg";
import reb from "../assets/libro_reb.jpg";
import Footer from "../components/footer.jsx";

const profiles = [

  {
      name: 'Carlos Alarcon',
      role: 'Director de biblioteca',
      rating: 5,
      image: charlie
  },
  {
    name: 'Irma Martinez Berume',
    role: 'Encargada',
    rating: 5,
    image: irma
  },
  {
    name: 'Flor Rocio Favela Vela',
    role: 'Bibliotecaria',
    rating: 5,
    image: flor
},
  {
      name: 'Saul Enrique Rios Hernandez',
      role: 'Bibliotecario',
      rating: 5,
      image: raul
  },

  {
    name:'Patricia Rendon',
    role: 'Bibliotecaria',
    rating: 5,
    image: paty
  }

];

const PrincipalPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const profilesPerPage = 3;
  const totalPages = Math.ceil(profiles.length / profilesPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
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
            {menuOpen ? '✖' : '☰'}
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

    



       {/* Contenedor principal */}
      <div className="flex flex-col-reverse md:flex-row justify-around items-start mt-8 space-y-8 md:space-y-0 relative z-10">
        {/* Sección de metas, alcances y logros */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:w-2/3 mx-auto">
          <div className="flex flex-col items-center">
            <img src={metas} className="w-20 md:w-40 lg:w-40 object-contain" alt="Metas" />
            <h1 className="text-green-500 font-serif text-xl font-semibold mt-2">Metas</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={alcances} className="w-20 md:w-40 lg:w-40 object-contain" alt="Alcances" />
            <h1 className="text-blue-500 font-serif text-xl font-semibold mt-2">Alcances</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <img src={logros} className="w-20 md:w-40 lg:w-40 object-center" alt="Logros" />
=======
          <div className="flex flex-col items-center col-span-1 md:col-span-2">
            <img src={logros} className="w-20 md:w-40 lg:w-40 object-contain" alt="Logros" />
>>>>>>> 6d2021d5ce922b02cc329cae311351e93b204951
            <h1 className="text-yellow-500 font-serif text-xl font-semibold mt-2">Logros</h1>
            <p className=" flex flex-col items-center text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

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
          <div className="hidden md:block absolute top-3/4 left-2/3 w-24 h-24 bg-red-300 rounded-full opacity-50 -z-10"></div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-5xl p-4">
          <div className="text-center lg:text-left lg:w-1/3 lg:mr-8 mb-8 lg:mb-0">
            <h2 className="text-green-700 text-lg font-semibold text-center">Presidente Municipal:</h2>
            <p className="text-black text-lg">Hassan Silvano Garduño Serrano</p>
            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti voluptas autem inventore temporibus officiis aliquid in quis dolores, soluta explicabo, sunt odio magnam quia eius, illum doloremque maiores magni alias.</p>
          
          </div>
          <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
            <img src={presidenteImg} alt="Presidente Municipal" className="w-64 h-64 object-cover rounded-lg shadow-md" />
          </div>
          <div className="text-center lg:text-right lg:w-1/3 lg:ml-8 justify-center">
            <h2 className="text-black text-lg font-semibold text-center">¡Hacer mas por la gente!</h2>
<<<<<<< HEAD
            <img src={escudo} alt="Escudo" className="w-32 h-32 mx-auto my-4" />
=======
            <img src={logo} alt="Escudo" className="w-50 h-32 mx-auto my-4" />
>>>>>>> 6d2021d5ce922b02cc329cae311351e93b204951
            <p className="text-black text-center">Somos un municipio unido por la humildad, trabajo y compromiso</p>
            <div className="flex justify-center lg:justify-center space-x-4 mt-4">
            
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-gray-200 p-8 shadow-lg flex items-center text-black py-10">
      <div className="w-full flex">
        <div className="w-2/3 pr-8">
          <h1 className="text-5xl font-serif mb-4 hover:font-mono">San Juan del mesquital</h1>
          <h2 className="text-3xl italic mb-4 hover:text-gray-700">su historia y sus raíces</h2>
          <p className="text-xl mb-8 hover:text-gray-700">escrito por: ING. Mario Garduño Galvan</p>
          <p className="text-lg hover:text-gray-700">
            El conocer el pasado histórico emprenden acciones que generen el amor y entendimiento entre la
            sociedad, para que se desarrolle una comunidad más participativa y menos enajenada por ideas nefastas y
            materialistas.
          </p>
        </div>
        <div className="w-1/3 flex flex-col items-start relative">
        
          <img src={reb} alt="Autor" className=" flex mb-9 absolute inset-0 z-10 w-3/4 h-auto" style={{ marginLeft: '-95px' }} />
          <img src={ade} alt="Libro Rebelde" className=" flex z-0 w-3/4 h-auto my-10"  style={{marginLeft:'80px' }} />
        </div>
      </div>
    </div>
      {/* Perfil de Personal */}
      <div className="relative z-10 mx-auto mt-4 mb-8 w-full md:w-2/3 bg-gray-100 p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Personal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profiles
            .slice(currentPage * profilesPerPage, (currentPage + 1) * profilesPerPage)
            .map((profile, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
                <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-semibold">{profile.name}</h3>
                <p className="text-gray-600">{profile.role}</p>
                <p className="text-yellow-500">{"★".repeat(profile.rating)}</p>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
       
    {/* Sección de contacto */}
    <div className="relative z-10 mx-auto mt-4 mb-8 w-full md:w-2/3 bg-gray-100 p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
        <div className="flex flex-col md:flex-row justify-around items-start">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <FaGlobe className="text-3xl text-blue-500 mb-2" />
            <p className="text-center">www.nuestraweb.com</p>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <FaFacebook className="text-3xl text-blue-600 mb-2" />
            <p className="text-center">@nuestrapagina</p>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <FaInstagram className="text-3xl text-pink-500 mb-2" />
            <p className="text-center">@nuestrapagina</p>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <FaPhone className="text-3xl text-green-500 mb-2" />
            <p className="text-center">123-456-7890</p>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <FaEnvelope className="text-3xl text-red-500 mb-2" />
            <p className="text-center">contacto@nuestraweb.com</p>
          </div>
        </div>
      </div>
         <Footer/>
    </div>
  );
};

export default PrincipalPage;
