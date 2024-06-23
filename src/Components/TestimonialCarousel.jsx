import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { testimonial } from '../Lib/DataSet';

const TestimonialCarousel = () => {
    const testimonials = testimonial.slice(0, 3);

    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={5000}
                stopOnHover={true}
                transitionTime={500}
                swipeable={true}
                className="rounded-lg shadow-lg bg-white overflow-hidden"
            >
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-white px-4 py-8 sm:p-8">
                        <img
                            className="w-8 h-20  sm:h-20 md:h-32 md:w-36 max-w-36 min-w-20 rounded-full     mb-4"
                            src={item.img}
                            alt={item.name}
                        />
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                            <p className="text-gray-700 text-justify">{item.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TestimonialCarousel;
