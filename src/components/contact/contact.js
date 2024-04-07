import React from 'react';
import './contact.css'; // Asegúrate de tener este archivo en la ruta correcta y con los estilos actualizados

const ContactSection = () => {
  return (
    <section id='contactSection' className="text-gray-600 body-font relative bg-pink-100">
      <div className="container px-5 py-8 mx-auto flex flex-col lg:flex-row justify-between items-stretch rounded-sm shadow-lg bg-white">
        {/* Contenedor del formulario */}
        <div className="lg:w-1/3 md:w-1/2 flex flex-col w-full mb-8 lg:mb-0">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">¡Contáctanos!</h2>
          <p className="leading-relaxed mb-5 text-gray-600">¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!</p>
          <form action="#" method="POST"> {/* Si estás manejando la lógica del formulario */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre completo</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Enviar</button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Tus datos serán usados exclusivamente para comunicarnos contigo.</p>
        </div>

        {/* Contenedor del mapa */}
        <div className="lg:w-2/3 md:w-1/2 w-full h-64 sm:h-48 lg:h-auto overflow-hidden rounded-lg shadow-lg relative mb-8 lg:mb-0">
  <iframe
    className="absolute inset-0 w-[80%] mx-auto my-auto h-full rounded-lg grayscale contrast-125 opacity-80"
    title="map"
    loading="lazy"
    // Asegúrate de que la altura mínima sea adecuada para móviles y que el mapa se expanda correctamente en dispositivos más grandes
    style={{ minHeight: '250px' }}
    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=-34.72001919790762,-55.96259497836975&ie=UTF8&t=&z=14&iwloc=B&output=embed"
  ></iframe>
</div>
      </div>
    </section>
  );
};

export default ContactSection;
