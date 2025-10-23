import Image from 'next/image'
import React from 'react'

type Props = {}

const Categories = (props: Props) => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[85px] mt-8 sm:mt-10 md:mt-12 lg:mt-14'>
       <h1 className='text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 sm:mb-7 md:mb-8'>Top Categories this Week</h1>
        
        {/* Grid for Images */}
     <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
    {/* First Image */}
   <div className='flex flex-col items-center'>
  <div className='w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-[322px] 2xl:h-[322px] overflow-hidden rounded-full'>
    <Image 
      src='/plant.webp' 
      width={322} 
      height={322} 
      className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer' 
      alt='category1' 
    />
  </div>
  <p className='text-center text-[#494d41] font-semibold mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base'>Plant Bundles</p>
</div>

    
   {/* Second Image */}
<div className='flex flex-col items-center'>
  <div className='w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-[322px] 2xl:h-[322px] overflow-hidden rounded-full'>
    <Image 
      src='/fruit.jpg' 
      width={322} 
      height={322} 
      className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer' 
      alt='category2' 
    />
  </div>
  <p className='text-center text-[#494d41] font-semibold mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base'>Fruits Plants</p>
</div>

{/* Third Image */}
<div className='flex flex-col items-center'>
  <div className='w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-[322px] 2xl:h-[322px] overflow-hidden rounded-full'>
    <Image 
      src='/clearance.webp' 
      width={322} 
      height={322} 
      className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer' 
      alt='category3' 
    />
  </div>
  <p className='text-center text-[#494d41] font-semibold mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base'>Clearance sale</p>
</div>

{/* Fourth Image */}
<div className='flex flex-col items-center'>
  <div className='w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-[322px] 2xl:h-[322px] overflow-hidden rounded-full'>
    <Image 
      src='/olive.jpg' 
      width={322} 
      height={322} 
      className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer' 
      alt='category4' 
    />
  </div>
  <p className='text-center text-[#494d41] font-semibold mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base'>Olives Trees</p>
</div>

{/* Fifth Image */}
<div className='flex flex-col items-center'>
  <div className='w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-[322px] 2xl:h-[322px] overflow-hidden rounded-full'>
    <Image 
      src='/boxed.webp' 
      width={322} 
      height={322} 
      className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer' 
      alt='category5' 
    />
  </div>
  <p className='text-center text-[#494d41] font-semibold mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base'>Boxed Greenery</p>
</div>

{/* Sixth Image */}
<div className='flex flex-col items-center'>
  <div className='w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-[322px] 2xl:h-[322px] overflow-hidden rounded-full'>
    <Image 
      src='/grp.webp' 
      width={322} 
      height={322} 
      className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer' 
      alt='category6' 
    />
  </div>
  <p className='text-center text-[#494d41] font-semibold mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base'>GRP Pots</p>
</div>

{/* Seventh Image */}
<div className='flex flex-col items-center'>
  <div className='w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-[322px] 2xl:h-[322px] overflow-hidden rounded-full'>
    <Image 
      src='/herbs.webp' 
      width={322} 
      height={322} 
      className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer' 
      alt='category7' 
    />
  </div>
  <p className='text-center text-[#494d41] font-semibold mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base'>Herbs and Vegetables</p>
</div>

{/* Eighth Image */}
<div className='flex flex-col items-center'>
  <div className='w-28 h-28 xs:w-32 xs:h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-[322px] 2xl:h-[322px] overflow-hidden rounded-full'>
    <Image 
      src='/outdoor.webp' 
      width={322} 
      height={322} 
      className='object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer' 
      alt='category8' 
    />
  </div>
  <p className='text-center text-[#494d41] font-semibold mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base'>Outdoor Plants</p>
</div>

</div>

    </div>
  )
}

export default Categories