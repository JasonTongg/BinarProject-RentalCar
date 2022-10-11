import React, {useState} from 'react';
import {
  Button,
  Container,
  CarInfo,
  Sub,
  CarImage,
  CarType,
  CarPrice,
  SubHeader,
  Gone,
  DateContainer,
} from '../Styles/CarDetails';
import {BsPeople} from 'react-icons/bs';
import {useDispatch} from 'react-redux';
import {BsChevronDown} from 'react-icons/bs';
import {useEffect} from 'react';
import carTemp from '../Assets/carTemp.png';
import Popup from '../Components/PopupMessage';
import {CarRentDay} from '../Redux/Actions/CarAction';
import {useNavigate, useParams} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NotFoundImage from '../Assets/NotFound.jpg';
import {SmallContainer} from '../Styles/CarList';
import Skeleton from '@mui/material/Skeleton';

export default function CarDetails() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let {id} = useParams();
  let [detail, setDetail] = useState();
  let [loading, setLoading] = useState(true);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState('');
  let [rentDay, setRentDay] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const years = [2022, 2023, 2024, 2025];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let show = () => {
    let height = 150;

    if (window.innerWidth <= 600) {
      height = 180;
    }

    if (window.innerWidth <= 415) {
      height = 240;
    }

    if (window.innerWidth <= 380) {
      height = 280;
    }

    if (document.querySelector('.div').style.opacity === '0') {
      document.querySelector('.div').style.height = `${height}px`;
      document.querySelector('.div').style.opacity = '1';
      document.querySelector('.rotateArrow').style.transform = 'rotate(180deg)';
    } else {
      document.querySelector('.div').style.height = '0';
      document.querySelector('.div').style.opacity = '0';
      document.querySelector('.rotateArrow').style.transform = 'rotate(0deg)';
    }
  };

  useEffect(() => {
    let getData = async () => {
      try {
        setLoading(true);
        let raw = await fetch(
          `https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`
        );

        let data = await raw.json();

        if (raw.status !== 200) {
          throw new Error(data.message ? data.message : data.errors[0].message);
        }

        setDetail(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [id]);

  useEffect(() => {
    let hari = 0;
    let bookDate = new Date(startDate).getDate();
    let backDate = new Date(endDate).getDate();
    let bookMonth = new Date(startDate).getMonth();

    if (startDate && endDate) {
      hari = backDate - bookDate;
      if (hari < 0) {
        if (bookMonth % 2 === 1) {
          hari += 31;
        } else {
          if (bookMonth !== 2) {
            hari += 30;
          } else {
            hari += 28;
          }
        }
      }
      setRentDay(hari + 1);
    } else {
      setRentDay(0);
    }
  }, [startDate, endDate]);

  let toPayment = () => {
    let [, month, date, year] = (startDate + '').split(' ');
    let [, month2, date2, year2] = (endDate + '').split(' ');

    dispatch(
      CarRentDay({
        nama: detail.name,
        kategori: detail.category,
        harga: detail.price * rentDay,
        day: rentDay,
        id: id,
        mulai: [date, month, year].join(' '),
        akhir: [date2, month2, year2].join(' '),
      })
    );

    navigate(`/payment/${id}`);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [loading]);

  if (loading === false) {
    return (
      <Container>
        {error ? <Popup text={error}></Popup> : null}
        <CarInfo>
          <h2>Tentang Paket</h2>
          <Sub>
            <h2>Include</h2>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>udah termasuk pajak</li>
            </ul>
          </Sub>
          <Sub>
            <h2>Exclude</h2>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </Sub>
          <Sub>
            <SubHeader>
              <h2>Refund, Reschedule, Overtime</h2>
              <BsChevronDown
                onClick={show}
                className="rotateArrow"
              ></BsChevronDown>
            </SubHeader>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <Gone className="div gone">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </Gone>
            </ul>
          </Sub>
        </CarInfo>
        <CarImage>
          <img src={detail.image ? detail.image : carTemp} alt={detail.name} />
          <CarType>
            <h4>{detail.name}</h4>
            <div>
              <BsPeople></BsPeople>
              <p>{detail.category}</p>
            </div>
          </CarType>
          <p className="maxday">Tentukan lama sewa mobil (max. 7 hari)</p>
          <DateContainer>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              minDate={startDate ? new Date(startDate) : new Date()}
              maxDate={
                startDate
                  ? new Date(
                      new Date(startDate).setDate(
                        new Date(startDate).getDate() + 6
                      )
                    )
                  : null
              }
              isClearable={true}
              placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
              renderCustomHeader={({
                date,
                changeMonth,
                changeYear,
                decreaseMonth,
                increaseMonth,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {date.getMonth() < new Date().getMonth() &&
                  date.getFullYear() <= new Date().getFullYear() ? null : (
                    <button
                      onClick={decreaseMonth}
                      className={
                        'react-datepicker__navigation react-datepicker__navigation--previous'
                      }
                    >
                      <span
                        className={
                          'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
                        }
                      >
                        {'<'}
                      </span>
                    </button>
                  )}
                  <select
                    value={months[date.getMonth()]}
                    onChange={({target: {value}}) =>
                      changeMonth(months.indexOf(value))
                    }
                  >
                    {months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <select
                    value={date.getFullYear()}
                    onChange={({target: {value}}) => changeYear(value)}
                  >
                    {years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {date.getFullYear() === 2025 &&
                  date.getMonth() >= 11 ? null : (
                    <button
                      onClick={increaseMonth}
                      className={
                        'react-datepicker__navigation react-datepicker__navigation--next'
                      }
                    >
                      <span
                        className={
                          'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
                        }
                      >
                        {'>'}
                      </span>
                    </button>
                  )}
                </div>
              )}
            />
          </DateContainer>
          <CarPrice>
            <h3>Total</h3>
            <h3>Rp. {rentDay ? detail.price * rentDay : detail.price},-</h3>
          </CarPrice>
          {rentDay ? (
            <Button onClick={toPayment}>Lanjutkan Pembayaran</Button>
          ) : (
            <Button disabled>Lanjutkan Pembayaran</Button>
          )}
        </CarImage>
      </Container>
    );
  } else {
    if (isLoading === true) {
      return (
        <Container>
          <CarInfo>
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={20}
              width={150}
            />
            {Array.from({length: 3}).map((item) => (
              <Sub>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={20}
                  width={100}
                />
                <ul>
                  {Array.from({length: 4}).map((item) => (
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      height={20}
                      width={500}
                      style={{marginTop: '10px'}}
                    />
                  ))}
                </ul>
              </Sub>
            ))}
          </CarInfo>
          <CarImage>
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={200}
              className="detailImage"
            />
            <CarType>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={30}
                width={120}
              />
              <div>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={20}
                  width={20}
                />
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={20}
                  width={170}
                />
              </div>
            </CarType>
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={20}
              width={300}
              style={{marginTop: '10px'}}
            />
            <DateContainer>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={50}
                className="skeleton"
              />
            </DateContainer>
            <CarPrice>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={20}
                width={120}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={20}
                width={120}
              />
            </CarPrice>
            <Skeleton
              animation="wave"
              variant="rectangular"
              height={40}
              className="skeletonButton"
            />
          </CarImage>
        </Container>
      );
    } else {
      return (
        <SmallContainer className="loadContainer carList">
          <img src={NotFoundImage} alt="Not Found" />
          <h1 className="errorh1">Waduh mobil yang anda cari nga ada!!</h1>
          <p className="errorp">
            Pastikan jaringan internet anda berjalan dengan baik...
          </p>
        </SmallContainer>
      );
    }
  }
}
