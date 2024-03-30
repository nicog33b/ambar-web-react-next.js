'use client';
import React, { useState } from 'react';
import DressCard from '../../components/collection/dressCard';
import Filters from '../../components/collection/dressFilter';

const RentalsPage = () => {
  // Aquí iría la lógica para obtener los datos de los vestidos, por ejemplo:
  const dresses = [
    { id: 1, name: 'Vestido 1', image: '/homeModel1.jpg' },
    { id: 2, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 3, name: 'Vestido 1', image: '/homeModel1.jpg' },
    { id: 4, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 5, name: 'Vestido 1', image: '/homeModel1.jpg' },
    { id: 6, name: 'Vestido 2', image: '/homeModel2.jpg' },
    // Otros vestidos...
  ];

  // Estado para los vestidos filtrados
  const [filteredDresses, setFilteredDresses] = useState(dresses);

  // Función para aplicar los filtros
  const applyFilters = (category, size) => {
    let filtered = dresses;
    if (category) {
      filtered = filtered.filter((dress) => dress.category === category);
    }
    if (size) {
      filtered = filtered.filter((dress) => dress.size === size);
    }
    setFilteredDresses(filtered);
  };

  return (
    <div className="mt-9 mr-3 ml-3">
      {/* Filtros en dispositivos móviles */}
      <div className="sm:hidden">
        <Filters applyFilters={applyFilters} />
      </div>
      <div className="flex flex-col sm:flex-row">
        {/* Columna de filtros en dispositivos de escritorio */}
        <div className="lg:w-1/4 mr-4 hidden sm:block">
          <Filters applyFilters={applyFilters} />
        </div>
        {/* Grid de productos */}
        <div className="flex-grow">
          {/* Ajustar el número mínimo de columnas */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredDresses.map((dress) => (
              <DressCard key={dress.id} dress={dress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalsPage;
