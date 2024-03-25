
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
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:font-bold dark:hover:text-pink-400" aria-label="Home">Home</a>
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:font-bold   dark:hover:text-pink-400" aria-label="About">About</a>
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:font-bold   dark:hover:text-pink-400" aria-label="Teams">Teams</a>
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:font-bold  dark:hover:text-pink-400" aria-label="Privacy">Privacy</a>
            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:font-bold  dark:hover:text-pink-400" aria-label="Cookies">Cookies</a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">© Copyright 2024. All Rights Reserved: <a className='text-blue-300' href='https://tuwebcuantica.com'>Tuwebcuantica.com</a></p>
          <div className="flex -mx-2">
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Whatsapp">
              <FaWhatsapp className="w-5 h-5 fill-current" />
            </a>
            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
