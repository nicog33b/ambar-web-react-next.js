import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" passHref>
            <Image src="/ambarLogo.jpg" alt="Ambar Logo" width={200} height={200} className="mx-auto  object-contain" />
          </Link>
          {/* Use grid layout for better responsiveness */}
          <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center px-4 py-8 bg-gradient-to-r from-pink-300 to-black rounded-lg shadow-lg">
  <Link href="/" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out font-bold text-lg md:text-xl hover:scale-110 transform">
    Inicio
  </Link>
  <Link href="/#service" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out font-bold text-lg md:text-xl hover:scale-110 transform">
    Servicios
  </Link>
  <Link href="/#galeria" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out font-bold text-lg md:text-xl hover:scale-110 transform">
    Galería
  </Link>
  <Link href="/contact" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out font-bold text-lg md:text-xl hover:scale-110 transform">
    Contacto
  </Link>
  <Link href="/#coleccion" className="text-white hover:text-yellow-300 transition duration-300 ease-in-out font-bold text-lg md:text-xl hover:scale-110 transform">
    Agendar
  </Link>
</div>

          <hr className="my-6 w-full border-gray-200" />
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-green-500 transition duration-300" aria-label="Whatsapp">
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition duration-300" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <hr className="my-6 w-full border-gray-200" />
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © 2024. All Rights Reserved: <a href='https://tuwebcuantica.com' className='text-pink-500 hover:underline'>Tuwebcuantica.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
