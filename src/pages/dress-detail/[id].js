import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../../app/globals.css';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbarMain';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(''); // Agregar estado para la imagen seleccionada
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/dresses_ambar/vestidos/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setProduct(data);
          setSelectedImage(data.imagenes[0]); // Establece la imagen principal inicial
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }
  }, [id]);

  // Función para cambiar la imagen principal
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  if (!product) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }

  return (
    <section id='productDetail'>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="flex flex-col md:flex-row md:items-start bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto w-full">
          <div className="w-full md:w-1/2 space-y-4">
            {/* Mostrar la imagen seleccionada */}
            <Image src={selectedImage} alt={product.nombre} width={500} height={600} className="rounded-xl" />
            <div className="flex -space-x-2 overflow-hidden justify-center">
              {/* Actualizar la lista de imágenes para hacerlas clicables */}
              {product.imagenes.map((img, index) => (
                <button key={index} onClick={() => handleImageClick(img)} className="rounded-xl cursor-pointer hover:opacity-75">
                  <Image src={img} alt={`Imagen ${index + 1}`} width={100} height={120} className="rounded-xl" />
                </button>
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
    </div>
<Footer></Footer>
    </section>
  );
};



export default ProductDetail;
