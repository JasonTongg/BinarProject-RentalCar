import React, {useEffect} from 'react'
import MainLayout from '../Layouts/MainLayout'
import Hero from '../Sections/Hero'
import SearchBar from '../Components/SearchBar'
import CarList from '../Components/CarList'

export default function Search() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <React.Fragment>
      <MainLayout show>
        <Hero nobutton></Hero>
        <SearchBar search></SearchBar>
        <CarList empty></CarList>
      </MainLayout>
    </React.Fragment>
  )
}
