'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  // State to track if the button should move to the top
  const [moveToTop, setMoveToTop] = useState(false);

  // Handle the scroll-to-top button click
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  };

  return (
    <>
   <div>
  {/* Hero Image - Different images for mobile and desktop */}
  <div className="w-full h-[560px] relative">
    {/* Desktop Image */}
    <div className="hidden md:block">
      <Image src="/plant1.webp" alt="hero image" fill className="object-cover" />
    </div>
    
    {/* Mobile Image */}
    <div className="md:hidden">
      <Image src="/winter.webp" alt="hero image" fill className="object-fill " />
    </div>
  </div>

  <div className="grid lg:grid-cols-3 sm:grid-cols-1 px-4 lg:px-[85px] gap-2">
    <div className="relative w-full h-full mt-4">
      <Image src="/p1.webp" alt="small hero image" width={436} height={300} className="object-fill" />
      <div className="absolute bottom-7 left-4 right-4 p-3 rounded-md">
        <p className="text-white mb-5 font-semibold">Best Seller Large Plant Bundle</p>
        <button className="bg-black text-white w-24 h-10 rounded-md hover:bg-gray-200 transition">Shop Now</button>
      </div>
    </div>

    <div className="relative w-full h-full mt-4">
      <Image src="/p2.webp" alt="small hero image" width={436} height={300} className="object-fill" />
      <div className="absolute bottom-7 left-4 right-4 p-3 rounded-md">
        <p className="text-white mb-5 font-semibold">Diwali Bundle</p>
        <button className="bg-black text-white w-24 h-10 rounded-md hover:bg-gray-200 transition">Shop Now</button>
      </div>
    </div>

    <div className="relative w-full h-full mt-4">
      <Image src="/p3.webp" alt="small hero image" width={436} height={300} className="object-fill" />
      <div className="absolute bottom-7 left-4 right-4 p-3 rounded-md">
        <p className="text-white mb-5 font-semibold">Urban Jungle Bundle</p>
        <button className="bg-black text-white w-24 h-10 rounded-md">Shop Now</button>
      </div>
    </div>
  </div>

  {/* Sticky WhatsApp Button & Scroll to Top Button */}
  <div
    className={`fixed bottom-1 right-1 flex flex-col items-center gap-4 transition-all duration-300 ${
      moveToTop ? '' : ''
    }z-50`}
  >
    {/* WhatsApp Icon */}
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="bg-amber-300 p-3 rounded-full shadow-lg "
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>

    {/* Scroll to Top Button */}
    <button
      onClick={handleClick}
      className="hidden md:block bg-white text-black p-3 border w-12 h-12 shadow-lg"
    >
      ^
    </button>
  </div>
</div>

    </>
  );
};

export default Hero;
