import React from 'react'
import Footer from '../Sections/Footer'
import Navbar from '../Sections/Navbar'
import Header from '../Sections/PaymentHeader'
import {Container} from '../Styles/PaymentLayout'
import PaymentInfo from '../Components/PaymentInfo'

export default function PaymentLayout(props) {
    return (
        <Container>
            <Navbar></Navbar>
            <Header></Header>
            {props.info ? <PaymentInfo></PaymentInfo> : null}
            {props.children}
            <Footer></Footer>
        </Container>
    )
}
