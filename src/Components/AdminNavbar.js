import React, {useEffect} from 'react';
import Icon from './Icon';
import {
  InputContainer,
  Navbar,
  NavbarItem,
  Profile,
  BigContainer,
} from '../Styles/AdminNavbar';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useDispatch, useSelector} from 'react-redux';
import {adminNavbar} from '../Redux/Actions/AnimationAction';
import AdminSideNavbar from './AdminSideNavbar';
import {useSearchParams} from 'react-router-dom';

export default function AdminNavbar(props) {
  let dispatch = useDispatch();
  let navbarClicked = useSelector((state) => state.animations.adminNavbar);
  let [, setValue] = useSearchParams();

  let clicked = () => {
    dispatch(adminNavbar());
  };

  let searchInput = (e) => {
    setValue({search: e.target.value});
  };

  let handleScroll = () => {
    let navbar = document.querySelector('.adminNavbar');
    let burger = document.querySelector('.burger');
    if (window.scrollY > navbar.getBoundingClientRect().height) {
      navbar.style.position = 'fixed';
      navbar.style.backgroundColor = 'rgba(13, 40, 166, .8)';
      burger.style.color = 'white';
      navbar.querySelector('button').style.border = '2px solid white';
      navbar.querySelector('button').style.color = 'white';
      navbar.querySelector('p').style.color = 'white';
    } else {
      navbar.style.position = 'static';
      navbar.style.backgroundColor = 'white';
      burger.style.color = 'black';
      navbar.querySelector('button').style.border = '2px solid #0D28A6';
      navbar.querySelector('button').style.color = '#0D28A6';
      navbar.querySelector('p').style.color = 'black';
    }
  };

  useEffect(() => {
    if (window.location.pathname !== '/admin/list/add') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [props.noSticky]);

  return (
    <Navbar className="adminNavbar">
      <GiHamburgerMenu className="burger" onClick={clicked}></GiHamburgerMenu>
      {navbarClicked ? null : (
        <AdminSideNavbar type={props.type}></AdminSideNavbar>
      )}
      {navbarClicked ? null : <BigContainer></BigContainer>}
      <NavbarItem>
        <InputContainer>
          <input
            type="text"
            placeholder="Search"
            onChange={searchInput}
          ></input>
          <button>Search</button>
        </InputContainer>
        <Profile>
          <Icon
            background={(props) => props.theme.lightPrimaryColor}
            font={(props) => props.theme.primaryColor}
            text="A"
          ></Icon>
          <p>Admin</p>
        </Profile>
      </NavbarItem>
    </Navbar>
  );
}
