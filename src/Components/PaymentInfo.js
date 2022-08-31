import React from 'react'
import {Container, DataContainer, DataItem} from '../Styles/PaymentInfo'
import { useSelector } from 'react-redux/es/exports'

export default function PaymentInfo() {
    let bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    let detail = useSelector(state => state.items.RentDay);
    let mulai = detail.mulai.split("-").reverse();
    mulai[1] = bulan[+mulai[1]];
    mulai = mulai.join(" ");
    let akhir = detail.akhir.split("-").reverse();
    akhir[1] = bulan[+akhir[1]];
    akhir = akhir.join(" ");
    return (
        <Container>
            <h3>Detail Pesananmu</h3>
            <DataContainer>
                <DataItem>
                    <h4>Nama/Tipe Mobil</h4>
                    <p>{detail.nama}</p>
                </DataItem>
                <DataItem>
                    <h4>Kategori</h4>
                    <p>{detail.kategori}</p>
                </DataItem>
                <DataItem>
                    <h4>Tanggal Mulai Sewa</h4>
                    <p>{mulai}</p>
                </DataItem>
                <DataItem>
                    <h4>Tanggal Akhir Sewa</h4>
                    <p>{akhir}</p>
                </DataItem>
            </DataContainer>
        </Container>
    )
}