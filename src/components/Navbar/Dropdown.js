import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useAuth } from "../../contexts/AuthContext"
import { NavLink, useHistory } from "react-router-dom"

export default function DropdownMenu() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
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
        <Dropdown.Toggle style={{ backgroundColor: "#f5cac2", border: "none", textDecoration: "none", color: "white", boxShadow: "none" }} variant="info" id="dropdown-basic">
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: "#f5cac2" }}>
          <Dropdown.Item>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dash">Dashboard</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/search">Search A Book</NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/library">My Library</NavLink>
          </Dropdown.Item>
          <Dropdown.Item style={{ textDecoration: 'none', color: 'white' }} onClick={handleLogout}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
