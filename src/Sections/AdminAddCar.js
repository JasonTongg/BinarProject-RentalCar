import React, {useState} from 'react'
import {BigContainer, Pwd, Container, Buttons, Button} from '../Styles/AdminCarList'
import {Form, FormItem, InputContainer} from '../Styles/AdminAddCar'
import {useNavigate} from 'react-router-dom'

export default function AddCar() {
  let bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
  let date = new Date();
  let navigate = useNavigate();
  let [nama, setNama] = useState("");
  let [harga, setHarga] = useState("");
  let [kategori, setKategori] = useState("");

  let cancel = () => {
    navigate("/admin");
  }

  let submit = async (e) => {
    e.preventDefault();
    try {
      let rawData = await window.fetch("https://bootcamp-rent-car.herokuapp.com/admin/car", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body : JSON.stringify({
          "name": nama,
          "category": kategori,
          "price": harga,
          "status": false,
          "image": "tes ini foto"
        })
      })

      if(rawData.status !== 201){
        throw new Error("Data not found");
      }

      await rawData.json();
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BigContainer>
      <Pwd>Cars {`>`} List Car {`>`} <span>Add New Car</span></Pwd>
      <Container>
          <h2>Add New Car</h2>
      </Container>
      <Form onSubmit={submit}>
        <FormItem>
          <label for="nama">Nama/Tipe Mobil*</label>
          <input type="text" id="nama" placeholder='Input Nama/Tipe Mobil' onChange={(e)=>setNama(e.target.value)}></input>
        </FormItem>
        <FormItem>
          <label for="harga">Harga*</label>
          <input type="text" id="harga" placeholder='Input Harga Sewa Mobil' onChange={(e) => setHarga(e.target.value)}></input>
        </FormItem>
        <FormItem>
          <label for="foto">Foto*</label>
          <InputContainer>
            <input type="file" id="foto" placeholder='Upload Foto Mobil' className='upload'></input>
            <p>File size max. 2MB</p>
          </InputContainer>
        </FormItem>
        <FormItem>
          <label for="nama">Kategori*</label>
          <select id="nama" onChange={(e) => setKategori(e.target.value)}>
            <option value="Pilih Kategori Mobil">Pilih Kategori Mobil</option>
            <option value="Small">Small</option>
            <option value="2-4 Orang">2-4 Orang</option>
            <option value="4-6 Orang">4-6 Orang</option>
            <option value="6-8 Orang">6-8 Orang</option>
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
          {/* <Button onClick={cancel}>Cancel</Button> */}
          <Button>Save</Button>
        </Buttons>
      </Form>
    </BigContainer>
  )
}
