import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default function DropdownMenu() {
  return (
    <div>
      <Dropdown className="DropMenu">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Dashboard</Dropdown.Item>
          <Dropdown.Item href="/search">Search A Book</Dropdown.Item>
          <Dropdown.Item href="/library">My Library</Dropdown.Item>
          <Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
