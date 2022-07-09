import React from 'react'
import {Container, CarInfo, Sub, CarImage, CarType, CarPrice} from '../Styles/CarDetails'
import {BsPeople} from 'react-icons/bs'
import { useSelector } from 'react-redux'

export default function CarDetails() {
    let detail = useSelector(state => state.items.Details);
    
    return (
        <Container>
            <CarInfo>
                <h2>Tentang Paket</h2>
                <Sub>
                    <h2>Include</h2>
                    <ul>
                        {detail.include.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </Sub>
                <Sub>
                    <h2>Exclude</h2>
                    <ul>
                        {detail.exclude.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </Sub>
                <Sub>
                    <h2>Refund, Reschedule, Overtime</h2>
                    <ul>
                        {detail.refund.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </Sub>
            </CarInfo>
            <CarImage>
                <img src={detail.image} alt={detail.type} />
                <CarType>
                    <h4>{detail.type}</h4>
                    <div>
                        <BsPeople></BsPeople>
                        <p>{detail.seat}</p>
                    </div>
                </CarType>
                <CarPrice>
                    <h3>Total</h3>
                    <h3>{detail.price}</h3>
                </CarPrice>
            </CarImage>
        </Container>
    )
}
