import React, {useState} from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import Services from '../Sections/Services'
import Whyus from '../Sections/WhyUs'
import Sewa from '../Sections/Sewa'
import Testimonial from '../Sections/Testimonial'
import Faq from '../Sections/Faq'
import Popup from '../Components/PopupMessage'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import {login} from '../Redux/Actions/AnimationAction'

export default function Home() {
  let dispatch = useDispatch();
  let success = useSelector(state => state.animations.login);
  setTimeout(() => {
    dispatch(login(false));
  }, 3500)
  return (
    <React.Fragment>
      <MainLayout>
        <Hero button></Hero>
        <Services></Services>
        <Whyus></Whyus>
        <Testimonial></Testimonial>
        <Sewa></Sewa>
        <Faq></Faq>
        {success===true ? <Popup text="Login Success"></Popup> : null}
      </MainLayout>
    </React.Fragment>
  )
}
