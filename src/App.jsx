import './App.css';

import { useState } from 'react';


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
      <img className='w-[56vh] h-[60vh%]' src={background} alt="" />

      <h1 className='underline hover:cursor-pointer select-none' onClick={cycleForward}> right </h1>
      <h1 className='underline hover:cursor-pointer select-none' onClick={cycleBackward}> left</h1>
    </>
  );
}

export default App;
