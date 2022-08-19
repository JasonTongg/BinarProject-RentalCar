import React from 'react'
import {Container, BigContainer} from '../Styles/Sewa'
import Button from '../Components/Button'
import {Link} from 'react-router-dom'

export default function Sewa() {
  return (
    <BigContainer>
        <Container>
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link to="/search"><Button>Mulai Sewa Mobil</Button></Link>
        </Container>
    </BigContainer>
  )
}
