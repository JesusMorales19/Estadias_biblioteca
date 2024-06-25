// src/components/UserForm.js
import React, { useState } from 'react';

const UserForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Registro de Usuarios</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Username:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Name:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">LastName:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Address:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">PhoneNumber:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Age:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Role:</label>
          <select id='opciones' value={selectedOption} onChange={handleOptionChange} className="w-full p-2 border rounded">
            <option value=''> </option>
            <option value='client'>client</option>
            <option value='admin'>admin</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Confirm Password:</label>
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
