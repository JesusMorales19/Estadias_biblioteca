import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderClient from "../../components/HeaderClient.jsx";
import { useGetAllCategory } from "../../hooks/category.hook";
import Generalidades from "../../assets/fondo.png";
import Filosofia from "../../assets/fondo.png";
import Religion from "../../assets/fondo.png";
import Ciencias_Sociales from "../../assets/fondo.png";
import Lenguas from "../../assets/fondo.png";
import Ciencias_Puras from "../../assets/fondo.png";
import Tecnologias from "../../assets/fondo.png";
import Bellas_Artes from "../../assets/fondo.png";
import  Literatura from "../../assets/fondo.png";
import Geografia_y_Historia from "../../assets/fondo.png"

// Objeto con las rutas de las imágenes
const images = {
  Generalidades, 
  Filosofia,
  Religion,
  Ciencias_Sociales,
  Lenguas,
  Ciencias_Puras,
  Tecnologias,
  Bellas_Artes,
  Literatura,
  Geografia_y_Historia,
};

const Usuarios = () => {
  const { categories, loading, error } = useGetAllCategory();
  const navigate = useNavigate();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar las categorías</div>;
  }

  const handleCategoryClick = (categoryId) => {
    navigate(`/categoria/${categoryId}`);
  };

  return (
    <div className="bg-gray-100 p-4 dark:bg-neutral-900 min-h-screen">
      <HeaderClient />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div 
            key={category.Category} 
            className="cursor-pointer" 
            onClick={() => handleCategoryClick(category.Category)}
          >
            <img 
              src={images[category.nameCategory]} 
              alt={category.nameCategory} 
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
            <p className="text-center mt-2">{category.nameCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usuarios;