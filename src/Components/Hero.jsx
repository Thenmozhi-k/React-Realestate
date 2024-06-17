import React, { useState } from 'react';

import { HiOutlineSearch } from "react-icons/hi";
import heroImage from '../assets/4.avif'; 

const Hero = () => {

    const [selectedOption, setSelectedOption] =  useState('buy');

    const  handleOptionChange = (option) =>{
        setSelectedOption(option);
    }
  
   

    return (
        <div className=''>
            <div className='container mx-auto py-20 mt-10 md:py-32 px-6 md:px-0'>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='w-full md:w-1/2 order-2 md:order-1'>
                        <h1 className='text-4xl md:text-5xl mb-8 font-semibold'>Find real estate and get your dream place</h1>
                        <p className='mb-8 leading-relaxed text-secondary-hover'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque maxime nostrum optio repellendus perspiciatis deleniti ipsa sapiente.</p>

                      
                          <div className="flex items-center  mt-8">
      <button
        className={`border border-black rounded-l px-4 py-2 ${
          selectedOption === 'buy' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
        onClick={() => handleOptionChange('buy')}
      >
        Buy
      </button>
      <button
        className={`border border-black rounded-r px-4 py-2 ${
          selectedOption === 'rent' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
        onClick={() => handleOptionChange('rent')}
      >
        Rent
      </button>
    </div>



    <div className="flex items-center  ">
      <div className="border border-black rounded-md overflow-hidden flex">
        <button
          className={`border-r border-black px-4 py-2 ${
            selectedOption === 'location' 
          }`}
          onClick={() => handleOptionChange('location')}
        >
          Location
        </button>
        <button
          className={`border-r border-black px-4 py-2 ${
            selectedOption === 'maxprice' 
          }`}
          onClick={() => handleOptionChange('maxprice')}
        >
          Max Price
        </button>
        <button
          className={`border-r border-black px-4 py-2 ${
            selectedOption === 'minprice'
          }`}
          onClick={() => handleOptionChange('minprice')}
        >
          Min Price
        </button>
        <button
          className={`px-4 py-2 bg-primary text-black ${
            selectedOption === 'price' 
          }`}
          onClick={() => handleOptionChange('price')}
        >
          <HiOutlineSearch />
        </button>
      </div>
    </div>

                      

                        {selectedOption == 'buy' && (

                        <div id='buy' className='flex gap-9 mt-8'>
                            <div className='flex flex-col'>
                                <h1 className='text-3xl md:text-5xl font-bold text-secondary mb-3'>16+</h1>
                                <p className='text-base md:text-lg font-medium text-gray-600'>Years of experience</p>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-3xl md:text-5xl font-bold text-secondary mb-3'>16</h1>
                                <p className='text-base md:text-lg font-medium text-gray-600'>award gained </p>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-3xl md:text-5xl font-bold text-secondary mb-3'>1700+</h1>
                                <p className='text-base md:text-lg font-medium text-gray-600'>property ready</p>
                            </div>
                        </div>  
                        )}


                         {selectedOption == 'rent' && (
                        <div id='rent' className='flex gap-9 mt-8'>
                            <div className='flex flex-col'>
                                <h1 className='text-3xl md:text-5xl font-bold text-secondary mb-3'>16+</h1>
                                <p className='text-base md:text-lg font-medium text-gray-600'>Years of experience</p>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-3xl md:text-5xl font-bold text-secondary mb-3'>16</h1>
                                <p className='text-base md:text-lg font-medium text-gray-600'>award gained </p>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-3xl md:text-5xl font-bold text-secondary mb-3'>2000+</h1>
                                <p className='text-base md:text-lg font-medium text-gray-600'>property ready</p>
                            </div>
                        </div> )}

                    </div>

                    <div className='w-full md:w-1/2 flex items-end justify-center md:justify-end mt-10 md:mt-0 order-1 md:order-2'>
                        <img className="w-full h-auto md:w-96 md:h-96 rounded-3xl" src={heroImage} alt="Hero Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
