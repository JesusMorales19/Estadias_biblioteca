import React, { useEffect, useState } from 'react';
import Header from '../../components/Admin/HeaderAdmin.jsx';
import Footer from '../../components/footer';
import { useDeleteOpinion, useGetOpinion, useUpdateOpinion } from '../../hooks/opinion.hook';
import { useGetAllReservation } from '../../hooks/reservation.hook.js';
import SweetAlert from 'react-bootstrap-sweetalert';
import { toast } from 'react-toastify';
import { FaTrashAlt, FaCloudUploadAlt, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import FaCheck icon

const Bandeja = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('Recibidos');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState({});
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [opinions, setOpinions] = useState([]);
  const [filteredOpinions, setFilteredOpinions] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [refreshMessage, setRefreshMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchOpinions();
    fetchReservations();
  }, []);

  const fetchOpinions = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await useGetOpinion();
      setOpinions(data);
      setFilteredOpinions(data); // Set initial filtered opinions to all opinions
      const initialSelectedMessages = data.reduce((acc, opinion) => {
        acc[opinion._id] = false;
        return acc;
      }, {});
      setSelectedMessages(initialSelectedMessages);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchReservations = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await useGetAllReservation(); // Asumimos que tienes un hook para obtener reservas
      setReservations(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOpinion = async (idOpinion) => {
    setLoading(true);
    setError(null);
    setRefreshMessage("Cargando opiniones...");

    setDeleteId(idOpinion);
    setConfirmDelete(() => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Confirmar"
        confirmBtnBsStyle='btn btn-primary btn-ih'
        cancelBtnBsStyle='btn btn-secondary'
        title="¿Estás Seguro?"
        onConfirm={() => confirmDeleteAction(idOpinion)}
        onCancel={cancelDeleteAction}
        focusCancelBtn
        customButtons={
          <React.Fragment>
            <button onClick={() => confirmDeleteAction(idOpinion)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Confirmar
            </button>
            <button onClick={cancelDeleteAction} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
              Cancelar
            </button>
          </React.Fragment>
        }
        style={{ backgroundColor: 'white', color: 'black' }}
      >
        Esta acción eliminará el comentario
      </SweetAlert>
    ));
  };

  const confirmDeleteAction = async (id) => {
    setLoading(true);
    try {
      await useDeleteOpinion(id);
      toast.success('Comentario eliminado exitosamente');
      await fetchOpinions(); // Refresh opinions after deletion
    } catch (error) {
      setError(error.message);
      toast.error("Error al eliminar el comentario");
    } finally {
      setLoading(false);
      setConfirmDelete(null);
      setRefreshMessage("");
    }
  };

  const cancelDeleteAction = () => {
    setConfirmDelete(null);
    setLoading(false);
    setRefreshMessage("");
  };

  const handleUpdateOpinion = async (idOpinion, showOnMainPage) => {
    setLoading(true);
    setError(null);

    try {
      await useUpdateOpinion(idOpinion, showOnMainPage);
      setOpinions(opinions.map(opinion =>
        opinion.idOpinion === idOpinion ? { ...opinion, showOnMainPage } : opinion
      ));
      toast.success('Comentario actualizado exitosamente');
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el comentario");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Filter opinions based on search text
    const filtered = opinions.filter(opinion =>
      opinion.name.toLowerCase().includes(searchText.toLowerCase()) ||
      opinion.message.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredOpinions(filtered);
  }, [opinions, searchText]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    const newSelectedMessages = Object.keys(selectedMessages).reduce((acc, key) => {
      acc[key] = newSelectAll;
      return acc;
    }, {});
    setSelectAll(newSelectAll);
    setSelectedMessages(newSelectedMessages);
  };

  const navigateToLoanRegistration = () => {
    navigate('/Registros', {
      state: {
        selectedTab: 'Prestamos',
      }
    });
  };

  const handleCheckboxChange = (messageId) => {
    const newSelectedMessages = {
      ...selectedMessages,
      [messageId]: !selectedMessages[messageId],
    };
    setSelectedMessages(newSelectedMessages);
    setSelectAll(Object.values(newSelectedMessages).every(Boolean));
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-green-400 via-white to-green-500 dark:from-green-400 dark:via-black dark:to-green-700 text-black dark:text-white">
      <Header />
      <div className="flex flex-row bg-transparent h-14 items-center px-4">
        <div className="mr-4">
          <button className="hamburger-icon" onClick={toggleMenu}>☰</button>
        </div>
        <div className="text-xl font-serif">Message</div>
        <div className="flex-grow mx-4 relative">
          {activeTab === 'Comentarios' ? (
            <input
              type="text"
              placeholder="Buscar comentarios"
              className="border rounded px-2 py-1 w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          ) : (
            <input
              type="text"
              placeholder="Buscar mensajes"
              className="border rounded px-2 py-1 w-full"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          )}
          <span className="absolute right-3 top-2 text-gray-500">🔍</span>
        </div>
      </div>
      <div className="flex flex-grow bg-transparent">
        {menuVisible && (
          <div className="flex flex-col w-1/6 bg-transparent bg-opacity-20 border border-green-900 rounded-lg items-center pt-4">
            <button
              className={`mb-4 ${activeTab === 'Recibidos' ? 'text-aqua-600' : ''}`}
              onClick={() => handleTabChange('Recibidos')}
            >
              Recibidos
            </button>
            <button
              className={`mb-4 ${activeTab === 'Chat' ? 'text-aqua-600' : ''}`}
              onClick={() => handleTabChange('Chat')}
            >
              Chat
            </button>
            <button
              className={`mb-4 ${activeTab === 'Comentarios' ? 'text-aqua-600' : ''}`}
              onClick={() => handleTabChange('Comentarios')}
            >
              Comentarios
            </button>
          </div>
        )}
        <div className={`flex flex-col ${menuVisible ? 'w-5/6' : 'w-full'} bg-transparent rounded-lg p-4`}>
          {loading && <div className="text-center text-lg font-semibold">{refreshMessage}</div>}
          {!loading && activeTab === 'Recibidos' && (
            <div>
              {filteredOpinions.map((opinion) => (
                <div key={opinion._id} className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4 break-words">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">{opinion.name}</div>
                    <input type="checkbox" className="mr-2" checked={selectedMessages[opinion._id]} onChange={() => handleCheckboxChange(opinion._id)} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{opinion.message}</div>
                </div>
              ))}
            </div>
          )}
          {!loading && activeTab === 'Chat' && (
            <div>
              {reservations.map((reservation, index) => (
                <div key={index} className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4 break-words">
                  <div className="flex items-center justify-between">
                    <div className="font-bold">{reservation.username}</div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    ISBN: {reservation.ISBN}, Título: {reservation.title}, Categoría: {reservation.category}
                  </div>
                  <div className="flex">
                  <button onClick={ navigateToLoanRegistration} className="text-green-500 ml-auto">
                        <FaCheck />
                      </button>
                    </div>
                </div>
              ))}
            </div>
          )}
          {!loading && activeTab === 'Comentarios' && (
            <div>
              {filteredOpinions.map((opinion) => (
                <div key={opinion._id} className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4 break-words">
                  <div className="flex justify-between items-center">
                    <div className="font-bold">{opinion.name}</div>
                    <div className="flex">
                      <button onClick={() => handleDeleteOpinion(opinion.idOpinion)} className="text-red-500 ml-auto">
                        <FaTrashAlt />
                      </button>
                      <button onClick={() => handleUpdateOpinion(opinion.idOpinion, !opinion.showOnMainPage)} className="text-blue-500 ml-2">
                        <FaCloudUploadAlt />
                      </button>
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{opinion.message}</div>
                </div>
              ))}
            </div>
          )}
          {confirmDelete}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bandeja;
