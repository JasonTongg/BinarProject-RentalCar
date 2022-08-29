import React, {useState} from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import Services from '../Sections/Services'
import Whyus from '../Sections/WhyUs'
import Sewa from '../Sections/Sewa'
import Testimonial from '../Sections/Testimonial'
import Faq from '../Sections/Faq'
import Popup from '../Components/PopupMessage'

export default function Home() {
  let success = window.localStorage.getItem("token");

  return (
    <React.Fragment>
      <MainLayout>
        <Hero button></Hero>
        <Services></Services>
        <Whyus></Whyus>
        <Testimonial></Testimonial>
        <Sewa></Sewa>
        <Faq></Faq>
        {success ? <Popup text="Login Success" color></Popup> : null}
      </MainLayout>
    </React.Fragment>
  )
}
