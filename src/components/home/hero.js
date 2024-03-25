import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [heroImage, setHeroImage] = useState('/hero/9.jpg'); // Estado para almacenar la imagen actual del héroe

  useEffect(() => {
    // Función para cambiar la imagen del héroe cada 9 segundos
    const interval = setInterval(() => {
      setHeroImage((prevImage) => 
        prevImage === '/hero/9.jpg' ? '/hero/6.jpg' : '/hero/9.jpg'
      );
    }, 9000); // 9000 milisegundos = 9 segundos

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(interval);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <section className="hero flex justify-center items-center h-[51rem] bg-cover bg-no-repeat" style={{ backgroundImage: `url('${heroImage}')` }}>
    
      <div className="text-center text-black">
        <h1 className="text-6xl lg:text-9xl font-black text-white mb-4" style={{ fontFamily: 'Wulkan Display, sans-serif' }}>Encuentra tu vestido.</h1>
        <p className="hero-p-font text-2xl mb-8 lg:text-3xl font-black text-pink-300 	">Explora nuestra colección y reserva tu vestido.</p>
        <button className="bg-pink-300  hover:bg-black text-white font-bold py-4 px-4 rounded transition duration-300">Ver Colección</button>
      </div>
    </section>
  );
};

export default HeroCarousel;
