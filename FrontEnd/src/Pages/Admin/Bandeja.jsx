// src/components/Bandeja.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Header from '../../components/HeaderAdmin';
import Footer from '../../components/footer';

const Bandeja = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('Recibidos');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState({
    user002: false,
    user003: false,
    chat_user001: false,
    chat_user002: false,
    comentario_user001: false,
    comentario_user002: false,
  });

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
          <input
            type="text"
            placeholder="Search users"
            className="border rounded px-2 py-1 w-full"
          />
          <span className="absolute right-3 top-2 text-gray-500">🔍</span>
        </div>
        <div className="flex items-center">
          <button className="mr-2" onClick={handleSelectAll}>Seleccionar todo</button>
          <input type="checkbox" className="mr-2" checked={selectAll} onChange={handleSelectAll} />
          <button className="mr-2 text-red-600">🗑️</button>
          <button className="text-blue-500">☁️</button>
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
          {activeTab === 'Recibidos' && (
            <div>
              <div className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold">user002</div>
                  <input type="checkbox" className="mr-2" checked={selectedMessages.user002} onChange={() => handleCheckboxChange('user002')} />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Su servicio es excelente</div>
              </div>
              <div className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold">user003</div>
                  <input type="checkbox" className="mr-2" checked={selectedMessages.user003} onChange={() => handleCheckboxChange('user003')} />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Su servicio es excelente</div>
              </div>
            </div>
          )}
          {activeTab === 'Chat' && (
            <div>
              <div className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold">chat_user001</div>
                  <input type="checkbox" className="mr-2" checked={selectedMessages.chat_user001} onChange={() => handleCheckboxChange('chat_user001')} />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Conversación reciente</div>
              </div>
              <div className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold">chat_user002</div>
                  <input type="checkbox" className="mr-2" checked={selectedMessages.chat_user002} onChange={() => handleCheckboxChange('chat_user002')} />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Conversación reciente</div>
              </div>
            </div>
          )}
          {activeTab === 'Comentarios' && (
            <div>
              <div className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold">comentario_user001</div>
                  <input type="checkbox" className="mr-2" checked={selectedMessages.comentario_user001} onChange={() => handleCheckboxChange('comentario_user001')} />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Comentario reciente</div>
              </div>
              <div className="flex flex-col border-b pb-2 mb-2 rounded-lg bg-green-400 bg-opacity-20 shadow-md p-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold">comentario_user002</div>
                  <input type="checkbox" className="mr-2" checked={selectedMessages.comentario_user002} onChange={() => handleCheckboxChange('comentario_user002')} />
                </div>
                <div className="text-gray-600 dark:text-gray-300">Comentario reciente</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bandeja;
