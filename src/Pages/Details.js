import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import SearchBar from '../Components/SearchBar'
import CarDetails from '../Sections/CarDetails'

export default function Details() {
  return (
    <React.Fragment>
      <MainLayout>
        <Hero></Hero>
        <SearchBar></SearchBar>
        <CarDetails></CarDetails>
      </MainLayout>
    </React.Fragment>
  )
}
