import React from 'react';
import { BsInstagram, BsWhatsapp, BsTelephoneInbound } from 'react-icons/bs';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='flex bg-zinc-900  bg-opacity-10 rounded justify-between items-center px-4 py-2'>

      {/* Contact Info */}
      <div className='flex items-center space-x-4 text-white'>
        <div className='flex items-center space-x-2 hover:text-gray-300 cursor-pointer transition duration-300'>
          <IoLocationOutline className='text-2xl  text-zinc-900 ' />
          
        </div>
        <div className='flex items-center space-x-2 hover:text-gray-300 cursor-pointer transition duration-300'>
          <AiOutlineMail className='text-2xl  bg-transparent text-zinc-900 '/>

        </div>
        <div className='flex items-center space-x-2 hover:text-gray-300 cursor-pointer transition duration-300'>
          <BsTelephoneInbound className='text-2xl  bg-transparent text-zinc-900 ' />
    
        </div>
      </div>

      {/* Social Media Icons */}
      <div className='flex items-center space-x-4 text-white  cursor-pointer transition duration-300'>
        <BsInstagram className='text-2xl  hover:text-gray-300 text-zinc-900 ' />
        <BsWhatsapp className='text-2xl  hover:text-gray-300 text-zinc-900 ' />
      </div>
    </div>
  );
};

export default Navbar;
