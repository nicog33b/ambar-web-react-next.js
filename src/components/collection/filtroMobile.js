import React, { useState } from "react";
import CategoryOption from "./filtroAside/categoryOption";



const MobileFilterOverlay = ({ isOpen, onClose }) => {
  return (
    <div className={`top-0 left-0 w-full h-full bg-gray-200 bg-opacity-75 flex justify-center items-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <aside className="w-full p-4 bg-white">
        <div className="mb-4">
          <div className="mt-1 p-2 rounded-md w-full">
            <CategoryOption
              optionName="CATEGORIAS"
              subcategories={['Vestido corto', 'Vestido largo', 'Conjunto', 'Mono', 'Accesorios', 'Calzado']}
            />
            <CategoryOption
              optionName="TALLES"
              subcategories={['XS', 'S','M','L','XL','2XL', '3XL']}
            />
            <CategoryOption
              optionName="PRECIOS"
              subcategories={[]}
            />
            <CategoryOption
              optionName="COLORES"
              subcategories={[
                'Beige', 'Amarillo', 'Naranja', 'Rojo', 'Rosa', 'Violeta',
                'Azul', 'Verde', 'Marrón', 'Gris', 'Blanco', 'Negro', 'Multicolor', 'Patrón'
              ]}
            />
          </div>
        </div>
        
      </aside>
    </div>
  );
};

export default MobileFilterOverlay;
