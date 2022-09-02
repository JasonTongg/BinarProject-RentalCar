import React from 'react'
import PaymentLayout from '../Layouts/PaymentLayout'
import { useSelector } from 'react-redux'

export default function Transfer() {
    let text = useSelector(state => state.items.RentCar.payment);
    return (
        <PaymentLayout active={["active", "active", ""]} text={`${text} Transfer`} back="/payment">
        
        </PaymentLayout>
    )
}
