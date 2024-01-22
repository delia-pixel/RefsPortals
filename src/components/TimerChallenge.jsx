import React, { useRef, useState } from "react";
    

function TimerChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);
    const [timeStarted, setTimeStarted] = useState(false);
    let timer = useRef();

  const handleStart = () => {
     timer.current=setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimeStarted(true);
    };
    
    const handleStop = () => {
        clearTimeout(timer.current);
    }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 && "s"}
      </p>
      <p>
        <button onClick={timeStarted? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeStarted ? "active" : "undefined"}>
        {timeStarted ? "Time is running" : "Timer inactive"}
      </p>
    </section>
  );
}

export default TimerChallenge;
