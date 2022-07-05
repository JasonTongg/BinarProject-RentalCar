import React from 'react'
import { useSelector , useDispatch} from 'react-redux/es/exports'
import  {SideNavbarContainer, Sidenavbar, Overlay} from '../Styles/SideNavbar'
import logo from '../Assets/Logo.png'
import {FaTimes} from 'react-icons/fa'
import {navbar} from '../Redux/Actions/AnimationAction'

export default function SideNavbar() {
    let navbarToggle = useSelector(state => state.animations.navbar)
    let dispatch = useDispatch();

    const closeNavbar = () => {
        dispatch(navbar());
    }

    if(navbarToggle === true){
        return (
            <React.Fragment>
                <Sidenavbar>
                    <SideNavbarContainer>
                        <img src={logo} alt="Logo" />
                        <li>Our Services</li>
                        <li>Why Us</li>
                        <li>Testimonial</li>
                        <li>FAQ</li>
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
