import React from 'react'

const Disclaimer = () => {
  return (
    <div className='w-full grid grid-cols-1 border'>
        <div className=' grid grid-cols-3 mx-6 my-2 md:mx-8 md:my-5 border'>
            <div className='border col-span-2'>
                <h2 className='text-[#9CA3AF] text-[10px] md:text-base'>Portions of the materials used are trademarks and/or copyrighted works of Behavior Interactive Inc. This material is unofficial and is not endorsed by Behavior.
                </h2>
            </div>
            <div className='border col-span-1  '>
               <div className='flex justify-end'>
                <div className='h-10 w-10 md:h-12 md:w-12 bg-[#80080A] flex items-center justify-center text-white'>
                    <h3 className='md:text-lg md:font-semibold' >18</h3>
                </div>
                <div className='flex justify-center items-center ml-1 md:ml-2'>
                    <h3 className='text-white text-[7px] w-[70px] sm:w-[90px] md:text-xs md:w-[150px]'>Extreme violence, Online Shopping, User interaction</h3>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Disclaimer