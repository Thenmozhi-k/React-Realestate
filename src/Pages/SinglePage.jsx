import React from 'react';
import Slider from '../Components/Slider';
import { singlePostData } from '../Lib/DataSet';
import { BsCurrencyDollar } from "react-icons/bs";
import { userData } from '../Lib/DataSet';
import { RiToolsFill, RiHandCoinFill } from "react-icons/ri";
import { MdOutlinePets, MdLocationOn, MdBedroomParent } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaBath, FaSchool, FaHeart } from "react-icons/fa";
import { TbBusStop } from "react-icons/tb";
import { GrRestaurant } from "react-icons/gr";
import { IoChatboxEllipses } from "react-icons/io5";
import Map from '../Components/Map'; // Assuming correct path to Map component

const SinglePage = () => {
  return (
    <div className='container singlepage    mx-auto px-4 grid h-auto lg:h-[100vh] grid-cols-12 mt-32 gap-6'>
      <div className='details col-span-12 lg:col-span-7'>
        <div className='wrapper'>
          <Slider images={singlePostData.images} />
        </div>
        {/* ==========info================ */}
        <div className='px-4 lg:px-8 mt-4'>
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-6'>
            <div className='flex justify-between  sm:flex-row sm:items-center md:justify-between gap-3 w-full '>
              <div className='flex flex-col gap-3 w-36 sm:w-auto '>
                <p className='text-xl font-semibold sm:text-lg'>{singlePostData.title}</p>
                <div className='flex items-center text-xs sm:text-sm'>
                  <MdLocationOn className='w-9 h-9 sm:w-5 sm:h-5' />
                  <span className='ml-2'>{singlePostData.address}</span>
                </div>
                <div className='flex items-center bg-primary-hover w-32 rounded-md p-1 mt-3 sm:mt-2 text-secondary text-md sm:text-sm'>
                  <BsCurrencyDollar className='w-5 h-5 sm:w-5 sm:h-5' />
                  <span className='ml-2'>{singlePostData.price}</span>
                </div>
              </div>
              <div className='flex flex-col h-20 gap-3  bg-accent p-2 rounded-md items-center w-16 sm:w-20 sm:flex-shrink-0'>
                <img className='w-12 h-12 rounded-full' src={userData.img} alt="user" />
                <h4 className='text-md font-semibold sm:text-sm'>{userData.name}</h4>
              </div>
            </div>
          </div>

          <div className='p-4'>
            <p className='text-lg sm:text-sm'>{singlePostData.description}</p>
          </div>
        </div>
      </div>

      {/* =======================feature===================== */}
      <div className='feature col-span-12 lg:col-span-5'>
        <div>
          <h1 className='text-lg font-semibold ml-4'>General</h1>
          <div className='bg-gray-100 m-4 p-4 rounded-lg flex flex-col gap-2'>
            <div className='flex'>
              <RiToolsFill className='text-xl mt-3' />
              <div className='ml-4'>
                <h1 className='text-md font-semibold text-secondary'>Utilities</h1>
                <p className='text-sm'>Included in rent</p>
              </div>
            </div>
            <div className='flex'>
              <MdOutlinePets className='text-xl mt-3' />
              <div className='ml-4'>
                <h1 className='text-md font-semibold text-secondary'>Pet Policy</h1>
                <p className='text-sm'>Pets allowed</p>
              </div>
            </div>
            <div className='flex'>
              <RiHandCoinFill className='text-xl mt-3' />
              <div className='ml-4'>
                <h1 className='text-md font-semibold text-secondary'>Property Fees</h1>
                <p className='text-sm'>Must have 3x rent income</p>
              </div>
            </div>
          </div>
          <h1 className='text-lg font-semibold ml-4'>Room Sizes</h1>
          <div className='bg-gray-100 m-4 p-4 rounded-lg flex flex-col gap-2'>
            <div className='flex items-center'>
              <SlSizeFullscreen className='mr-2 mt-1' />
              <p className='text-sm'>{singlePostData.size} sq ft</p>
            </div>
            <div className='flex items-center'>
              <MdBedroomParent className='mr-2 mt-1' />
              <p className='text-sm'>{singlePostData.bedrooms} Bedroom</p>
            </div>
            <div className='flex items-center'>
              <FaBath className='mr-2 mt-1' />
              <p className='text-sm'>{singlePostData.bathrooms} Bathroom</p>
            </div>
          </div>
          <h1 className='text-lg font-semibold ml-4'>Nearby Places</h1>
          <div className='bg-gray-100 m-4 p-4 rounded-lg flex flex-col gap-2'>
            <div className='flex items-center'>
              <FaSchool className='text-xl' />
              <div className='ml-4'>
                <h1 className='text-md font-semibold text-secondary'>School</h1>
                <p className='text-sm'>{singlePostData.school}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <TbBusStop className='text-xl' />
              <div className='ml-4'>
                <h1 className='text-md font-semibold text-secondary'>Bus Stop</h1>
                <p className='text-sm'>{singlePostData.bus}</p>
              </div>
            </div>
            <div className='flex items-center'>
              <GrRestaurant className='text-xl' />
              <div className='ml-4'>
                <h1 className='text-md font-semibold text-secondary'>Restaurant</h1>
                <p className='text-sm'>{singlePostData.restaurant}</p>
              </div>
            </div>
          </div>

          <div className='mapcontainer w-full h-56'>
            <Map items={[singlePostData]} />
          </div>
          <div className='flex justify-between mb-3 flex-col md:flex-row'>
            <button className='flex text-sm border bg-gray-100 p-2 mt-2 rounded-lg mx-4 md:ml-4'>
              <IoChatboxEllipses className='mt-1 mr-2'/> Send a Message
            </button>
            <button className='flex text-sm border bg-gray-100 p-2 mt-2 rounded-lg mx-4 md:mr-4'>
              <FaHeart className='mt-1 mr-2'/> Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
