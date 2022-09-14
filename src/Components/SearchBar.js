import React from 'react'
import {Container, Label, FormItem, Option, Input, Sewa, Select, Selects, Inputs, BigContainer, Title, Labels, Sewas} from '../Styles/SearchBar'
import Button from './Button'
import {FiCheckCircle} from 'react-icons/fi'
import {BsChevronDown} from 'react-icons/bs'
import {useNavigate, createSearchParams} from 'react-router-dom';
import useState from 'react-usestateref'

export default function SearchBar(props) {
    let [, setData, dataRef] = useState({});
    const navigate = useNavigate();

    const toResult = (e) => {
        e.preventDefault();
        navigate({
            pathname: "/result",
            search: createSearchParams({
                name: dataRef.current.name,
                category: dataRef.current.category,
                price: dataRef.current.price,
            }).toString()
        });
    }

    if(props.search){
        return (
            <BigContainer className="searchBar">
                <Container onSubmit={(e) => toResult(e, true)}>
                    <FormItem>
                        <Label htmlFor="nama">Nama Mobil</Label>
                        <Input id="nama" type="text" placeholder='Ketik nama/tipe mobil' required onChange={(e) => setData({
                            ...dataRef.current,
                            name: e.target.value,
                        })}/>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="kategori">Kategori</Label>
                        <Select required id="kategori" onChange={(e) => setData({
                            ...dataRef.current,
                            category: e.target.value,
                        })}>
                            <Option defaultValue="2 - 4 orang">Masukan Kapasitas Mobil</Option>
                            <Option defaultValue="2 - 4 orang">2 - 4 orang</Option>
                            <Option defaultValue="4 - 6 orang">4 - 6 orang</Option>
                            <Option defaultValue="6 - 8 orang">6 - 8 orang</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="harga">Harga</Label>
                        <Select id="harga" required onChange={(e) => setData({
                            ...dataRef.current,
                            price: e.target.value,
                        })}>
                            <Option disabled defaultValue="< Rp. 400.000">Masukan Harga Sewa Per Hari</Option>
                            <Option defaultValue="< Rp. 400.000">{'< Rp. 400.000'}</Option>
                            <Option defaultValue="Rp. 400.000 - Rp. 600.000">{'Rp. 400.000 - Rp. 600.000'}</Option>
                            <Option defaultValue="> Rp. 600.000">{'> Rp. 600.000'}</Option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="status">Status</Label>
                        <Select id="status" required>
                            <Option defaultValue="">Disewa</Option>
                        </Select>
                    </FormItem>
                    <Button submit>Cari Mobil</Button>
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
                        <Label htmlFor="nama">Nama Mobil</Label>
                        <Inputs id="nama" type="text" placeholder='Ketik nama/tipe mobil' required onChange={(e) => setData({
                            ...dataRef.current,
                            name: e.target.value,
                        })}/>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="kategori">Kategori</Label>
                        <Selects id="kategori" required onChange={(e) => setData({
                            ...dataRef.current,
                            category: e.target.value,
                        })}>
                            <Option defaultValue="Masukan Kapasitas Mobil">Masukan Kapasitas Mobil</Option>
                            <Option defaultValue="2 - 4 orang">2 - 4 orang</Option>
                            <Option defaultValue="4 - 6 orang">4 - 6 orang</Option>
                            <Option defaultValue="6 - 8 orang">6 - 8 orang</Option>
                        </Selects>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="harga">Harga</Label>
                        <Selects id="harga" required onChange={(e) => setData({
                            ...dataRef.current,
                            price: e.target.value,
                        })}>
                            <Option defaultValue="Masukan Harga Sewa Per Hari">Masukan Harga Sewa Per Hari</Option>
                            <Option defaultValue="< Rp. 400.000">{'< Rp. 400.000'}</Option>
                            <Option defaultValue="Rp. 400.000 - Rp. 600.000">{'Rp. 400.000 - Rp. 600.000'}</Option>
                            <Option defaultValue="> Rp. 600.000">{'> Rp. 600.000'}</Option>
                        </Selects>
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="status">Status</Label>
                        <Sewa>
                            <p>Disewa</p>
                            <FiCheckCircle className='icon'></FiCheckCircle>
                        </Sewa>
                    </FormItem>
                    <Button second submit>Edit</Button>
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
                        <Labels htmlFor="status">Nama Mobil</Labels>
                        <Sewas></Sewas>
                    </FormItem>
                    <FormItem>
                        <Labels htmlFor="status">Kategori</Labels>
                        <Sewas>
                            <p></p>
                            <BsChevronDown className='icon'></BsChevronDown>
                        </Sewas>
                    </FormItem>
                    <FormItem>
                        <Labels htmlFor="status">Harga Sewa per Hari</Labels>
                        <Sewas>
                            <p></p>
                            <BsChevronDown className='icon'></BsChevronDown>
                        </Sewas>
                    </FormItem>
                    <FormItem>
                        <Labels htmlFor="status">Status</Labels>
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
