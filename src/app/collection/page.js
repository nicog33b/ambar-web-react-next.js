'use client';
import React, { useState } from 'react';
import DressCard from '../../components/collection/dressCard';
import FilterComponent from '@/components/collection/filterComponent';
import Pagination from '@/components/collection/pagination';

const RentalsPage = () => {
  const dresses = [
    { id: 1, name: 'Vestido 1', image: '/homeModel1.jpg' },
    { id: 2, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 3, name: 'Vestido 3', image: '/homeModel1.jpg' },
    { id: 4, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 5, name: 'Vestido 3', image: '/homeModel1.jpg' },
    { id: 6, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 7, name: 'Vestido 3', image: '/homeModel1.jpg' },
    { id: 8, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 9, name: 'Vestido 3', image: '/homeModel1.jpg' },
    { id: 10, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 11, name: 'Vestido 3', image: '/homeModel1.jpg' },
    { id: 12, name: 'Vestido 2', image: '/homeModel2.jpg' },
    { id: 13, name: 'Vestido 3', image: '/homeModel1.jpg' },
    // ... otros vestidos
  ];

  // Estados para la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [dressesPerPage] = useState(4);

  // Obtén los vestidos actuales que se van a mostrar
  const indexOfLastDress = currentPage * dressesPerPage;
  const indexOfFirstDress = indexOfLastDress - dressesPerPage;
  const currentDresses = dresses.slice(indexOfFirstDress, indexOfLastDress);

  // Funciones para cambiar la página
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  // Determinar la visibilidad de las flechas
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(dresses.length / dressesPerPage);

  return (
    <div className="mt-9 mx-3">
      <div className="flex flex-col lg:flex-row">
        <aside className="lg:w-1/4 mr-4">
          <FilterComponent />
        </aside>
        <main className="flex-grow">
          <div className="relative"> {/* Contenedor relativo para las flechas de navegación */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentDresses.map((dress) => (
                <DressCard key={dress.id} dress={dress} />
              ))}
            </div>
            { !isFirstPage && (
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2" // Ajusta la posición según necesites
              >
                {/* Icono de flecha izquierda o texto */}
                {'<'}
              </button>
            )}
            { !isLastPage && (
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2" // Ajusta la posición según necesites
              >
                {/* Icono de flecha derecha o texto */}
                {'>'}
              </button>
            )}
          </div>
          <Pagination
            itemsPerPage={dressesPerPage}
            totalItems={dresses.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </main>
      </div>
    </div>
  );
};

export default RentalsPage;
