import React, {useState, useEffect} from 'react'
import {BigContainer, Pwd, Container, Buttons, Button} from '../Styles/AdminCarList'
import {Form, FormItem, InputContainer} from '../Styles/AdminAddCar'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {carManipulation} from '../Redux/Actions/CarAction'
import Popup from '../Components/PopupMessage'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export default function AddCar(props) {
  let bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
  let date = new Date();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let EditItem = useSelector(state => state.items.AdminEdit);
  let [nama, setNama] = useState("");
  let [harga, setHarga] = useState("");
  let [kategori, setKategori] = useState("");
  let [foto, setFoto] = useState();
  let [error, setError] = useState("");
  let [place, setPlace] = useState("");

  useEffect(() => {
    if(props.title === "Edit Car"){
      setNama(EditItem.name);
      setHarga(EditItem.price);
      setKategori(EditItem.category);
    }
  }, [])
  

  let cancel = () => {
    navigate("/admin/list");
  }

  const toast = (innerHTML) => {
    setPlace(innerHTML);
  }

  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus = ({ meta, remove }, status) => {
    setFoto(meta.previewUrl);
    if (status === 'headers_received') {
      toast(`${meta.name} uploaded!`)
      remove()
    } else if (status === 'aborted') {
      toast(`${meta.name}, upload failed...`)
    }
  }

  let submit = async (e) => {
    e.preventDefault();
    try {
      let rawData;
      if(props.title === "Edit Car"){
        rawData = await window.fetch(`https://bootcamp-rent-car.herokuapp.com/admin/car/${EditItem.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body : JSON.stringify({
            "name": nama,
            "category": kategori,
            "price": harga,
            "status": false,
            "image": foto,
          })
        })

        if(rawData.status !== 200){
          throw new Error(rawData.statusText);
        }
      }
      else{
        rawData = await window.fetch("https://bootcamp-rent-car.herokuapp.com/admin/car", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body : JSON.stringify({
            "name": nama,
            "category": kategori,
            "price": harga,
            "status": false,
            "image": foto,
          })
        })

        if(rawData.status !== 201){
          throw new Error(rawData.statusText);
        }
      }

      await rawData.json();
      navigate("/admin/list");
      dispatch(carManipulation(true))
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <BigContainer>
      {error ? <Popup text={error}></Popup> : null}
      <Pwd>Cars {`>`} List Car {`>`} <span>Add New Car</span></Pwd>
      <Container>
          <h2>{props.title}</h2>
      </Container>
      <Form onSubmit={submit}>
        <FormItem>
          <label for="nama">Nama/Tipe Mobil*</label>
          <input type="text" id="nama" placeholder='Input Nama/Tipe Mobil' onChange={(e)=>setNama(e.target.value)} defaultValue={props.title === "Edit Car" ? EditItem.name : ""} required></input>
        </FormItem>
        <FormItem>
          <label for="harga">Harga*</label>
          <input type="text" id="harga" placeholder='Input Harga Sewa Mobil' onChange={(e) => setHarga(e.target.value)} defaultValue={props.title === "Edit Car" ? EditItem.price : ""} required></input>
        </FormItem>
        <FormItem>
          <label for="foto">Foto*</label>
          <InputContainer>
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleChangeStatus}
              maxFiles={1}
              multiple={false}
              canCancel={false}
              inputContent={place ? place : "Pilih Foto Mobil"}
              // maxSize={202}
            />
            <p>File size max. 2MB</p>
          </InputContainer>
        </FormItem>
        <FormItem>
          <label for="nama">Kategori*</label>
          <select id="nama" onChange={(e) => setKategori(e.target.value)} required>
            <option value="Pilih Kategori Mobil">Pilih Kategori Mobil</option>
            <option value="Small">Small</option>
            {props.title === "Edit Car" 
              ? 
                (EditItem.category === "2 - 4 orang" ? <option value="2 - 4 orang" selected>2 - 4 Orang</option> : <option value="2 - 4 orang">2 - 4 orang</option>) 
              : 
              <option value="2 - 4 orang">2 - 4 Orang</option>
            }
            {props.title === "Edit Car" 
              ? 
                (EditItem.category === "4 - 6 orang" ? <option value="4 - 6 orang" selected>4 - 6 orang</option> : <option value="4 - 6 orang">4 - 6 orang</option>) 
              : 
                <option value="4 - 6 orang">4 - 6 orang</option>
              }
            {props.title === "Edit Car" 
              ? 
                (EditItem.category === "6 - 8 orang" ? <option value="6 - 8 orang" selected>6 - 8 orang</option> : <option value="6 - 8 orang">6 - 8 orang</option>) 
              : 
              <option value="6 - 8 orang">6 - 8 orang</option>
            }
          </select>
        </FormItem>
        <FormItem>
          <label>Created at</label>
          <p className='upload'>{date.getDay()} {bulan[date.getMonth()]} {date.getFullYear()}, {date.getHours()}:{date.getMinutes()}</p>
        </FormItem>
        <FormItem>
          <label>Updated at</label>
          <p className='upload'>{date.getDay()} {bulan[date.getMonth()]} {date.getFullYear()}, {date.getHours()}:{date.getMinutes()}</p>
        </FormItem>
        <Buttons className='buttons'>
          <Button onClick={cancel}>Cancel</Button>
          <Button onClick={submit}>Save</Button>
        </Buttons>
      </Form>
    </BigContainer>
  )
}
