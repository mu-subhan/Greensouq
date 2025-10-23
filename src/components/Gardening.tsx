'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

type Product = {
  id: number
  src: string
  alt: string
  title: string
  price: string
  oldPrice?: string
  sale?: boolean
  hoverSrc?: string
}

const products: Product[] = [
  {
    id: 1,
    src: '/g1.avif',
    hoverSrc: '/g1.avif',
    alt: 'outdoor1',
    title: 'Watering Can 5liters and 12 liters',
    price: 'Dhs. 50.00 - Dhs. 90.00',
    oldPrice: 'Dhs. 25.00 - Dhs. 45.00',
    sale: true,
  },
  {
    id: 2,
    src: '/g2.avif',
    alt: 'indoor1',
    title: '3 Piece Set Gardening Hand Tools',
    price: 'Dhs. 45.00',
    sale: true,
  },
  {
    id: 3,
    src: '/g3.avif',
    hoverSrc: '/g3.2.jpg',
    alt: 'indoor2',
    title: 'Garden Bamboo Reed Privacy Fence, durable outdoor, balcony privacy fence, boundry privacy fence',
    price: 'Dhs. 190.00 - Dhs. 395.00',
    oldPrice: 'Dhs. 145.00 - Dhs. 320.00',
    sale: true,
  },
  {
    id: 4,
    src: '/g4.avif',
    alt: 'outdoor4',
    title: 'Garden Shade Net 73% with 6 Years Warranty "Made in Korea"',
    price: 'Dhs. 20.00 - Dhs. 1250.00',
    oldPrice: 'Dhs. 16.00 - Dhs. 1,160.00',
    sale: true,
  },
  {
    id: 5,
    src: '/g5.avif',
    hoverSrc: '/g5.1.avif',
    alt: 'outdoor5',
    title: 'Garden Gloves with Claws "Hands Proctection, Garden Safety Gloves, Easy Seeding and Garfen Work"',
    price: 'Dhs. 12.50',
    oldPrice: 'Dhs.14.00',
    sale: true,
  },
  {
    id: 6,
    src: '/6.avif',
    alt: 'indoor6',
    title: 'Pruning Shears',
    price: 'Dhs. 65.00',
    sale: true,
  },
  {
    id: 7,
    src: '/7.avif',
    alt: 'indoor6',
     title: 'Non Woven Geotextile 3m Width',
    price: 'Dhs. 18.00 - Dhs. 999.00',
    sale: true,
  },
  {
    id: 8,
    src: '/8.avif',
    alt: 'indoor6',
   title: 'Hoe & Cultivator',
    price: 'Dhs. 26.25',
    sale: true,
  },
  {
    id: 9,
    src: '/9.avif',
    hoverSrc: '/9.1.avif',
    alt: 'indoor6',
    title: 'akaddy Handheld Portable Plant Spray Bottle 1Ltr',
    price: 'Dhs. 36.75',
    sale: true,
  },
  {
    id: 10,
    src: '/10.webp',
    alt: 'indoor6',
    title: 'Leaf Rake with Aluminum Handle',
    price: 'Dhs. 95.00',
    sale: true,
  },
]

