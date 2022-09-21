import React, {useEffect, useCallback} from 'react';
import {
  Container,
  CarItem,
  Buttons,
  Icon,
  SmallContainer,
} from '../Styles/CarList';
import Button from './Button';
import {useNavigate, useSearchParams} from 'react-router-dom';
import carTemp from '../Assets/carTemp.png';
import {useSelector} from 'react-redux';
import '../Styles/cssStyle.css';
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi';
import DotLoader from 'react-spinners/DotLoader';
import NotFoundImage from '../Assets/NotFound.jpg';
import useState from 'react-usestateref';

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

  let getData = useCallback(() => {
    setLoading(true);
    if (searchRef.current[0] !== undefined && props.empty === undefined) {
      let filterData = carData.filter(
        (item) =>
          item.category === searchRef.current[1] &&
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

    let cut = [];
    for (let i = 0; i < data.length; i += 9) {
      cut.push(data.slice(i, i + 9));
    }
    setCutData(cut);

    if (cutDataRef.current) {
      setLoading(false);
    }

    console.error = () => {};
  }, [carData, cutDataRef, props.empty, setCutData, data, setData, searchRef]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
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
          <Buttons>
            {posisiRef.current === 0 ? null : (
              <Icon onClick={() => setPosisi(posisiRef.current - 1)}>
                <BiChevronLeft></BiChevronLeft>
              </Icon>
            )}
            {posisiRef.current === cutDataRef.current.length - 1 ? null : (
              <Icon onClick={() => setPosisi(posisiRef.current + 1)}>
                <BiChevronRight></BiChevronRight>
              </Icon>
            )}
          </Buttons>
        ) : null}
      </>
    );
  } else {
    if (isLoading === true) {
      return (
        <Container className="loadContainer carList" show>
          <DotLoader color={'#D0d0d0'} loading={isLoading} size={100} />
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
