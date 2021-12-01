import React, { useState } from 'react'
import Dropdown from './Dropdown'
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { Button, Alert } from 'react-bootstrap'
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Navbar() {
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
      <Nav>
            <NavLogo to="/dash">
                BookBud
            </NavLogo>
            {/* <Bars /> */}
            <Dropdown />

            <NavMenu>
                <NavLink to="/dash" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/search" activeStyle>
                    Search A Book
                </NavLink>
                <NavLink to="/library" activeStyle>
                    My Library
                </NavLink>
                <NavLink to='/' onClick={handleLogout}>
                  Log Out
                </NavLink>
            </NavMenu> 
           </Nav> 
      
    </div>
  )
}
