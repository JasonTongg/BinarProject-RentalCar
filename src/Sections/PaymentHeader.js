import React from 'react'//175
import {Container, Items, Button, Pwd, PwdItem, Icon, Line, OrderId} from '../Styles/PaymentHeader'
import {BsArrowLeft} from 'react-icons/bs'

export default function PaymentHeader(props) {
    let active = props.active;
    return (
        <Container version={props.version ? "120px" : "175px"}>
            <Items version={props.version ? "85%" : "50%"}>
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
            {props.version === "2" ? <OrderId>Order Id: 194861</OrderId> : null}
        </Container>
    )
}
