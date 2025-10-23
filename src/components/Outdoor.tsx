import Image from 'next/image'
import React from 'react'

type Props = {}

const Outdoor = (props: Props) => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[89px] mt-12 sm:mt-16 md:mt-20'>
            <h1 className='text-center mb-6 sm:mb-7 text-xl sm:text-2xl font-medium'>Top Selling Outdoor Plants</h1>

            {/* Grid for Outdoor Plant Images */}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6'>
                {/* 1st Card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdor1.avif'
                            width={220}
                            height={240}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor1'
                        />
                        {/* hover image */}
                        <Image
                            src='/outdoor1.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor1-hover'
                        />
                        <div className='absolute top-0 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Bougainvillea Specimen &quot;Single Headr&quot;
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 220.00 - Dhs. 3800.00
                        </p>
                    </div>

                    {/* Buttons - Always visible on mobile, hover only on desktop */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 2nd Card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor2.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor2'
                        />
                        <Image
                            src='/outdoor2.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor2-hover'
                        />
                        <div className='absolute top-0 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Opuntia Consolea | Road Kill Cactus
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.55.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 19.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 3rd Card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor3.jpg'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor3'
                        />
                        {/* hover image */}
                        <Image
                            src='/outdoor3.jpg'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor3-hover'
                        />
                        <div className='absolute top-0 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Areca Palm 1.2-1.5m Outdoor In Fiber Glass Pot (GRP) (70x30x30)
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs. 650.00 - Dhs. 950.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 550.00 - Dhs. 575.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 4th Card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor4.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor4'
                        />
                        {/* hover image */}
                        <Image
                            src='/outdoor4.1.jpg'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor4-hover'
                        />
                        <div className='absolute top-0 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Portulaca Grandifloria | Rose Moss | 9cm Pot
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.20.00 - Dhs.52.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 9.00 - Dhs. 38.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 5th card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor5.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor5'
                        />
                        {/* hover image */}
                        <Image
                            src='/outdoor5.1.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor5-hover'
                        />
                        <div className='absolute top-0 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Bouganivillea Spectabolis &quot;30 to 160cm&quot; Dark Pink
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.20.00 - Dhs.255.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs.14.00 - Dhs. 225.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 6th card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor6.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor6'
                        />
                        {/* hover image */}
                        <Image
                            src='/outdoor6.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor6-hover'
                        />
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Musa Paradisiaca Or Banana Tree &quot;80cm-90cm&quot; شجرة الموز
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 90.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 7th card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor7.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor7'
                        />
                        {/* hover image */}
                        <Image
                            src='/outdoor7.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor7-hover'
                        />
                        <div className='absolute top-0 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Vinca flowers 10 - 15cm
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 8.50 - Dhs. 34.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 8th card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor8.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor8'
                        />
                        {/* hover image */}
                        <Image
                            src='/outdoor8.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor8-hover'
                        />
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Arabian Jasmine Motia &quot;Jasminum Sambac &quot;
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs. 20.00 - Dhs. 100.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 20.00 - Dhs. 95.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 9th Card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor9.jpg'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor9'
                        />
                        {/* hover image */}
                        <Image
                            src='/indoor9.1.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor9-hover'
                        />
                        <div className='absolute top-0 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Mint Plant or Mentha
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs. 15.00 - Dhs.30.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 7.00 - Dhs. 395.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>

                {/* 10th card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/outdoor10.jpg'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='outdoor10'
                        />
                        {/* hover image */}
                        <Image
                            src='/outdoor10.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='outdoor10-hover'
                        />
                        <div className='absolute top-0 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Ocimum Tenuiflorum/Tulsi plant/Holy Basil
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.40.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 12.00 - Dhs. 40.00
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:absolute sm:bottom-1 sm:left-0 sm:right-0 sm:justify-center sm:opacity-0 sm:-translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-in-out'>
                        <button className='w-full sm:w-24 h-8 sm:h-10 md:h-11 text-black border border-black bg-white text-xs sm:text-sm'>
                            Quick Shop
                        </button>
                        <button className='w-full sm:w-28 h-8 sm:h-10 md:h-11 bg-black text-white text-xs sm:text-sm'>
                            Choose Option
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <button className="w-32 sm:w-40 h-10 sm:h-12 items-center bg-black text-white mb-7 font-medium mt-6 text-sm sm:text-base">
                    Shop Collections
                </button>
            </div>
        </div>
    )
}

export default Outdoor