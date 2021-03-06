import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import SearchBar from '../Components/SearchBar'

export default function Search() {
  return (
    <React.Fragment>
      <MainLayout>
        <Hero nobutton></Hero>
        <SearchBar search></SearchBar>
      </MainLayout>
    </React.Fragment>
  )
}
