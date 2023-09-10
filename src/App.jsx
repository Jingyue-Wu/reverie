import './App.css';
import { useState } from 'react';

import Slider from './components/Slider';


function App() {
  const backgroundList = [
    "/environments/astro.gif",
    "/environments/starry-night.gif",
  ];

  let i = 0;

  const [background, setBackground] = useState(backgroundList[i]);

  const cycleForward = () => {
    if (i === backgroundList.length - 1) {
      i = 0;
    }

    else {
      i++;
    }
    setBackground(backgroundList[i]);
  };


  const cycleBackward = () => {
    if (i === 0) {
      i = backgroundList.length - 1;
    }

    else {
      i--;
    }
    setBackground(backgroundList[i]);
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen mx-24 3xl:mx-96'>

        <div className='flex flex-grow gap-9'>

          <div className='w-[55vw] h-[85vh] flex justify-center items-center 3xl:w-[40vw]'>
            <img className='w-full h-full object-cover rounded-xl' src={background} alt="" />
          </div>

          <div className='flex flex-col flex-grow gap-6'>
            <div className='bg-gray-500 p-9 rounded-xl text-5xl'>
              12:69

              <div className='text-lg font-normal mt-6 mx-auto bg-slate-400 w-[20%] p-3'>
                button
              </div>
            </div>

            <div className='flex flex-row gap-6 '>
              <div className='bg-gray-500 p-5 w-1/2 rounded-xl'>
                light/dark mode
              </div>

              <div className='hover:cursor-pointer select-none bg-gray-500 p-3 w-1/4 rounded-xl' onClick={cycleBackward}> ←</div>
              <div className='hover:cursor-pointer select-none bg-gray-500 p-3 w-1/4 rounded-xl' onClick={cycleForward}> → </div>

            </div>

            <div className='bg-gray-500 p-9 rounded-xl text-5xl'>
              <Slider />
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
