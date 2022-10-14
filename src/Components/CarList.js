import React, {useEffect, useCallback} from 'react';
import {Container, CarItem, SmallContainer} from '../Styles/CarList';
import Button from './Button';
import {useNavigate, useSearchParams} from 'react-router-dom';
import carTemp from '../Assets/carTemp.png';
import {useSelector} from 'react-redux';
import NotFoundImage from '../Assets/NotFound.jpg';
import useState from 'react-usestateref';
import {PageItem} from '../Styles/Dashboard';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import Skeleton from '@mui/material/Skeleton';

function CarList(props) {
  const [data, setData] = useState([]);
  const [, setSearch, searchRef] = useState([]);
  let navigate = useNavigate();
  let [value] = useSearchParams();
  let carData = useSelector((state) => state.items.CarList);
  let [loading, setLoading] = useState(true);
  let [, setCutData, cutDataRef] = useState();
  let [, setPosisi, posisiRef] = useState(0);
  let [isLoading, setIsLoading] = useState(true);

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

  let filterData = useCallback(() => {
    if (searchRef.current[0] !== undefined && props.empty === undefined) {
      let filterData = carData.filter(
        (item) =>
          (item.category === searchRef.current[1] ||
            item.category ===
              searchRef.current[1].replace('orang', 'people')) &&
          item.name.toLowerCase() === searchRef.current[0].toLowerCase()
      );

      if (searchRef.current[2] === '< Rp. 400.000') {
        filterData = filterData.filter((item) => item.price < 400000);
      } else if (searchRef.current[2] === 'Rp. 400.000 - Rp. 600.000') {
        filterData = filterData.filter(
          (item) => item.price >= 400000 && item.price <= 600000
        );
      } else {
        filterData = filterData.filter((item) => item.price > 600000);
      }

      setData(filterData);
    } else {
      setData(carData);
    }
  }, [carData, props.empty, searchRef, setData]);

  let cut = useCallback(() => {
    let cut = [];
    for (let i = 0; i < data.length; i += 9) {
      cut.push(data.slice(i, i + 9));
    }
    setCutData(cut);

    if (cutDataRef.current) {
      setLoading(false);
    }
  }, [cutDataRef, data, setCutData]);

  useEffect(() => {
    setLoading(true);
    filterData();
    cut();
    console.error = () => {};
  }, [filterData, cut]);

  useEffect(() => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return clearTimeout(timeout);
  }, [loading]);

  if (loading === false && cutDataRef.current.length !== 0) {
    return (
      <>
        <Container className="carList" show>
          {cutDataRef.current[posisiRef.current]?.map((item) => (
            <CarItem key={item.id}>
              <img src={item.image ? item.image : carTemp} alt="" />
              <h5>{item.name}</h5>
              <h3>Rp {item.price},-</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </p>
              <Button
                size="big"
                action={() => directDetails(item.id)}
                idCar={item.id}
              >
                Pilih Mobil
              </Button>
            </CarItem>
          ))}
        </Container>
        {cutDataRef.current[posisiRef.current] ? (
          <PageItem>
            <div
              onClick={() => {
                if (posisiRef.current > 0) {
                  setPosisi(posisiRef.current - 1);
                } else {
                  setPosisi(cutDataRef.current.length - 1);
                }
              }}
            >
              <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
            </div>
            {[...Array(5).fill(10)].map((item, idx) => {
              let awal = 0;
              awal = posisiRef.current - (posisiRef.current % 5);
              if (idx + awal <= cutDataRef.current.length - 1) {
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
                if (posisiRef.current < cutDataRef.current.length - 1) {
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
                width={272}
                height={150}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={272}
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={272}
                height={20}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={272}
                height={80}
              />
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={272}
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
