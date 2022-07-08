import React from 'react'
import {NavbarContainer, NavbarItems, BurgerNavbar} from "../Styles/Navbar.js"
import logo from '../Assets/Logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useDispatch} from 'react-redux'
import {navbar} from '../Redux/Actions/AnimationAction'
import Sidebar from '../Components/SideNavbar'
import logoWhite from '../Assets/Logo-White.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  let dispatch = useDispatch();
  const openNavbar = () => {
    dispatch(navbar());
  }

  window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".navbar");
    let navbarHeight = document.querySelector(".navbar").getBoundingClientRect().height;
    let service = document.querySelector(".service");
    let serviceTop = service.getBoundingClientRect().top;
    let logos = document.querySelector(".logo");

    if(serviceTop + navbarHeight - 100 < (window.innerHeight - service.getBoundingClientRect().height)/2){
      navbar.style.position = "fixed";
      navbar.style.backgroundColor = "rgba(13, 40, 166, .8)";
      console.log(window.innerWidth);
      if(window.innerWidth > 600){
        console.log("Masuk");
        navbar.style.color = "white";
      }
      
      logos.src = logoWhite;
    }
    else{
      navbar.style.position = "static";
      navbar.style.backgroundColor = "rgb(241, 243, 255)";
      navbar.style.color = "black";
      logos.src = logo;
    }
  })

  let scrollServices = () => {
    let service = document.querySelector(".service");
    service.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  let scrollFaq = () => {
    let faq = document.querySelector(".faq");
    faq.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  let scrollWhy = () => {
    let why = document.querySelector(".why");
    why.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  let scrollTestimonial = () => {
    let testi = document.querySelector(".testi");
    testi.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  let scrollTop = () => {
    let hero = document.querySelector(".hero");
    hero.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }

  return (
    <NavbarContainer className='navbar'>
      <Link to="/" onClick={scrollTop}>
        <img src={logo} alt="Logo" className='logo'/>
      </Link>
      <NavbarItems>
        <li onClick={scrollServices}>Our Services</li>
        <li onClick={scrollWhy}>Why Us</li>
        <li onClick={scrollTestimonial}>Testimonial</li>
        <li onClick={scrollFaq}>FAQ</li>
      </NavbarItems>
      <BurgerNavbar>
        <GiHamburgerMenu onClick={openNavbar}></GiHamburgerMenu>
      </BurgerNavbar>
      <Sidebar></Sidebar>
    </NavbarContainer>
  )
}
