import React, {useState} from 'react'
import PaymentLayout from '../Layouts/PaymentLayout'
import {Left, Right, Content, BankContainer, BankItem, Info, DetailHarga, Total, Line, Details, Price, Other, NotInclude} from '../Styles/Payment'
import {BsCheck2, BsPeople} from 'react-icons/bs'
import Button from '../Components/Button'
import { useSelector } from 'react-redux'
import {RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri'

export default function Payment() {
  let [bca, setBca] = useState(false);
  let [bni, setBni] = useState(false);
  let [mandiri, setMandiri] = useState(false);
  let [total, setTotal] = useState(true);
  let detail = useSelector(state => state.items.RentDay);

  let checkBca = () => {
    setBca(!bca);
    setBni(false);
    setMandiri(false);
  }
  let checkBni = () => {
    setBca(false);
    setBni(!bni);
    setMandiri(false);
  }
  let checkMandiri = () => {
    setBca(false);
    setBni(false);
    setMandiri(!mandiri);
  }

  let rotate = () => {
    setTotal(!total);
  }

  return (
    <PaymentLayout info>
      <Content>
        <Left>
          <h2>Pilih Bank Transfer</h2>
          <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
          <BankContainer>
            <BankItem onClick={checkBca}>
              <div>BCA</div>
              <p>BCA Transfer</p>
              {bca ? <BsCheck2 className='icon'></BsCheck2> : null}
            </BankItem>
            <BankItem onClick={checkBni}>
              <div>BCA</div>
              <p>BCA Transfer</p>
              {bni ? <BsCheck2 className='icon'></BsCheck2> : null}
            </BankItem>
            <BankItem onClick={checkMandiri}>
              <div>BCA</div>
              <p>BCA Transfer</p>
              {mandiri ? <BsCheck2 className='icon'></BsCheck2> : null}
            </BankItem>
          </BankContainer>
        </Left>
        <Right>
          <Info>
            <h2>{detail.nama}</h2>
            <div>
              <BsPeople className='icon'></BsPeople>
              <p>{detail.kategori}</p>
            </div>
          </Info>
          <DetailHarga>
            <p>Total</p>
            {total ? <RiArrowUpSLine className='icon' onClick={rotate}></RiArrowUpSLine> : <RiArrowDownSLine className='icon' onClick={rotate}></RiArrowDownSLine>}
            <h2 className='total'>Rp. {detail.harga},-</h2>
          </DetailHarga>
          {total ? 
            <Details>
              <Price>
                <h3>Harga</h3>
                <ul>
                  <li>
                    <div>
                      <p>Sewa Mobil Rp. {detail.harga/detail.day} x {detail.day} Hari</p>
                      <p>Rp. {detail.harga},-</p>
                    </div>
                  </li>
                </ul>
              </Price>
              <Other>
                <h3>Biaya Lainnya</h3>
                <ul>
                  <li>
                    <div>
                      <p>Pajak</p>
                      <p>Termasuk</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Biaya Makan Supir</p>
                      <p>Termasuk</p>
                    </div>
                  </li>
                </ul>
              </Other>
              <NotInclude>
              <h3>Harga</h3>
                <ul>
                  <li>Bensin</li>
                  <li>Tol dan Parkir</li>
                </ul>
              </NotInclude>
            </Details>
          : 
          null
          }
          <Line></Line>
          <Total>
            <h2>Total</h2>
            <h2>Rp. {detail.harga},-</h2>
          </Total>
          <Button size="big">Bayar</Button>
        </Right>
      </Content>
    </PaymentLayout>
  )
}
