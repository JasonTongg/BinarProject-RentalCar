import React from 'react'
import Home from '../Pages/Home'
import Search from '../Pages/Search'
import Details from '../Pages/Details'
import Result from '../Pages/Result'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}
