import React from 'react'
import Footer from '../Sections/Footer'
import Navbar from '../Sections/Navbar'
import {Container} from "../Styles/MainLayout"

export default function MainLayout(props) {
  return (
    <Container>
        <Navbar></Navbar>
        {props.children}
        <Footer></Footer>
    </Container>
  )
}
