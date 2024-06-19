// src/components/UserForm.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const UserForm = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Registro de Usuarios</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Usuario</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Nombre</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Apellido</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Direccion</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Telefono</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Edad</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Contraseña</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Confirmar Contraseña</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default UserForm;
