import { useState } from 'react';

const ChangePassword = () => {
  // Estado y manejo del formulario como antes
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log('Password Change', { currentPassword, newPassword });
  };

  // Actualización de estilos para mejorar la coherencia visual
  return (
    <div className="space-y-8 p-6">
      <h2 className="text-xl font-semibold text-gray-900">Cambiar Contraseña</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Contraseña Actual</label>
          <input
            type="password"
            id="currentPassword"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
          <input
            type="password"
            id="newPassword"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Nueva Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cambiar Contraseña
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;

