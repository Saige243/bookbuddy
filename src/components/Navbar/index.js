import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faBook, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
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
            <NavLogo id="heading" className={"logo"} to="/dash">
                <strong>BookBud</strong>
            </NavLogo>
            {/* <Bars /> */}
            <Dropdown />
            <NavMenu>
                <NavLink className="navlink" to="/dash" activeStyle>
                  <FontAwesomeIcon size="lg" icon={faHome} />
                </NavLink>
                <NavLink to="/search" activeStyle>
                  <FontAwesomeIcon size="lg" icon={faBook} />
                </NavLink>
                <NavLink to="/library" activeStyle>
                  <FontAwesomeIcon size="lg" icon={faBookOpen} />
                </NavLink>
                <NavLink to='/' onClick={handleLogout}>
                  <FontAwesomeIcon size="lg" icon={faSignOutAlt} />
                </NavLink>
            </NavMenu> 
           </Nav> 
    </div>
  )
}
