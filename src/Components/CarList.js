import React from 'react'
import { Container, CarItem, Loading, Buttons, Icon } from '../Styles/CarList'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import carTemp from '../Assets/carTemp.png';
import { useSelector } from 'react-redux';
import { RiLoaderLine } from 'react-icons/ri';
import '../Styles/cssStyle.css'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'

function CarList(props) {
    const [data, setData] = useState([]);
    let navigate = useNavigate();
    let [nama, kategori, harga] = useSelector(state => state.items.Search);
    let carData = useSelector(state => state.items.CarList);
    let [loading, setLoading] = useState(true);
    let [cutData, setCutData] = useState();
    let [posisi, setPosisi] = useState(0);

    let directDetails = () => {
        navigate("/details");
    }

    let getData = () => {
        if(nama !== undefined && props.empty === undefined){
            let filterData = carData.filter(item => item.category === kategori && item.name.toLowerCase() === nama.toLowerCase());

            if (harga === "< Rp. 400.000") {
                filterData = filterData.filter(item => item.price < 400000);
            }
            else if (harga === "Rp. 400.000 - Rp. 600.000") {
                filterData = filterData.filter(item => item.price >= 400000 && item.price <= 600000);
            }
            else {
                filterData = filterData.filter(item => item.price > 600000);
            }   
            setData(filterData);
        }
        else{
            setData(carData);
        }
    }

    useEffect(() => {
        setLoading(true);
        getData();
    }, [carData])

    useEffect(() => {
        let cut = [];
        if(data){
            for(let i=0;i<data.length;i+=9){
                cut.push(data.slice(i,i+9));
            }
        }
        setCutData(cut);
        setLoading(false);
    }, [data])

    if (loading === true) {
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
            <>
                <Container>
                    {cutData[posisi]?.map(item => 
                    (
                        <CarItem key={item.id}>
                            <img src={item.image ? item.image : carTemp} alt="" />
                            <h5>{item.name}</h5>
                            <h3>Rp {item.price},-</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <Button size="big" action={directDetails} idCar={item.id}>Pilih Mobil</Button>
                        </CarItem>
                    )
                    )}
                </Container>
                {cutData[posisi] ? <Buttons>
                    {posisi === 0 ? null : (<Icon onClick={() => setPosisi(posisi-1)}><BiChevronLeft></BiChevronLeft></Icon>)}
                    {posisi === cutData.length-1 ? null : (<Icon onClick={() => setPosisi(posisi+1)}><BiChevronRight></BiChevronRight></Icon>)}
                </Buttons> : null}
                
            </>
        )
    }
}

export default CarList;