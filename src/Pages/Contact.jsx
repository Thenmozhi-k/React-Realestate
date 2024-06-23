// ContactPage.jsx
import React from 'react';
import Navbar from '../Components/Nav';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="container   mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl xxl:mt-28 mt-32 lg:mt-28 lg:text-4xl font-semibold mb-8 text-center">Contact Us</h1>
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your email address"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    placeholder="Your message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-primary hover:bg-primary-hover text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Contact Information */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-md leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed mi vehicula, non gravida dui suscipit.
                        </p>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p className="text-gray-700">
                                1234 Street Name<br />
                                City, State, 56789
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p className="text-gray-700">
                                (123) 456-7890
                            </p>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-gray-700">
                                info@company.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
