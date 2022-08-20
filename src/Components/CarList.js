import React from 'react'
import { Container, CarItem, Buttons, Icon, SmallContainer } from '../Styles/CarList'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import carTemp from '../Assets/carTemp.png';
import { useSelector } from 'react-redux';
import '../Styles/cssStyle.css'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'
import DotLoader from "react-spinners/DotLoader";
import NotFoundImage from '../Assets/NotFound.jpg'

function CarList(props) {
    const [data, setData] = useState([]);
    let navigate = useNavigate();
    let [nama, kategori, harga] = useSelector(state => state.items.Search);
    let carData = useSelector(state => state.items.CarList);
    let [loading, setLoading] = useState(true);
    let [cutData, setCutData] = useState();
    let [posisi, setPosisi] = useState(0);
    let [isLoading, setIsLoading] = useState(true);

    let directDetails = () => {
        navigate("/details");
    }

    useEffect(() => {
        setLoading(true);
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
    },[carData, data, harga, kategori, nama, props.empty])

    useEffect(() => {
        let cut = [];
        for(let i=0;i<data.length;i+=9){
            cut.push(data.slice(i,i+9));
        }
        setCutData(cut);

        if(cutData?.length > 0){
            setLoading(false);
        }
    }, [data, cutData])

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)
    }, [loading])

    if(loading === false) {
        return (
            <>
                <Container className='carList'>
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
    else {
        if(isLoading === true){
            return (
                <Container className='loadContainer carList'>
                    <DotLoader color={"#D0d0d0"} loading={loading} size={100}/>
                </Container>
            )
        }
        else{
            return (
                <SmallContainer className='loadContainer carList'>
                    <img src={NotFoundImage} alt="Not Found" />
                    <h1>Waduh tujuan kamu nga ada!!</h1>
                    <p>Mungkin kamu salah jalan atau alamat. Ayo balik ke menu utama</p>
                </SmallContainer>
            )
        }
    }
}

export default CarList;