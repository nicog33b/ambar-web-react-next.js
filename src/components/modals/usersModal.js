import { useEffect } from 'react';
import Login from './usersModal/loginForm';
import ChangePassword from './usersModal/changepassword';
import Profile from './usersModal/profile';
import { IoMdClose } from "react-icons/io"; // Asegúrate de tener instalado react-icons

const UserModal = ({ isOpen, onClose, contentType }) => {
  useEffect(() => {
    // Prevenir el scroll del fondo cuando el modal está abierto
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  const renderContent = () => {
    switch (contentType) {
      case 'login':
        return <Login />;
      case 'profile':
        return <Profile />;
      case 'changePassword':
        return <ChangePassword />;
      default:
        return null;
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="relative bg-white rounded-lg shadow-xl overflow-hidden transform transition-all sm:my-8 sm:max-w-lg w-full">
              <div className="px-4 py-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <button
                      className="absolute top-0 right-0 p-4 text-gray-600 hover:text-gray-800"
                      onClick={onClose}
                    >
                      <IoMdClose className="h-5 w-5" />
                    </button>
                    {renderContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserModal;
