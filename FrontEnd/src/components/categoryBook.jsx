import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetBooksByCategory } from "../hooks/book.hook.js";
import HeaderClient from "../components/HeaderClient.jsx";

const CategoryBook = () => {
  const { categoryId } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await useGetBooksByCategory(categoryId);
        setBooks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [categoryId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los libros</div>;
  }

  return (
    <div className="bg-gray-100 p-4 dark:bg-neutral-900 min-h-screen">
      <HeaderClient />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book._id} className="bg-white p-4 rounded-md shadow-md">
            <img 
              src={book.coverImage} 
              alt={book.title} 
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBook;
