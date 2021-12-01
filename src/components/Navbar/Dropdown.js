import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Button, Alert } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function DropdownMenu() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout(){
    setError('')

    try {
      await logout()
      history.push('/')
    } catch {
      setError('failed to log out')
    }

  }


  return (
    <div>
      <Dropdown className="DropMenu">
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/dash">Dashboard</Dropdown.Item>
          <Dropdown.Item href="/search">Search A Book</Dropdown.Item>
          <Dropdown.Item href="/library">My Library</Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
