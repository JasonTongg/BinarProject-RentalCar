import React, {useEffect} from 'react'
import {Container} from '../Styles/NotFound'
import MainLayout from '../Layouts/MainLayout'
import NotFoundImage from '../Assets/NotFound.jpg'

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <MainLayout>
      <Container>
        <img src={NotFoundImage} alt="Not Found" />
        <h1>Waduh tujuan kamu nga ada!!</h1>
        <p>Mungkin kamu salah jalan atau alamat. Ayo balik ke menu utama</p>
      </Container>
    </MainLayout>
  )
}
