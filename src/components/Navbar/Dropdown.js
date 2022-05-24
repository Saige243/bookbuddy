import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useAuth } from "../../contexts/AuthContext"
import { NavLink, useHistory } from "react-router-dom"

export default function DropdownMenu() {
  const [error, setError] = useState('')
  // had vvv const {currentUser, logout } = useAuth()
  const { logout } = useAuth()
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
        <Dropdown.Toggle
          style={{
            backgroundColor: "white",
            borderColor: "#97D9E1",
            textDecoration: "none",
            color: "#97D9E1",
            boxShadow: "none"
          }}
          variant="info" id="dropdown - basic">
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{
            backgroundColor: "white"
          }}>
          <Dropdown.Item>
            <NavLink
              style={{
                textDecoration: 'none',
                color: '#97D9E1'
              }} to="/dash">
              <b>Dashboard</b>
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink
              style={{
                textDecoration: 'none',
                color: '#97D9E1'
              }} to="/library">
              <b>My Library</b>
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item
            style={{
              textDecoration: 'none',
              color: '#97D9E1'
            }} onClick={handleLogout}>
            <b>Log Out</b>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div >
  )
}
