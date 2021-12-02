import React, { useState, useEffect } from 'react';
import { Button, Alert, Card } from 'react-bootstrap'

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timercontainer">
      <div className="time">
        {seconds}s
      </div>
      <div className="row">
        <Button size="sm" className={`mb-1 ${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button size="sm" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Timer;