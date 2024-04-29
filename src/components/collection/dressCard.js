import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importa el componente Link

const DressCard = ({ dress }) => {
  return (
    <div className="group bg-white p-4 shadow rounded-lg flex flex-col justify-between">
      <div className="relative">
        <Image 
          className="w-full h-auto object-cover rounded" 
          src={dress.imagenes[0]} 
          alt={dress.nombre} 
          width={360} 
          height={420} 
          layout="responsive"
        />
        {/* Usa el componente Link para el enlace */}
        <Link href={`/dress-detail/${dress._id}`} passHref>
          <button className="absolute bottom-0 left-0 w-full bg-opacity-30 bg-black hover:bg-pink-300 hover:bg-opacity-75 text-white font-semibold py-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            Ver producto
          </button>
        </Link>
      </div>
      <div className="pt-1 pb-2 px-1 text-center mt-3">
        <h3 className="text-xs font-semibold text-gray-800 mb-1">{dress.nombre}</h3>
        <p className="text-xs font-serif text-gray-900 mt-2">${dress.precio}</p>
      </div>
    </div>
  );
};

export default DressCard;
