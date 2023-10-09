import React from "react";

const Hero = ({ title, description, image }) => {
  return (
    <div
      className='bg-cover bg-center h-80 flex items-center justify-start px-4 md:px-16'
      style={{
        backgroundImage: `url("/assets/images/image-1.jpeg")`,
        backgroundPositionY: "30%",
        backgroundSize: "cover",
      }}
    >
      <div className='bg-sect bg-opacity-80 p-4 rounded-lg shadow-lg w-full md:w-6/12 flex items-center'>
        <div className='mr-8'>
          <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
          <p className='text-sm md:text-md text-gray-600'>{description}</p>
        </div>
        <img src={image} alt='...' className='w-24 h-24' />
      </div>
    </div>
  );
};

export default Hero;


