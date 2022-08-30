import React, { useState } from 'react'
import {Button, Container, CarInfo, Sub, CarImage, CarType, CarPrice, SubHeader, Gone, DateContainer} from '../Styles/CarDetails'
import {BsPeople} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {BsChevronDown} from 'react-icons/bs'
import { useEffect } from 'react';
import DotLoader from "react-spinners/DotLoader";
import carTemp from '../Assets/carTemp.png'
import Popup from '../Components/PopupMessage'
import {CarRentDay} from '../Redux/Actions/CarAction'
import {useNavigate} from 'react-router-dom'

export default function CarDetails() {
    let detailId = useSelector(state => state.items.Details);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [detail, setDetail] = useState();
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");
    let [max, setMax] = useState("");
    let [min, setMin] = useState("");
    let [book, setBook] = useState("");
    let [back, setBack] = useState("");
    let [rentDay, setRentDay] = useState("");
    
    let getData = async () => {
        try {
            setLoading(true)
            let raw = await fetch(`https://bootcamp-rent-car.herokuapp.com/admin/car/${detailId}`);
            if(raw.status !== 200){
                throw new Error(raw.statusText);
            }

            let data = await raw.json();
            setDetail(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
        }
    }

    let show = () => {
        let height = 150;

        if(window.innerWidth<=600){
            height = 180;
        }

        if(window.innerWidth<=415){
            height = 200;
        }

        if(window.innerWidth<=340){
            height = 235;
        }

        if(document.querySelector(".div").style.opacity==="0"){
            document.querySelector(".div").style.height = `${height}px`;
            document.querySelector(".div").style.opacity = "1";
            document.querySelector(".rotateArrow").style.transform = "rotate(180deg)";
        }
        else{
            document.querySelector(".div").style.height = "0";
            document.querySelector(".div").style.opacity = "0";
            document.querySelector(".rotateArrow").style.transform = "rotate(0deg)";
        }
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        let hari = 0;
        let bookDate = new Date(book).getUTCDate();
        let backDate = new Date(back).getUTCDate();
        let bookMonth = new Date(book).getUTCMonth();

        if(book && back){
            hari = backDate - bookDate;
            if(hari<0){
                if(bookMonth % 2 === 1){
                    hari+=31;
                }
                else{
                    if(bookMonth !== 2){
                        hari+=30;
                    }
                    else{
                        hari+=28;
                    }
                }
            }
            setRentDay(hari);
        }
    }, [back, book])

    let mingguDepan = (e) => {
        let chooseDate=new Date(e.target.value);
        let chooseDateTemp = chooseDate;
        let bookNow = chooseDateTemp.getFullYear()+'-'+('0'+(chooseDateTemp.getMonth()+1)).slice(-2)+'-'+('0'+(chooseDateTemp.getDate())).slice(-2);
        chooseDate.setDate(chooseDate.getUTCDate()+7);
        let futureDate = chooseDate.getFullYear()+'-'+('0'+(chooseDate.getMonth()+1)).slice(-2)+'-'+('0'+(chooseDate.getDate())).slice(-2);
        setMax(futureDate);
        setMin(bookNow)
        setBook(e.target.value);
    }

    let toPayment = () => {
        dispatch(CarRentDay(rentDay))
        navigate("/payment");
    }
 
    if(loading === false){
        return (
            <Container>
                {error ? <Popup text={error}></Popup> : null}
                <CarInfo>
                    <h2>Tentang Paket</h2>
                    <Sub>
                        <h2>Include</h2>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>udah termasuk pajak</li>
                        </ul>
                    </Sub>
                    <Sub>
                        <h2>Exclude</h2>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </Sub>
                    <Sub>
                        <SubHeader>
                            <h2>Refund, Reschedule, Overtime</h2>
                            <BsChevronDown onClick={show} className="rotateArrow"></BsChevronDown>
                        </SubHeader>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <Gone className='div gone'>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </Gone>
                        </ul>
                    </Sub>
                </CarInfo>
                <CarImage>
                    <img src={detail.image ? detail.image : carTemp} alt={detail.name} />
                    <CarType>
                        <h4>{detail.name}</h4>
                        <div>
                            <BsPeople></BsPeople>
                            <p>{detail.category}</p>
                        </div>
                    </CarType>
                    <DateContainer>
                        <input 
                            type="text" 
                            placeholder="Pilih Tanggal Mulai"
                            onFocus={(e) => {
                                e.target.type='date';
                                e.target.showPicker();
                            }} 
                            onBlur={(e) => e.target.type='text'}
                            onChange={(e) => {
                                e.target.type="text";
                                mingguDepan(e);
                            }}
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
                        <p>To</p>
                        <input 
                            type="text" 
                            placeholder="Pilih Tanggal Akhir Sewa"
                            onFocus={(e) => {
                                e.target.type='date';
                                e.target.showPicker();
                            }} 
                            onBlur={(e) => e.target.type='text'}
                            onChange={(e) => {
                                e.target.type="text";
                                setBack(e.target.value);
                            }}
                            min={min}
                            max={max}
                            required
                        />
                    </DateContainer>
                    <CarPrice>
                        <h3>Total</h3>
                        <h3>Rp. {detail.price},-</h3>
                    </CarPrice>
                    
                    {rentDay ? <Button onClick={toPayment}>Lanjutkan Pembayaran</Button> : <Button disabled>Lanjutkan Pembayaran</Button>}
                </CarImage>
            </Container>
        )
    }
    else{
        return (
            <Container>
                <DotLoader color={"#D0d0d0"} loading={loading} size={100}/>
            </Container>
        )
    }
}
