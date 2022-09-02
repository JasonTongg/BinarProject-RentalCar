import React, {useState, useEffect} from 'react'
import PaymentLayout from '../Layouts/PaymentLayout'
import { useSelector } from 'react-redux'
import {Left, Right, Container, CountDown, Info, Instruksi, Bank, InputContainer, Buttons, Line, Konfirmasi, Upload, Button, Title} from '../Styles/Transfer'
import { useNavigate } from 'react-router-dom'
import {FiCopy} from 'react-icons/fi'

export default function Transfer() {
    let text = useSelector(state => state.items.RentCar.payment);
    let [konfirmasi, setKonfirmasi] = useState(false);
    let navigate = useNavigate();
    let [pembayaran, setPembayaran] = useState([23,57,12]);
    let [bukti, setBukti] = useState([9,59]);
    let [active, setActive] = useState(["active", "", "", ""]);

    useEffect(() => {
        let [jam, menit, detik] = pembayaran;
        setInterval(() => {
            if(menit===0 && detik===0){
                jam=jam-1;
                menit=60;
                detik=60;
            }
            else if(detik===0){
                menit=menit-1;
                detik=60;
            }
            detik-=1;
            setPembayaran([jam,menit,detik]);
        }, 1000)
    }, [])
    
    let upload = () => {
        setKonfirmasi(true);
        let [menit, detik] = bukti;
        setInterval(() => {
            if(detik===0){
                menit=menit-1;
                detik=59;
            }
            else{
                detik-=1;
            }
            setBukti([menit,detik]);
        }, 1000)
    }

    return (
        <PaymentLayout active={["active", "active", ""]} text={`${text} Transfer`} back="/payment" version="2">
            <Container>
                <Left>
                    <CountDown>
                        <div>
                            <h3>Selesaikan Pembayaran Sebelum</h3>
                            <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                        </div>
                        <h3><span>{pembayaran[0]<10 ? `0${pembayaran[0]}` : pembayaran[0]}</span><span>:</span><span>{pembayaran[1]<10 ? `0${pembayaran[1]}` : pembayaran[1]}</span><span>:</span><span>{pembayaran[2]<10 ? `0${pembayaran[2]}` : pembayaran[2]}</span></h3>
                    </CountDown>
                    <Info>
                        <h3>Lakukan Transfer Ke</h3>
                        <Bank>
                            <div>{text}</div>
                            <p>{text} Transfer</p>
                        </Bank>
                        <p>a.n Binar Car Rental</p>
                        <InputContainer>
                            <label for="nomor">Nomor Rekening</label>
                            <input type="text" id='nomor' value="54104257877" disabled/>
                            <FiCopy className='icon' onClick={() => navigator.clipboard.writeText(54104257877)}></FiCopy>
                        </InputContainer>
                        <InputContainer>
                            <label for="nomor">Total Bayar</label>
                            <input type="text" id='nomor' value="Rp. 3.500.000,-" disabled/>
                            <FiCopy className='icon' onClick={() => navigator.clipboard.writeText(3500000)}></FiCopy>
                        </InputContainer>
                    </Info>
                    <Instruksi>
                        <h3>Intruksi Pembayaran</h3>
                        <Buttons>
                            <button className={active[0]} onClick={() => setActive(["active", "", "", ""])}>ATM BCA</button>
                            <button className={active[1]} onClick={() => setActive([ "","active","", ""])}>M-BCA</button>
                            <button className={active[2]} onClick={() => setActive(["", "", "active", ""])}>BCA Klik</button>
                            <button className={active[3]} onClick={() => setActive(["", "", "", "active"])}>Internet Banking</button>
                        </Buttons>
                        <Line></Line>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptate.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptate. <span>Contoh</span> <span>Ini loh....</span></li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptate.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptate.</li>
                        </ul>
                    </Instruksi>
                </Left>
                <Right>
                    {konfirmasi ? 
                        <Upload>
                            <Title>
                                <h3>Konfirmasi Pembayaran</h3>
                                <div>
                                    <h3><span>{bukti[0]< 10 ? `0${bukti[0]}` : bukti[0]}</span><span>:</span><span>{bukti[1]< 10 ? `0${bukti[1]}` : bukti[1]}</span></h3>
                                </div>
                            </Title>
                            <p>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                            <h3>Upload Bukti Pembayaran</h3>
                            <p>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                            <div className='image'>Image......</div>
                            <Button onClick={() => navigate("/payment/tiket")}>Upload</Button>
                        </Upload>
                    :
                        <Konfirmasi>
                            <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                            <Button onClick={upload}>Konfirmasi Pembayaran</Button>
                        </Konfirmasi>
                    }
                </Right>
            </Container>
        </PaymentLayout>
    )
}
