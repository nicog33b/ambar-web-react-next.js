'use client';
import React, { useState } from "react";
import CategoryOption from "./filtroAside/categoryOption";


const FiltroAside = () => {
  const [priceRange, setPriceRange] = useState([]);

  return (
    <aside className="w-[15rem] p-4">
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
  );
};

export default FiltroAside;
