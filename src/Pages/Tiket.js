import React from 'react'
import PaymentLayout from '../Layouts/PaymentLayout'
import Check from '../Assets/check.gif'
import {Container, Invoice, InvoiceText} from '../Styles/Tiket'
import {FiDownload} from 'react-icons/fi'

export default function Tiket() {
  return (
    <PaymentLayout active={["active", "active", "active"]} text="Tiket" back="/payment/transfer" version="2">
      <Container>
        <img src={Check} alt="success" />
        <h2>Pembayaran Berhasil</h2>
        <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        <Invoice>
          <div className='header'>
            <InvoiceText>
              <h3>Invoice</h3>
              <p>*no invoice</p>
            </InvoiceText>
            <button><FiDownload className='icon'></FiDownload><p>Unduh</p></button>
          </div>
          <div className='pdf'>Pdf Viewer</div>
        </Invoice>
      </Container>
    </PaymentLayout>
  )
}
