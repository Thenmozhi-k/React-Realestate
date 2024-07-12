import React, { useState } from 'react';
import { userData } from '../Lib/DataSet';
import { FaTimes } from "react-icons/fa";
import user from '../assets/user.avif'

const Chat = () => {
  // State to manage chatbox visibility
  const [isChatBoxVisible, setIsChatBoxVisible] = useState(true);

  // Function to toggle chatbox visibility
  const toggleChatBox = () => {
    setIsChatBoxVisible(!isChatBoxVisible);
  };

  return (
    <div className='h-1/2'>
      {/* Message Section */}
      <div className='relative bg-white p-4 overflow-y-auto h-[320px]'>
        <h1 className='text-lg font-semibold'>Message</h1>
        <div className='flex flex-col gap-5 mt-5'>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className='flex gap-4 cursor-pointer' onClick={toggleChatBox}>
              <img src={user}alt="" className='w-9 h-9 rounded-full' />
              <div className='flex flex-col'>
                <span className='font-medium'>{userData.name}</span>
                <p className='mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus pretium tortor.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chatbox Section */}
      {isChatBoxVisible && (
        <div className='flex flex-col h-[250px] w-full bg-gray-100'>
          <div className='top flex justify-between bg-accent items-center p-2  '>
            <div className='flex items-center'>
              <img src={user} alt="" className='w-9 h-9 rounded-full' />
              <h2 className='ml-2'>{userData.name}</h2>
            </div>
            <span onClick={toggleChatBox} className='cursor-pointer'>
              <FaTimes className='h-6 w-6' />
            </span>
          </div>
          <div className='overflow-y-auto flex-grow'>
          <div className='center p-4 mt-1 overflow-y-auto flex-grow '>
            {Array.from({ length: 7 }, (_, index) => (
              <div
                key={index}
                className={`chatmessage mb-4 flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`p-2 rounded shadow max-w-[70%] md:max-w-[60%] lg:max-w-[60%] ${index % 2 === 0 ? 'bg-white' : 'bg-primary-hover text-black'}`}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <span className='text-xs text-gray-500'>{index % 2 === 0 ? '1 hour ago' : ''}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='bottom p-4 flex'>
            <textarea name="" id="" className='w-full h-11 p-2 border rounded mr-2'></textarea>
            <button className='p-2 h-11 bg-accent text-black rounded'>Send</button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