const Gardening = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // For mobile: single product carousel
  const nextProduct = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevProduct = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  // For desktop: carousel with 5 visible products
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 5 
  const maxStartIndex = products.length - visibleCount

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex))
  }

  const visibleProducts = products.slice(startIndex, startIndex + visibleCount)
  const currentProduct = products[currentIndex]

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[89px] mt-12 sm:mt-16 md:mt-20'>
      <h2 className='text-center mb-6 sm:mb-7 text-xl sm:text-2xl font-medium'>Gardening Accessories</h2>

      {/* Mobile Carousel - Single Product */}
      <div className='lg:hidden'>
        <div className='relative'>
          {/* Product Card */}
          <div className='w-full min-h-[300px] relative overflow-hidden rounded-lg flex flex-col shadow-md p-4'>
            <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
              <div className='relative w-full h-[200px] sm:h-[240px]'>
                <Image
                  src={currentProduct.src}
                  fill
                  alt={currentProduct.alt}
                  className='object-cover'
                />
                {currentProduct.sale && (
                  <div className='absolute top-2 left-2 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                    Sale
                  </div>
                )}
              </div>

              <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                {currentProduct.title}
              </p>

              {currentProduct.oldPrice && (
                <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                  {currentProduct.oldPrice}
                </p>
              )}

              <p className='text-sm sm:text-md text-gray-500'>
                {currentProduct.price}
              </p>
            </div>

            {/* Buttons - Always visible on mobile */}
            <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2'>
              <button className='w-full h-8 sm:h-10 text-black border border-black bg-white text-xs sm:text-sm'>
                Quick Shop
              </button>
              <button className='w-full h-8 sm:h-10 bg-black text-white text-xs sm:text-sm'>
                Choose Option
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-between items-center mt-4'>
            <button
              onClick={prevProduct}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                currentIndex === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-black border-gray-300 hover:bg-gray-50'
              }`}
            >
              ←
            </button>
            
            <div className='text-sm text-gray-600'>
              {currentIndex + 1} / {products.length}
            </div>
            
            <button
              onClick={nextProduct}
              disabled={currentIndex === products.length - 1}
              className={`flex items-center justify-center w-10 h-10 rounded-full border ${
                currentIndex === products.length - 1 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-black border-gray-300 hover:bg-gray-50'
              }`}
            >
              &lt; 
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Carousel - 5 Products */}
      <div className='hidden lg:block relative flex items-center justify-center'>
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`absolute -left-12 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md transition duration-300 ${
            startIndex === 0 ? 'text-gray-400' : 'text-black hover:text-gray-400'
          }`}
        >
          &lt;
        </button>

        {/* Products container */}
        <div className='w-full overflow-hidden'>
          <div className='flex gap-4 justify-center'>
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className='flex-shrink-0 w-48 xl:w-64 min-h-[350px] md:min-h-[419px] relative overflow-hidden flex flex-col shadow-xl hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'
              >
                {/* Image Section */}
                <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                  <div className='relative w-full h-40 xl:h-48'>
                    <Image
                      src={product.src}
                      fill
                      alt={product.alt}
                      className={`object-cover transition-opacity duration-300 ease-in ${
                        product.hoverSrc ? 'group-hover:opacity-0' : ''
                      }`}
                    />
                    {product.hoverSrc && (
                      <Image
                        src={product.hoverSrc}
                        fill
                        alt={`${product.alt} hover`}
                        className='object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100'
                      />
                    )}
                    {product.sale && (
                      <div className='absolute top-2 left-2 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                        Sale
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <p className='text-sm xl:text-md mt-2 break-words whitespace-normal leading-tight'>
                    {product.title}
                  </p>
                  {product.oldPrice && (
                    <p className='text-xs xl:text-sm font-light mt-1 text-gray-500 line-through'>
                      {product.oldPrice}
                    </p>
                  )}
                  <p className='text-sm xl:text-md text-gray-500'>{product.price}</p>
                </div>

                {/* Buttons - Hover only on desktop */}
                <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                  <button className='w-full sm:w-24 h-8 sm:h-10 text-black border border-black bg-white text-xs sm:text-sm'>
                    Quick Shop
                  </button>
                  <button className='w-full sm:w-28 h-8 sm:h-10 bg-black text-white text-xs sm:text-sm'>
                    Choose Option
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= products.length}
          className={`absolute -right-12 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md transition duration-300 ${
            startIndex + visibleCount >= products.length ? 'text-gray-400 cursor-not-allowed' : 'text-black'
          }`}
        >
          &gt;
          <BiRightArrow/>
        </button>
      </div>
    </div>
  )
}

export default Gardening