'use client'
import React from 'react';
import HeroCarousel from '@/components/home/hero';
import SeeAllDress from '@/components/home/allDress/seeAllDress';
import ServicesSection from '@/components/home/service/servicesAmbar';
import ContactSection from '@/components/contact/contact';

export default function Home() {
  return (
    <div className="">

     <HeroCarousel></HeroCarousel>

      <ServicesSection></ServicesSection>

      
    </div>
  );
}
