'use client'
import Image from 'next/image'
import React, { useState } from 'react'



const Arrival = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const products = [
        {
            id: 1,
            image: '/arrival1.webp',
            hoverImage: '/arrival1.webp',
            title: 'Bougainvillea Specimen "Single Head"',
            originalPrice: '',
            salePrice: 'Dhs. 220.00 - Dhs. 3800.00',
            hasSale: true
        },
        {
            id: 2,
            image: '/arrival2.webp',
            hoverImage: '/arrival2.webp',
            title: 'Opuntia Consolea | Road Kill Cactus',
            originalPrice: 'Dhs.55.00',
            salePrice: 'Dhs. 19.00',
            hasSale: true
        },
        {
            id: 3,
            image: '/arrival3.webp',
            hoverImage: '/arrival3.1.jpg',
            title: 'Set of 2 Traveler Palms in GRP Pot | 2.5-3.0m Tall',
            originalPrice: 'Dhs. 4300.00',
            salePrice: 'Dhs. 2,150.00',
            hasSale: true
        },
        {
            id: 4,
            image: '/arrival4.webp',
            hoverImage: '/arrival4.1.webp',
            title: 'Canna Indica Green in Black GRP Square Pot 30x30',
            originalPrice: 'Dhs.330.00',
            salePrice: 'Dhs. 165.00',
            hasSale: true
        },
        {
            id: 5,
            image: '/arrival5.webp',
            hoverImage: '/arrival5.1.webp',
            title: 'Artificial Banana Tree in Grp Square Pot 40x40',
            originalPrice: 'Dhs.1,500.00',
            salePrice: 'Dhs. 755.00',
            hasSale: true
        },
        {
            id: 6,
            image: '/arrival6.avif',
            hoverImage: '/arrival6.avif',
            title: 'Ficus Elastica "Abidjan"or Rubber Plant in Grp square Pot 40X40',
            originalPrice: 'Dhs. 1,100.00',
            salePrice: 'Dhs. 550.00',
            hasSale: true
        },
        {
            id: 7,
            image: '/arrivalblack.avif',
            hoverImage: '/arrivalwhite.jpg',
            title: 'Cycas Revoltua "Sago Palm" in Grp Square Pot 40x40',
            originalPrice: 'Dhs. 1,150.00',
            salePrice: 'Dhs. 575.00',
            hasSale: true
        },
        {
            id: 8,
            image: '/arrivalwhite.jpg',
            hoverImage: '/arrivalwhite.jpg',
            title: 'Dracaena Fragrans (Massangeana) in Grp Square Pot 40x40',
            originalPrice: 'Dhs. 1,300.00',
            salePrice: 'Dhs. 650.00',
            hasSale: true
        },
        {
            id: 9,
            image: '/arrivalblack.avif',
            hoverImage: '/arrivalwhite.jpg',
            title: 'Araucaria Heterophylla Indoor "Norfolk Island Pine" in Grp Square Pot 40x40',
            originalPrice: '',
            salePrice: 'Dhs. 385.00',
            hasSale: false
        },
        {
            id: 10,
            image: '/arrivalwhite.jpg',
            hoverImage: '/arrivalblack.avif',
            title: 'Sansevieria Trifasciata "Snake Plant0" in Grp Square Pot 40x40',
            originalPrice: 'Dhs.750.00',
            salePrice: 'Dhs. 375.00',
            hasSale: true
        }
    ];

    const nextProduct = () => {
        if (currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevProduct = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentProduct = products[currentIndex];

    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[89px] mt-12 sm:mt-16 md:mt-20'>
            <h1 className='text-center mb-6 sm:mb-7 text-xl sm:text-2xl font-medium'>New Arrivals</h1>

            {/* Mobile Carousel */}
            <div className='lg:hidden'>
                <div className='relative'>
                    {/* Product Card */}
                    <div className='w-full min-h-[300px] relative overflow-hidden rounded-lg flex flex-col shadow-md p-4'>
                        <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                            <Image
                                src={currentProduct.image}
                                width={220}
                                height={240}
                                className='object-cover w-full'
                                alt={currentProduct.title}
                            />
                            
                            {/* Sale Badge */}
                            {currentProduct.hasSale && (
                                <div className='absolute top-2 left-2 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                                    Sale
                                </div>
                            )}

                            <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                                {currentProduct.title}
                            </p>

                            {currentProduct.originalPrice && (
                                <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                                    {currentProduct.originalPrice}
                                </p>
                            )}

                            <p className='text-sm sm:text-md text-gray-500 mr-2'>
                                {currentProduct.salePrice}
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
            <div className='hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6'>
                {products.map((product, index) => (
                    <div key={product.id} className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                        <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                            <Image
                                src={product.image}
                                width={220}
                                height={240}
                                className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                                alt={product.title}
                            />
                            
                            {/* Hover image for desktop */}
                            <Image
                                src={product.hoverImage}
                                width={220}
                                height={280}
                                className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                                alt={`${product.title}-hover`}
                            />

                            {/* Sale Badge */}
                            {product.hasSale && (
                                <div className='absolute top-2 left-2 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                                    Sale
                                </div>
                            )}

                            <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                                {product.title}
                            </p>

                            {product.originalPrice && (
                                <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                                    {product.originalPrice}
                                </p>
                            )}

                            <p className='text-sm sm:text-md text-gray-500 mr-2'>
                                {product.salePrice}
                            </p>
                        </div>

                        {/* Buttons - Hover only on desktop */}
                        <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                            <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                                Quick Shop
                            </button>
                            <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                                Choose Option
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-6'>
                <button className="w-32 sm:w-40 h-10 sm:h-12 items-center bg-black text-white mb-7 font-medium text-sm sm:text-base">
                    Shop Collections
                </button>
            </div>
        </div>
    )
}

export default Arrival