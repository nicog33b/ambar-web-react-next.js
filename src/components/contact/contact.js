import React from 'react';

const ContactSection = () => {

    const mapStyle = {
        width: '100%',
        height: '100%',
        filter: 'pinkscale(1) contrast(1.2) opacity(0.4)', // Estilo de filtro opcional
        // Estilo de mapa personalizado JSON
        styles: [
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
          { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
          { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#333333' }] },
          // Agrega más reglas de estilo según sea necesario
        ]
      };

  return (
    <section id='contactSection' className="text-gray-600 body-font relative bg-pink-100">
      <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap  rounded-sm bg-pink-100">
        <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-4 md:p-10 flex items-end justify-start relative bg-pink-100">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
            style={mapStyle}
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=-34.72001919790762,-55.96259497836975&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className="bg-gray-100 relative flex flex-wrap py-6 rounded shadow-md w-full opacity-0 lg:opacity-100 mt-4 md:mt-0">
            <div className="lg:w-1/2 px-4 md:px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Dirección</h2>
              <p className="mt-1 hidden md:block">Independencia 919bis, enfrente al deposito de OSE.</p>
            </div>
            <div className="lg:w-1/2 px-4 md:px-6 mt-4 md:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Email</h2>
              <a href="mailto:example@email.com" className="text-red-500 leading-relaxed">Ambar@email.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Celular</h2>
              <p className="leading-relaxed">093 546 091 o 095566660</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-pink-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-1 py-4 font-serif title-font">¡Contáctanos!</h2>
          <p className="leading-relaxed mb-5 text-gray-600">¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-lg text-gray-600 font-serif">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-lg text-gray-600 font-serif">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-lg text-gray-600 font-serif">¡Te escuchamos, expláyate!</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white font-bold bg-pink-300 border-0 py-4 px-8 focus:outline-none hover:bg-blue-500 rounded text-lg hover:text-pink-300 hover:font-extrabold">Envíar</button>
          <p className="text-xs text-gray-500 mt-3">Tus datos seran usados exclusivamente para comunicarnos contigo.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
