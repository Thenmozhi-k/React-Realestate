import React, { useState } from 'react';
import { userData } from '../Lib/DataSet';
import List from '../Components/List';
import Chat from '../Components/Chat';
import UpdateProfileModal from '../Components/UpdateProfile';

const ProfilePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='container mx-auto px-4 grid grid-cols-12 gap-6 mt-40 lg:mt-32'>
            <div className='details col-span-12 mt-36 lg:col-span-7 overflow-scroll lg:pr-4 h-[calc(100vh-8rem)] lg:h-screen scrollbar-hide'>
                <div className='wrapper'>
                    <div className='flex justify-between'>
                        <h1 className='lg:text-lg text-md font-semibold mt-2 lg:mt-0 md:text-lg '>User Information</h1>
                        <button
                            className='bg-primary text-black lg:w-40 md:w-40 md:text-base lg:text-base px-4 w-20 h-10 text-xs items-center rounded border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-black font-semibold'
                            onClick={handleModalOpen}
                        >
                            Update Profile
                        </button>
                    </div>

                    <div className='mt-4 flex flex-col gap-2'>
                        <div className='flex gap-4 items-center'>
                            <h2>Avatar :</h2>
                            <img src={userData.img} alt="User Avatar" className='w-9 h-9 rounded-full' />
                        </div>

                        <div className='flex gap-4 items-center'>
                            <h2>Username :</h2>
                            <span>{userData.name}</span>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <h2>Email :</h2>
                            <span>{userData.mail}</span>
                        </div>
                    </div>

                    <div className='flex mt-10 justify-between'>
                        <h1 className='lg:text-lg text-md font-semibold mt-2 lg:mt-0 md:text-lg'>My List</h1>
                        <button className='bg-primary text-black lg:w-40 md:w-40 md:text-base lg:text-base px-4 w-20 h-10 text-xs items-center rounded border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-black font-semibold'>
                            New Post
                        </button>
                    </div>

                    <div>
                        <List />
                    </div>

                    <div>
                        <h1>Saved List</h1>
                    </div>
                </div>
            </div>

            <div className='chat col-span-12 lg:col-span-5 mr-6 lg:mr-10 xxl:mr-11 lg:w-4/12 w-full h-96 lg:h-[calc(100vh-8rem)] mt-4 lg:mt-0 lg:fixed top-16 lg:top-32 lg:right-4'>
                <div className='wrapper h-full'>
                    <Chat />
                </div>
            </div>

            <UpdateProfileModal isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
    );
};

export default ProfilePage;
