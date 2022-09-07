import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import SearchBar from '../Components/SearchBar'
import CarList from '../Components/CarList'

export default function Result() {
  return (
    <React.Fragment>
      <MainLayout show>
        <Hero></Hero>
        <SearchBar edits></SearchBar>
        <CarList></CarList>
      </MainLayout>
    </React.Fragment>
  )
}