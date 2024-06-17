import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn, MdBedroomParent } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaBath, FaHeart } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";

const Card = ({ item }) => {
  return (
    <div className=' mb-6 md:mb-12 mt-6 md:mt-12 flex flex-col md:flex-row p-4 bg-white shadow-lg rounded-lg box-border'>
      <div className='flex-shrink-0 md:mr-4 w-full md:w-64'>
        <Link to={`/${item.id}`}>
          <img src={item.img} alt={item.title} className="w-full h-48 md:h-64 rounded-lg object-cover"/>
        </Link>
      </div>
      <div className='flex flex-col justify-between mt-4 md:mt-0 w-full'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-semibold'>
            <Link to={`/${item.id}`} className="hover:underline">
              {item.title}
            </Link>
          </h2>
          <p className='flex items-center text-sm text-gray-600'><MdLocationOn className='mr-2'/>{item.address}</p>
          <h2 className='flex items-center bg-primary-hover w-24 rounded-md p-1 mt-3 md:mt-5 text-gray-700'><BsCurrencyDollar className='mr-2'/>{item.price}</h2>
        </div>

        <div className='flex flex-wrap justify-between items-center mt-3 md:mt-4'>
          <div className='flex gap-2 flex-wrap'>
            <p className='flex items-center bg-gray-200 border border-gray-300 p-2 rounded-md text-sm'><MdBedroomParent className='mr-2'/>{item.bedrooms} Bedroom</p>
            <p className='flex items-center bg-gray-200 border border-gray-300 p-2 rounded-md text-sm'><FaBath className='mr-2'/>{item.bathrooms} Bathroom</p>
          </div>
          <div className='flex gap-2'>
            <a href="#" className='border border-gray-300 p-2 rounded-md flex items-center justify-center'>
              <IoChatboxEllipses className='text-xl md:text-2xl text-gray-600'/>
            </a>
            <a href="#" className='border border-gray-300 p-2 rounded-md flex items-center justify-center'>
              <FaHeart className='text-xl md:text-2xl text-gray-600 '/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
