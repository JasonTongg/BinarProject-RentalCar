import React, {useState} from 'react';
import {
  Container,
  Left,
  Right,
  CategoryContainer,
  NavbarContainer,
} from '../Styles/AdminSideNavbar';
import {useDispatch} from 'react-redux';
import {adminNavbar} from '../Redux/Actions/AnimationAction';
import {BsHouseDoor, BsTruck} from 'react-icons/bs';
import {RiCloseLine} from 'react-icons/ri';
import Logo from '../Assets/Logo.png';
import {useNavigate} from 'react-router-dom';
import {BiLogOut} from 'react-icons/bi';

export default function AdminSideNavbar(props) {
  let dispatch = useDispatch();
  let [text] = useState(props.type);
  let navigate = useNavigate();

  let close = () => {
    dispatch(adminNavbar());
  };

  let toAdmin = () => {
    navigate('/admin');
    close();
  };

  let toAdminList = () => {
    navigate('/admin/list');
    close();
  };

  let logout = () => {
    window.localStorage.removeItem('Admin Token');
    navigate('/');
    close();
  };

  return (
    <Container>
      <Left>
        <CategoryContainer onClick={close}>
          <RiCloseLine className="icon big"></RiCloseLine>
        </CategoryContainer>
        {text === 'Dashboard' ? (
          <CategoryContainer className="active" onClick={toAdmin}>
            <BsHouseDoor className="icon"></BsHouseDoor>
            <p>Dashboard</p>
          </CategoryContainer>
        ) : (
          <CategoryContainer onClick={toAdmin}>
            <BsHouseDoor className="icon"></BsHouseDoor>
            <p>Dashboard</p>
          </CategoryContainer>
        )}
        {text === 'Dashboard' ? (
          <CategoryContainer onClick={toAdminList}>
            <BsTruck className="icon"></BsTruck>
            <p>Cars</p>
          </CategoryContainer>
        ) : (
          <CategoryContainer className="active" onClick={toAdminList}>
            <BsTruck className="icon"></BsTruck>
            <p>Cars</p>
          </CategoryContainer>
        )}
        <CategoryContainer onClick={logout}>
          <BiLogOut className="icon"></BiLogOut>
          <p>Logout</p>
        </CategoryContainer>
      </Left>
      <Right>
        <NavbarContainer>
          <img src={Logo} alt="logo" onClick={logout} />
        </NavbarContainer>
        <NavbarContainer>
          <h3>{text === 'Dashboard' ? text : 'CARS'}</h3>
        </NavbarContainer>
        <NavbarContainer>
          <h4>{text}</h4>
        </NavbarContainer>
      </Right>
    </Container>
  );
}
