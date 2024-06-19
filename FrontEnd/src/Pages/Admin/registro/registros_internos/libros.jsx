// src/components/BookForm.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const BookForm = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Registro de Libros</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Título</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Autor</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Año</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Género</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">ISBN</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default BookForm;
