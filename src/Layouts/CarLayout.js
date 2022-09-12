import React from 'react'
import Footer from '../Sections/Footer'
import Navbar from '../Sections/Navbar'
import {Container} from "../Styles/CarLayout"

export default function MainLayout(props) {
  
  return (
    <Container className='MainContainer'>
        <Navbar></Navbar>
          {props.children}
        <Footer classList="footer"></Footer>
    </Container>
  )
}
