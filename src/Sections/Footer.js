import React from 'react'
import {FooterContainer, Address, Menu, SocialMedia, CopyRight, SocialMediaIcons} from '../Styles/Footer'
import Icon from '../Components/Icon'
import logo from "../Assets/Logo.png"
import {FiFacebook, FiTwitter, FiTwitch} from 'react-icons/fi'
import {AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import { useNavigate, useLocation } from 'react-router'

export default function Footer() {
  let navigate = useNavigate();
  let location = useLocation();

  let scrollTop = () => {
    navigate("/");
    let hero = document.querySelector(".hero");
    hero.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }

  let scrollServices = () => {
    if(location.pathname !== "/"){
      navigate("/");
    }
    let service = document.querySelector(".service");
    service.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  let scrollFaq = () => {
    if(location.pathname !== "/"){
      navigate("/");
    }
    let faq = document.querySelector(".faq");
    faq.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  let scrollWhy = () => {
    if(location.pathname !== "/"){
      navigate("/");
    }
    let why = document.querySelector(".why");
    why.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  let scrollTestimonial = () => {
    if(location.pathname !== "/"){
      navigate("/");
    }
    let testi = document.querySelector(".testi");
    testi.scrollIntoView({ block: 'center',  behavior: 'smooth' });
  }

  return (
    <FooterContainer>
      <Address>
        <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
        <h4>binarcarrental@gmail.com</h4>
        <h4>081-233-334-808</h4>
      </Address>
      <Menu>
        <li onClick={scrollServices}>Our Services</li>
        <li onClick={scrollWhy}>Why Us</li>
        <li onClick={scrollTestimonial}>Testimonial</li>
        <li onClick={scrollFaq}>FAQ</li>
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
