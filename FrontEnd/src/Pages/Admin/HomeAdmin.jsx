// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import HeaderAdmin from '../../components/HeaderAdmin.jsx';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('usuarios');

  

  const data = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011'],
    datasets: [
      {
        label: 'Evolución del Programa Propio de Investigación',
        data: [1.03, 1.11, 1.22, 1.29, 1.38, 1.34],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-100 p-4 dark:bg-neutral-900 min-h-screen">
      {/* Header */}
     <HeaderAdmin/>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between dark:bg-neutral-900">
        {/* Gráfica */}
        <div className="bg-white p-4 rounded-md shadow-md w-full md:w-2/3 dark:bg-neutral-800 mb-4 md:mb-0">
          <h2 className="text-center text-lg font-bold mb-4 dark:text-white">Evolución del Programa Propio de Investigación</h2>
          <Bar data={data} />
        </div>

        {/* Contadores */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <div className="bg-white p-8 rounded-md shadow-md text-center dark:bg-neutral-800 cursor-pointer">
            <h3 className="text-4xl text-blue-600">4,230</h3>
            <p className="text-lg dark:text-white">En vista</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md text-center dark:bg-neutral-800">
            <h3 className="text-4xl text-red-600">46</h3>
            <p className="text-lg dark:text-white">Perdidos</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center my-8 space-x-4">
        <button
          className={`px-4 py-2 mx-2 rounded shadow-md ${selectedTab === 'usuarios' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSelectedTab('usuarios')}
        >
          Usuarios
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded shadow-md ${selectedTab === 'libros' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => setSelectedTab('libros')}
        >
          Libros
        </button>
      </div>

      {/* Tablas */}
      {selectedTab === 'usuarios' && (
        <div className="bg-white p-4 rounded-md shadow-md dark:bg-neutral-800 mt-4 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold dark:text-white">Usuarios</h2>
            <input type="text" placeholder="Search users" className="p-1 w-15 border rounded-md" />
          </div>
          <div className="min-w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50 dark:bg-neutral-700">
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Usuario
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Nombre
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Apellido
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Edad
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Dirección
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">user002</td>
                  <td className="px-4 py-4 whitespace-nowrap">Jose</td>
                  <td className="px-4 py-4 whitespace-nowrap">Caldera</td>
                  <td className="px-4 py-4 whitespace-nowrap">23</td>
                  <td className="px-4 py-4 whitespace-nowrap">876543456789</td>
                  <td className="px-4 py-4 whitespace-nowrap">Altamirano #23</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">user003</td>
                  <td className="px-4 py-4 whitespace-nowrap">Emiliano</td>
                  <td className="px-4 py-4 whitespace-nowrap">Zapato</td>
                  <td className="px-4 py-4 whitespace-nowrap">20</td>
                  <td className="px-4 py-4 whitespace-nowrap">8665489745</td>
                  <td className="px-4 py-4 whitespace-nowrap">Lerdo #23</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">user005</td>
                  <td className="px-4 py-4 whitespace-nowrap">Juan</td>
                  <td className="px-4 py-4 whitespace-nowrap">Sandoval</td>
                  <td className="px-4 py-4 whitespace-nowrap">23</td>
                  <td className="px-4 py-4 whitespace-nowrap">876543456789</td>
                  <td className="px-4 py-4 whitespace-nowrap">Altamirano #23</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">user006</td>
                  <td className="px-4 py-4 whitespace-nowrap">Pedro</td>
                  <td className="px-4 py-4 whitespace-nowrap">Mendoza</td>
                  <td className="px-4 py-4 whitespace-nowrap">23</td>
                  <td className="px-4 py-4 whitespace-nowrap">876543456789</td>
                  <td className="px-4 py-4 whitespace-nowrap">Altamirano #23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
 
      {selectedTab === 'libros' && (
        <div className="bg-white p-4 rounded-md shadow-md dark:bg-neutral-800 mt-4 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold dark:text-white">Libros</h2>
            <input type="text" placeholder="Search books" className="p-1 w-15 border rounded-md" />
          </div>
          <div className="min-w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50 dark:bg-neutral-700">
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Clave
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Titulo
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Autor
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Editorial
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Año
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    # Páginas
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">Lib003</td>
                  <td className="px-4 py-4 whitespace-nowrap">100 años de Soledad</td>
                  <td className="px-4 py-4 whitespace-nowrap">Gabriel García Márquez</td>
                  <td className="px-4 py-4 whitespace-nowrap">Lumen</td>
                  <td className="px-4 py-4 whitespace-nowrap">1967</td>
                  <td className="px-4 py-4 whitespace-nowrap">471</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">Lib004</td>
                  <td className="px-4 py-4 whitespace-nowrap">Don Quijote de la Mancha</td>
                  <td className="px-4 py-4 whitespace-nowrap">Miguel de Cervantes</td>
                  <td className="px-4 py-4 whitespace-nowrap">Cátedra</td>
                  <td className="px-4 py-4 whitespace-nowrap">1605</td>
                  <td className="px-4 py-4 whitespace-nowrap">1345</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">Lib005</td>
                  <td className="px-4 py-4 whitespace-nowrap">El Amor en los Tiempos del Cólera</td>
                  <td className="px-4 py-4 whitespace-nowrap">Gabriel García Márquez</td>
                  <td className="px-4 py-4 whitespace-nowrap">Lumen</td>
                  <td className="px-4 py-4 whitespace-nowrap">1985</td>
                  <td className="px-4 py-4 whitespace-nowrap">368</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">Lib006</td>
                  <td className="px-4 py-4 whitespace-nowrap">Cien años de soledad</td>
                  <td className="px-4 py-4 whitespace-nowrap">Gabriel García Márquez</td>
                  <td className="px-4 py-4 whitespace-nowrap">Editorial Sudamericana</td>
                  <td className="px-4 py-4 whitespace-nowrap">1967</td>
                  <td className="px-4 py-4 whitespace-nowrap">471</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
