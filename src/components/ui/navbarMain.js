'use client'
//fundamentals
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//icons
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id='top'>
      <div className="w-full flex justify-between items-center px-[9%] flex-wrap border-t  border-yellow-200">
        <Link href="/">
          <Image
            src='/ambarLogo.jpg'
            alt="logo"
            width={150}
            height={60}
            className="cursor-pointer"
          />
        </Link>
        <FiMenu
          className="lg:hidden block h-12 w-12 cursor-pointer text-black transition duration-1000 hover:text-pink-300"
          onClick={() => setOpen(!open)}
        />
        <nav className={`${open ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
          <ul className="text-base text-white lg:flex lg:justify-between">
            <Link href="/" className='text-black'>
              <li className="lg:px-5 py-2 hover:text-pink-300 font-serif cursor-pointer text-xl transition-colors duration-700">
                Inicio
              </li>
            </Link>
            <Link href="/#service" className='text-black'>
              <li className="lg:px-5 py-2 hover:text-pink-300 cursor-pointer font-serif text-xl transition-colors duration-700">
                Servicios
              </li>
            </Link>
            <Link href="/#galeria" className='text-black'>
              <li className="lg:px-5 py-2 hover:text-pink-300 cursor-pointer font-serif text-xl transition-colors duration-700 ">
                Galeria
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
