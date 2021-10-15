import * as React from "react"
import Timer from './components/Timer'
import axios from 'axios'
import Booksearch from './components/Booksearch'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="bookcontainer">
        <Booksearch />
      </div>
      <div>
        <p>HEY THIS IS WORKING</p>
      </div>
      <div className="timercontainer">
        <Timer />
      </div>
      <div>
        <p>HEY THIS IS WORKING</p>
      </div>
    </div>
  );
}

export default App;
