import * as React from "react"
import Timer from './components/Timer'
import axios from 'axios'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import Library from './pages/library';
import Search from './pages/search';
import SignUp from './pages/signup';
import { Container, Stack } from 'react-bootstrap'
import AuthProvider from './contexts/AuthContext';
import Dash from './components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login'
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
