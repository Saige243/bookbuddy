import React, { useState } from 'react'
import { Button, Alert, Card, Container, Col, Row } from 'react-bootstrap'
import Booksearch from './Booksearch'
import Timer from '../components/Timer'
import Notes from './Notes'
import Navbar from './Navbar'
import Log from './Log'
import  '../App.css'  
// import { book } from './Booksearch'

export default function Dashboard() {
  const [img, setImg] = useState("")

  function changeImage(){
    setImg('TESTING YOU EH! YOU GOT IT!')
  }

  return (
    <div>
      <Navbar />
      <Container fluid="lg">
        <Row>
          <Col className="p-3" xs={12} sm={6} md={6}>
            <Card className="text-center" style={{ width: '100%' }}>
                <Card.Body className="shadow sm">
                  <Card.Title >Now Reading</Card.Title>
                  <Card.Img variant="top" src={img} />
                  <Card.Subtitle className="mt-2">Progress:</Card.Subtitle>
                  <p>{img}</p>
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
            <Col style={{ display:"grid", alignItems: "center", textAlign: "center" }}xl="12">
              <Card className="shadow sm">
                <Booksearch changeImage={changeImage}/>
                <Button onClick={changeImage}>CHANGE</Button>
              </Card>
            </Col>
            <Col>
            </Col>
          </Row>
      </Container>
    </div>

  )
}
