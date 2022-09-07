import React, {useState} from 'react'
import PaymentLayout from '../Layouts/PaymentLayout'
import {Left, Right, Content, BankContainer, BankItem, Info, DetailHarga, Total, Line, Details, Price, Other, NotInclude, Button} from '../Styles/Payment'
import {BsCheck2, BsPeople} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {RiArrowUpSLine, RiArrowDownSLine} from 'react-icons/ri'
import {AddPayment} from '../Redux/Actions/CarAction'
import { useNavigate } from 'react-router-dom'

export default function Payment() {
  let [bank, setBank] = useState({
    bca: false,
    bni: false,
    mandiri: false
  });
  let [total, setTotal] = useState(true);
  let detail = useSelector(state => state.items.RentCar);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let checkBca = () => {
    setBank({
      bca: !bank.bca,
      bni: false,
      mandiri: false
    })
    dispatch(AddPayment("BCA"));
  }

  let checkBni = () => {
    setBank({
      bca: false,
      bni: !bank.bni,
      mandiri: false,
    })
    dispatch(AddPayment("BNI"));
  }

  let checkMandiri = () => {
    setBank({
      bca: false,
      bni: false,
      mandiri: !bank.mandiri,
    })
    dispatch(AddPayment("Mandiri"));
  }

  let rotate = () => {
    setTotal(!total);
  }

  return (
    <PaymentLayout info active={["active", "", ""]} text="Pembayaran" back="/details">
      <Content>
        <Left>
          <h2>Pilih Bank Transfer</h2>
          <p className='text'>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
          <BankContainer>
            <BankItem onClick={checkBca}>
              <div>BCA</div>
              <p>BCA Transfer</p>
              {bank.bca ? <BsCheck2 className='icon'></BsCheck2> : null}
            </BankItem>
            <BankItem onClick={checkBni}>
              <div>BNI</div>
              <p>BNI Transfer</p>
              {bank.bni ? <BsCheck2 className='icon'></BsCheck2> : null}
            </BankItem>
            <BankItem onClick={checkMandiri}>
              <div>Mandiri</div>
              <p>Mandiri Transfer</p>
              {bank.mandiri ? <BsCheck2 className='icon'></BsCheck2> : null}
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
          <Details className={total ? "show" : "hide"}>
              <Price>
                <h3>Harga</h3>
                <ul>
                  <li>
                    <div>
                      <p>Sewa Mobil Rp. {detail.harga/detail.day} x {detail.day} Hari</p>
                      <p className='detail'>Rp. {detail.harga},-</p>
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
          <Line></Line>
          <Total>
            <h2>Total</h2>
            <h2>Rp. {detail.harga},-</h2>
          </Total>
          {bank.bca || bank.bni || bank.mandiri ? <Button onClick={() => navigate("/payment/transfer")}>Bayar</Button> : <Button disabled>Bayar</Button>}
        </Right>
      </Content>
    </PaymentLayout>
  )
}
