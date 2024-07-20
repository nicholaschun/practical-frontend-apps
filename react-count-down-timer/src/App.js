import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [timer, setTimer] = useState(48 * 60 * 60);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const startTimer = () => {
    if (timer > 0) {
      setIsRunning(true);
    }
  };

  const pad = (num) => String(num).padStart(2, 0);

  const formatTimer = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor(seconds / 3600);

    const remainingSecs = Math.floor(seconds - hours * 3600);
    const minutes = Math.floor(remainingSecs / 60);
    const secs = seconds % 60;

    return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  };

  useEffect(() => {
    if (isRunning && timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, timer]);

  return (
    <div className="App">
      <h1>Countdown timer</h1>
      <br />
      <h2>{formatTimer(timer)}</h2>
      <div className="flex">
        <button onClick={pauseTimer}>Pause Timer</button>
        <button onClick={startTimer}>Start Timer</button>
      </div>
    </div>
  );
}
