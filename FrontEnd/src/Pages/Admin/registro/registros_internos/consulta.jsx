// src/components/UserForm.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Cons = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Registro de Prestamo Interno</h2>
      <form>
        
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">LastName:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Gender:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Age:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">ISBN:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
       
        <div className="mb-4">
          <label className="block mb-1">Tile:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Author:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
       
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Cons;
