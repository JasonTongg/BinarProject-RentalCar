import React from 'react'
import Home from '../Pages/Home'
import Search from '../Pages/Search'
import Details from '../Pages/Details'
import Result from '../Pages/Result'
import NotFound from '../Pages/NotFound'
import UserLogin from '../Pages/UserLogin'
import AdminLogin from '../Pages/AdminLogin'
import Admin from '../Pages/Admin'
import AdminListCar from '../Pages/ListCar'
import AddCar from '../Pages/AddCar'
import Payment from '../Pages/Payment'
import Transfer from '../Pages/Transfer'
import Tiket from '../Pages/Tiket'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import AdminPrivateRouter from './AdminPrivateRoute'

export default function Router() {
  let userLoginProps = {
    title: "Welcome Back!",
    button: "Sign In",
    text: ["Don’t have an account?", "Sign Up for free", "/register"],
    login: true
  }

  let userRegisProps = {
    title: "Sign Up",
    button: "Sign Up",
    text: ["Already have an account?", "Sign In here", "/login"],
    login: false
  }

  let addCarProps = {
    title: "Add New Car",
  }

  let editCarProps = {
    title: "Edit Car",
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouter></PrivateRouter>}>
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/result/*" element={<Result />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/payment/transfer" element={<Transfer />} />
          <Route exact path="/payment/tiket" element={<Tiket />} />
        </Route>
        <Route element={<AdminPrivateRouter></AdminPrivateRouter>}>
          <Route exact path="/admin" element={<Admin></Admin>} />
          <Route exact path="/admin/list" element={<AdminListCar></AdminListCar>} />
          <Route exact path="/admin/list/add" element={<AddCar {...addCarProps}></AddCar>} />
          <Route exact path="/admin/list/edit/:id" element={<AddCar {...editCarProps}></AddCar>} />
        </Route>
        <Route exact path="/" element={<Home />} />
        <Route exact path ="/login" element={<UserLogin {...userLoginProps}/>} />
        <Route exact path ="/register" element={<UserLogin {...userRegisProps}/>} />
        <Route exact path="/admin/login" element={<AdminLogin />}/>
        <Route exact path="/*" element={<Navigate to="/404" />}/>
        <Route exact path="/404" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}
