// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo_jaz.png';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

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
          <a href="#" className="hover:text-blue-600 font-serif">Home</a>
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
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          <div className="bg-white p-8 rounded-md shadow-md text-center dark:bg-neutral-800 cursor-pointer">
            <h3 className="text-4xl text-blue-600">4,230</h3>
            <p className="text-lg dark:text-white">En vista</p>
          </div>
          <div className="bg-white p-8 rounded-md shadow-md text-center dark:bg-neutral-800 cursor-pointer">
            <h3 className="text-4xl text-red-600">46</h3>
            <p className="text-lg dark:text-white">Perdidos</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center my-8 space-x-4">
        <button
          className={`px-4 py-2 mx-2 rounded shadow-md ${
            selectedTab === 'usuarios' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedTab('usuarios')}
        >
          Usuarios
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded shadow-md ${
            selectedTab === 'libros' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => setSelectedTab('libros')}
        >
          Libros
        </button>
      </div>

      {/* Tablas */}
      {selectedTab === 'usuarios' && (
        <div className="bg-white p-4 rounded-md shadow-md dark:bg-neutral-800 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold dark:text-white">Usuarios</h2>
            <input type="text" placeholder="Search users" className="p-1 w-15 border rounded-md" />
          </div>
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="border-b">
                <th className="border px-4 py-2 dark:text-white">Usuario</th>
                <th className="border px-4 py-2 dark:text-white">Nombre</th>
                <th className="border px-4 py-2 dark:text-white">Apellido</th>
                <th className="border px-4 py-2 dark:text-white">Edad</th>
                <th className="border px-4 py-2 dark:text-white">Teléfono</th>
                <th className="border px-4 py-2 dark:text-white">Dirección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 dark:text-white">user002</td>
                <td className="border px-4 py-2 dark:text-white">Jose</td>
                <td className="border px-4 py-2 dark:text-white">Caldera</td>
                <td className="border px-4 py-2 dark:text-white">23</td>
                <td className="border px-4 py-2 dark:text-white">876543456789</td>
                <td className="border px-4 py-2 dark:text-white">Altamirano #23</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 dark:text-white">user003</td>
                <td className="border px-4 py-2 dark:text-white">Emiliano</td>
                <td className="border px-4 py-2 dark:text-white">Lopez</td>
                <td className="border px-4 py-2 dark:text-white">19</td>
                <td className="border px-4 py-2 dark:text-white">618526458</td>
                <td className="border px-4 py-2 dark:text-white">Centauro #923</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedTab === 'libros' && (
        <div className="bg-white p-4 rounded-md shadow-md dark:bg-neutral-800 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold dark:text-white">Libros</h2>
            <input type="text" placeholder="Search books" className="p-1 w-15 border rounded-md" />
          </div>
          <table className="min-w-full border-collapse border">
            <thead>
              <tr className="border-b">
                <th className="border px-4 py-2 dark:text-white">Título</th>
                <th className="border px-4 py-2 dark:text-white">Autor</th>
                <th className="border px-4 py-2 dark:text-white">Año</th>
                <th className="border px-4 py-2 dark:text-white">Editorial</th>
                <th className="border px-4 py-2 dark:text-white">Categoría</th>
                <th className="border px-4 py-2 dark:text-white">Idioma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 dark:text-white">Cien años de soledad</td>
                <td className="border px-4 py-2 dark:text-white">Gabriel Garcia Marquez</td>
                <td className="border px-4 py-2 dark:text-white">1967</td>
                <td className="border px-4 py-2 dark:text-white">Sudamericana</td>
                <td className="border px-4 py-2 dark:text-white">Novela</td>
                <td className="border px-4 py-2 dark:text-white">Español</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 dark:text-white">Don Quijote de la Mancha</td>
                <td className="border px-4 py-2 dark:text-white">Miguel de Cervantes</td>
                <td className="border px-4 py-2 dark:text-white">1605</td>
                <td className="border px-4 py-2 dark:text-white">Francisco de Robles</td>
                <td className="border px-4 py-2 dark:text-white">Novela</td>
                <td className="border px-4 py-2 dark:text-white">Español</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
