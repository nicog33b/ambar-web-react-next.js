import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <Image className="w-auto h-24"  width={200} height={200} src="/ambarLogo.jpg" alt="" />
          </a>
          <div className="flex flex-wrap justify-center mt-6 -mx-4">
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
            <Link href="/contact" className='text-black'>
              <li className="lg:px-5 py-2 hover:text-pink-300 cursor-pointer font-serif text-xl transition-colors duration-700 ">
                Contacto
              </li>
            </Link>
            <Link href="/#coleccion" className='text-black'>
              <li className="lg:px-5 py-2 hover:text-pink-300 cursor-pointer font-serif text-xl transition-colors duration-700 border border-pink-300 font-extrabold  px-2 hover:border-black hover:border-2 ">
               AGENDAR
              </li>
            </Link>
          </ul>
          </div>
          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
          <div className="flex -mx-2">
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Whatsapp">
              <FaWhatsapp className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">© Copyright 2024. All Rights Reserved: <a className='text-blue-300' href='https://tuwebcuantica.com'>Tuwebcuantica.com</a></p>
      
        </div>
      </div>
    </footer>
  );
};

export default Footer;
