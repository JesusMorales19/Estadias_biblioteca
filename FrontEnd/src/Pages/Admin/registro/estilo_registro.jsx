// src/pages/Registro.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import HeaderAdmin from '../../../components/HeaderAdmin';
import TabButtons from '../../../components/tabButton';
import UserForm from './registros_internos/users';
import BookForm from './registros_internos/libros';
import Prestamos from './registros_internos/Prestamos';
import Consulta from './registros_internos/consulta';

const Registro = () => {
  const [selectedTab, setSelectedTab] = useState('libros');

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const getBorderColor = () => {
    switch (selectedTab) {
      case 'libros':
        return 'border-blue-600';
      case 'usuarios':
        return 'border-green-600';
      case'Prestamos':
        return 'border-red-800';
      case'Consulta':
        return 'border-gray-800';
      default:
        return 'border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col dark:bg-neutral-900">
      <HeaderAdmin />
      <TabButtons selectedTab={selectedTab} handleTabChange={handleTabChange} />
      <div className="flex flex-1 justify-center items-center">
        <div className={`bg-white p-8 rounded-md shadow-md w-96 ${getBorderColor()} border-2`}>
          {selectedTab === 'usuarios' && <UserForm />}
          {selectedTab === 'libros' && <BookForm />}
          {selectedTab === 'Prestamos' && <Prestamos/>}
          {selectedTab === 'Consulta'&&<Consulta/>}
        </div>
      </div>
    </div>
  );
};

export default Registro;
