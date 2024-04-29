'use client'
import React, {useState, useEffect} from 'react';
import { FaFilter, FaTimesCircle, FaUndo } from 'react-icons/fa';

const FilterComponent = ({
  availableCategories,
  availableSizes,
  availableColors,
  selectedCategories,
  selectedSizes,
  selectedColors,
  setSelectedCategories,
  setSelectedSizes,
  setSelectedColors,
  toggleCategoryFilter,
  toggleSizeFilter,
  toggleColorFilter,
  categoryCounts,
  sizeCounts,
  colorCounts
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Manejadores para los filtros y lógica para ancho de pantalla
    const handleMobileFilterToggle = () => {
        setIsMobileFilterOpen(!isMobileFilterOpen);
      };
    
      useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', checkMobile);
        checkMobile();
    
        return () => window.removeEventListener('resize', checkMobile);
      }, []);


  // Función para manejar la selección/deselección de filtros
  const handleFilterToggle = (filterType, value) => {
    const filterActions = {
      categories: toggleCategoryFilter,
      sizes: toggleSizeFilter,
      colors: toggleColorFilter,
    };
    filterActions[filterType](value);
  };
      useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', checkMobile);
        checkMobile();
    
        return () => window.removeEventListener('resize', checkMobile);
      }, []);

      
    
  const categories = [
    'Vestido corto', 'Vestido largo', 'Conjunto', 'Mono', 'Accesorios', 'Calzado'
  ];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
  const colors = [
    'Beige', 'Amarillo', 'Naranja', 'Rojo', 'Rosa', 'Violeta',
    'Azul', 'Verde', 'Marrón', 'Gris', 'Blanco', 'Negro', 'Multicolor', 'Patrón'
  ];

  // Reutilizamos esta función para manejar varias categorías de selección
  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter((i) => i !== item)
        : [...prevSelectedItems, item]
    );
  };

  // Componente de botón reutilizable
  const FilterButton = ({ item, isSelected, toggle }) => (
    <button
      className={`border-2 ${isSelected ? 'border-indigo-500 bg-indigo-200' : 'border-gray-200'} 
      text-sm py-1 px-3 rounded-full transition duration-300 ease-in-out
      hover:bg-indigo-100 hover:border-indigo-400`}
      onClick={() => toggle(item)}
    >
      {item}
    </button>
  );

  // Función para limpiar todos los filtros
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  // Verificar si algún filtro está activo
  const isFilterActive = selectedCategories.length > 0 || selectedSizes.length > 0 || selectedColors.length > 0;

  return (
    <div>
      {isMobile && (
        <div className="flex justify-between items-center bg-white py-2 px-4 rounded mb-4 shadow">
          <button
            onClick={handleMobileFilterToggle}
            className="text-black hover:text-gray-600 transition-colors duration-300"
            aria-label={isMobileFilterOpen ? 'Cerrar filtro' : 'Abrir filtro'}
          >
            {isMobileFilterOpen ? (
              <FaTimesCircle className="text-3xl" />
            ) : (
              <span className='flex items-center'>
                <span className="font-medium text-xl mr-2" >Filtrar</span>
                <FaFilter className="text-2xl" />
              </span>
            )}
          </button>

          {isMobileFilterOpen && isFilterActive && (
            <button
              onClick={clearAllFilters}
              className="text-gray-500 hover:text-gray-600 transition-colors duration-300"
              aria-label="Limpiar filtros"
            >
              <FaUndo className="text-3xl" />
            </button>
          )}
        </div>
      )}
      <div className={`${isMobile ? (isMobileFilterOpen ? 'block' : 'hidden') : 'block'}`}>
        <div className="p-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">FILTROS</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <FilterButton
                  key={category}
                  item={category}
                  isSelected={selectedCategories.includes(category)}
                  toggle={() => toggleSelection(category, selectedCategories, setSelectedCategories)}
                />
              ))}
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-2">TALLES</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <FilterButton
                  key={size}
                  item={size}
                  isSelected={selectedSizes.includes(size)}
                  toggle={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
                />
              ))}
            </div>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-2">COLORES</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <FilterButton
                  key={color}
                  item={color}
                  isSelected={selectedColors.includes(color)}
                  toggle={() => toggleSelection(color, selectedColors, setSelectedColors)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default FilterComponent;
