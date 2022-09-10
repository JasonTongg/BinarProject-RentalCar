import React from 'react'
import PaymentLayout from '../Layouts/PaymentLayout'
import Check from '../Assets/check.gif'
import {Container, Invoice, InvoiceText} from '../Styles/Tiket'
import {FiDownload} from 'react-icons/fi'
import MyDocument from '../Sections/MyPdf/Pdf.js'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

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
              <PDFDownloadLink document={<MyDocument />} fileName="payment.pdf" id="unduh">
                <button><FiDownload className='icon'></FiDownload><p>Unduh</p></button>
              </PDFDownloadLink>
            </div>
            <PDFViewer>
              <MyDocument></MyDocument>
            </PDFViewer>
          </Invoice>
        </Container>
      </PaymentLayout>
  )
}
