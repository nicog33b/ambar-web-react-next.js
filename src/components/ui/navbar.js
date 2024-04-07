import React from 'react';
import { BsInstagram, BsWhatsapp, BsTelephoneInbound } from 'react-icons/bs';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='flex bg-gradient-to-br  from-pink-200 to-violet-300 justify-between items-center px-4 py-2'>

      {/* Contact Info */}
      <div className='flex items-center space-x-4 text-white'>
        <div className='flex items-center space-x-2 hover:text-gray-300 cursor-pointer transition duration-300'>
          <IoLocationOutline className='text-2xl ' />
          
        </div>
        <div className='flex items-center space-x-2 hover:text-gray-300 cursor-pointer transition duration-300'>
          <AiOutlineMail className='text-2xl  bg-transparent'/>

        </div>
        <div className='flex items-center space-x-2 hover:text-gray-300 cursor-pointer transition duration-300'>
          <BsTelephoneInbound className='text-2xl  bg-transparent' />
    
        </div>
      </div>

      {/* Social Media Icons */}
      <div className='flex items-center space-x-4 text-white  cursor-pointer transition duration-300'>
        <BsInstagram className='text-2xl  hover:text-gray-300' />
        <BsWhatsapp className='text-2xl  hover:text-gray-300' />
      </div>
    </div>
  );
};

export default Navbar;
