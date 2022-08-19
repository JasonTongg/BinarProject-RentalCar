import React, {useState} from 'react'
import {Container, Text, Questions, DropDown, Ques, Ans} from '../Styles/Faq'
import {BsChevronDown} from 'react-icons/bs'

export default function Faq() {
    const [isHidden1, setHidden1] = useState("false");
    const [isHidden2, setHidden2] = useState("false");
    const [isHidden3, setHidden3] = useState("false");
    const [isHidden4, setHidden4] = useState("false");
    const [isHidden5, setHidden5] = useState("false");

    let displayAns1 = (e) => {
        setHidden1(!isHidden1);
        setHidden2("false");
        setHidden3("false");
        setHidden4("false");
        setHidden5("false");
    }

    let displayAns2 = (e) => {
        setHidden2(!isHidden2);
        setHidden1("false");
        setHidden3("false");
        setHidden4("false");
        setHidden5("false");
    }

    let displayAns3 = (e) => {
        setHidden3(!isHidden3);
        setHidden2("false");
        setHidden1("false");
        setHidden4("false");
        setHidden5("false");
    }

    let displayAns4 = (e) => {
        setHidden4(!isHidden4);
        setHidden2("false");
        setHidden3("false");
        setHidden1("false");
        setHidden5("false");
    }

    let displayAns5 = (e) => {
        setHidden5(!isHidden5);
        setHidden2("false");
        setHidden3("false");
        setHidden4("false");
        setHidden1("false");
    }

    let isHidden = [isHidden1, isHidden2, isHidden3, isHidden4, isHidden5];
    let displayAns = [displayAns1, displayAns2, displayAns3, displayAns4, displayAns5]
    let faqText = ["Apa saja syarat yang dibutuhkan?","Berapa hari minimal sewa mobil lepas kunci?", "Berapa hari sebelumnya sabaiknya booking sewa mobil?", "Apakah Ada biaya antar-jemput?", "Bagaimana jika terjadi kecelakaan"]

    return (
        <Container className='faq'>
            <Text>
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Text>
            <Questions>
                {isHidden.map((item, index) => (
                    <DropDown key={index}>
                        <Ques onClick={displayAns[index]} className={item ? "hidden" : null}>
                            <h2>{faqText[index]}</h2>
                            <BsChevronDown className='arrow'></BsChevronDown>
                        </Ques>
                        <Ans className={item ? "hidden" : null}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus reprehenderit suscipit eligendi maiores sed, eum aspernatur quibusdam dolores provident, ipsam at adipisci nam illo quisquam veniam hic accusamus excepturi! Nihil maxime provident laudantium eligendi iusto tempora, nostrum, magni accusamus natus doloremque dignissimos aperiam nemo culpa, repellat voluptatem officia obcaecati!</p>
                        </Ans>
                    </DropDown>
                ))}
            </Questions>
        </Container>
    )
}
