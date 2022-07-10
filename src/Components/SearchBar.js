import React from 'react'
import {Container, Label, FormItem, Option, Input, Sewa, Select, Selects, Inputs, BigContainer, Title, Labels, Sewas} from '../Styles/SearchBar'
import Button from '../Components/Button'
import {FiCheckCircle} from 'react-icons/fi'
import {BsChevronDown} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {searchCar} from '../Redux/Actions/CarAction'

export default function SearchBar(props) {
    const navigate = useNavigate();
    const dispactch = useDispatch();

    const toResult = (e) => {
        // e.preventDefault();
        dispactch(searchCar([document.querySelector("#nama").value,document.querySelector("#kategori").value, document.querySelector("#harga").value]));
        navigate("/result");
    }

    if(props.search){
        return (
            <BigContainer className="searchBar">
                <Container onSubmit={toResult}>
                    <FormItem>
                        <Label for="nama">Nama Mobil</Label>
                        <Input id="nama" type="text" placeholder='Ketik nama/tipe mobil' required/>
                    </FormItem>
                    <FormItem>
                        <Label for="kategori">Kategori</Label>
                        <Select id="kategori">
                            <Option  Value="2 - 4 orang">Masukan Kapasitas Mobil</Option>
                            <Option Value="2 - 4 orang">2 - 4 orang</Option>
                            <Option Value="4 - 6 orang">4 - 6 orang</Option>
                            <Option Value="6 - 8 orang">6 - 8 orang</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Label for="harga">Harga</Label>
                        <Select id="harga" required="required">
                            <Option selected disabled Value="< Rp. 400.000">Masukan Harga Sewa Per Hari</Option>
                            <Option Value="< Rp. 400.000">{'< Rp. 400.000'}</Option>
                            <Option Value="Rp. 400.000 - Rp. 600.000">{'Rp. 400.000 - Rp. 600.000'}</Option>
                            <Option Value="> Rp. 600.000">{'> Rp. 600.000'}</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Label for="status">Status</Label>
                        <Select id="status" required>
                            <Option Value="">Disewa</Option>
                        </Select>
                    </FormItem>
                    <Button>Cari Mobil</Button>
                </Container>
            </BigContainer>
        )
    }
    else if(props.edits){
        return (
            <BigContainer className="searchBar">
                <Title>Pencarianmu</Title>
                <Container onSubmit={toResult}>
                    <FormItem>
                        <Label for="nama">Nama Mobil</Label>
                        <Inputs id="nama" type="text" placeholder='Ketik nama/tipe mobil' required/>
                    </FormItem>
                    <FormItem>
                        <Label for="kategori">Kategori</Label>
                        <Selects id="kategori" required>
                            <Option Value="Masukan Kapasitas Mobil">Masukan Kapasitas Mobil</Option>
                            <Option Value="2 - 4 orang">2 - 4 orang</Option>
                            <Option Value="4 - 6 orang">4 - 6 orang</Option>
                            <Option Value="6 - 8 orang">6 - 8 orang</Option>
                        </Selects>
                    </FormItem>
                    <FormItem>
                        <Label for="harga">Harga</Label>
                        <Selects id="harga" required>
                            <Option Value="Masukan Harga Sewa Per Hari">Masukan Harga Sewa Per Hari</Option>
                            <Option Value="< Rp. 400.000">{'< Rp. 400.000'}</Option>
                            <Option Value="Rp. 400.000 - Rp. 600.000">{'Rp. 400.000 - Rp. 600.000'}</Option>
                            <Option Value="> Rp. 600.000">{'> Rp. 600.000'}</Option>
                        </Selects>
                    </FormItem>
                    <FormItem>
                        <Label for="status">Status</Label>
                        <Sewa>
                            <p>Disewa</p>
                            <FiCheckCircle className='icon'></FiCheckCircle>
                        </Sewa>
                    </FormItem>
                    <Button second>Edit</Button>
                </Container>
            </BigContainer>
        )
    }
    else{
        return (
            <BigContainer className="searchBar">
                <Title>Pencarianmu</Title>
                <Container>
                    <FormItem>
                        <Labels for="status">Nama Mobil</Labels>
                        <Sewas></Sewas>
                    </FormItem>
                    <FormItem>
                        <Labels for="status">Kategori</Labels>
                        <Sewas>
                            <p></p>
                            <BsChevronDown className='icon'></BsChevronDown>
                        </Sewas>
                    </FormItem>
                    <FormItem>
                        <Labels for="status">Harga Sewa per Hari</Labels>
                        <Sewas>
                            <p></p>
                            <BsChevronDown className='icon'></BsChevronDown>
                        </Sewas>
                    </FormItem>
                    <FormItem>
                        <Labels for="status">Status</Labels>
                        <Sewas>
                            <p></p>
                            <BsChevronDown className='icon'></BsChevronDown>
                        </Sewas>
                    </FormItem>
                </Container>
            </BigContainer>
        )
    }
}
