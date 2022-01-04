import React from 'react'
import { Button, OverlayTrigger, Tooltip, Alert, Card, Container, Col, Row } from 'react-bootstrap'


const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    <Button >Click me!</Button>
  </Tooltip>
);

export default function Log() {
  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
    </div>
  )
}
