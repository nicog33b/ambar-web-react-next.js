'use client';
import React, { useState, useEffect } from 'react';
import DressCard from '@/components/collection/dressCard';
import FilterComponent from '@/components/collection/filterComponent';
import Pagination from '@/components/collection/pagination';

const RentalsPage = () => {
  const [dresses, setDresses] = useState([]);
  const [filteredDresses, setFilteredDresses] = useState([]); // Usa un estado para almacenar los vestidos filtrados
  const [currentPage, setCurrentPage] = useState(1);
  const [dressesPerPage] = useState(12);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {
    async function fetchDresses() {
      try {
        const response = await fetch('http://localhost:3000/dresses_ambar/vestidos');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setDresses(data);
        setFilteredDresses(data); // Inicializa los vestidos filtrados con todos los vestidos
      } catch (error) {
        console.error('Error fetching dresses:', error);
      }
    }
    fetchDresses();
  }, []);

  useEffect(() => {
    const filtered = dresses.filter(dress => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(dress.tipo);
      const sizeMatch = selectedSizes.length === 0 || dress.talles.some(talle => selectedSizes.includes(talle));
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(dress.color);
      return categoryMatch && sizeMatch && colorMatch;
    });
    setFilteredDresses(filtered);
    setCurrentPage(1); // Restablece a la primera página al aplicar nuevos filtros
  }, [dresses, selectedCategories, selectedSizes, selectedColors]);

  const indexOfLastDress = currentPage * dressesPerPage;
  const indexOfFirstDress = indexOfLastDress - dressesPerPage;
  const currentDresses = filteredDresses.slice(indexOfFirstDress, indexOfLastDress);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage >= Math.ceil(filteredDresses.length / dressesPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="mt-9 mx-3">
      <div className="flex flex-col lg:flex-row">
        <aside className="lg:w-1/3 mr-4">
          <FilterComponent
            availableCategories={Array.from(new Set(dresses.map(dress => dress.tipo)))}
            availableSizes={Array.from(new Set(dresses.flatMap(dress => dress.talles)))}
            availableColors={Array.from(new Set(dresses.map(dress => dress.color)))}
            selectedCategories={selectedCategories}
            selectedSizes={selectedSizes}
            selectedColors={selectedColors}
            setSelectedCategories={setSelectedCategories}
            setSelectedSizes={setSelectedSizes}
            setSelectedColors={setSelectedColors}
            toggleCategoryFilter={category => setSelectedCategories(prev => toggleFilter(prev, category))}
            toggleSizeFilter={size => setSelectedSizes(prev => toggleFilter(prev, size))}
            toggleColorFilter={color => setSelectedColors(prev => toggleFilter(prev, color))}
          />
        </aside>
        <main className="flex-grow">
          <div className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {currentDresses.map(dress => (
              <DressCard key={dress._id} dress={dress} />
            ))}
            {!isFirstPage && <button onClick={() => setCurrentPage(current => current - 1)} className="absolute left-0 top-1/2 transform -translate-y-1/2">{'<'}</button>}
            {currentPage < Math.ceil(filteredDresses.length / dressesPerPage) && <button onClick={() => setCurrentPage(current => current + 1)} className="absolute right-0 top-1/2 transform -translate-y-1/2">{'>'}</button>}
          </div>
          <Pagination itemsPerPage={dressesPerPage} totalItems={filteredDresses.length} paginate={paginate} currentPage={currentPage} />
        </main>
      </div>
    </div>
  );
};

const toggleFilter = (filters, filter) => {
  const index = filters.indexOf(filter);
  return index < 0 ? [...filters, filter] : filters.filter(f => f !== filter);
};

export default RentalsPage;
