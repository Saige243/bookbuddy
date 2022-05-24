import { useState } from 'react'
import Dropdown from './Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import {
  Nav,
  NavLogo,
  NavLink,
  NavMenu,
} from "./NavbarElements";
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"


export default function Navbar() {
  // had [error, setError] = useState('')
  const [setError] = useState('')
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
      <Nav>
        <NavLogo id="heading" className={"logo"} to="/dash">
          <strong>BookBud</strong>
        </NavLogo>
        <Dropdown />
        <NavMenu>
          <NavLink className="navlink" to="/dash" activeStyle>
            <FontAwesomeIcon size="lg" icon={faHome} />
          </NavLink>
          <NavLink to="/library" activeStyle>
            <FontAwesomeIcon size="lg" icon={faBook} />
          </NavLink>
          <NavLink to='/' onClick={handleLogout}>
            <FontAwesomeIcon size="lg" icon={faSignOutAlt} />
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  )
}
