import React, {useEffect} from 'react';
import PaymentLayout from '../Layouts/PaymentLayout';
import Check from '../Assets/check.gif';
import {Container, Invoice, InvoiceText} from '../Styles/Tiket';
import {FiDownload} from 'react-icons/fi';
import MyDocument from '../Sections/MyPdf/Pdf.js';
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import useState from 'react-usestateref';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

export default function Tiket() {
  let [, setCustomerData, customerDataRef] = useState();
  let {id} = useParams();

  useEffect(() => {
    let getCustomerData = async () => {
      try {
        let rawData = await window.fetch(
          `https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`,
          {
            method: 'GET',
            headers: {
              access_token: window.localStorage.getItem('token'),
            },
          }
        );

        let data = await rawData.json();

        if (rawData.status !== 200) {
          throw new Error(data.message ? data.message : data.errors[0].message);
        }
        setCustomerData(data);
      } catch (error) {}
    };

    let getData = async () => {
      try {
        let rawData = await window.fetch(
          'https://bootcamp-rent-cars.herokuapp.com/customer/order',
          {
            method: 'GET',
            headers: {
              access_token: window.localStorage.getItem('token'),
            },
          }
        );

        let data = await rawData.json();

        if (rawData.status !== 200) {
          throw new Error(data.message ? data.message : data.errors[0].message);
        }

        getCustomerData();
      } catch (error) {}
    };

    getData();
  }, [setCustomerData, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (customerDataRef.current) {
    return (
      <PaymentLayout
        active={['active', 'active', 'active']}
        text="Tiket"
        back="/payment/transfer"
        version="2"
      >
        <Container>
          <img src={Check} alt="success" />
          <h2>Pembayaran Berhasil</h2>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          <Invoice>
            <div className="header">
              <InvoiceText>
                <h3>Invoice</h3>
                <p>*no invoice</p>
              </InvoiceText>
              <PDFDownloadLink
                document={<MyDocument customerData={customerDataRef.current} />}
                fileName="payment.pdf"
              >
                <button>
                  <FiDownload className="icon"></FiDownload>
                  <p>Unduh</p>
                </button>
              </PDFDownloadLink>
            </div>
            <PDFViewer>
              <MyDocument customerData={customerDataRef.current}></MyDocument>
            </PDFViewer>
          </Invoice>
          <Link to="/" className="back">
            Back to Home
          </Link>
        </Container>
      </PaymentLayout>
    );
  } else {
    return (
      <PaymentLayout
        active={['active', 'active', 'active']}
        text="Tiket"
        back="/payment/transfer"
        version="2"
      >
        <Container>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={100}
            width={100}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={20}
            width={250}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={20}
            width={400}
          />
          <Invoice>
            <div className="header">
              <InvoiceText>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={20}
                  width={70}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={20}
                  width={70}
                />
              </InvoiceText>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={50}
                width={120}
              />
            </div>
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={300}
              style={{width: '100%'}}
            />
          </Invoice>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height={40}
            width={120}
          />
        </Container>
      </PaymentLayout>
    );
  }
}
