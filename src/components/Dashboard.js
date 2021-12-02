import React, { useState } from 'react'
import { Button, Alert, Card, Container, Col, Row } from 'react-bootstrap'
import Timer from '../components/Timer'
import Navbar from './Navbar'
import  '../App.css'  

export default function Dashboard() {
  

  return (
    <div>
      <Navbar />
      <Container fluid="lg">
        <Row>
          <Col xs={8} md={7}>
            <Card className="m-2 text-center" style={{ width: '100%' }}>
                <Card.Body className="shadow sm">
                  <Card.Title >Now Reading</Card.Title>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Subtitle>Progress:</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={8} md={5}>
              <Card className="m-2 text-center" style={{ width: '100%' }}>
                <Card.Body className="shadow sm">
                  <Card.Title >Reading Timer</Card.Title>
                  <Timer />
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    </div>

  )
}
