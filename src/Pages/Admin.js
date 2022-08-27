import React from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import Dashboard from '../Sections/Dashboard'

export default function Admin() {
  return (
    <AdminLayout type="Dashboard">
      <Dashboard></Dashboard>
    </AdminLayout>
  )
}
