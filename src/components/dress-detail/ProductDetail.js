import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null); // Estado inicial del producto como null

  useEffect(() => {
    // Realiza el fetch al cargar el componente
    fetch(`http://localhost:3000/dresses_ambar/vestidos/${id}`) // Asegúrate de usar la variable id correctamente
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data); // Actualiza el estado con los datos del producto
        console.log(data);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, [id]); // Añade id al array de dependencias si es relevante

  // Renderiza sólo si product está completamente cargado
  if (!product) {
    return <div>Cargando...</div>; // Mostrar un indicador de carga mientras los datos no están disponibles
  }

  return (
    <div className="flex flex-col md:flex-row md:items-start bg-white p-6 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 space-y-4">
        <Image src={product.imagenes[0]} alt={product.nombre} width={500} height={600} className="rounded-xl" />
        <div className="flex -space-x-2 overflow-hidden">
          {product.imagenes.map((img, index) => (
            <Image key={index} src={img} alt={`Imagen ${index + 1}`} width={100} height={120} className="rounded-xl cursor-pointer hover:opacity-75" />
          ))}
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:w-1/2 md:pl-10">
        <h2 className="text-2xl font-bold">{product.nombre}</h2>
        <p className="text-xl text-red-500 font-semibold">${product.precio.toFixed(2)}</p>
        <div className="mt-4">
          <div className="text-gray-700"><strong>Código:</strong> {product._id}</div>
          <div className="text-gray-700"><strong>Categoría:</strong> {product.tipo}</div>
          <div className="text-gray-700"><strong>Talle:</strong> {product.talles.join(", ")}</div>
          <p className="text-gray-700 mt-4">{product.descripcion}</p>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ver Disponibilidad
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
