import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  background-color: #fff;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  padding: 10px;
  color: #97D9E1
`;

export const NavLink = styled(Link)`
color: #97D9E1;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
padding: 10px;
&.active {
  color: #97D9E1;
}
&:hover {
  color: #fae5df;
}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
