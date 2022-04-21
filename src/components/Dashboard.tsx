import { Card, Container, Col, Row } from 'react-bootstrap';
import Booksearch from './Booksearch';
import Timer from './Timer';
import Notes from './Notes';
import Navbar from './Navbar';

export default function Dashboard(): JSX.Element {

  const layout = (
    <div>
      <Navbar />
      <Container fluid="lg">
        <Row>
          <Col className="p-3" xs={12} sm={12} md={8}>
            <Booksearch />
          </Col>
          <Col className="p-3" xs={12} sm={12} md={4}>
            <Card id="card" className="text-center" style={{ width: '100%' }}>
              <Card.Body id="card" className="shadow sm">
                <Card.Title id="heading">Reading Timer</Card.Title>
                <Timer />
              </Card.Body>
            </Card>
            <Card id="card" className="mt-2" style={{ width: '100%' }}>
              <Card.Body id="card" className="shadow sm">
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
