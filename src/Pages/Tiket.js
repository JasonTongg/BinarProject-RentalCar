import React from 'react'
import PaymentLayout from '../Layouts/PaymentLayout'

export default function Tiket() {
  return (
    <PaymentLayout active={["active", "active", "active"]} text="Tiket" back="/payment/transfer" version="2">
      
    </PaymentLayout>
  )
}
