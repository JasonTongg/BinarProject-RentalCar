import React from 'react'
import {Container, Items, Item} from '../Styles/Whyus'
import Icon from '../Components/Icon'
import {FiThumbsUp} from 'react-icons/fi'
import {BsTag} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiMedal} from 'react-icons/bi'

export default function WhyUs() {
    let item = [
        {
            background: props => props.theme.yellowColor,
            font: "white",
            text: <FiThumbsUp></FiThumbsUp>,
            title: "Mobil Lengkap",
            subTitle: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
        },
        {
            background: props => props.theme.redColor,
            font: "white",
            text: <BsTag></BsTag>,
            title: "Harga Murah",
            subTitle: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
        },
        {
            background: props => props.theme.primaryColor,
            font: "white",
            text: <AiOutlineClockCircle></AiOutlineClockCircle>,
            title: "Layanan 24 Jam",
            subTitle: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
        },
        {
            background: props => props.theme.greenColor,
            font: "white",
            text: <BiMedal></BiMedal>,
            title: "Sopir Profesional",
            subTitle: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
        }
    ]

    return (
        <Container className='why'>
            <h2>Why Us?</h2>
            <p>Mengapa harus pilih Binar Car Rental?</p>
            <Items>
                {item.map((item, idx) => (
                    <Item key={idx}>
                        <Icon background={item.background}font={item.font} text={item.text}></Icon>
                        <h3>{item.title}</h3>
                        <p>{item.subTitle}</p>
                    </Item>
                ))}
            </Items>
        </Container>
    )
}
