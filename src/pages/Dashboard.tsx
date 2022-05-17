import { Card, Container, Col, Row } from 'react-bootstrap';
import Booksearch from '../components/Booksearch';
import Timer from '../components/Timer';
import Notes from '../components/Notes';
import Navbar from '../components/Navbar';

export default function Dashboard(): JSX.Element {

  const layout = (
    <div>
      <Navbar />
      <Container fluid="lg">
        <Row>
          <Col className="p-3" xs={12} sm={12} md={12}>
            <Booksearch />
          </Col>
          <Col className="p-3" xs={12} sm={12} md={6}>

            <Card id="card" className="text-center pb-3"
              style={{
                width: '100%'
              }}>
              <Card.Body id="card">
                <Card.Title id="heading">
                  Reading Timer
                </Card.Title>
                <Timer />
              </Card.Body>
            </Card>

          </Col>
          <Col className="p-3" xs={12} sm={12} md={6}>

            <Card id="card" className="text-center"
              style={{
                width: '100%'
              }}>
              <Card.Body id="card">
                <Card.Title id="heading" className="text-center">
                  Reading Log
                </Card.Title>
                <Notes />
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </div>
  )
  return layout
}