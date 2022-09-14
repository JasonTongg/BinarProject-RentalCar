import React from 'react'
import Icon from './Icon'
import {InputContainer, Navbar, NavbarItem, Profile, BigContainer} from '../Styles/AdminNavbar'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import { adminNavbar } from '../Redux/Actions/AnimationAction'
import AdminSideNavbar from './AdminSideNavbar'
import { useSearchParams } from 'react-router-dom'

export default function AdminNavbar(props) {
    let dispatch = useDispatch();
    let navbarClicked = useSelector(state => state.animations.adminNavbar);
    let [, setValue] = useSearchParams();

    let clicked = () => {
        dispatch(adminNavbar());
    }

    let searchInput = (e) => {
        setValue({"search": e.target.value});
    }

    return (
        <Navbar>
            <GiHamburgerMenu className="burger" onClick={clicked}></GiHamburgerMenu>
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
