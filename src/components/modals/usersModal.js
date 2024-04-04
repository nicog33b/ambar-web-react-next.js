import { useState } from 'react';
import LoginForm from './LoginForm';
import Profile from './Profile';
import ChangePasswordForm from './ChangePasswordForm';

const Modal = ({ isOpen, onClose, contentType }) => {
  const renderContent = () => {
    switch (contentType) {
      case 'login':
        return <LoginForm />;
      case 'profile':
        return <Profile />;
      case 'changePassword':
        return <ChangePasswordForm />;
      default:
        return null;
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
              X
            </button>
            {renderContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
