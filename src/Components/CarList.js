import React, {useEffect, useCallback} from 'react';
import {Container, CarItem, SmallContainer} from '../Styles/CarList';
import Button from './Button';
import {useNavigate, useSearchParams} from 'react-router-dom';
import carTemp from '../Assets/carTemp.png';
import NotFoundImage from '../Assets/NotFound.jpg';
import useState from 'react-usestateref';
import {PageItem} from '../Styles/Dashboard';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import Skeleton from '@mui/material/Skeleton';

function CarList(props) {
  const [, setData, dataRef] = useState([]);
  const [, setSearch, searchRef] = useState([]);
  let navigate = useNavigate();
  let [value] = useSearchParams();
  let [loading, setLoading] = useState(true);
  let [posisi, setPosisi, posisiRef] = useState(0);
  let [isLoading, setIsLoading] = useState(true);
  let [, setJml, jmlRef] = useState();

  let directDetails = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    if (value) {
      let name = value.get('name');
      let category = value.get('category');
      let price = value.get('price');
      setSearch([name, category, price]);
    }
  }, [value, searchRef, setSearch]);

  let getData = useCallback(async () => {
    try {
      let minPrice,
        maxPrice = 0;
      if (searchRef.current[2] === '< Rp. 400.000') {
        minPrice = 0;
        maxPrice = 399999;
      } else if (searchRef.current[2] === 'Rp. 400.000 - Rp. 600.000') {
        minPrice = 400000;
        maxPrice = 600000;
      } else {
        minPrice = 600001;
        maxPrice = -1;
      }

      let rawData;

      if (searchRef.current[0] !== null) {
        rawData = await window.fetch(
          `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${
            searchRef.current[0]
          }&category=${searchRef.current[1].toLowerCase()}&isRented=false&minPrice=${minPrice}${
            maxPrice > 0 ? `&maxPrice=${maxPrice}` : ''
          }&page=${posisiRef.current + 1}&pageSize=9`
        );
      } else {
        rawData = await window.fetch(
          `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?page=${
            posisiRef.current + 1
          }&pageSize=9`
        );
      }

      let data = await rawData.json();
      setJml(data.pageCount);
      setData(data.cars);

      setLoading(false);
    } catch (error) {}
  }, [searchRef, posisiRef, setData, setJml]);

  useEffect(() => {
    setLoading(true);
    getData();
  }, [getData, value, posisi]);

  useEffect(() => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return clearTimeout(timeout);
  }, [loading, value]);

  if (loading === false && dataRef.current.length !== 0) {
    return (
      <>
        <Container className="carList" show>
          {dataRef.current?.map((item) => {
            return (
              <CarItem key={item.id}>
                <img src={item.image ? item.image : carTemp} alt="" />
                <h5>{item.name || 'Empty Name'}</h5>
                <h3>Rp {item.price || 'Empty Price'},-</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
                </p>
                <Button
                  size="big"
                  action={() => directDetails(item.id)}
                  idCar={item.id}
                >
                  Pilih Mobil
                </Button>
              </CarItem>
            );
          })}
        </Container>
        {dataRef.current ? (
          <PageItem>
            <div
              onClick={() => {
                if (posisiRef.current > 0) {
                  setPosisi(posisiRef.current - 1);
                } else {
                  setPosisi(jmlRef.current - 1);
                }
              }}
            >
              <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
            </div>
            {[...Array(5).fill(10)].map((item, idx) => {
              let awal = 0;
              awal = posisiRef.current - (posisiRef.current % 5);
              if (idx + awal <= jmlRef.current - 1) {
                if (idx + awal === posisiRef.current) {
                  return (
                    <div
                      className="active"
                      onClick={() => setPosisi(idx + awal)}
                      key={idx + awal}
                    >
                      {idx + awal + 1}
                    </div>
                  );
                } else {
                  return (
                    <div onClick={() => setPosisi(idx + awal)} key={idx + awal}>
                      {idx + awal + 1}
                    </div>
                  );
                }
              }
              return null;
            })}
            <div
              onClick={() => {
                if (posisiRef.current < jmlRef.current - 1) {
                  setPosisi(posisiRef.current + 1);
                } else {
                  setPosisi(0);
                }
              }}
            >
              <AiOutlineDoubleRight></AiOutlineDoubleRight>
            </div>
          </PageItem>
        ) : null}
      </>
    );
  } else {
    if (isLoading === true) {
      return (
        <Container className="carList" show>
          {Array.from({length: 3}).map((item, idx) => (
            <CarItem key={idx}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={150}
                style={{width: '100%'}}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                style={{width: '100%'}}
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                style={{width: '100%'}}
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                style={{width: '100%'}}
                height={80}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                style={{width: '100%'}}
                height={20}
              />
            </CarItem>
          ))}
        </Container>
      );
    } else {
      return (
        <SmallContainer className="loadContainer carList">
          <img src={NotFoundImage} alt="Not Found" />
          <h1 className="errorh1">Waduh mobil yang anda cari nga ada!!</h1>
          <p className="errorp">Coba cari tipe atau kategori lain...</p>
        </SmallContainer>
      );
    }
  }
}

export default CarList;
