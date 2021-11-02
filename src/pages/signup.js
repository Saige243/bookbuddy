import React from 'react'
import Signupcomp from '../components/Signupcomp'
import { Container } from 'react-bootstrap'

export default function signup() {

  return (
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signupcomp />
        </div>
      </Container>
  )
}
