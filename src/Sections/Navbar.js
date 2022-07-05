import React from 'react'
import {NavbarContainer, NavbarItems, BurgerNavbar} from "../Styles/Navbar.js"
import logo from '../Assets/Logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useDispatch} from 'react-redux'
import {navbar} from '../Redux/Actions/AnimationAction'
import Sidebar from '../Components/SideNavbar'

export default function Navbar() {
  let dispatch = useDispatch();
  const openNavbar = () => {
    dispatch(navbar());
  }

  return (
    <NavbarContainer>
      <img src={logo} alt="Logo" />
      <NavbarItems>
        <li>Our Services</li>
        <li>Why Us</li>
        <li>Testimonial</li>
        <li>FAQ</li>
      </NavbarItems>
      <BurgerNavbar>
        <GiHamburgerMenu onClick={openNavbar}></GiHamburgerMenu>
      </BurgerNavbar>
      <Sidebar></Sidebar>
    </NavbarContainer>
  )
}
