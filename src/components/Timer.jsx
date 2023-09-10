import { useState, useEffect, useRef } from 'react';

export default function Timer() {
  const [time, setTime] = useState(1500);
  const [counter, setCounter] = useState(time); // Set the initial value to 1500 (25 minutes)
  const [start, setStart] = useState(false);
  const [status, setStatus] = useState(true);

  const timerRef = useRef(null);
  const audioRef = useRef(null);

  const toggleStart = () => {
    setStart((prevStart) => !prevStart);
  };

  function work() {
    setTime(1500);
    setCounter(1500);
    setStart(true);
    setStatus(true);
  }

  const rest = () => {
    setTime(300);
    setCounter(300);
    setStart(true);
    setStatus(false);
  };


  console.log(status);
  useEffect(() => {
    if (start === true) {
      clearInterval(timerRef.current);
  
      if (counter > 0) {
        timerRef.current = setInterval(() => {
          setCounter((prevCounter) => prevCounter - 1);
        }, 1000);
      }
  
      if (counter <= 0 && audioRef.current) {
        playSound();
        setStatus((prevStatus) => !prevStatus); // Toggle status
        setTime(status ? 300 : 1500); // Set time based on status
        setCounter(status ? 300 : 1500); // Set counter based on status
        setStart(true); // Start the timer again
      }
  
      return () => {
        clearInterval(timerRef.current);
      };
    }
  }, [counter, start, status, time]);
  

  const playSound = () => {
    audioRef.current.play();
  };

  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;

  return (
    <div className=" flex flex-col items-between">
      <div className="flex flex-col gap-2 items-center">
        <h1>
          {minutes < 10 ? "0" : ""}
          {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
        </h1>
        <div className="flex items-between gap-3 mt-2">
          <button className={`reset-button text-lg bg-slate-300 rounded-xl px-4 py-1 bg-light dark:bg-dark w-[80px] hover:bg-hover-light dark:hover:bg-hover-dark ${status ? 'border-dark dark:border-light border-opacity-100 border-2' : 'border-0'}`} onClick={work}>
            Work
          </button>
          <button className={`reset-button text-lg bg-slate-300 rounded-xl px-4 py-1 bg-light dark:bg-dark w-[80px] hover:bg-hover-light dark:hover:bg-hover-dark ${!status ? 'border-dark dark:border-light border-opacity-100 border-2' : 'border-0'}`} onClick={rest}>
            Break
          </button>
          <button className="reset-button text-lg bg-slate-300 rounded-xl px-4 py-1 bg-light dark:bg-dark w-[80px] hover:bg-hover-light dark:hover:bg-hover-dark" onClick={toggleStart}>
            {start ? "Pause" : "Start"}
          </button>
        </div>
      </div>
      <div>
        <audio ref={audioRef} src={"/audio/timer-up.mp3"}></audio>
      </div>
    </div>
  );
}