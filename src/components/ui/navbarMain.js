'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiUser, FiShoppingCart } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'; // Iconos de redes sociales

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <section id='top'>
      <div className="w-full flex justify-between items-center px-[9%] py-[3%] flex-wrap">
        <Link href="/" passHref>
          <Image
            src='/ambarLogo2.jpg'
            alt="logo"
            width={250}
            height={250}
            className="cursor-pointer"
          />
        </Link>
        <FiMenu
          className="lg:hidden block h-12 w-12 cursor-pointer text-black transition duration-300 ease-in-out hover:text-pink-500"
          onClick={() => setOpen(!open)}
        />
        <div className={`fixed lg:static top-0 right-0 lg:transform-none transform ${open ? "translate-x-0" : "translate-x-full"} h-full lg:h-auto w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] xl:w-auto bg-white shadow-sm  rounded-sm shadow-pink-300 z-50 transition-transform duration-700 ease-in-out lg:bg-transparent`}>
          
          <IoMdClose
            className="block h-12 w-12 cursor-pointer text-black absolute top-0 right-0 m-4 lg:hidden"
            onClick={() => setOpen(false)}
          />


          <div className="flex flex-col items-center justify-center pt-8 lg:hidden">
            <div className="flex items-center justify-between space-x-4 py-4 mb-4">
            
            </div>
            <div className="text-center">
              <Link href="/login">
                <span className="inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition-colors duration-300 text-lg">Iniciar Sesión</span>
              </Link>
              <Link href="/cart">
                <span className="inline-block ml-4 bg-transparent border border-pink-500 text-pink-500 py-2 px-4 rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300 text-lg">Ver Carrito</span>
              </Link>
            </div>
          </div>


          <hr className="my-2 border-t border-gray-200 w-full lg:hidden" />
          <nav className="flex flex-col lg:flex-row items-start lg:items-center py-2 lg:py-0">
            <ul className="text-lg text-black w-full lg:flex lg:flex-row justify-between">
              {/* Navegación */}
              <li className="px-6 py-4 font-serif cursor-pointer text-xl transition-colors duration-500 hover:text-pink-500 hover:bg-gray-200" >
                <Link href="/" className="text-black hover:text-pink-500 block w-full  text-lato">INICIO</Link>
              </li>
              <li className="px-6 py-4 font-serif cursor-pointer text-xl transition-colors duration-500 hover:text-pink-500 hover:bg-gray-200">
                <Link href="/#serviceSection" className="text-black hover:text-pink-500 block w-full  text-lato">SERVICIOS</Link>
              </li>
              <li className="px-6 py-4 font-serif cursor-pointer text-xl transition-colors duration-500 hover:text-pink-500 hover:bg-gray-200">
                <Link href="/collection" className="text-black hover:text-pink-500 block w-full  text-lato">COLECCIÓN</Link>
              </li>
              <li className="px-6 py-4 font-serif cursor-pointer text-xl transition-colors duration-500 hover:text-pink-500 hover:bg-gray-200">
                <Link href="/contact" className="text-black hover:text-pink-500 block w-full  text-lato">CONTACTO</Link>
              </li>
              <li className="px-6 py-4 font-serif cursor-pointer text-xl transition-colors duration-500 hover:text-pink-500 hover:bg-gray-200">
                <Link href="/contact" className="text-black hover:text-pink-500 block w-full  text-lato" >AGENDAR</Link>
              </li>
            </ul>
            <hr className="my-4 border-t border-gray-200 w-full lg:hidden" />

            {/* Redes Sociales - En cuadrícula */}
            <div className="grid grid-cols-3 gap-4 p-4 lg:hidden mx-auto my-auto">
              <FaFacebookF className="text-3xl text-black cursor-pointer hover:text-pink-500 transition-colors duration-500 m-2" />
              <FaInstagram className="text-3xl text-black cursor-pointer hover:text-pink-500 transition-colors duration-500 m-2" />
              <FaWhatsapp className="text-3xl text-black cursor-pointer hover:text-pink-500 transition-colors duration-500 m-2" />
            </div>
            <hr className="my-4 border-t border-gray-200 w-full lg:hidden" />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
