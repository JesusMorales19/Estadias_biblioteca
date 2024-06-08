// Pages/Admin/Consultas.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import HeaderAdmin from '../../componente/HeaderAdmin';

const Consulta = () => {
  const [activeTab, setActiveTab] = useState('Prestados');

  const data = {
    Prestados: [
      { titulo: 'Molecularity III', usuario: 'User001', nombre: 'Jose', apellidos: 'Calvario Adame', telefono: '2309876891', direccion: 'Allende #270' },
      { titulo: 'La celestina', usuario: 'User002', nombre: 'Eddy', apellidos: 'herrera vualta', telefono: '618254856', direccion: 'centauro #922' },
    ],
    Perdidos: [
      // Datos para la tabla Perdidos
    ],
    Donados: [
      // Datos para la tabla Donados
    ]
  };

  const getBackgroundClass = () => {
    switch (activeTab) {
      case 'Prestados':
        return 'from-blue-500 via-slate-50 to-blue-500 dark:from-blue-700 dark:via-black dark:to-blue-700';
      case 'Perdidos':
        return 'from-red-500 via-white to-red-500 dark:from-red-700 dark:via-black dark:to-red-700';
      case 'Donados':
        return 'from-green-500 via-white to-green-500 dark:from-green-700 dark:via-black dark:to-green-700';
      default:
        return 'from-blue-300 via-white to-blue-300 dark:from-blue-500 dark:via-black dark:to-blue-500';
    }
  };
 
  return (
    <div className={`min-h-screen bg-gradient-to-b ${getBackgroundClass()} text-black dark:text-white`}>
      {/* Include HeaderAdmin */}
      <HeaderAdmin />
      <div className="flex justify-around py-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Prestados' ? 'bg-blue-700 text-white' : 'bg-gray-300 dark:bg-gray-700'}`}
          onClick={() => setActiveTab('Prestados')}
        >
          Prestados
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Perdidos' ? 'bg-red-500 text-white' : 'bg-gray-300 dark:bg-gray-700'}`}
          onClick={() => setActiveTab('Perdidos')}
        >
          Perdidos
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'Donados' ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-700'}`}
          onClick={() => setActiveTab('Donados')}
        >
          Donados
        </button>
      </div>
      <div className="container mx-auto p-4 bg-gradient-to-b border-solid border-2 border-sky-700 rounded-lg">
        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Titulo</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Usuario</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Nombre</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Apellidos</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Telefono</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Direccion</th>
            </tr>
          </thead>
          <tbody>
            {data[activeTab].map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.titulo}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.usuario}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.nombre}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.apellidos}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.telefono}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.direccion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consulta;
