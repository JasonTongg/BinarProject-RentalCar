import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import SearchBar from '../Components/SearchBar'

export default function Result() {
  return (
    <React.Fragment>
      <MainLayout>
        <Hero></Hero>
        <SearchBar edits></SearchBar>
      </MainLayout>
    </React.Fragment>
  )
}