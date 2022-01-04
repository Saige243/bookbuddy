import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container, Row, Col } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  

  async function handleSubmit(e){
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/dash')
  } catch {
    setError('Failed to login')
  }
    setLoading(false)
}


return (
  <div>
    <Card id="card" className="shadow p-3">
      <Card.Body>
        <h1 id="heading" className="text-center mb-4">Welcome to BookBud.</h1>
        <h3 id="heading" className="text-center mb-4">Log In</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label className="pt-2">Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label className="pt-2">Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <Button style={{backgroundColor:"#97D9E1", border:"none"}} disabled={loading} type="submit" className="mt-3 w-100">
            <strong>Log In</strong>
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link style={{color: "white"}} to='/signup'>Sign Up</Link>
    </div>
  </div>
)
}
