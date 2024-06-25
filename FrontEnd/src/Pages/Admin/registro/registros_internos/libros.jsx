// src/components/BookForm.js
// eslint-disable-next-line no-unused-vars
import React, { useState }  from 'react';

const BookForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return ( 
    <div>
      <h2 className="text-xl font-bold mb-4">Registro de Libros</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1">ISBN:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Title:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Author:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Publisher:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">YearPublisher:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Role:</label>
          <select id='opciones' value={selectedOption} onChange={handleOptionChange} className="w-full p-2 border rounded">
            <option value=''> </option>
            <option value='gobierno'>Gobierno</option>
            <option value='ciudadano'>Ciudadano</option>
          </select>
        </div>
         <div className="mb-4">
          <label className="block mb-1">Copies:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Category:</label>
          <select id='opciones' value={selectedOption} onChange={handleOptionChange} className="w-full p-2 border rounded">
            <option value=''> </option>
            <option value='Generalidades'>Generalidades</option>
            <option value='Filosofia'>Filosofia</option>
            <option value='Religion'>Religion</option>
            <option value='Ciencias Sociales'>Ciencias Sociales</option>
            <option value='lenguas'>lenguas</option>
            <option value='Ciencias puras'>Ciencias puras</option>
            <option value='Tecnologias'>Tecnologias</option>
            <option value='Bellas Artes'>Bellas Artes</option>
            <option value='Literatura'>Literatura</option>
            <option value='Geografia'>Geografia</option>
            <option value='Historia'>Historia</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1">Description:</label>
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
