import React from 'react'
import Booksearch from '../components/Booksearch'
import Navbar from '../components/Navbar'
import { Button, Alert, Card, Container, Col, Row } from 'react-bootstrap'

export default function search() {
  return (
    <div>
      <div className="booksearch">
        <Navbar />
        <Container className="searchcontainer">
          <Booksearch />
        </Container>
      </div>
    </div>
  )
}
