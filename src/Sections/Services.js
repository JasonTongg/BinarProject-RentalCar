import React from 'react'
import {Container, Info, Image} from '../Styles/Services'
import carImage from '../Assets/service-Avatar.png'
import Icon from '../Components/Icon'
import {AiOutlineCheck} from 'react-icons/ai'

export default function Services() {
    let service = ["Sewa Mobil Dengan Supir di Bali 12 Jam", "Sewa Mobil Lepas Kunci di Bali 24 Jam", "Sewa Mobil Jangka Panjang Bulanan", "Gratis Antar - Jemput Mobil di Bandara", "Layanan Airport Transfer / Drop In Out"];

    return (
        <Container className='service'>
            <Image>
                <img src={carImage} alt="" />
            </Image>
            <Info>
                <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul>
                    {service.map((item, idx) => (
                        <li key={idx}><Icon background={props => props.theme.lightPrimaryColor} font={props => props.theme.primaryColor} text={<AiOutlineCheck></AiOutlineCheck>} size="small"></Icon>{item}</li>
                    ))}
                </ul>
            </Info>
        </Container>
    )
}
