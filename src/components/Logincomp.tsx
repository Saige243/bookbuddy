import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Login(): JSX.Element {

  const emailRef = React.useRef<HTMLInputElement>(null!);
  const passwordRef = React.useRef<HTMLInputElement>(null!);
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/dash');
    } catch {
      setError('Failed to login');
    }
    setLoading(false);
  }

  const login_button = (
    <Button
      style={{ backgroundColor: '#97D9E1', border: 'none' }}
      disabled={loading}
      type="submit"
      className="mt-3 w-100"
    >
      <strong>Log In</strong>
    </Button>
  )

  const signup_button = (
    <div className="w-100 text-center mt-2">
      Need an account?{' '}
      <Link style={{ color: 'white' }} to="/signup">
        Sign Up
      </Link>
    </div>
  )

  const layout = (
    <div>
      <Card id="card" className="shadow p-3 m-3">
        <Card.Body>
          <h1 id="heading" className="text-center mb-2">
            Welcome to BookBud.
          </h1>
          <h4 id="heading" className="text-center mb-1">
            Sign In
          </h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="pt-1">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="pt-2">Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            {login_button}
          </Form>
        </Card.Body>
      </Card>
      {signup_button}
    </div>
  )

  return layout
}
