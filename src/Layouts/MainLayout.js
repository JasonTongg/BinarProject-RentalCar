import React from 'react'
import Footer from '../Sections/Footer'
import Navbar from '../Sections/Navbar'
import {} from "../Styles/MainLayout.js"

export default function MainLayout(props) {
  return (
    <React.Fragment>
        <Navbar></Navbar>
        {props.children}
        <Footer></Footer>
    </React.Fragment>
  )
}
