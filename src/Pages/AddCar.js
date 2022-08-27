import React from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import AddCar from '../Sections/AdminAddCar'

export default function AdminAddCar() {
  return (
    <AdminLayout type="List Cars">
        <AddCar></AddCar>
    </AdminLayout>
  )
}
