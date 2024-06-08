import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import logo from "../../assets/logo_jaz.png";

const Dashboard = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: white)').matches) {
      return "dark";
    }
    return "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('usuarios'); // Estado para manejar la pestaña seleccionada

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
  }

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
      <div className="flex justify-between items-center bg-gradient-to-r from-green-600 via-white to-red-600 p-4 rounded-md shadow-md mb-4">
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
        </nav>
      )}
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between dark:bg-neutral-900">
        {/* Gráfica */}
        <div className="bg-white p-4 rounded-md shadow-md w-full md:w-2/3 dark:bg-neutral-800 mb-4 md:mb-0">
          <h2 className="text-center text-lg font-bold mb-4 dark:text-white">Evolución del Programa Propio de Investigación</h2>
          <Bar data={data} />
        </div>

        {/* Contadores */}
        <div className="flex flex-col space-y-4">
          <div className="bg-white p-4 rounded-md shadow-md text-center dark:bg-neutral-800">
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
      <div className="flex justify-center my-8">
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
                  <td className="px-4 py-4 whitespace-nowrap">Lopez</td>
                  <td className="px-4 py-4 whitespace-nowrap">19</td>
                  <td className="px-4 py-4 whitespace-nowrap">618526458</td>
                  <td className="px-4 py-4 whitespace-nowrap">Arroyo #12</td>
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
            <input type="text" placeholder="Search books" className="p-1 border rounded-md" />
          </div>
          <div className="min-w-full">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50 dark:bg-neutral-700">
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Nombre
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Descripción
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Autor
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Año
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Editorial
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">10</td>
                  <td className="px-4 py-4 whitespace-nowrap">Calculo Integral</td>
                  <td className="px-4 py-4 whitespace-nowrap">Descripcion del libro 1</td>
                  <td className="px-4 py-4 whitespace-nowrap">Juanito</td>
                  <td className="px-4 py-4 whitespace-nowrap">2005</td>
                  <td className="px-4 py-4 whitespace-nowrap">Santillana</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap">11</td>
                  <td className="px-4 py-4 whitespace-nowrap">POO</td>
                  <td className="px-4 py-4 whitespace-nowrap">Descripcion del libro 2</td>
                  <td className="px-4 py-4 whitespace-nowrap">Jose</td>
                  <td className="px-4 py-4 whitespace-nowrap">2008</td>
                  <td className="px-4 py-4 whitespace-nowrap">Mc Graw Hill</td>
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
