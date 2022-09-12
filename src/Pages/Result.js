import React, {useEffect} from 'react'
import CarLayout from '../Layouts/CarLayout'
import Hero from '../Sections/Hero'
import SearchBar from '../Components/SearchBar'
import CarList from '../Components/CarList'

export default function Result() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <React.Fragment>
      <CarLayout>
        <Hero></Hero>
        <SearchBar edits></SearchBar>
        <CarList></CarList>
      </CarLayout>
    </React.Fragment>
  )
}