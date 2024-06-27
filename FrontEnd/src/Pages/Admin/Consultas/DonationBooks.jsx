import React, { useEffect, useState } from 'react';
import { useAltDonation, useGetDonation } from '../../../hooks/donation.hook';
import { FaUndoAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from 'react-bootstrap-sweetalert';


const DonationBooks = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [altID, setAltID] = useState(null);
  
  useEffect(() => {
    const fetchDonation = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await useGetDonation('Donados');
        setDonations(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDonation();
  }, []);

  const handleAlt = async (ISBN) => {
    setLoading(true);
    setError(null);
    try {
      await useAltDonation(ISBN);
      setDonations(donations.filter(item => item.ISBN !== ISBN));
      toast.success('Libro Dado de Alta Exitosamente');
    } catch (error) {
      setError(error.message);
      toast.error('Erro al Intentar Dar de ALta al Libro');
    } finally {
      setLoading(false);
    }
  }


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
                            <th className="border border-gray-200 dark:border-gray-700 p-2">ISBN</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Titulo Del Libro</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Autor Del Libro</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Tipo De Donacion</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Ejemplares</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Categoria</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.ISBN}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.title}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.author}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.typeDonation}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.copies}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.category}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2 text-center">
                                    <button
                                        onClick={() => handleAlt(item.ISBN)}
                                        className="text-blue-600 hover:text-blue-800 mx-1"
                                        title="Recover"
                                    >
                                        <FaUndoAlt />
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

export default DonationBooks;
