import React from 'react'
import Icon from './Icon'
import {InputContainer, Navbar, NavbarItem, Profile, BigContainer} from '../Styles/AdminNavbar'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { adminNavbar } from '../Redux/Actions/AnimationAction'
import AdminSideNavbar from './AdminSideNavbar'
import {AdminSearch} from '../Redux/Actions/CarAction'

export default function AdminNavbar(props) {
    let dispatch = useDispatch();
    let navbarClicked = useSelector(state => state.animations.adminNavbar);

    let clicked = () => {
        dispatch(adminNavbar());
    }

    let searchInput = (e) => {
        dispatch(AdminSearch(e.target.value));
    }

    return (
        <Navbar>
            <GiHamburgerMenu class="burger" onClick={clicked}></GiHamburgerMenu>
            {navbarClicked ? null : <AdminSideNavbar type={props.type}></AdminSideNavbar>}
            {navbarClicked ? null : <BigContainer></BigContainer>}
            <NavbarItem>
                <InputContainer>
                    <input type="text" placeholder='Search' onChange={searchInput}></input>
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
