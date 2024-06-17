import React from 'react';

const SinglePage = () => {
  return (
    <div className='container grid grid-cols-12 gap-3 mt-32'>
      <div className='details bg-primary col-span-8 lg:col-span-9'>
        {/* Replace with actual details content */}
        <h2>Details Section</h2>
        <p>Details content goes here...</p>
      </div>

      <div className='feature bg-accent col-span-4 lg:col-span-3'>
        {/* Replace with actual features content */}
        <h2>Features Section</h2>
        <p>Features content goes here...</p>
      </div>
    </div>
  );
}

export default SinglePage;
