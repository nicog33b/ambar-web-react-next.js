import React from 'react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='flex bg-gradient-to-br from-gray-200 to-pink-300 justify-between items-center p-2 '>
   <div className='flex items-center space-x-2 text-black '>
         <div className='hover:text-gray-400 flex ml-6 mr-6 cursor-pointer duration-1000'>
        <IoLocationOutline className='h-4 w-4 text-xl font-bold rounded ' />
        <p className='text-sm font-bold'>Pando</p>
        </div>
        <div className='hover:text-gray-400 flex cursor-pointer duration-1000'>
        <AiOutlineMail className='h-4 w-4 text-xl font-bold rounded'/>
        <p className='text-sm font-bold'>ambar@gmail.com</p>
</div>
      </div>

      <div className='flex items-center space-x-4 text-gray-300'>

        <div className='flex items-center space-x-2 mr-6'>
          <BsInstagram className='h-4 w-4 text-black hover:text-gray-400 cursor-pointer duration-1000' />
          <BsWhatsapp className='h-4 w-4 text-black hover:text-gray-400 cursor-pointer duration-1000' />
        </div>

      </div>

   
    </div>
  );
};

export default Navbar;
