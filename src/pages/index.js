import React from 'react'
import Timer from '../components/Timer'

export default function index() {
  return (
    <div>
      <div className="homecontainer">
        <div className="nowreading">
          <h1>Now Reading</h1>
        </div>
        <div className="timer">
          <Timer />
        </div>
      </div>
    </div>
  )
}
