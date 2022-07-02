import * as React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dash from './pages/Dashboard'
import Library from './pages/Library';
import Search from './pages/Search';
import SignUp from './pages/Signup';
import { Container } from 'react-bootstrap'
import AuthProvider from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import './App.css'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Container fluid className='p-0'>
      <div className="app">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/dash' component={Dash} />
              <PrivateRoute path="/search" component={Search} />
              <Route path='/signup' component={SignUp} />
              <PrivateRoute path="/library" component={Library} />
              <Route exact path='/' component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
