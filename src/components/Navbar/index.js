import React from 'react'
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


export default function Navbar() {
  return (
    <div>
      <Nav>
            <NavLogo to="/">
                BookBud
            </NavLogo>
            {/* <Bars /> */}
            <Dropdown />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/search" activeStyle>
                    Search A Book
                </NavLink>
                <NavLink to="/library" activeStyle>
                    My Library
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    Sign In
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
      
    </div>
  )
}
