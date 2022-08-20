import React, { useState } from 'react'
import {Container, CarInfo, Sub, CarImage, CarType, CarPrice, SubHeader, Gone} from '../Styles/CarDetails'
import {BsPeople} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import {BsChevronDown} from 'react-icons/bs'
import { useEffect } from 'react';
import DotLoader from "react-spinners/DotLoader";

export default function CarDetails() {
    let detailId = useSelector(state => state.items.Details);
    let [detail, setDetail] = useState();
    let [loading, setLoading] = useState(true);
    
    let getData = async () => {
        setLoading(true)
        let raw = await fetch(`https://bootcamp-rent-car.herokuapp.com/admin/car/${detailId}`);
        let data = await raw.json();
        setDetail(data);
        setLoading(false);
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

    if(loading === false){
        return (
            <Container>
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
                    <img src={detail.image} alt={detail.name} />
                    <CarType>
                        <h4>{detail.name}</h4>
                        <div>
                            <BsPeople></BsPeople>
                            <p>{detail.category}</p>
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
    else{
        return (
            <Container>
                <DotLoader color={"#D0d0d0"} loading={loading} size={100}/>
            </Container>
        )
    }
}
