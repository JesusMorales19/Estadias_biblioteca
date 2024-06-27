// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { getAllClient } from '../../hooks/client.hook.js';
import HeaderAdmin from '../../components/HeaderAdmin.jsx';
import CarrouselPDF from "../../components/carouselPDF.jsx";
import Credential from '../Admin/PDF/credentialsCard.jsx';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('usuarios');
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllClient();
        setClients(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  return (
    <div className="bg-gray-100 p-4 dark:bg-neutral-900 min-h-screen">
      <HeaderAdmin/>

      <div className="flex flex-col md:flex-row justify-between dark:bg-neutral-900">
        <CarrouselPDF/>
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
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Credencial
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-4 py-4 text-center">Cargando...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="7" className="px-4 py-4 text-center text-red-600">Error: {error}</td>
                  </tr>
                ) : (
                  clients.map((client, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4 whitespace-nowrap">{client.username}</td>
                      <td className="px-4 py-4 whitespace-nowrap">{client.firstName}</td>
                      <td className="px-4 py-4 whitespace-nowrap">{client.lastName}</td>
                      <td className="px-4 py-4 whitespace-nowrap">{client.age}</td>
                      <td className="px-4 py-4 whitespace-nowrap">{client.phoneNumber}</td>
                      <td className="px-4 py-4 whitespace-nowrap">{client.address}</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <Credential />
                      </td>
                    </tr>
                  ))
                )}
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
                  <td className="px-4 py-4 whitespace-nowrap">Harry Potter</td>
                  <td className="px-4 py-4 whitespace-nowrap">J.K. Rowling</td>
                  <td className="px-4 py-4 whitespace-nowrap">Scholastic</td>
                  <td className="px-4 py-4 whitespace-nowrap">1997</td>
                  <td className="px-4 py-4 whitespace-nowrap">320</td>
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
