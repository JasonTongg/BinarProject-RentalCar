import React, {useEffect} from 'react'
import AdminLayout from '../Layouts/AdminLayout'
import AddCar from '../Sections/AdminAddCar'

export default function AdminAddCar(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <AdminLayout type="List Cars">
        <AddCar {...props}></AddCar>
    </AdminLayout>
  )
}
