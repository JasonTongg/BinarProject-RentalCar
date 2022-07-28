import React from 'react'
import {Container, Info, Image} from '../Styles/Hero'
import carImage from '../Assets/Hero-Car.png'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

export default function Hero(props) {
    if(props.button){
      return (
        <Container className='hero'>
            <Info>
                <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Link to="/search"><Button>Mulai Sewa Mobil</Button></Link>
            </Info>
            <Image>
                <img src={carImage} alt="" />
            </Image>
        </Container>
      )
    }
    else if(props.nobutton){
      return (
        <Container className='hero'>
            <Info>
                <h2>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </Info>
            <Image>
                <img src={carImage} alt="" />
            </Image>
        </Container>
      )
    }
    else{
      return (
        <Container style={{height: "calc(266px - 88px)"}} className="hero"></Container>
      )
    }
}
