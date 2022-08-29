import React from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import AddCar from '../Sections/AdminAddCar'

export default function AdminAddCar(props) {
  return (
    <AdminLayout type="List Cars">
        <AddCar {...props}></AddCar>
    </AdminLayout>
  )
}
