import React, {useEffect} from 'react'
import CarLayout from '../Layouts/CarLayout'
import Hero from '../Sections/Hero'
import SearchBar from '../Components/SearchBar'
import CarList from '../Components/CarList'

export default function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <React.Fragment>
      <CarLayout>
        <Hero nobutton></Hero>
        <SearchBar search></SearchBar>
        <CarList empty></CarList>
      </CarLayout>
    </React.Fragment>
  )
}
