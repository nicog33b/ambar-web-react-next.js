import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ imageSrc, title, description, butonText }) => {
  return (
    <section className='cardService'>
      <div className='text-center py-6 rounded-2xl cursor-pointer ease-in-duration-200  mr-1 ml-1 duration-700'>
        <div className='inline-block rounded-2xl py-5  '>
          <Image className='h-full w-full hover:opacity-80 duration-700  object-fill' src={imageSrc} alt={title} width='1024' height='1024' />
        </div>
        <p className='font-bold text-2xl text-white border border-violet-950 bg-black hover:bg-violet-600 rounded-lg py-2 px-4  decoration-solid w-9/12 mx-auto my-auto text-center duration-[1200ms] text-lato'>Ver {butonText}</p>
      </div>
    </section>
  );
};

export default ServiceCard;
