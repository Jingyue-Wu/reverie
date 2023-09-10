import { useState } from 'react';

import Slider from './components/Slider';


function App() {
  const backgroundList = [
    "/environments/astro.gif",
    "/environments/starry-night.gif",
    "/environments/field.gif",
    "/environments/rainy.gif",
    "/environments/sunset.gif",
    "/environments/starry.gif",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentBackground = backgroundList[currentIndex];

  const cycle = () => {
    setCurrentIndex((currentIndex + 1) % backgroundList.length);
  };


  return (
    <>
      <div className='flex justify-center items-center h-screen mx-8 md:mx-16 3xl:mx-48 my-72 lg:my-0'>

        <div className='max-w-screen-2xl flex flex-col lg:flex-row flex-grow gap-4 sm:gap-9'>

          <div className='w-full lg:w-[75vw] h-[85vh] flex justify-center items-center 3xl:w-[60vw]'>
            <img className='w-full h-full object-cover rounded-xl' src={currentBackground} alt="" />
          </div>

          <div className='flex flex-col flex-grow gap-4 sm:gap-6'>
            <div className='bg-gray-500 p-4 sm:p-9 rounded-xl text-4xl sm:text-7xl'>
              12:69

              <div className='text-lg font-normal mt-4 sm:mt-6 mx-auto bg-slate-400 w-[20%] p-2 sm:p-3'>
                Button
              </div>
            </div>

            <div className='flex flex-row gap-4 sm:gap-6 '>
              <div className='bg-gray-500 p-4 sm:p-5 w-full sm:w-1/2 rounded-xl'>
                Light/Dark Mode
              </div>

              <div className='hover:cursor-pointer select-none bg-gray-500 p-2 sm:p-3 w-1/2 sm:w-1/4 rounded-xl' onClick={cycle}> ←</div>
            </div>

            <div className='flex flex-col gap-4 sm:gap-[8%] bg-gray-500 p-4 sm:p-9 rounded-xl text-3xl sm:text-5xl flex-grow'>
              <Slider />
              <Slider />
              <Slider />
              <Slider />
              <Slider />
              <Slider />
            </div>
          </div>

        </div>

      </div>



    </>
  );
}

export default App;
