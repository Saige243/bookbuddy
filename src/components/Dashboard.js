import React, { useState } from 'react'
import { Button, Alert, Card } from 'react-bootstrap'
import Timer from '../components/Timer'
import Navbar from './Navbar'
import  '../App.css'  

export default function Dashboard() {
  

  return (
    <div>
      <Navbar />
      <div className="dashcontainer">
        <Card className="text-center" style={{ width: '22rem' }}>
          <Card.Body className="shadow sm">
            <Card.Title >Reading Timer</Card.Title>
            <Timer />
          </Card.Body>
        </Card>
      </div>
    </div>

  )
}
