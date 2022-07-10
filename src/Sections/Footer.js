import React from 'react'
import {FooterContainer, Address, Menu, SocialMedia, CopyRight, SocialMediaIcons} from '../Styles/Footer'
import Icon from '../Components/Icon'
import logo from "../Assets/Logo.png"
import {FiFacebook, FiTwitter, FiTwitch} from 'react-icons/fi'
import {AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import { useNavigate } from 'react-router'

export default function Footer() {
  let navigate = useNavigate();

  let scrollTop = () => {
    navigate("/");
    let hero = document.querySelector(".hero");
    hero.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }

  return (
    <FooterContainer>
      <Address>
        <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
        <h4>binarcarrental@gmail.com</h4>
        <h4>081-233-334-808</h4>
      </Address>
      <Menu>
        <li>Our Services</li>
        <li>Why Us</li>
        <li>Testimonial</li>
        <li>FAQ</li>
      </Menu>
      <SocialMedia>
        <h4>Connect With Us</h4>
        <SocialMediaIcons>
          <Icon font="white" background={props => props.theme.primaryColor} text={<FiFacebook></FiFacebook>}></Icon>
          <Icon font="white" background={props => props.theme.primaryColor} text={<AiOutlineInstagram></AiOutlineInstagram>}></Icon>
          <Icon font="white" background={props => props.theme.primaryColor} text={<FiTwitter></FiTwitter>}></Icon>
          <Icon font="white" background={props => props.theme.primaryColor} text={<AiOutlineMail></AiOutlineMail>}></Icon>
          <Icon font="white" background={props => props.theme.primaryColor} text={<FiTwitch></FiTwitch>}></Icon>
        </SocialMediaIcons>
      </SocialMedia>
      <CopyRight>
        <h4>Copyright Binar 2022</h4>
        <img src={logo} alt="logo" onClick={scrollTop}/>
      </CopyRight>
    </FooterContainer>
  )
}
