/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// /src/Pages/Client/carrito_prestamo.jsx

import React, { useState, useEffect } from 'react';
import HeaderClient from '../../components/user/HeaderClient.jsx';
import backgroundImage from '../../assets/gif/imagen_interior/fondo.gif'; // Asegúrate de ajustar la ruta de la imagen

const CarritoPrestamo = () => {
  const [daysRemaining, setDaysRemaining] = useState(8);
  const [theme, setTheme] = useState('light');
  
  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
   
  useEffect(() => {
    const interval = setInterval(() => {
      setDaysRemaining((prevDays) => (prevDays > 0 ? prevDays - 1 : 0));
    }, 86400000); // Intervalo de 1 día en milisegundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <HeaderClient changeTheme={changeTheme} theme={theme} />
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col space-y-4 p-4">
            <div className="bg-gray-500 bg-opacity-30 backdrop-blur-md rounded-lg p-4 text-justify w-96 h-28">
              <h2 className="text-lg font-bold">libro1</h2>
              <p>Contenido de la libro 1</p>
              {/* <div className="absolute bottom-0 left-80 m-4 p-4 bg-gray-500 bg-opacity-30 backdrop-blur-md rounded-lg"> */}
          <h2 className="text-lg font-bold left-80">Días Restantes: {daysRemaining}</h2>
       
            </div>
            <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-4 text-center">
              <h2 className="text-lg font-bold">Libro 2</h2>
              <p>Contenido de la libro 2</p>
            </div>
            <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-4 text-center">
              <h2 className="text-lg font-bold">Libro 2</h2>
              <p>Contenido de la libro 2</p>
            </div>
          </div>
          <div className="relative w-1/2 h-96 rounded-96 overflow-hidden shadow-lg bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-30 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CarritoPrestamo;
