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
          <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Search A Book</Dropdown.Item>
          <Dropdown.Item href="#/action-3">My Library</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Sign In</Dropdown.Item>
          <Dropdown.Item href="#/action-5">Sign Up</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
