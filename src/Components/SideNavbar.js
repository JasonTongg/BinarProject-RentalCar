import React from 'react'
import { useSelector , useDispatch} from 'react-redux/es/exports'
import  {SideNavbarContainer, Sidenavbar, Overlay} from '../Styles/SideNavbar'
import logo from '../Assets/Logo.png'
import {FaTimes} from 'react-icons/fa'
import {navbar} from '../Redux/Actions/AnimationAction'
import { Link } from 'react-router-dom'

export default function SideNavbar() {
    let navbarToggle = useSelector(state => state.animations.navbar)
    let dispatch = useDispatch();

    const closeNavbar = () => {
        dispatch(navbar());
        let hero = document.querySelector(".hero");
        hero.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }

    let scrollServices = () => {
        let service = document.querySelector(".service");
        service.scrollIntoView({ block: 'center',  behavior: 'smooth' });
        dispatch(navbar());
      }
    
      let scrollFaq = () => {
        let faq = document.querySelector(".faq");
        faq.scrollIntoView({ block: 'center',  behavior: 'smooth' });
        dispatch(navbar());
      }
    
      let scrollWhy = () => {
        let why = document.querySelector(".why");
        why.scrollIntoView({ block: 'center',  behavior: 'smooth' });
        dispatch(navbar());
      }
    
      let scrollTestimonial = () => {
        let testi = document.querySelector(".testi");
        testi.scrollIntoView({ block: 'center',  behavior: 'smooth' });
        dispatch(navbar());
      }

    if(navbarToggle === true){
        return (
            <React.Fragment>
                <Sidenavbar>
                    <SideNavbarContainer>
                        <Link to="/" onClick={closeNavbar}>
                            <img src={logo} alt="Logo" />
                        </Link>
                        <li onClick={scrollServices}>Our Services</li>
                        <li onClick={scrollWhy}>Why Us</li>
                        <li onClick={scrollTestimonial}>Testimonial</li>
                        <li onClick={scrollFaq}>FAQ</li>
                        <FaTimes className='close' onClick={closeNavbar}></FaTimes>
                    </SideNavbarContainer>
                </Sidenavbar>
                <Overlay></Overlay>
            </React.Fragment>
        )
    }
    else{
        return null;
    }
    
}
