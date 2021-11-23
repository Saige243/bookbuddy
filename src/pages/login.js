import React from 'react'
import Signupcomp from '../components/Signupcomp'
import { Container } from 'react-bootstrap'
import AuthProvider from '../contexts/AuthContext'
import Logincomp from '../components/Logincomp'


export default function login() {
  return (
    <div>
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Logincomp />
          </div>
        </Container>
      </AuthProvider>
    </div>
  )
}