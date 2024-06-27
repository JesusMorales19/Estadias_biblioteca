// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDeleteLoss, useGetLoss, useRecoverLoss } from '../../../hooks/loss.hook';
import { FaUndoAlt, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from 'react-bootstrap-sweetalert';

const LossBooks = () => {
    const [loss, setLoss] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    const [ setDeleteId] = useState(null);

    useEffect(() => {
        const fetchLoss = async () => {
            setLoading(true);
            setError(null);
            try {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const data = await useGetLoss('Perdidos');
                setLoss(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchLoss();
    }, []);

    const handleRecover = async (idLoan) => {
        setLoading(true);
        setError(null);
        try {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            await useRecoverLoss(idLoan);
            setLoss(loss.filter(item => item.idLoan !== idLoan));
            toast.success('Libro recuperado exitosamente');
        } catch (error) {
            setError(error.message);
            toast.error('Error al intentar recuperar el libro');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (idLoan) => {
        setLoading(true);
        setError(null);
    
        console.log(`Intentando eliminar libro con idLoan: ${idLoan}`);
    
        // Mostrar confirmación antes de eliminar
        setDeleteId(idLoan);
        setConfirmDelete(() => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Confirmar"
                confirmBtnBsStyle="btn btn-primary btn-lh"
                cancelBtnBsStyle="primary"
                title="¿Estás seguro?"
                onConfirm={() => confirmDeleteAction(idLoan)} // Captura el idLoan actual
                onCancel={cancelDeleteAction}
                focusCancelBtn
            >
                Esta acción eliminará permanentemente el libro. ¿Estás seguro?
            </SweetAlert>
        ));
    
        setLoading(false);
    }
    
    const confirmDeleteAction = async (idLoan) => {
        setLoading(true);
        try {
            console.log(`Eliminando libro con idLoan: ${idLoan}`);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            await useDeleteLoss(idLoan);
            setLoss(loss.filter(item => item.idLoan !== idLoan));
            toast.success('Libro eliminado exitosamente');
        } catch (error) {
            setError(error.message);
            toast.error('Error al intentar eliminar el libro');
        } finally {
            setLoading(false);
            setConfirmDelete(null);
        }
    };
    

    const cancelDeleteAction = () => {
        setConfirmDelete(null);
        setLoading(false);
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
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Titulo Del Libro</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Usuario</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Nombre</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Apellidos</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Telefono</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Direccion</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Fecha Limite</th>
                            <th className="border border-gray-200 dark:border-gray-700 p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loss.map((item, index) => (
                            <tr key={index}>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.title}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.username}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.firstName}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.lastName}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.phoneNumber}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.address}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2">{item.returnDate}</td>
                                <td className="border border-gray-200 dark:border-gray-700 p-2 text-center">
                                    <button
                                        onClick={() => handleRecover(item.idLoan)}
                                        className="text-blue-600 hover:text-blue-800 mx-1"
                                        title="Recover"
                                    >
                                        <FaUndoAlt />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.idLoan)}
                                        className="text-red-600 hover:text-red-800 mx-1"
                                        title="Delete"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {confirmDelete}
        </div>
    );
};

export default LossBooks;
