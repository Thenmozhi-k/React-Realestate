import React from 'react';
import TestimonialCarousel from '../Components/TestimonialCarousel';
import about1 from '../assets/1.avif'

const About = () => {
    return (
        <div className='container about mt-12 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto mt-36'>
                <h1 className='text-2xl lg:text-4xl font-semibold mb-8 text-center'>About Our Company</h1>
                <div className='flex flex-col gap-12'>

                    {/* Who We Are Section */}
                    <div className='flex flex-col lg:flex-row gap-12 items-center mt-12'>
                        <div className='lg:w-1/2'>
                            <img src={about1} alt="Company Logo" className='w-full h-auto rounded-lg mb-8 lg:mb-0' />
                        </div>
                        <div className='lg:w-1/2'>
                            <h2 className='text-xl font-semibold mb-4'>Who We Are</h2>
                            <p className='text-lg leading-relaxed mb-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed mi vehicula, non gravida dui suscipit. Sed sit amet tortor condimentum, iaculis urna nec, faucibus felis.
                            </p>
                        </div>
                    </div>

                    {/* Our Mission Section */}
                    <div className='mission flex flex-col lg:flex-row-reverse gap-12 items-center mt-12'>
                        <div className='lg:w-1/2'>
                            <img src="src/assets/3.avif" alt="Mission Image" className='w-full h-auto rounded-lg mb-8 lg:mb-0' />
                        </div>
                        <div className='lg:w-1/2'>
                            <h3 className='text-xl font-semibold mb-4'>Our Mission</h3>
                            <p className='text-lg leading-relaxed mb-6'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed mi vehicula, non gravida dui suscipit.
                            </p>
                        </div>
                    </div>

                    {/* Our Vision Section */}
                    <div className='vision flex flex-col lg:flex-row gap-12 items-center mt-12'>
                        <div className='lg:w-1/2'>
                            <img src="src/assets/4.avif" alt="Vision Image" className='w-full h-auto rounded-lg mb-8 lg:mb-0' />
                        </div>
                        <div className='lg:w-1/2'>
                            <h3 className='text-xl font-semibold mb-4'>Our Vision</h3>
                            <p className='text-lg leading-relaxed mb-6'>
                                Sed sit amet tortor condimentum, iaculis urna nec, faucibus felis. Nulla facilisi. Suspendisse potenti.
                            </p>
                        </div>
                    </div>

                    {/* Testimonials Section */}
                    <div className='testimonial mt-12 mb-12 flex justify-center'>
                        <div className=' xl:w-2/4 lg:w-2/4 md:w-2/3 sm:w-4/5 w-9/12  mx-auto'>
                            <h3 className='text-3xl font-semibold mb-6 text-center'>Client Testimonials</h3>
                            <TestimonialCarousel />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
