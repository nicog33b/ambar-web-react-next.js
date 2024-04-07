import React, { useState, useEffect } from 'react';
import './hero.css'

const HeroCarousel = ({ images = ['/hero/6.jpg', '/hero/9.jpg'], intervalDuration = 9000 }) => {
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [images, intervalDuration]);

  return (
    <section className="hero flex justify-center items-center h-[51rem] bg-cover bg-no-repeat transition-opacity duration-1000 ease-in-out" style={{ backgroundImage: `url('${images[heroImageIndex]}')` }}>
      <div className="text-container">
        <h1 className="title">Encuentra tu vestido.</h1>
        <p className="subtitle">Explora nuestra colección y reserva tu vestido.</p>
        <button className="cta-button">Ver Colección</button>
      </div>
    </section>
  );
};

export default HeroCarousel;
