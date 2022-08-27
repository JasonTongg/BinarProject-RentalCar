import React, {useState, useEffect} from 'react'
import {BigContainer, ListContainer, Pwd, Category, CategoryContainer, InfoContainer, ListItem, Buttons, Button, Container} from '../Styles/AdminCarList'
import carTemp from '../Assets/carTemp.png'
import {BsPeople, BsClock} from 'react-icons/bs'
import {FiTrash, FiEdit} from 'react-icons/fi'
import {BsPlusLg} from 'react-icons/bs'

export default function AdminCarList() {
    let bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    let [active, setActive] = useState(true);
    let [active24, setActive24] = useState(false);
    let [active46, setActive46] = useState(false);
    let [active68, setActive68] = useState(false);
    let [list, setList] = useState([]);

    let clicked = () => {
        setActive(!active)
        setActive24(false);
        setActive46(false);
        setActive68(false);
    }
    let clicked24 = () => {
        setActive(false)
        setActive24(!active24);
        setActive46(false);
        setActive68(false);
    }
    let clicked46 = () => {
        setActive(false)
        setActive24(false);
        setActive46(!active46);
        setActive68(false);
    }
    let clicked68 = () => {
        setActive(false)
        setActive24(false);
        setActive46(false);
        setActive68(!active68);
    }

    let getData = async () => {
        try {
            let rawData = await window.fetch("https://bootcamp-rent-car.herokuapp.com/admin/car");

            if(rawData.status !== 200){
                throw new Error(rawData.statusText);
            }

            let data = await rawData.json();   
            setList(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <BigContainer>
            <Pwd>Cars {`>`} <span>List Car</span></Pwd>
            <Container>
                <h2>List Car</h2>
                <button><BsPlusLg className='icon'></BsPlusLg>Add New Car</button>
            </Container>
            <CategoryContainer>
                <Category className={active ? "active" : null} onClick={clicked}><h3>All</h3></Category>
                <Category className={active24 ? "active" : null} onClick={clicked24}><h3>2 - 4 People</h3></Category>
                <Category className={active46 ? "active" : null} onClick={clicked46}><h3>4 - 6 People</h3></Category>
                <Category className={active68 ? "active" : null} onClick={clicked68}><h3>6 - 8 People</h3></Category>
            </CategoryContainer>
            <ListContainer>
                {list.map(item => {
                    let tanggal = item.updatedAt.split('T')
                    let [year, month, day] = tanggal[0].split("-");
                    let time = tanggal[1].slice(0,5);
                    return (
                        <ListItem>
                            <img src={item.image ? item.image : carTemp} alt="car" />
                            <p>{item.name}</p>
                            <h3>Rp {item.price} / hari</h3>
                            <InfoContainer>
                                <BsPeople className='icon'></BsPeople>
                                <p>{item.category}</p>
                            </InfoContainer>
                            <InfoContainer>
                                <BsClock className='icon'></BsClock>
                                <p>Updated at {day} {bulan[+month]} {year}, {time}</p>
                            </InfoContainer>
                            <Buttons>
                                <Button><FiTrash className='icon'></FiTrash>Delete</Button>
                                <Button><FiEdit className='icon'></FiEdit>Edit</Button>
                            </Buttons>
                        </ListItem>
                    )
                })}
            </ListContainer>
        </BigContainer>
    )
}
