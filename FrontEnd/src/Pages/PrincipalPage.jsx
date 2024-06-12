// src/components/PrincipalPage.js
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import { FaGlobe, FaFacebook, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import logo from "../assets/logo_jaz.png";
import presidenteImg from "../assets/image.jpg";
import escudo from "../assets/escudo.jpg"; // Asegúrate de que la ruta sea correcta
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
            {/* Content */}
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

                {/* Profiles Section */}
                <div className="flex flex-col items-center">
                    <div className="text-center my-8">
                        <h1 className="text-2xl font-bold">San Juan del mesquital su historia y sus raíces</h1>
                        <p>Escrito por: ING. Mario Garduño Galvan</p>
                        <img src="book-image.png" alt="Book" className="my-4" />
                        <p>
                            El conocer el pasado histórico emprenden acciones que generen el amor y entendimiento entre la
                            sociedad, para que se desarrolle una comunidad más participativa y menos enajenada por ideas nefastas y
                            materialistas.
                        </p>
                    </div>

                    <div className="w-full flex justify-center overflow-hidden">
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                className={`flex-none w-full p-4 ${index === currentIndex ? 'block' : 'hidden'}`}
                            >
                                <div className="shadow-lg p-6 text-center rounded-lg">
                                    <img
                                        src={profile.image}
                                        alt={`Profile of ${profile.name}`}
                                        className="w-24 h-24 mx-auto rounded-full"
                                    />
                                    <p className="mt-4 text-xl font-semibold">{profile.name}</p>
                                    <p className="text-gray-500">{profile.role}</p>
                                    <p className="mt-2">{"★".repeat(profile.rating)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-4 space-x-2">
                        {profiles.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-4 w-4 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalPage;
