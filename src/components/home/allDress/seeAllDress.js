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
        <p style={{ fontFamily: 'Wulkan Display, sans-serif' }} className="text-xl text-gray-600 text-center mb-8">Explora nuestra amplia colección de vestidos para cada ocasión.</p>
        <div className="flex flex-col items-center justify-center relative w-full">
      
          <Image src={images[currentIndex]} alt={`Vestido ${currentIndex + 1}`} width={400} height={500} className="rounded-lg mb-4 hover:opacity-75 cursor-pointer" />
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 py-2 px-2 hover:bg-pink-400 hover:border-2 border-black"
            onClick={nextImage}
          >
            <FaArrowRight className="text-white h-6 w-6 " />
          </button>
        </div>
        <div className="mt-8 text-center">
          <Link href="/catalogo">
            <p style={{ fontFamily: 'Wulkan Display, sans-serif' }} className="text-2xl text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition duration-300 bg-pink-300">Ver Colección Completa</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeeAllDress;
