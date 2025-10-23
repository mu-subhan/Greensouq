'use client'
import Image from 'next/image'
import React, { useState } from 'react'

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
    src: '/sp.avif',
    hoverSrc: '/sp0.avif',
    alt: 'outdoor1',
    title: 'Rolled Rim Pot Outdoor Ceramic Pot, Trendy Outdoor Pot(Multi-color',
    price: 'Dhs. 60.00 - Dhs. 255.00',
    sale: true,
  },
  {
    id: 2,
    src: '/sp1.avif',
    hoverSrc: '/sp1.1.avif',
    alt: 'indoor1',
    title: 'Rectangular Planter All Sizes/ GRP Pot Modern Durable Outdoor Planter Box',
    price: 'Dhs. 100.00 - Dhs. 785.00',
    oldPrice: 'Dhs.100.00 - Dhs. 950.00',
    sale: true,
  },
  {
    id: 3,
    src: '/sp3.avif',
    alt: 'indoor2',
    title: 'Classic cylinder "Satin Finish',
    price: 'Dhs. 140.00 - Dhs. 4,25.00',
    sale: true,
  },
  {
    id: 4,
    src: '/sp4.avif',
    alt: 'outdoor4',
    title: 'GRP Square Pot All Sizes',
    price: 'Dhs. 60.00 - Dhs. 1700.00',
    oldPrice: 'Dhs.70.00 - Dhs. 1700.00',
    sale: true,
  },
  {
    id: 5,
    src: '/sp5.avif',
    alt: 'outdoor5',
    title: 'GRP Round Flower All Sizes/ GRP Planter',
    price: 'Dhs. 35.00 - Dhs. 2920.00',
    sale: true,
  },
  {
    id: 6,
    src: '/sp6.jpg',
    alt: 'indoor6',
    title: 'Cosmoplast Round Flower Pot',
    price: 'Dhs. 3.00 - Dhs. 40.00',
    sale: true,
  },
  {
    id: 7,
    src: '/sp7.jpg',
    hoverSrc: '/sp7.1.avif',
    alt: 'indoor7',
    title: 'Nursery Plastic Pot "Black Plastic Pot"',
    price: 'Dhs. 0.00 - Dhs. 15.00',
    oldPrice: 'Dhs. 1,100.00',
    sale: true,
  },
  {
    id: 8,
    src: '/sp0.avif',
    alt: 'indoor6',
    title: 'Blue Rolled Rim Pot Blue Outdoor Ceramic Pot, Trendy Outdoor Pot',
    price: 'Dhs. 60.00 - Dhs. 245.00',
    sale: true,
  },
  {
    id: 9,
    src: '/sp9.avif',
    alt: 'indoor6',
    title: 'Aeration Fabric Round Pot-Bag',
    price: 'Dhs. 2.75.00 - Dhs. 5.75.00',
    sale: true,
  },
  {
    id: 10,
    src: '/sp10.avif',
    alt: 'indoor6',
    title: 'Rectanglular GRP 70x30x30cm',
    price: 'Dhs. 120.00',
    oldPrice: 'Dhs. 210.00',
    sale: true,
  },
]

const Pots = () => {
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
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[89px] mt-12 sm:mt-16 md:mt-20 flex flex-col items-center'>
      <h2 className='text-center mb-6 sm:mb-7 text-xl sm:text-2xl font-medium'>
        Top Selling Pots & Planters
      </h2>

      {/* Mobile Carousel - Single Product */}
      <div className='lg:hidden w-full'>
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
              →
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Carousel - 5 Products */}
      <div className='hidden lg:block relative flex items-center justify-center w-full'>
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

        {/* Visible product slider */}
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
            startIndex + visibleCount >= products.length ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:text-green-600'
          }`}
        >
          &gt;
        </button>
      </div>

      <div className='flex justify-center mt-6'>
        <button className="w-32 sm:w-40 h-10 sm:h-12 items-center bg-black text-white mb-7 font-medium text-sm sm:text-base">
          Shop Collections
        </button>
      </div>
    </div>
  )
}

export default Pots