import React, { useState } from 'react'
import { Button, Alert, Card, Container, Col, Row } from 'react-bootstrap'
import Timer from '../components/Timer'
import Notes from './Notes'
import Navbar from './Navbar'
import Log from './Log'
import  '../App.css'  


export default function Dashboard() {

  return (
    <div>
      <Navbar />
      <Container fluid="lg">
        <Row>
          <Col className="p-3" xs={12} sm={6} md={6}>
            <Card className="text-center" style={{ width: '100%' }}>
                <Card.Body className="shadow sm">
                  <Card.Title >Now Reading</Card.Title>
                  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                  <Card.Subtitle className="mt-2">Progress:</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-3"xs={12} sm={6} md={6}>
              <Card className="text-center" style={{ width: '100%' }}>
                <Card.Body className="shadow sm">
                  <Card.Title>Reading Timer</Card.Title>
                  <Timer />
                </Card.Body>
              </Card>
              <Card className="mt-2" style={{ width: '100%' }}>
                <Card.Body className="shadow sm">
                  <Card.Title className="text-center">Reading Log</Card.Title>
                  <Notes />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
      </Container>
    </div>

  )
}
