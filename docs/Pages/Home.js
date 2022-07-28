import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import Services from '../Sections/Services'
import Whyus from '../Sections/WhyUs'
import Sewa from '../Sections/Sewa'
import Testimonial from '../Sections/Testimonial'
import Faq from '../Sections/Faq'

export default function Home() {
  return (
    <React.Fragment>
      <MainLayout>
        <Hero button></Hero>
        <Services></Services>
        <Whyus></Whyus>
        <Testimonial></Testimonial>
        <Sewa></Sewa>
        <Faq></Faq>
      </MainLayout>
    </React.Fragment>
  )
}
