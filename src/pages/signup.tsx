import { Container } from 'react-bootstrap'

import Signupcomp from '../components/Signupcomp'
import AuthProvider from '../contexts/AuthContext'



export default function signup() : JSX.Element {
  const container = (
    <Container
      className = "d-flex align-items-center justify-content-center"
      style = {{ minHeight: "100vh"}}
    >
      <div
        className = "w-100"
        style = {{ maxWidth: "400px" }}
      >
        <Signupcomp/>
      </div>
    </Container>
  )

  const layout = (
    <div className="loginhome">
      <AuthProvider>
        {container}
      </AuthProvider>
    </div>
  )
  return layout
}