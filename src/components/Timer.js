import React, { useState, useEffect } from 'react';
import { Button, Alert, Card, Container } from 'react-bootstrap'

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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div>
        </div>
        <Container style={{ justifyContent: "" }}>
          <Container className="time">{seconds}</Container>
        </Container>
        <div></div>
    </div>
      <div className="row">
        <Button size="sm" style={{backgroundColor:"#97D9E1", border: "none", fontWeight: "bold"}} className={`mb-1 ${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button size="sm" style={{backgroundColor:"#97D9E1", border: "none"}} onClick={reset}>
          <strong>Reset</strong>
        </Button>
      </div>
    </div>
  );
};

export default Timer;