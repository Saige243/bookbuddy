import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';


export default function Timer(): JSX.Element {

  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [timerID, setTimerID] = useState(setInterval(() => null, 0))

  const increment_seconds = () => setSeconds(seconds + 1)

  const handle_toggle_click = () => {
    setIsActive(!isActive)
    if (isActive) setTimerID(setInterval(increment_seconds, 1000))
    console.log(seconds)
  }

  const handle_reset_click = () => {
    clearInterval(timerID)
    setSeconds(0)
    setIsActive(false)
  }

  const timer_display = (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        justifyContent: "center"
      }}
    >
      <Container className="seconds_container">
        <Container className="time">{seconds}</Container>
      </Container>
    </div>
  )

  const toggle_button = (
    <Button
      size="sm"
      style={{
        boxShadow: "none",
        backgroundColor: '#97D9E1',
        border: 'none',
        fontWeight: 'bold',
      }}
      className={`mb-1 ${isActive ? 'active' : 'inactive'}`}
      onClick={handle_toggle_click}
    >
      {isActive ? 'Pause' : 'Start'}
    </Button>
  )

  const reset_button = (
    <Button
      size="sm"
      style={{
        boxShadow: "none",
        backgroundColor: '#97D9E1',
        border: 'none'
      }}
      onClick={handle_reset_click}
    >
      <strong>Reset</strong>
    </Button>
  )

  const layout = (
    <div className="timercontainer">

      {timer_display}

      <div className="row">
        {toggle_button}
        {reset_button}
      </div>

    </div>
  )
  return layout
}