import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetBooksByCategory } from "../../hooks/book.hook.js";
import { useAddReservation, useDeleteReservation, useGetCountUserReservation } from "../../hooks/reservation.hook.js";
import { getClient } from "../../hooks/client.hook";
import Swal from 'sweetalert2';
import { RiAddFill, RiDeleteBinFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import HeaderClient from "./HeaderClient.jsx"

import Gene from "../../assets/gif/imagen_interior/literatura.jpg";
import Filo from "../../assets/gif/imagen_interior/filosodiaa.jpg";
import Reli from "../../assets/gif/imagen_interior/religionn.jpg";
import Social from "../../assets/gif/imagen_interior/social.jpg";
import Puras from "../../assets/gif/imagen_interior/puras.jpg";
import Artes from "../../assets/gif/imagen_interior/artes.jpg";
import Tecno from "../../assets/gif/imagen_interior/tecno.jpg";
import Lenguas from "../../assets/gif/imagen_interior/lenguass.jpg";
import Lit from "../../assets/gif/imagen_interior/generalidadess.jpg";
import Hisge from "../../assets/gif/imagen_interior/historia.jpg";
import ImagenFija from "../../assets/gif/imagen-fija.jpg";

const imageCategory = {
  0: Gene,
  100: Filo,
  200: Reli,
  300: Social,
  400: Lenguas,
  500: Puras,
  600: Tecno,
  700: Artes,
  800: Lit,
  900: Hisge,
};

const categoryNames = {
  0: 'Generalidades',
  100: 'Filosofía',
  200: 'Religión',
  300: 'Ciencias Sociales',
  400: 'Lenguas',
  500: 'Ciencias Puras',
  600: 'Tecnologías',
  700: 'Bellas Artes',
  800: 'Literatura',
  900: 'Geografía y Historia',
};

const CategoryBook = () => {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');
  const [searchTerm, setSearchTerm] = useState('');
  const [reservations, setReservations] = useState([]);
  const [username, setUsername] = useState('');
  const { count, loading: countLoading, error: countError } = useGetCountUserReservation(username);

  const { addReservation } = useAddReservation();
  const { deleteReservation } = useDeleteReservation();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const client = await getClient();
        setUsername(client.data.username);
      } catch (error) {
        console.error("Error al obtener el cliente:", error);
      }
    };
    fetchClient();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await useGetBooksByCategory(categoryId);
        // Agregar la propiedad `status` a cada libro
        const booksWithStatus = data.map(book => ({ ...book, status: book.status})); // Ejemplo de condición, ajustar según tu lógica
        setBooks(booksWithStatus);
        setFilteredBooks(booksWithStatus); // Inicialmente muestra todos los libros
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [categoryId]);

  // Cambia entre tema claro y oscuro
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Cambiar entre tema claro y oscuro
  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Filtra libros por término de búsqueda
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredResults = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
    setFilteredBooks(filteredResults);
  };

  // Agrega un libro a las reservas del cliente
  const handleAddBook = async (index) => {
    const book = books[index];
    const client = await getClient();
    const reservationData = {
      username: client.data.username,
      firstName: client.data.firstName,
      lastName: client.data.lastName,
      address: client.data.address,
      phoneNumber: client.data.phoneNumber,
      ISBN: book.ISBN,
      title: book.title,
      author: book.author,
      category: book.category,
    };
    console.log(reservationData);
    try {
      console.log("hola");
      await addReservation(reservationData);
      setReservations([...reservations, reservationData]);
      console.log("Hola");
      Swal.fire({
        icon: 'success',
        title: '¡Libro Agregado!',
        text: `El libro "${book.title}" ha sido agregado a tus reservas.`,
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al intentar agregar el libro a tus reservas. Por favor, intenta de nuevo más tarde.',
      });
    }
  };

  // Mostrar u ocultar la descripción de un libro
  const toggleDescription = (index) => {
    const newBooks = [...books];
    newBooks[index].expanded = !newBooks[index].expanded;
    setBooks(newBooks);
  };

  // Elimina una reserva de un libro
  const handleDeleteBook = async (ISBN) => {
    const client = await getClient();
    try {
      await deleteReservation(ISBN, client.data.username);
      setReservations(reservations.filter(reservation => reservation.ISBN !== ISBN));
      Swal.fire({
        icon: 'success',
        title: '¡Reserva Eliminada!',
        text: 'La reserva ha sido eliminada correctamente.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al intentar eliminar la reserva. Por favor, intenta de nuevo más tarde.',
      });
    }
  };

  // Determina el color de la barra de progreso según la cantidad de libros reservados
  const getProgressColor = () => {
    if (count === 1) return 'bg-yellow-500';
    if (count === 2) return 'bg-orange-500';
    if (count >= 3) return 'bg-red-500';
    return 'bg-gray-200';
  };

  // Mensaje de la barra de progreso según la cantidad de libros reservados
  const getProgressMessage = () => {
    if (count === 1) return 'Tienes 1 libro apartado';
    if (count === 2) return 'Tienes 2 libros apartados';
    if (count >= 3) return 'Tienes 3 libros, has alcanzado tu límite';
    return 'No tienes libros apartados aún';
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <HeaderClient changeTheme={changeTheme} theme={theme} />
      <div className="relative flex-grow">
        <div className="absolute inset-0">
          <div className="w-full h-80 mb-4 relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h2 className="text-white text-2xl font-bold">{categoryNames[categoryId] || 'Categoría Desconocida'}</h2>
            </div>
            <img
              src={imageCategory[categoryId] || ImagenFija}
              alt="Imagen Fija"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex justify-center items-center space-x-4">
              <div className={`h-6 w-48 ${getProgressColor()} rounded-full`}></div>
              <p className="text-white">{getProgressMessage()}</p>
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col items-end space-y-4 transition-transform duration-300 transform focus-within:scale-105">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por título o autor"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="border-2 border-gray-300 rounded-lg py-2 px-4 w-72 focus:outline-none focus:border-blue-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700">
                  <BsSearch />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-4">
            {filteredBooks.map((book, index) => (
  <div
    key={book.ISBN}
    className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4 dark:bg-neutral-700"
  >
    <div className="relative">
      <img
        src={book.imageURL || ImagenFija}
        alt={book.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          className="text-white bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={() => toggleDescription(index)}
        >
          {book.expanded ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
    <div className="mt-2">
      <p className="text-lg font-semibold">Titulo: {book.title}</p>
      <p className="text-sm text-gray-600">Autor: {book.author}</p>
      <p className="text-sm text-gray-600">ISBN: {book.ISBN}</p>
      {book.status ? (
        <>
          {book.expanded && (
            <div className="mt-2">
              <p className="text-sm">Ejemplares Diponibles: {book.copies}</p>
              <p className="text-sm">Año De Publicacion: {book.yearPublication}</p>
            </div>
          )}
          <div className="flex justify-between items-center mt-4">
            <button
              className={`flex items-center space-x-1 text-white ${book.status ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed' } px-3 py-1 rounded-md focus:outline-none`}
              onClick={() => book.status && handleAddBook(index)}
              disabled={!book.status}
            >
              <RiAddFill />
              <span>{book.status ? 'Apartar' : 'Agotado'}</span>
            </button>
            {reservations.some(reservation => reservation.ISBN === book.ISBN) && (
              <button
                className="flex items-center space-x-1 text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none"
                onClick={() => handleDeleteBook(book.ISBN)}
              >
                <RiDeleteBinFill />
                <span>Eliminar Apartado</span>
              </button>
            )}
          </div>
        </>
      ) : (
        <p className="text-red-500 mt-2">Agotado</p>
      )}
    </div>
  </div>
))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBook;
