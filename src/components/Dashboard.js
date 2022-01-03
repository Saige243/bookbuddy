import React, { useState } from 'react'
import { Button, Alert, Card, Container, Col, Row } from 'react-bootstrap'
import Booksearch from './Booksearch'
import Timer from '../components/Timer'
import Notes from './Notes'
import Navbar from './Navbar'
import Log from './Log'
import  '../App.css'  
import Child from './Booksearch'


export default function Dashboard() {


  return (
    <div>
      <Navbar />
      <Container fluid="lg">
        <Row>
          <Col className="p-3" xs={12} sm={7} md={8}>
            <Card className="text-center" style={{ width: '100%' }}>
              <Card.Body className="shadow sm">
                <Booksearch />
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-3"xs={12} sm={5} md={4}>
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
          <Col style={{ display:"grid", alignItems: "center", textAlign: "center" }}xl="12">
            <Card className="shadow sm">
              <div>NEW CARD</div>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>

  )
}
