'use client';
import React from "react";
import { useState } from "react";
import UserModal from "@/components/modals/usersModal";
const TestPage = () =>{

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const openChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsProfileModalOpen(false);
    setIsChangePasswordModalOpen(false);
  };

return(

<div>
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openProfileModal}>Open Profile Modal</button>
      <button onClick={openChangePasswordModal}>Open Change Password Modal</button>

      <UserModal isOpen={isLoginModalOpen} onClose={closeModal} contentType="login" />
      <UserModal isOpen={isProfileModalOpen} onClose={closeModal} contentType="profile" />
      <UserModal isOpen={isChangePasswordModalOpen} onClose={closeModal} contentType="changePassword" />
    </div>

)

}

export default TestPage;