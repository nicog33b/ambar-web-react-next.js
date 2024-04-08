import React from 'react';
import ServiceCard from './cardService';

const ServicesSection = () => {
  return (
    
    <section id='serviceSection ' className=' bg-gradient-radial  from-pink-300  to-pink-200  '>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-8 px-4 sm:px-6 p-1">
      <ServiceCard
        imageSrc="/services/accesories.jpg"
        title="Accesorios"
        description="Completa tu look con accesorios elegantes."
        butonText="Accesorios"
      />
      <ServiceCard
        imageSrc="/services/dresses.jpg"
        title="Vestidos"
        description="Vestidos para diferentes ocasiones y estilos."
        butonText="Vestidos"
      />
      <ServiceCard
        imageSrc="/services/sandals.jpg"
        title="Calzados"
        description="Encuentra el calzado perfecto."
        butonText="Calzado"
      />
    </div>
    <hr className='text-black m-1'></hr>
    </section>

  );
};

export default ServicesSection;
