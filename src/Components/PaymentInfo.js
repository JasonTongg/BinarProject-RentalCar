import React from 'react'
import {Container, DataContainer, DataItem} from '../Styles/PaymentInfo'
import { useSelector } from 'react-redux/es/exports'

export default function PaymentInfo() {
    let detail = useSelector(state => state.items.RentCar);
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
                    <p>{detail.mulai}</p>
                </DataItem>
                <DataItem>
                    <h4>Tanggal Akhir Sewa</h4>
                    <p>{detail.akhir}</p>
                </DataItem>
            </DataContainer>
        </Container>
    )
}