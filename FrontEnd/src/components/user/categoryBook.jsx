/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetBooksByCategory } from "../../hooks/book.hook.js";
import HeaderClient from "./HeaderClient.jsx";
import ImagenFija from "../../assets/gif/imagen-fija.jpg";
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
import { RiAddFill, RiDeleteBinFill } from "react-icons/ri";
import { BsSearch, BsPlus, BsDash } from "react-icons/bs";

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

const categoryColors = {
  0: 'rgba(255, 99, 71, 0.5)',    // Tomato
  100: 'rgba(255, 140, 0, 0.5)', // DarkOrange
  200: 'rgba(255, 215, 0, 0.5)', // Gold
  300: 'rgba(50, 205, 50, 0.5)', // LimeGreen
  400: 'rgba(173, 216, 230, 0.5)', // LightBlue
  500: 'rgba(0, 191, 255, 0.5)', // DeepSkyBlue
  600: 'rgba(100, 149, 237, 0.5)', // CornflowerBlue
  700: 'rgba(255, 105, 180, 0.5)', // HotPink
  800: 'rgba(255, 192, 203, 0.5)', // Pink
  900: 'rgba(218, 112, 214, 0.5)', // Orchid
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
  const [selectedBookIndex, setSelectedBookIndex] = useState(-1);
  const [booksAdded, setBooksAdded] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await useGetBooksByCategory(categoryId);
        setBooks(data);
        setFilteredBooks(data); // Inicialmente muestra todos los libros
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [categoryId]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const categoryName = categoryNames[categoryId] || 'Categoría Desconocida';

  const toggleDescription = (index) => {
    const newBooks = [...books];
    newBooks[index].expanded = !newBooks[index].expanded;
    setBooks(newBooks);
  };

  const handleAddBook = (index) => {
    setSelectedBookIndex(index); // Select the book
    setBooksAdded(prevCount => prevCount + 1);
  };

  const handleDeleteBook = () => {
    setSelectedBookIndex(-1); // Deselect book
    setBooksAdded(prevCount => prevCount - 1);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredResults = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
    setFilteredBooks(filteredResults);
  };

  return (
    <div className={`dark:bg-neutral-900 min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`} style={{
      backgroundImage: `linear-gradient(to bottom left, ${categoryColors[categoryId] || 'rgba(255, 99, 71, 0.5)'}, #ffffff, ${categoryColors[categoryId] || 'rgba(255, 99, 71, 0.5)'})`,
      backgroundSize: 'cover'
    }}>
      <HeaderClient changeTheme={changeTheme} theme={theme} />
      <div className="relative">
        <div className="absolute inset-0">
          <div className="w-full h-80 mb-4 relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <h2 className="text-white text-2xl font-bold">{categoryName}</h2>
            </div>
            <img 
              src={imageCategory[categoryId] || ImagenFija} 
              alt="Imagen Fija"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 right-4 flex flex-col items-end space-y-4 transition-transform duration-300 transform focus-within:scale-105">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar por título o autor"
                    className="w-full px-10 py-2 rounded-md border border-gray-300 dark:border-blue-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-white placeholder-white::placeholder"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <div className="absolute right-3 bottom-3 transform translate-y-1/2 text-gray-700">
                    <BsSearch />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mt-4">
              {filteredBooks.map((book, index) => (
                <div 
                  key={book._id} 
                  className={`bg-white dark:bg-neutral-300 bg-opacity-70 dark:bg-opacity-70 p-4 rounded-md shadow-md mb-4 transition delay-150 duration-300 ease-in-out relative transform hover:scale-105 col-span-1`}
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-900">{book.title}</h3>
                    <p className="text-gray-600 dark:text-gray-700">{book.author}</p>
                    <p className="text-gray-600 dark:text-gray-700">{book.ISBN}</p>
                    <div className="absolute bottom-4 right-4 flex items-center">
                      {selectedBookIndex === index ? (
                        <>
                          <button 
                            className="text-sm text-blue-500 dark:text-blue-400 flex items-center mr-2"
                            onClick={() => handleAddBook(index)}
                          >
                            <RiAddFill className="mr-1" />
                            Agregar libro
                          </button>
                          <button 
                            className="text-sm text-red-500 dark:text-red-400 flex items-center"
                            onClick={handleDeleteBook}
                          >
                            <RiDeleteBinFill className="mr-1" />
                            Eliminar libro
                          </button>
                        </>
                      ) : (
                        <button 
                          className="text-sm text-blue-500 dark:text-blue-400 flex items-center mr-2"
                          onClick={() => handleAddBook(index)}
                        >
                          <RiAddFill className="mr-1" />
                          Agregar libro
                        </button>
                      )}
                    </div>
                    {/* {book.expanded && (
                      <>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{book.description}</p>
                        <button 
                          className="mt-2 text-sm text-gray-500 dark:text-gray-300 flex items-center"
                          onClick={() => toggleDescription(index)}
                        >
                          <BsDash className="mr-1" />
                          Ver menos
                        </button>
                      </>
                    )}
                    {!book.expanded && (
                      <button 
                        className="mt-2 text-sm text-gray-500 dark:text-gray-300 flex items-center"
                        onClick={() => toggleDescription(index)}
                      >
                        <BsPlus className="mr-1" />
                        Ver más
                      </button>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 left-4 right-4 flex items-center space-x-1 justify-center">
        <div className={`relative w-full h-6 bg-green-500 ${booksAdded >= 1 ? 'bg-opacity-100' : 'bg-opacity-50'}`}>
          <span className="absolute left-1/2 transform -translate-x-1/2 text-white text-xs">
            {booksAdded >= 1 && "¡ACABAS DE PEDIR TU PRIMER LIBRO!"}
          </span>
        </div>
        <div className={`relative w-full h-6 bg-orange-500 ${booksAdded >= 2 ? 'bg-opacity-100' : 'bg-opacity-50'}`}>
          <span className="absolute left-1/2 transform -translate-x-1/2 text-white text-xs">
            {booksAdded >= 2 && "¡ESTAS A PUNTO SE LLEGAR AL LIMITE!"}
          </span>
        </div>
        <div className={`relative w-full h-6 bg-red-500 ${booksAdded >= 3 ? 'bg-opacity-100' : 'bg-opacity-50'}`}>
          <span className="absolute left-1/2 transform -translate-x-1/2 text-white text-xs">
            {booksAdded >= 3 && "¡HAS LLEGADO A TU LIMITE!"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryBook;
