import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SeeAllDress = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/homeModel1.jpg', '/homeModel2.jpg']; // Agrega más imágenes según sea necesario

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mt-3 ">
  <div className=" w-full mx-auto p-8 bg-pink-50 rounded-lg shadow-lg sm:w-6/12 md:6/12  " >
        <p className="text-lg text-gray-600 text-center mb-8">Explora nuestra amplia colección de vestidos para cada ocasión.</p>
        <div className="flex flex-col items-center justify-center relative w-full">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 rounded-full p-2"
            onClick={prevImage}
          >
            <FaArrowLeft className="text-white" />
          </button>
          <Image src={images[currentIndex]} alt={`Vestido ${currentIndex + 1}`} width={400} height={500} className="rounded-lg mb-4 hover:opacity-75 cursor-pointer" />
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 rounded-full p-2"
            onClick={nextImage}
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>
        <div className="mt-8 text-center">
          <Link href="/catalogo">
            <p className="text-white px-6 py-3 rounded-lg font-semibold bg-gray-600 hover:bg-pink-300 transition duration-300">Ver Colección Completa</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeeAllDress;
