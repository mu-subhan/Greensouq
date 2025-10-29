'use client'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaWhatsapp, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useState } from 'react';
import Image from 'next/image';



const Footer = () => {
  const [openSections, setOpenSections] = useState({
    findItFast: false,
    importantLinks: false,
    hotLinks: false,
    contactInfo: false
  });

  type SectionKey = keyof typeof openSections;
  const toggleSection = (section: SectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-[#f4f4f4] text-black py-6 mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[85px]">
      {/* Desktop Layout - Hidden on mobile */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-6 pt-8">
        {/* Follow Us Section */}
        <div className="flex flex-col">
          <h1 className="text-xl">Follow us</h1>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Email Icon */}
            <div className="bg-gray-300 w-7 h-7 p-2 rounded-full flex items-center justify-center">
              <a
                className="social-link"
                title="Email"
                href="mailto:info@greensouq.ae"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="w-4 h-4 text-black hover:text-black" />
              </a>
            </div>

            {/* Facebook Icon */}
            <div className="bg-gray-300 w-7 h-7 p-2 rounded-full flex items-center justify-center">
              <a
                className="social-link"
                title="Facebook"
                href="https://www.facebook.com/www.greensouq.ae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* Instagram Icon */}
            <div className="bg-gray-300 w-7 h-7 p-2 rounded-full flex items-center justify-center">
              <a
                className="social-link"
                title="Instagram"
                href="https://www.instagram.com/greensouq.ae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* LinkedIn Icon */}
            <div className="bg-gray-300 w-7 h-7 p-2 rounded-full flex items-center justify-center">
              <a
                className="social-link"
                title="LinkedIn"
                href="https://www.linkedin.com/company/green-souq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* Pinterest Icon */}
            <div className="bg-gray-300 w-7 h-7 p-2 rounded-full flex items-center justify-center">
              <a
                className="social-link"
                title="Pinterest"
                href="https://www.pinterest.com/greensouq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* TikTok Icon */}
            <div className="bg-gray-300 w-7 h-7 p-2 rounded-full flex items-center justify-center">
              <a
                className="social-link"
                title="TikTok"
                href="https://www.tiktok.com/@greensouq/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* WhatsApp Icon */}
            <div className="bg-gray-300 w-7 h-7 p-2 rounded-full flex items-center justify-center">
              <a
                className="social-link"
                title="WhatsApp"
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* YouTube Icon */}
            <div className="bg-gray-300 w-7 h-7 p-2 rounded-full flex items-center justify-center">
              <a
                className="social-link"
                title="YouTube"
                href="https://www.youtube.com/c/greensouq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Find it Fast */}
        <div className='flex flex-col'>
          <h1 className="text-xl">Find it Fast</h1>
          <ul className='pt-4'>
            <li className='text-md mb-2'>
              Latest Blogs
            </li>
            <li className='text-md'>
              FAQ&apos;s
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div className='flex flex-col'>
          <h1 className="text-xl">Important Links</h1>
          <ul className='pt-4'>
            <li className='text-md mb-2'>
              About us 
            </li>
            <li className='text-md mb-2'>
              Contact us
            </li>
            <li className='text-md mb-2'>
              Shipping charges
            </li>
            <li className='text-md'>
              Terms and Conditions
            </li>
          </ul>
        </div>

        {/* Hot Links */}
        <div className='flex flex-col'>
          <h1 className="text-xl">Hot Links</h1>
          <ul className='pt-4'>
            <li className='text-md mb-2'>
              My Account 
            </li>
            <li className='text-md mb-2'>
              Checkout 
            </li>
            <li className='text-md mb-2'>
              Your Cart 
            </li>
            <li className='text-md'>
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col'>
          <h1 className="text-xl">Contact Info</h1>
          <ul className='pt-4'>
            <li className='text-md mb-4'>
              Mobile: +971 58 512 1105 
            </li>
            <li className='text-md mb-2'>
              Email: info@greensouq.ae
            </li>
          </ul>
        </div>  
      </div>

      {/* Mobile Layout - Hidden on desktop */}
      <div className="lg:hidden">
        {/* Follow Us Section - Always visible on mobile */}
        <div className="pb-6 border-b border-gray-300">
          <h1 className="text-xl font-semibold">Follow us</h1>
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {/* Social Icons - Same as desktop but with adjusted spacing */}
            <div className="bg-gray-300 w-8 h-8 p-2 rounded-full flex items-center justify-center">
              <a href="mailto:info@greensouq.ae" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="w-4 h-4 text-black" />
              </a>
            </div>
            <div className="bg-gray-300 w-8 h-8 p-2 rounded-full flex items-center justify-center">
              <a href="https://www.facebook.com/www.greensouq.ae/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-4 h-4 text-black" />
              </a>
            </div>
            <div className="bg-gray-300 w-8 h-8 p-2 rounded-full flex items-center justify-center">
              <a href="https://www.instagram.com/greensouq.ae/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-4 h-4 text-black" />
              </a>
            </div>
            <div className="bg-gray-300 w-8 h-8 p-2 rounded-full flex items-center justify-center">
              <a href="https://www.linkedin.com/company/green-souq" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-4 h-4 text-black" />
              </a>
            </div>
            <div className="bg-gray-300 w-8 h-8 p-2 rounded-full flex items-center justify-center">
              <a href="https://www.pinterest.com/greensouq/" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="w-4 h-4 text-black" />
              </a>
            </div>
            <div className="bg-gray-300 w-8 h-8 p-2 rounded-full flex items-center justify-center">
              <a href="https://www.tiktok.com/@greensouq/" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="w-4 h-4 text-black" />
              </a>
            </div>
            <div className="bg-gray-300 w-8 h-8 p-2 rounded-full flex items-center justify-center">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-4 h-4 text-black" />
              </a>
            </div>
            <div className="bg-gray-300 w-8 h-8 p-2 rounded-full flex items-center justify-center">
              <a href="https://www.youtube.com/c/greensouq" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-0">
          {/* Find it Fast Accordion */}
          <div className="border-b border-gray-300 py-4">
            <button 
              onClick={() => toggleSection('findItFast')}
              className="flex justify-between items-center w-full text-left"
            >
              <h1 className="text-lg font-semibold">Find it Fast</h1>
              {openSections.findItFast ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSections.findItFast && (
              <ul className='pt-3 space-y-2'>
                <li className='text-md'>Latest Blogs</li>
                <li className='text-md'>FAQ&apos;s</li>
              </ul>
            )}
          </div>

          {/* Important Links Accordion */}
          <div className="border-b border-gray-300 py-4">
            <button 
              onClick={() => toggleSection('importantLinks')}
              className="flex justify-between items-center w-full text-left"
            >
              <h1 className="text-lg font-semibold">Important Links</h1>
              {openSections.importantLinks ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSections.importantLinks && (
              <ul className='pt-3 space-y-2'>
                <li className='text-md'>About us</li>
                <li className='text-md'>Contact us</li>
                <li className='text-md'>Shipping charges</li>
                <li className='text-md'>Terms and Conditions</li>
              </ul>
            )}
          </div>

          {/* Hot Links Accordion */}
          <div className="border-b border-gray-300 py-4">
            <button 
              onClick={() => toggleSection('hotLinks')}
              className="flex justify-between items-center w-full text-left"
            >
              <h1 className="text-lg font-semibold">Hot Links</h1>
              {openSections.hotLinks ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSections.hotLinks && (
              <ul className='pt-3 space-y-2'>
                <li className='text-md'>My Account</li>
                <li className='text-md'>Checkout</li>
                <li className='text-md'>Your Cart</li>
                <li className='text-md'>Privacy Policy</li>
              </ul>
            )}
          </div>

          {/* Contact Info Accordion */}
          <div className="border-b border-gray-300 py-4">
            <button 
              onClick={() => toggleSection('contactInfo')}
              className="flex justify-between items-center w-full text-left"
            >
              <h1 className="text-lg font-semibold">Contact Info</h1>
              {openSections.contactInfo ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openSections.contactInfo && (
              <ul className='pt-3 space-y-2'>
                <li className='text-md'>Mobile: +971 58 512 1105</li>
                <li className='text-md'>Email: info@greensouq.ae</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Payment Icons and Copyright */}
<div className="flex flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12">
  {/* Copyright Text - Left side for both screens */}
  <div className="text-center lg:text-left mb-4 lg:mb-0">
    <div className="flex flex-col sm:flex-row sm:gap-4 text-sm lg:flex-col">
      <p className="font-light">Copyright © 2025 Greensouq.</p>  
      <p className="font-light">Powered by Shopify</p>
    </div>
  </div>

  {/* Payment Icons - Right side for large screens, centered for mobile */}
  <div className="flex gap-4 justify-center lg:justify-end">
    <Image
      src="/ameircan.png"
      width={38}
      height={24}
      alt="american express"   
      className="w-8 h-5"
    />
    <Image
      src="/master card.png"
      width={38}
      height={24}
      alt="mastercard"
      className="w-8 h-5"
    />
    <Image
      src="/visa.png"
      width={38}
      height={24}
      alt="visa"
      className="w-8 h-5"
    />
  </div>
</div>
    </footer>
  );
};

export default Footer;