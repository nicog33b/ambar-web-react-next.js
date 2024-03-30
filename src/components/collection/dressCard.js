import React from 'react';
import Image from 'next/image';
const DressCard = ({ dress }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image className="w-full h-80 object-cover object-center" width={400} height={400} src={dress.image} alt={dress.name} />
      <div className="p-4">
        <button className="block mx-auto bg-pink-300 text-white font-semibold py-2 px-4 rounded hover:bg-pink-400 focus:outline-none focus:bg-pink-400 transition duration-300 ease-in-out">Alquilar</button>
      </div>
    </div>
  );
};

export default DressCard;
