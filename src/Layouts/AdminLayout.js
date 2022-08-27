import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import {Container} from '../Styles/AdminLayout'

export default function AdminLayout(props) {
  return (
    <Container>
      <AdminNavbar type={props.type}></AdminNavbar>
      {props.children}
    </Container>
  )
}
