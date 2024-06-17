import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';

const Filter = () => {
  return (
    <div className='container mx-auto py-10 px-4'>
      <div className='top flex flex-col gap-4'>
        <h1 className='text-4xl font-semibold'>Search results for <b>location</b></h1>
        <label className='text-secondary-hover text-md' htmlFor='location'>Location</label>
        <input
          className='border border-secondary-hover hover:border-secondary p-2 rounded-lg w-full'
          type='text'
          placeholder='Location'
          id='location'
          name='location'
        />
      </div>
      {/* ===================search option===================== */}
      <div className='flex flex-col md:flex-row w-full mt-6 gap-3'>
        <div className='flex flex-col gap-2 w-full'>
          <label className='text-secondary text-md' htmlFor='type'>Type</label>
          <select
            name='type'
            id='type'
            className='border border-secondary-hover hover:border-secondary p-1 rounded-lg w-full'
          >
            <option value=''>Any</option>
            <option value='rent'>Rent</option>
            <option value='buy'>Buy</option>
          </select>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label className='text-secondary text-md' htmlFor='property'>Property</label>
          <select
            name='property'
            id='property'
            className='border border-secondary-hover hover:border-secondary p-1 rounded-lg w-full'
          >
            <option value=''>Any</option>
            <option value='apartment'>Apartment</option>
            <option value='house'>House</option>
            <option value='condo'>Condo</option>
            <option value='land'>Land</option>
          </select>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label className='text-secondary text-md' htmlFor='minprice'>Min Price</label>
          <input
            type='number'
            placeholder='Any'
            id='minprice'
            name='minprice'
            className='border border-secondary-hover hover:border-secondary p-1 rounded-lg w-full'
          />
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label className='text-secondary text-md' htmlFor='maxprice'>Max Price</label>
          <input
            type='number'
            placeholder='Any'
            id='maxprice'
            name='maxprice'
            className='border border-secondary-hover hover:border-secondary p-1 rounded-lg w-full'
          />
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label className='text-secondary text-md' htmlFor='bedrooms'>Bedrooms</label>
          <input
            type='number'
            placeholder='Any'
            id='bedrooms'
            name='bedrooms'
            className='border border-secondary-hover hover:border-secondary p-1 rounded-lg w-full'
          />
        </div>

        <div className='flex justify-center items-center w-full md:w-auto mt-4 md:mt-0'>
          <button className='group bg-primary text-black py-2 px-4 rounded border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-black font-semibold flex items-center justify-center h-full'>
            <HiOutlineSearch className='font-semibold text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
