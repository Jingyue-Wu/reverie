import React, { useRef } from "react";
import "../App.css";

export default function App() {
  const [counter, setCounter] = React.useState(1500);

  // Declare a ref for the timer interval
  const timerRef = useRef(null);

  const resetTimer = () => {
    setCounter(1500);
  };

  React.useEffect(() => {
    clearInterval(timerRef.current);

    if (counter > 0) {
      timerRef.current = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    } else if (counter === 0) {
      clearInterval(timerRef.current); // Clear the timer when it reaches 0
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [counter]);

  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;

  return (
    <div className="">
      {counter === 0 ? (
        <div>break time ^^</div>
      ) : (
        <div>
          {minutes < 10 ? "0" : ""}
          {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
          <div>
            <button className="reset-button" onClick={resetTimer}>

              <i className="" ></i> Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/*
export default function App() {
  const [counter, setCounter] = useState(25); // Start with 25 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000 * 60
  */