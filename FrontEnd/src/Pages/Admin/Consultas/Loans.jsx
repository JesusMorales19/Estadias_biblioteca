import React, { useState, useEffect } from 'react';
import { useGetLoans, useReturnLoan } from '../../../hooks/loan.hook.js';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Loans = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLoans = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await useGetLoans('Prestados'); // Asumiendo que 'Prestados' es el tipo correcto para obtener préstamos prestados
        setLoans(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchLoans();
  }, []);

  const handleReturn = async (idLoan) => {
    setLoading(true);
    setError(null);
    try {
      await useReturnLoan(idLoan);
      setLoans(loans.filter(loan => loan.idLoan !== idLoan));
      toast.success('¡Libro devuelto exitosamente!');
    } catch (err) {
      setError(err.message);
      toast.error('Error al devolver el libro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container min-w-full p-4 bg-gradient-to-b border-solid border-2 border-sky-700 rounded-lg overflow-auto">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700 divide-y">
          <thead>
            <tr>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Titulo</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Usuario</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Nombre</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Apellidos</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Direccion</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Fecha Inicial</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Fecha Limite</th>
              <th className="border border-gray-200 dark:border-gray-700 p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.title}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.username}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.firstName}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.lastName}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.address}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.creatdAt}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.finalDate}</td>
                <td className="border border-gray-200 dark:border-gray-700 p-2 text-center">
                  <button
                    onClick={() => handleReturn(item.idLoan)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaCheck />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Loans;
