import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import SearchBar from '../Components/SearchBar'

export default function Details() {
  return (
    <React.Fragment>
      <MainLayout>
        <Hero></Hero>
        <SearchBar></SearchBar>
      </MainLayout>
    </React.Fragment>
  )
}
