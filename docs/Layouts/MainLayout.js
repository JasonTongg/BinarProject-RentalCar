import React, {useEffect} from 'react'
import Footer from '../Sections/Footer'
import Navbar from '../Sections/Navbar'
import {Container} from "../Styles/MainLayout"

export default function MainLayout(props) {
  useEffect(() => {
    let child = document.querySelector(".container").childNodes;

    Array.from(child).forEach(item => {
      if(item.getBoundingClientRect().top <= 700){
        item.style.opacity = "1";
        if(item.classList.contains("searchBar")){
          item.style.transform = "translateY(-50px)";
        }
        else{
          item.style.transform = "translateY(0)";
        }
      }
    })

    window.addEventListener("scroll", () => {
      Array.from(child).forEach(item => {
        if(item.getBoundingClientRect().top <= 700){
          item.style.opacity = "1";
          if(item.classList.contains("searchBar")){
            item.style.transform = "translateY(-50px)";
          }
          else{
            item.style.transform = "translateY(0)";
          }
        }
      })
    })    
  })

  return (
    <Container className='container'>
        <Navbar></Navbar>
        {props.children}
        <Footer></Footer>
    </Container>
  )
}
