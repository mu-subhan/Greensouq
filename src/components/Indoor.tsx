import Image from 'next/image'
import React from 'react'

type Props = {}

const Indoor = (props: Props) => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[89px] mt-12 sm:mt-16 md:mt-20'>
            <h1 className='text-center mb-6 sm:mb-7 text-xl sm:text-2xl font-medium'>Top Selling Indoor Plants</h1>

            {/* Grid for Indoor Plant Images */}
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6'>
                {/* 1st Card */}
                <div className='w-full min-h-[300px] sm:min-h-[350px] md:min-h-[419px] relative overflow-hidden rounded-lg flex flex-col shadow-md hover:shadow-lg p-3 sm:p-4 group transition-all duration-300'>
                    <div className='w-full overflow-hidden rounded-lg flex flex-col relative'>
                        <Image
                            src='/indoor1.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='indoor1'
                        />
                        {/* hover image - hidden on mobile, shown on hover for desktop */}
                        <Image
                            src='/indoor1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='indoor1-hover'
                        />
                        {/* Sale Badge */}
                        <div className='absolute top-48 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Money Tree Pachira Aquatica, &quot;Twisted Trunk&quot; 130 - 150cm شجرة المال
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.355.00 - Dhs. 535.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 255.00 - Dhs. 385.00
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
                            src='/indoor1.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='indoor1'
                        />
                        <Image
                            src='/indoor1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='indoor1-hover'
                        />
                        <div className='absolute top-48 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Monstera Deliciosa &quot;The Hurricane or Swiss Cheese Plant&quot; Holland
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.170.00 - Dhs. 700.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 160.00 - Dhs. 675.00
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
                            src='/indoor2.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full'
                            alt='indoor2'
                        />
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Nephrolepis exaltata &quot;Green Lady&quot;, Boston Fern or Sword Fern
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 45.00 - Dhs. 165.00
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
                            src='/indoor4.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='indoor4'
                        />
                        <Image
                            src='/indoor4.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='indoor4-hover'
                        />
                        <div className='absolute top-48 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Peace Lily or Spathiphyllum or &quot;زنبق السلام&quot;
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.60.00 - Dhs.650.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 30.00 - Dhs. 325.00
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
                            src='/indoor5.1.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='indoor5'
                        />
                        <Image
                            src='/indoor5.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='indoor5-hover'
                        />
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Madagascar Traveller&apos;s Palm in Rolled Rim Pot - 1.0-1.3m
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 375.00
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
                            src='/indoor6.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full'
                            alt='indoor6'
                        />
                        <div className='absolute top-48 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Sansevieria Trifasciata &quot;Snake Plant &quot;
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.80.00 - Dhs. 200.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 60.00 - Dhs. 200.00
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
                            src='/indoor7.avif'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='indoor7'
                        />
                        <Image
                            src='/indoor7.1.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='indoor7-hover'
                        />
                        <div className='absolute top-48 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Scindapsus Marble Queen or Money Plant or Epipremnum aureum كرمة المال Success
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs. 175.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 160.00 - Dhs. 200.00
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
                            src='/indoor8.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='indoor8'
                        />
                        <Image
                            src='/indoor8.1.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='indoor8-hover'
                        />
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            White Orchids 50-70cm
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 95.00 - Dhs. 145.00
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
                            src='/indoor0.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='indoor9'
                        />
                        <Image
                            src='/indoor9.1.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='indoor9-hover'
                        />
                        <div className='absolute top-48 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            ZZ Plant indoor / Zamioculcas zamiifolia, Zanzibar Gem in Black Ceramic Pot 80-100cm
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.800.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 395.00
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
                            src='/indoor9.1.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full transition-opacity duration-300 lg:group-hover:opacity-0'
                            alt='indoor10'
                        />
                        <Image
                            src='/indoor10.webp'
                            width={220}
                            height={280}
                            className='object-cover w-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 hidden lg:block'
                            alt='indoor10-hover'
                        />
                        <div className='absolute top-48 left-0 bg-[#494d41] text-white text-xs font-semibold px-2 py-1 rounded'>
                            Sale
                        </div>
                        <p className='text-sm sm:text-md mt-2 break-words whitespace-normal leading-tight'>
                            Areca Palm Holland in Black Ceramic Plot 1-1.2m
                        </p>
                        <p className='text-xs sm:text-sm font-light mt-1 sm:mt-2 text-gray-500 line-through'>
                            Dhs.750.00
                        </p>
                        <p className='text-sm sm:text-md text-gray-500 mr-2'>
                            Dhs. 375.00
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

export default Indoor