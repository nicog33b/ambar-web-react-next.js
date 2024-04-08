import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div className=" py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black" >
        <div className="text-center">
              <p className="mt-4 text-sm text-gray-600">Ahorra tu dinero alquilando.</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Nuestros Servicios</h2>
        
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4 relative">
              <Image src="/services/dresses.jpg" alt="Vestidos" layout="contain" width={300} height={200} />
            </div>
            <p className="mt-2 text-base text-gray-600">Vestidos para diferentes ocasiones y estilos.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4 relative">
              <Image src="/services/accesories.jpg" alt="Accesorios" layout="contain" width={300} height={200} />
            </div>
            <p className="mt-2 text-base text-gray-600">Completa tu look con accesorios elegantes.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4 relative">
              <Image src="/services/sandals.jpg" alt="Sandalias" layout="contain" width={300} height={200} />
            </div>
            <p className="mt-2 text-base text-gray-600">Encuentra el calzado perfecto.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
