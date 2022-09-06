import React from 'react'
import PaymentLayout from '../Layouts/PaymentLayout'
import Check from '../Assets/check.gif'
import {Container, Invoice, InvoiceText} from '../Styles/Tiket'
// import {FiDownload} from 'react-icons/fi'
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import { getFilePlugin } from '@react-pdf-viewer/get-file';

export default function Tiket() {
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;
  const [url, setUrl] = React.useState("");

  const onChange = (e) => {
    const files = e.target.files;
    files.length > 0 && setUrl(URL.createObjectURL(files[0]));
    console.log(url);
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
      <PaymentLayout active={["active", "active", "active"]} text="Tiket" back="/payment/transfer" version="2">
        <Container>
          <img src={Check} alt="success" />
          <h2>Pembayaran Berhasil</h2>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          <Invoice>
            <div style={{ width: "100%" }}>
              <input type="file" accept=".pdf" onChange={onChange}/>
              <div style={url ? { height: "500px", width: "100%" } : { height: "250px", width: "100%" }}>
                {url ? (
                  <div
                  className="rpv-core__viewer"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                  >
                    <div
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'white',
                        display: 'flex',
                        padding: '1rem',
                      }}>
                      <div className='header'>
                        <InvoiceText>
                          <h3>Invoice</h3>
                          <p>*no invoice</p>
                        </InvoiceText>
                        <DownloadButton />
                      </div>
                    </div>
                    <div
                       className='pdfDisplay'
                       style={{
                        flex: 1,
                        overflow: 'hidden',
                      }}
                    >
                      <Viewer fileUrl={url} plugins={[getFilePluginInstance]} />
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      fontSize: "2rem",
                      height: "100%",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    Preview area
                  </div>
                )}
              </div>
            </div>
          </Invoice>
        </Container>
      </PaymentLayout>
    </Worker>
  )
}
