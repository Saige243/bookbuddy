import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { Button, Alert } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { NavLink, Link, useHistory } from "react-router-dom"

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
        <Dropdown.Toggle style={{ backgroundColor: "#f79256" }}variant="info" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "#f79256" }}>
          <Dropdown.Item>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/dash">Dashboard</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
             <NavLink style={{ textDecoration: 'none', color: 'black' }}to="/search">Search A Book</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/library">My Library</NavLink>
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
