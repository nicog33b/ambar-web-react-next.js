import React, { useState } from 'react';

const Filters = ({ applyFilters }) => {
  // State for category and size filters
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sizeFilters, setSizeFilters] = useState([]);

  // Function for handling category filter change
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
    applyFilters(event.target.value, sizeFilters);
  };

  // Function for handling size filter change
  const handleSizeChange = (size) => {
    const updatedFilters = sizeFilters.includes(size)
      ? sizeFilters.filter((filter) => filter !== size)
      : [...sizeFilters, size];
    setSizeFilters(updatedFilters);
    applyFilters(categoryFilter, updatedFilters);
  };

  return (
    <div className="flex flex-col space-y-4 bg-pink-50 py-6 px-6 h-full">
      <h2 style={{ fontFamily: 'Wulkan Display, sans-serif' }} className="text-lg font-serif text-center">Filtros</h2>
      {/* Category Filter */}
      <div className="flex items-center">
        <label htmlFor="categoryFilter" className="mr-2 text-sm font-medium w-full">Categoría:</label>
        <select
          id="categoryFilter"
          className="flex-grow border rounded-md shadow-sm py-1 px-2 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full"
          value={categoryFilter}
          onChange={handleCategoryChange}
        >
          <option value="">Todas</option>
          <option value="Vestido corto">Vestido corto</option>
          <option value="Vestido largo">Vestido largo</option>
          <option value="Mono">Mono</option>
          <option value="Conjunto">Conjunto</option>
          <option value="Calzado">Calzado</option>
          <option value="Accesorio">Accesorio</option>
        </select>
      </div>
      {/* Size Filter */}
      <div className="flex flex-wrap items-center">
        <label className="mr-2 text-sm font-medium">Talle:</label>
        <div className="flex flex-wrap">
          {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
            <button
              key={size}
              className={`mr-2 mb-2 px-2 py-1 rounded-md text-sm shadow-sm ${
                sizeFilters.includes(size) ? 'bg-indigo-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => handleSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
