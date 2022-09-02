import React from 'react'//175
import {Container, Items, Button, Pwd, PwdItem, Icon, Line} from '../Styles/PaymentHeader'
import {BsArrowLeft} from 'react-icons/bs'

export default function PaymentHeader(props) {
    let active = props.active;
    return (
        <Container>
        <Items>
            <Button to={props.back}><BsArrowLeft className='icon'></BsArrowLeft> {props.text}</Button>
            <Pwd>
                <PwdItem>
                    <Icon className={active[0]}><p>1</p></Icon>
                    <p>Pilih Metode</p>
                </PwdItem>
                <Line></Line>
                <PwdItem>
                    <Icon className={active[1]}><p>2</p></Icon>
                    <p>Pilih Metode</p>
                </PwdItem>
                <Line></Line>
                <PwdItem>
                    <Icon className={active[2]}><p>3</p></Icon>
                    <p>Pilih Metode</p>
                </PwdItem>
            </Pwd>
        </Items>
        </Container>
    )
}
