import React, {useEffect} from 'react'
import Icon from './Icon'
import {InputContainer, Navbar, NavbarItem, Profile} from '../Styles/AdminNavbar'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { adminNavbar } from '../Redux/Actions/AnimationAction'
import AdminSideNavbar from './AdminSideNavbar'

export default function AdminNavbar(props) {
    let dispatch = useDispatch();
    let navbarClicked = useSelector(state => state.animations.adminNavbar);

    let clicked = () => {
        dispatch(adminNavbar());
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let nav = document.querySelector(".navv");
            if(nav.getBoundingClientRect().top <= -78){
                nav.classList.add("fixed");
            }
        })
    }, [])

    return (
        <Navbar className='navv'>
            <GiHamburgerMenu class="burger" onClick={clicked}></GiHamburgerMenu>
            {navbarClicked ? null : <AdminSideNavbar type={props.type}></AdminSideNavbar>}
            <NavbarItem>
                <InputContainer>
                    <input type="text" placeholder='Search'></input>
                    <button>Search</button>
                </InputContainer>
                <Profile>
                    <Icon background={props => props.theme.lightPrimaryColor} font={props => props.theme.primaryColor} text="A"></Icon>
                    <p>Admin</p>
                </Profile>
            </NavbarItem>
        </Navbar>
    )
}
