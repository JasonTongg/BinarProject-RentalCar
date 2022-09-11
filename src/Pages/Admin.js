import React, {useEffect} from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import Dashboard from '../Sections/Dashboard'

export default function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <AdminLayout type="Dashboard">
      <Dashboard></Dashboard>
    </AdminLayout>
  )
}
