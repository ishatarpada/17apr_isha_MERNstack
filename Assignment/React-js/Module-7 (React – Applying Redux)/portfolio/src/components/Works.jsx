import React from 'react';
import code from '../assets/code.jpg';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {/* Grid Item */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${code})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-64'
            >
              {/* Hover Effects */}
              <div className='transition-bg duration-500 ease-in-out group-hover:bg-black group-hover:bg-opacity-75 flex justify-center items-center flex-col text-center p-4 w-full h-full rounded-md'>
                <span className='text-lg font-bold text-white tracking-wider'>
                  CBT Application
                </span>
                <p className='text-gray-300 text-sm mt-2'>
                  A CBT web application built with React and MongoDB
                </p>
                <div className='pt-6'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-cyan-500 text-white font-bold text-base'>
                      Demo
                    </button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-transparent border-2 border-white text-white font-bold text-base'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
