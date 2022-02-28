import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Signupcomp(): JSX.Element {

  const emailRef = React.useRef<HTMLInputElement>(null!);
  const passwordRef = React.useRef<HTMLInputElement>(null!);
  const passwordConfirmRef = React.useRef<HTMLInputElement>(null!);
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/dash');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  const signup_button = (
    <Button
      style={{ backgroundColor: '#97D9E1', border: 'none' }}
      disabled={loading}
      type="submit"
      className="mt-3 w-100"
    >
      <strong>Sign Up</strong>
    </Button>
  )

  const login_link = (
    <div className="w-100 text-center mt-2">
      Already have an account?{' '}
      <Link style={{ color: 'white' }} to="/">
        Login
      </Link>
    </div>

  )

  const layout = (
    <div>
      <Card id="card" className="shadow p-3">
        <Card.Body>
          <h2 id="heading" className="text-center mb-4">
            Love reading? You'll love Bookbud. Join Now.
          </h2>
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
            <Form.Group id="password-confirm">
              <Form.Label className="pt-2">Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            {signup_button}
          </Form>
        </Card.Body>
      </Card>
      {login_link}
    </div>
  )

  return layout

}
