import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const openSlider = (index) => {
    setCurrentImageIndex(index);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {isSliderOpen && (
        <div className='fixed top-0  left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-100 z-50'>
          <div className='relative w-full h-full flex items-center justify-center p-5'>
            <div className='absolute ml-4 sm:ml-9 top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-50' onClick={prevImage}>
              <IoIosArrowBack size={32} color="white" />
            </div>
            <div className='relative flex items-center justify-center w-full h-full'>
              <img src={images[currentImageIndex]} alt="Slider" className='w-full h-full object-contain' />
              <div className='absolute top-4 right-4 cursor-pointer z-50' onClick={closeSlider}>
                <HiMiniXMark size={32} color="white" />
              </div>
            </div>
            <div className='absolute mr-4 sm:mr-9 top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-50' onClick={nextImage}>
              <IoIosArrowForward size={32} color="white" />
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col lg:flex-row'>
        <div className='bigimage p-2 mt-5 w-full lg:w-3/4' onClick={() => openSlider(0)}>
          <img src={images[0]} alt="Big" className='w-full h-full lg:h-full md:h-64 cursor-pointer rounded-md object-cover' />
        </div>

        <div className='smallimage p-2 mt-5 w-full lg:w-1/4 flex flex-wrap lg:flex-col gap-2'>
          {images.slice(1).map((image, index) => (
            <img 
              src={image} 
              alt={`Small ${index}`} 
              key={index} 
              className='w-[85px] sm:w-[120px] md:w-[234px] lg:w-full lg:h-auto md:h-24  h-auto cursor-pointer rounded-md object-cover' 
              onClick={() => openSlider(index + 1)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
