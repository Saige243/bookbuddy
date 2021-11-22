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


function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/library" component={Library} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
