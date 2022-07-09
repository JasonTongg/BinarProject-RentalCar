import React from 'react'
import {Container, CarItem} from '../Styles/CarList'
import Button from './Button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default async function CarList() {
    let list = await useSelector(state => state.items.list);
    let navigate = useNavigate();

    let directDetails = () => {
        navigate("/details");
    }

    return (
        <Container>
            {list.map(item => (
                <CarItem>
                    <img src={item.image} alt="" />
                    <h5>{item.name}</h5>
                    <h3>Rp {item.price}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus ducimus eligendi tenetur enim animi omnis incidunt temporibus maxime vitae!</p>
                    <Button size="big" action={directDetails}>Pilih Mobil</Button>
                </CarItem>
            ))}
        </Container>
    )
}
