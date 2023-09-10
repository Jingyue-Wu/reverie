import { useState } from 'react';

import AudioSlider from './components/AudioSlider';
import Timer from './components/Timer';


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

      <div className='flex justify-center items-center h-screen mx-8 md:mx-16 3xl:mx-48 my-72 lg:my-0 select-none'>

        <div className='max-w-screen-2xl flex flex-col lg:flex-row flex-grow gap-4 sm:gap-9'>

          <div className='w-full lg:w-[75vw] h-[85vh] flex justify-center items-center 3xl:w-[60vw]'>
            <img className='w-full h-full object-cover rounded-xl pointer-events-none	' src={currentBackground} alt="" />
          </div>

          <div className='flex flex-col flex-grow gap-4 sm:gap-6'>
            <div className='bg-gray-500 p-4 sm:p-9 rounded-xl text-4xl sm:text-7xl'>
              <Timer />
            </div>

            <div className='flex flex-row gap-4 sm:gap-6 '>
              <div className='bg-gray-500 p-4 sm:p-5 w-full sm:w-1/2 rounded-xl'>
                Light/Dark Mode
              </div>

              <div className='hover:cursor-pointer select-none bg-gray-500 p-2 w-full sm:p-3 sm:w-1/2 rounded-xl' onClick={cycle}> ←</div>
            </div>

            <div className='flex flex-col bg-gray-500 px-9 pt-3 rounded-xl text-3xl sm:text-5xl flex-grow'>
              <AudioSlider description="campfire" id="campfire" src="/audio/campfire.mp3" />
              {/* <AudioSlider description="campfire" id="campfire" src="/audio/campfire.mp3"/>
              <AudioSlider description="campfire" id="campfire" src="/audio/campfire.mp3" />
              <AudioSlider description="campfire" id="campfire" src="/audio/campfire.mp3" />
              <AudioSlider description="campfire" id="campfire" src="/audio/campfire.mp3" />
              <AudioSlider description="campfire" id="campfire" src="/audio/campfire.mp3"/> */}
            </div>
          </div>

        </div>

      </div>



    </>
  );
}

export default App;
