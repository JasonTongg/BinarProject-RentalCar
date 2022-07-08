import React from 'react'
import carTemp from '../Assets/carTemp.png'
import {Container, CarItem} from '../Styles/CarList'
import Button from './Button'

export default function CarList() {

    let list = [
        {
            id: 1,
            image: carTemp,
            title: "Toyota",
            price: "Rp 500.000 / hari",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            id: 2,
            image: carTemp,
            title: "Toyota",
            price: "Rp 500.000 / hari",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            id: 3,
            image: carTemp,
            title: "Toyota",
            price: "Rp 500.000 / hari",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            id: 4,
            image: carTemp,
            title: "Toyota",
            price: "Rp 500.000 / hari",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            id: 5,
            image: carTemp,
            title: "Toyota",
            price: "Rp 500.000 / hari",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            id: 6,
            image: carTemp,
            title: "Toyota",
            price: "Rp 500.000 / hari",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
    ]

    return (
        <Container>
            {list.map(item => (
                <CarItem>
                    <img src={item.image} alt="" />
                    <h5>{item.title}</h5>
                    <h3>{item.price}</h3>
                    <p>{item.description}</p>
                    <Button size="big">Pilih Mobil</Button>
                </CarItem>
            ))}
        </Container>
    )
}
