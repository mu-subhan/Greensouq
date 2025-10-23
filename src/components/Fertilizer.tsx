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
}

const products: Product[] = [
  {
    id: 1,
    src: "/fert.avif",
    alt: "indoor1",
    title: "Snow white Pebbles 20KG | Natural Decorative Rocks for Garden plants succulents Vase Landscape Outdoor stones",
    price: "Dhs. 24.00 - Dhs. 26.00",
    oldPrice: "Dhs. 50.00",
    sale: true,
  },
  {
    id: 2,
    src: "/fert1.avif",
    alt: "indoor2",
    title: "Garden Sweet Sand \"SWEET Soil\"",
    price: "Dhs. 13.00",
    oldPrice: "Dhs.26.00",
    sale: true,
  },
  {
    id: 3,
    src: "/fert2.jpg",
    alt: "indoor3",
    title: "GARDENER'S Planting mix potting soil",
    price: "Dhs. 13.50 - Dhs. 375.25",
    sale: false,
  },
  {
    id: 4,
    src: "/fert4.avif",
    alt: "indoor4",
    title: "Organic Potting Soil By Shalimar",
    price: "Dhs. 18.00 - Dhs. 120.00",
    oldPrice: "Dhs.18.00 - Dhs.175.00",
    sale: true,
  },
  {
    id: 5,
    src: "/fert5.avif",
    alt: "indoor5",
    title: "Agriculture Clay | Garden soil | Clay Soil Bag",
    price: "Dhs. 25.00 - Dhs. 115.00",
    oldPrice: "Dhs. 30.00 - Dhs. 140.00",
    sale: true,
  },
]

const Fertilizer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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

  const currentProduct = products[currentIndex]

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[89px] mt-12 sm:mt-16 md:mt-20'>
      <h1 className='text-center mb-6 sm:mb-7 text-xl sm:text-2xl font-medium'>Top Selling Fertilizers & Soils</h1>

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
              →
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Grid - Hidden on mobile */}
      <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300">
            <div className="w-full overflow-hidden rounded-lg flex flex-col relative">
              <div className='relative w-full h-40 xl:h-48'>
                <Image
                  src={product.src}
                  fill
                  alt={product.alt}
                  className="object-cover"
                />
                {product.sale && (
                  <div className="absolute top-2 left-2 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded">
                    Sale
                  </div>
                )}
              </div>
              <p className="text-sm xl:text-md mt-2 break-words whitespace-normal leading-tight">
                {product.title}
              </p>
              {product.oldPrice && (
                <p className="text-xs xl:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through">
                  {product.oldPrice}
                </p>
              )}
              <p className="text-sm xl:text-md text-gray-500 mr-2">{product.price}</p>
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

      {/* Shop Collections Button */}
      <div className="flex justify-center mt-6">
        <button className="w-32 sm:w-40 h-10 sm:h-12 bg-black text-white font-medium text-sm sm:text-base">
          Shop Collections
        </button>
      </div>

      {/* Newsletter Section */}
      <div className='mt-10 flex justify-center items-center flex-col text-center'>
        <h1 className='text-xl sm:text-2xl font-bold'>Newsletter</h1>
        <p className='pt-3 sm:pt-4 text-sm sm:text-base'>Invite customers to join your mailing list.</p>

        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 w-full max-w-md'>
          <input 
            type="text" 
            placeholder='Email address' 
            className='border h-10 sm:h-12 px-4 flex-1 text-sm sm:text-base'
          />
          <button className='bg-black text-white h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-base hover:cursor-pointer whitespace-nowrap'>
            Sign up
          </button>
        </div>

        {/* Back to Top Button - Only on Mobile and below Sign up button */}
        <div className='lg:hidden mt-6'>
          <button
            onClick={scrollToTop}
            className="w-40 h-12 bg-white text-black border border-gray-300 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:bg-gray-50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
            Back to Top
          </button>
        </div>
      </div>
    </div>
  )
}

export default Fertilizer