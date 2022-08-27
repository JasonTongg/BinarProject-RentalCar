import React from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import AdminCarList from '../Sections/AdminCarList'

export default function ListCar() {
  return (
    <AdminLayout type="List Cars">
        <AdminCarList></AdminCarList>
    </AdminLayout>
  )
}
