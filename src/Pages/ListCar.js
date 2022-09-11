import React, {useEffect} from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import AdminCarList from '../Sections/AdminCarList'

export default function ListCar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <AdminLayout type="List Cars">
        <AdminCarList></AdminCarList>
    </AdminLayout>
  )
}
