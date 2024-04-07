// Importamos `useState` desde React y `Image` desde Next.js como antes
import { useState } from 'react';
import Image from 'next/image';

const Login = () => {
  // Estado y manejo del formulario como antes
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login', { email, password });
  };

  // Estilos actualizados y mejoras en el formulario
  return (
    <div className="space-y-8 p-6">
      <div className="flex flex-col items-center justify-center">
        <Image src='/ambarLogo.jpg' width={150} height={150} alt="Logo" className="rounded-full"/>
        <p className="mt-4 text-sm text-gray-600">
          ¿No tienes una cuenta?
          <a href="/registro" className="ml-1 font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">Regístrate aquí</a>
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ease-in-out">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

