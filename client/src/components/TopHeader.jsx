import React from "react";

const TopHeader = () => {
  return (
    <div className='h-10 z-20 fixed w-full bg-color-main flex justify-end text-white align-center px-8'>
      <h1 className='text-2xl'>
        <span className='uppercase text-light-green'>Bamac</span> Student Portal
      </h1>
    </div>
  );
};

export default TopHeader;
