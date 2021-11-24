import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function library() {
  return (
    <div className="library">
      <Navbar />
      <h1>My Library</h1>
    </div>
  )
}
