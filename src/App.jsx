import { useState, useEffect } from 'react';
import AudioSlider from './components/AudioSlider';
import Timer from './components/Timer';

function App() {
  const backgroundList = [
    "/environments/astro.gif",
    "/environments/train.gif",
    "/environments/starry-night.gif",
    "/environments/field.gif",
    "/environments/rainy.gif",
    "/environments/sunset.gif",
    "/environments/starry.gif",
    "/environments/aqua.gif",
    "/environments/aurora.gif",
    "/environments/bridge.gif",
    "/environments/cafe.gif",
    "/environments/chill.gif",
    "/environments/city.gif",
    "/environments/coffee.gif",
    "/environments/cozy.gif",
    "/environments/house.gif",
    "/environments/lazy-day.gif",
    "/environments/living.gif",
    "/environments/mountain.gif",
    "/environments/rain-forest.gif",
    "/environments/stream.gif",
  ];

  const storedIndex = localStorage.getItem('index');
  const initialIndex = storedIndex !== null ? parseInt(storedIndex, 10) : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    localStorage.setItem('index', currentIndex.toString());
  }, [currentIndex]);

  const currentBackground = backgroundList[currentIndex];

  const cycle = () => {
    setCurrentIndex((currentIndex + 1) % backgroundList.length);
  };


  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme !== null ? storedTheme : 'light';
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme.toString());

    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className='flex justify-center xl:items-center h-screen overflow-y-auto px-8 md:px-16 3xl:px-48 py-9 xl:py-0 select-none text-text-light dark:text-text-dark bg-light dark:bg-dark'>
        <div className='max-w-screen-2xl flex flex-col xl:flex-row flex-grow gap-4 xl:gap-9'>
          <div className='w-full xl:w-[65vw] h-[85vh] flex justify-center items-center 3xl:w-[65vw]'>
            <img className='w-full h-full object-cover rounded-xl pointer-events-none' src={currentBackground} alt="" />
          </div>
          <div className='flex flex-col flex-grow gap-4 sm:gap-6'>
            <div className='bg-gray-500 p-4 sm:p-6 rounded-xl text-4xl sm:text-7xl bg-bg-light dark:bg-bg-dark'>
              <Timer />
            </div>
            <div className='flex flex-row gap-4 sm:gap-6 '>
              <button className='bg-gray-500 p-4 w-full sm:w-1/2 rounded-xl bg-bg-light dark:bg-bg-dark' onClick={handleThemeSwitch}>
                Toggle theme
              </button>
              <button className='select-none bg-gray-500 p-2 w-full sm:p-3 sm:w-1/2 rounded-xl bg-bg-light dark:bg-bg-dark' onClick={cycle}>
                Change scene
              </button>
            </div>
            <div className='flex flex-col bg-gray-500 px-9 py-3 rounded-xl text-3xl sm:text-5xl flex-grow mb-9 xl:mb-0 justify-center bg-bg-light dark:bg-bg-dark'>
              <AudioSlider theme={theme} description="Music" id="music" src="/audio/lofi.mp3" />
              <AudioSlider theme={theme} description="Campfire" id="campfire" src="/audio/campfire.mp3" />
              <AudioSlider theme={theme} description="Cafe" id="cafe" src="/audio/cafe.mp3" />
              <AudioSlider theme={theme} description="Train" id="train" src="/audio/subway.mp3" />
              <AudioSlider theme={theme} description="Waves" id="waves" src="/audio/ocean-asmr.mp3" />
              <AudioSlider theme={theme} description="Rain" id="rain" src="/audio/thunderstorm.mp3" />
              <AudioSlider theme={theme} description="Nature" id="nature" src="/audio/nature.mp3" />
              <AudioSlider theme={theme} description="Talking" id="chatting" src="/audio/talking.mp3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
