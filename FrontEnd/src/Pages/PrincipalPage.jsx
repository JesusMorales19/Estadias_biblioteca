// src/components/PrincipalPage.js
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import { FaGlobe, FaFacebook, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import logo from "../assets/logo_jaz.png";
import CarouselDefault from "../components/carousel";
import metas from "../assets/metas.png";
import alcances from "../assets/alcances.png";
import logros from "../assets/logros.png"; 
import presidenteImg from "../assets/hassan.png";
import escudo from "../assets/escudo.jpg"; 
import profilePlaceholder from "../assets/people.jpg"; // Ruta de la imagen placeholder

const profiles = [
    {
        name: 'Carlos Alarcon',
        role: 'Director de biblioteca',
        rating: 5,
        image: profilePlaceholder
    },
    {
        name: 'Saul Enrique Rios Hernandez',
        role: 'Bibliotecario',
        rating: 5,
        image: profilePlaceholder
    },
    {
        name: 'Flor Rocio Favela Vela',
        role: 'Bibliotecaria',
        rating: 5,
        image: profilePlaceholder
    }
    // Agrega más perfiles aquí si es necesario
];

const PrincipalPage = () => {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: black)').matches) {
            return "dark";
        }
        return "light";
    });

    const [menuOpen, setMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const handleDotClick = (index) => {
        setCurrentIndex(index);
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
                        <h2 className="text-green-700 text-lg font-semibold text-center">Mensaje del presidente</h2>
                        <img src={presidenteImg} alt="Presidente" className="w-full h-auto mb-4" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                    </div>
                    <div className="flex flex-col w-full max-w-5xl">
                        <div className="w-full flex flex-col items-center">
                            <h2 className="text-blue-700 text-lg font-semibold">Bibliotecarios</h2>
                            <div className="flex flex-wrap justify-around items-center mt-4 space-y-8">
                                {profiles.map((profile, index) => (
                                    <div key={index} className="flex flex-col items-center p-4">
                                        <img src={profile.image} alt={profile.name} className="w-32 h-32 rounded-full mb-4" />
                                        <h3 className="text-center font-bold">{profile.name}</h3>
                                        <p className="text-center text-gray-600">{profile.role}</p>
                                        <div className="flex mt-1">
                                            {[...Array(profile.rating)].map((star, i) => (
                                                <svg key={i} className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto text-center">
                    <img src={escudo} alt="Escudo" className="w-16 mx-auto mb-4" />
                    <h2 className="text-lg font-bold">Nuestra biblioteca</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:text-gray-400">
                            <FaGlobe />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <FaPhone />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <FaEnvelope />
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PrincipalPage;
