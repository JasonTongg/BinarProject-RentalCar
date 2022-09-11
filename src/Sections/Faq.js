import React from 'react'
import {Container, Text, Questions, DropDown, Ques, Ans} from '../Styles/Faq'
import {BsChevronDown} from 'react-icons/bs'
import useState from 'react-usestateref'

export default function Faq() {
    let [, setHidden, hiddenRef] = useState([true, true, true, true, true]);

    let displayAns1 = (e) => {
        setHidden([!hiddenRef.current[0], true, true, true, true])
    }

    let displayAns2 = (e) => {
        setHidden([true, !hiddenRef.current[1], true, true, true])
    }

    let displayAns3 = (e) => {
        setHidden([true, true, !hiddenRef.current[2], true, true])
    }

    let displayAns4 = (e) => {
        setHidden([true, true, true, !hiddenRef.current[3], true])
    }

    let displayAns5 = (e) => {
        setHidden([true, true, true, true, !hiddenRef.current[4]])
    }

    let displayAns = [displayAns1, displayAns2, displayAns3, displayAns4, displayAns5]
    let faqText = ["Apa saja syarat yang dibutuhkan?","Berapa hari minimal sewa mobil lepas kunci?", "Berapa hari sebelumnya sabaiknya booking sewa mobil?", "Apakah Ada biaya antar-jemput?", "Bagaimana jika terjadi kecelakaan"]

    return (
        <Container className='faq'>
            <Text>
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Text>
            <Questions>
                {hiddenRef.current.map((item, index) => (
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
