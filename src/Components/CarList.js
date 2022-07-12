import React from 'react'
import { Container, CarItem, Loading } from '../Styles/CarList'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import carTemp from '../Assets/carTemp.png';
import { useSelector } from 'react-redux';
import { RiLoaderLine } from 'react-icons/ri';
import '../Styles/cssStyle.css'

function CarList() {
    const [data, setData] = useState([]);
    let navigate = useNavigate();
    let [nama, kategori, harga] = useSelector(state => state.items.Search);

    let directDetails = () => {
        navigate("/details");
    }

    let getData = async () => {
        let raw = await fetch("https://bootcamp-rent-car.herokuapp.com/admin/car");

        let data = await raw.json();

        let filterData = data.filter(item => item.category === kategori && item.name.toLowerCase() === nama.toLowerCase());

        if (harga === "< Rp. 400.000") {
            filterData = filterData.filter(item => item.price < 400000);
        }
        else if (harga === "Rp. 400.000 - Rp. 600.000") {
            filterData = filterData.filter(item => item.price >= 400000 && item.price <= 600000);
        }
        else {
            filterData = filterData.filter(item => item.price > 600000);
        }

        console.log(filterData);
        setData(filterData);
    }

    useEffect(() => {
        if (data.length === 0) {
            getData();
        }
    })

    if (data.length === 0) {
        return (
            <Container className='loadContainer'>
                <Loading className='Loading'>
                    <RiLoaderLine></RiLoaderLine>
                </Loading>
            </Container>
        )
    }
    else {
        return (
            <Container>
                {data.map(item => (
                    <CarItem key={item.id}>
                        <img src={item.image ? item.image : carTemp} alt="" />
                        <h5>{item.name}</h5>
                        <h3>Rp {item.price},-</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus ducimus eligendi tenetur enim animi omnis incidunt temporibus maxime vitae!</p>
                        <Button size="big" action={directDetails} idCar={item.id}>Pilih Mobil</Button>
                    </CarItem>
                ))}
            </Container>
        )
    }
}

export default CarList;