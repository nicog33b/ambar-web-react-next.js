import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ imageSrc, title, description, butonText }) => {
  return (
    <section className='cardService'>
      <div className='text-center py-12 rounded-2xl cursor-pointer ease-in-duration-200 hover:bg-neutral-200 mr-1 ml-1 duration-700'>
        <div className='inline-block rounded-2xl py-5  '>
          <Image className='h-full w-full opacity-65 lg:opacity-50 hover:opacity-100 duration-700  object-fill' src={imageSrc} alt={title} width='1024' height='1024' />
        </div>
        <p className='leading-relaxed text-black select-none font-serif text-2xl'>{description}</p>
        <p style={{ fontFamily: 'Wulkan Display, sans-serif' }} className='font-bold text-2xl text-white hover:text-slate-100 hover:bg-pink-500 bg-pink-300 rounded-lg py-2 px-4  decoration-solid w-9/12 mx-auto my-auto text-center duration-[1200ms]'>Ver {butonText}</p>
      </div>
    </section>
  );
};

export default ServiceCard;
