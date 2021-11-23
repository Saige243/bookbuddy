import * as React from "react"
import Timer from './components/Timer'
import axios from 'axios'
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import Library from './pages/library';
import Search from './pages/search';
import SignUp from './pages/signup';
import { Container } from 'react-bootstrap'
import AuthProvider from './contexts/AuthContext';
import Dashboard from './components/Dashboard'
import Login from './pages/login'


function App() {
  return (
    <Container>
      <div className="app">
      <Router>
        <AuthProvider>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
        </AuthProvider>
      </Router>
      </div>
    </Container>
  );
}

export default App;
