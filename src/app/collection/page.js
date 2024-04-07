'use client';
import React, { useState } from 'react';
import DressCard from '../../components/collection/dressCard';
import FiltroAside from '@/components/collection/filtroAside';
import MobileFilterOverlay from '@/components/collection/filtroMobile';

import { FaFilter, FaTimesCircle } from 'react-icons/fa';

const RentalsPage = () => {
  const dresses = [
    { id: 1, name: 'Vestido 1', image: '/homeModel1.jpg' },
    { id: 2, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 3, name: 'Vestido 1', image: '/homeModel1.jpg' },
    { id: 4, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 5, name: 'Vestido 1', image: '/homeModel1.jpg' },
    { id: 6, name: 'Vestido 2', image: '/homeModel2.jpg' },
  ];

  const [filteredDresses, setFilteredDresses] = useState(dresses);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleMobileFilterToggle = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="mt-9 mx-3">
      <button
        onClick={handleMobileFilterToggle}
        className="block sm:hidden bg-white text-pink-500 py-2 px-4 rounded mb-4 flex items-center"
        aria-label={isMobileFilterOpen ? 'Cerrar filtro' : 'Abrir filtro'}>
        <p className="font-serif text-2xl mr-2">{isMobileFilterOpen ? 'Cerrar' : 'Filtrar'}</p>
        {isMobileFilterOpen ? <FaTimesCircle /> : <FaFilter />}
      </button>

      {isMobileFilterOpen && <MobileFilterOverlay isOpen={isMobileFilterOpen} onClose={handleMobileFilterToggle} />}

      <div className="flex flex-col sm:flex-row">
        <aside className="lg:w-1/4 mr-4 hidden sm:block">
          <FiltroAside />
        </aside>

        <main className="flex-grow">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredDresses.map((dress) => (
              <DressCard key={dress.id} dress={dress} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default RentalsPage;
