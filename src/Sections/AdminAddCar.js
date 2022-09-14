import React, { useEffect} from 'react'
import {BigContainer, Pwd, Container, Buttons, Button} from '../Styles/AdminCarList'
import {Form, FormItem, InputContainer} from '../Styles/AdminAddCar'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {carManipulation} from '../Redux/Actions/CarAction'
import Popup from '../Components/PopupMessage'
import 'react-dropzone-uploader/dist/styles.css'
import useState from 'react-usestateref'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddCar(props) {
  let bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
  let date = new Date();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [, setEditItem, EditItemRef] = useState("");
  let [, setData, dataRef] = useState({})
  let [error, setError] = useState("");
  let {id} = useParams();

  useEffect(() => {
    let getData = async () => {
        try {
            let rawData = await window.fetch(`https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`);
            let data = await rawData.json();

            if(rawData.status !== 200){
                throw new Error(data.message ? data.message : data.errors[0].message)
            }
            setEditItem(data);
        } catch (error) {}
    }

    if(props.title === "Edit Car"){
      getData();
    }
  }, [id, setEditItem, props.title])

  useEffect(() => {
    if(props.title === "Edit Car"){
      setData({
        name: EditItemRef.current.name,
        price: EditItemRef.current.price,
        category: EditItemRef.current.category
      })
    }
  }, [props.title, setData, EditItemRef])
  

  let cancel = () => {
    navigate("/admin/list");
  }

  let submit = async (e) => {
    e.preventDefault();
    try {
      if(props.title === "Edit Car"){
          axios({
            method: "PUT",
            url: `https://bootcamp-rent-car.herokuapp.com/admin/car/${EditItemRef.current.id}`,
            timeout: 12000,
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            data: {
              "name": dataRef.current.name,
              "image":  dataRef.current.foto,
              "category":  dataRef.current.category,
              "price":  dataRef.current.price,
              "status": false,
            }
          }).then(res => {
            if(res.status !== 200){
              throw new Error("Edit Data Error");
            }
          })
      }
      else{
        if(dataRef.current.foto){
          axios({
            method: "POST",
            url: "https://bootcamp-rent-car.herokuapp.com/admin/car",
            timeout: 12000,
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            data: {
              "name": dataRef.current.name,
              "image":  dataRef.current.foto,
              "category":  dataRef.current.category,
              "price":  dataRef.current.price,
              "status": false,
            }
          }).then(res => {
            if(res.status !== 201){
              throw new Error("Add Data Error");
            }
          })
        }
      }

      navigate("/admin/list");
      dispatch(carManipulation(true))
    } catch (error) {
      setError(error.message);

      setTimeout(() => {
        setError("");
      }, 2000)
    }
  }

  if((EditItemRef.current !== "" && props.title === "Edit Car") || props.title !== "Edit Car"){
    return (
      <BigContainer>
        {error ? <Popup text={error}></Popup> : null}
        <Pwd><Link to="/admin">Cars</Link> {`>`} <Link to="/admin/list">List Car</Link> {`>`} {props.title === "Edit Car" ? <span>Edit Car</span> : <span>Add New Car</span>}</Pwd>
        <Container>
            <h2>{props.title}</h2>
        </Container>
        <Form onSubmit={submit}>
          <FormItem>
            <label htmlFor="nama">Nama/Tipe Mobil*</label>
            <input type="text" id="nama" placeholder='Input Nama/Tipe Mobil' onChange={(e)=>setData({
              ...dataRef.current,
              name: e.target.value,
              cek: e.target.value === "" ? false : true
            })} defaultValue={props.title === "Edit Car" ? EditItemRef.current.name : ""} required></input>
          </FormItem>
          <FormItem>
            <label htmlFor="harga">Harga*</label>
            <input type="text" id="harga" placeholder='Input Harga Sewa Mobil' onChange={(e) => setData({
              ...dataRef.current,
              price: e.target.value,
              cek: e.target.value === "" ? false : true
            })} defaultValue={props.title === "Edit Car" ? EditItemRef.current.price : ""} required></input>
          </FormItem>
          <FormItem>
            <label htmlFor="foto">Foto*</label>
            <InputContainer>
              <input className='foto' type="file" onChange={(e) => setData({
              ...dataRef.current,
              foto: e.target.files[0],
              cek: e.target.files[0] === undefined ? false : true
            })} id="foto"/>
              {dataRef.current.foto ? <label htmlFor="foto">{dataRef.current.foto.name}</label> : <label htmlFor="foto" className=''>Upload Foto Mobil</label>}
              <p>File size max. 2MB</p>
            </InputContainer>
          </FormItem>
          <FormItem>
            <label htmlFor="nama">Kategori*</label>
            <select id="nama" onChange={(e) => setData({
              ...dataRef.current,
              category: e.target.value,
              cek: e.target.value === "Pilih Kategori Mobil" ? false : true
            })} required defaultValue={props.title === "Edit Car" ? EditItemRef.current.category : "Pilih Kategori Mobil"}>
              <option value="Pilih Kategori Mobil">Pilih Kategori Mobil</option>
              <option value="Small">Small</option>
              <option value="2 - 4 orang">2 - 4 Orang</option>
              <option value="4 - 6 orang">4 - 6 orang</option>
              <option value="6 - 8 orang">6 - 8 orang</option>
            </select>
          </FormItem>
          <FormItem>
            <label>Created at</label>
            <p className='upload'>{date.getDate()} {bulan[date.getMonth()]} {date.getFullYear()}, {date.getHours()}:{date.getMinutes()}</p>
          </FormItem>
          <FormItem>
            <label>Updated at</label>
            <p className='upload'>{date.getDate()} {bulan[date.getMonth()]} {date.getFullYear()}, {date.getHours()}:{date.getMinutes()}</p>
          </FormItem>
          <Buttons className='buttons'>
            <Button onClick={cancel}>Cancel</Button>
            {Object.keys(dataRef.current).length === 5 && dataRef.current.cek ? <Button onClick={submit}>Save</Button> : <Button onClick={submit} disabled>Save</Button>}
          </Buttons>
        </Form>
      </BigContainer>
    )
  }
}
