import React from 'react';
import {
  Container,
  Label,
  FormItem,
  Input,
  Sewa,
  Inputs,
  BigContainer,
  Title,
  Labels,
  Sewas,
  OptionContainer,
  SelectContainer,
  SelectsContainer,
  OptionItem,
} from '../Styles/SearchBar';
import Button from './Button';
import {FiCheckCircle} from 'react-icons/fi';
import {BsChevronDown} from 'react-icons/bs';
import {useNavigate, createSearchParams} from 'react-router-dom';
import useState from 'react-usestateref';

export default function SearchBar(props) {
  let [, setData, dataRef] = useState({});
  const navigate = useNavigate();
  let [selectOpen, setSelectOpen] = useState({
    category: {isOpen: false, select: 'Masukan Kapasitas Mobil'},
    price: {isOpen: false, select: 'Masukan Harga Sewa per Hari'},
    sewa: {isOpen: false},
  });

  const toResult = (e) => {
    e.preventDefault();
    navigate({
      pathname: '/result',
      search: createSearchParams({
        name: dataRef.current.name,
        category: dataRef.current.category,
        price: dataRef.current.price,
      }).toString(),
    });
  };

  let gantiKategori = (item) => {
    setData({
      ...dataRef.current,
      category: item,
    });
    setSelectOpen({
      ...selectOpen,
      category: {isOpen: false, select: item},
    });
  };

  let gantiHarga = (item) => {
    setData({
      ...dataRef.current,
      price: item,
    });
    setSelectOpen({
      ...selectOpen,
      price: {isOpen: false, select: item},
    });
  };

  let selectToggle = (item = 'empty') => {
    setSelectOpen({
      category: {
        ...selectOpen.category,
        isOpen: item === 'category' ? !selectOpen.category.isOpen : false,
      },
      price: {
        ...selectOpen.price,
        isOpen: item === 'price' ? !selectOpen.price.isOpen : false,
      },
      sewa: {
        ...selectOpen.sewa,
        isOpen: item === 'sewa' ? !selectOpen.sewa.isOpen : false,
      },
    });
  };

  if (props.search) {
    return (
      <BigContainer className="searchBar">
        <Container onSubmit={(e) => toResult(e, true)}>
          <FormItem>
            <Label htmlFor="nama">Nama Mobil</Label>
            <Input
              id="nama"
              type="text"
              placeholder="Ketik nama/tipe mobil"
              required
              onChange={(e) =>
                setData({
                  ...dataRef.current,
                  name: e.target.value,
                })
              }
              onClick={selectToggle}
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="kategori" onClick={() => selectToggle('category')}>
              Kategori
            </Label>
            <SelectContainer onClick={() => selectToggle('category')}>
              {selectOpen.category.select}
            </SelectContainer>
            {selectOpen.category.isOpen ? (
              <OptionContainer>
                <OptionItem
                  onClick={() => gantiKategori('Small')}
                  className={`${
                    selectOpen.category.select === 'Small' ? 'active' : null
                  }`}
                >
                  Small
                </OptionItem>
                <OptionItem
                  onClick={() => gantiKategori('Medium')}
                  className={`${
                    selectOpen.category.select === 'Medium' ? 'active' : null
                  }`}
                >
                  Medium
                </OptionItem>
                <OptionItem
                  onClick={() => gantiKategori('Large')}
                  className={`${
                    selectOpen.category.select === 'Large' ? 'active' : null
                  }`}
                >
                  Large
                </OptionItem>
              </OptionContainer>
            ) : null}
          </FormItem>
          <FormItem>
            <Label htmlFor="harga" onClick={() => selectToggle('price')}>
              Harga
            </Label>
            <SelectContainer onClick={() => selectToggle('price')}>
              {selectOpen.price.select}
            </SelectContainer>
            {selectOpen.price.isOpen ? (
              <OptionContainer>
                <OptionItem
                  onClick={() => gantiHarga('< Rp. 400.000')}
                  className={`${
                    selectOpen.price.select === '< Rp. 400.000'
                      ? 'active'
                      : null
                  }`}
                >
                  {'< Rp. 400.000'}
                </OptionItem>
                <OptionItem
                  onClick={() => gantiHarga('Rp. 400.000 - Rp. 600.000')}
                  className={`${
                    selectOpen.price.select === 'Rp. 400.000 - Rp. 600.000'
                      ? 'active'
                      : null
                  }`}
                >
                  {'Rp. 400.000 - Rp. 600.000'}
                </OptionItem>
                <OptionItem
                  onClick={() => gantiHarga('> Rp. 600.000')}
                  className={`${
                    selectOpen.price.select === '> Rp. 600.000'
                      ? 'active'
                      : null
                  }`}
                >
                  {'> Rp. 600.000'}
                </OptionItem>
              </OptionContainer>
            ) : null}
          </FormItem>
          <FormItem>
            <Label htmlFor="status" onClick={() => selectToggle('sewa')}>
              Status
            </Label>
            <SelectContainer onClick={() => selectToggle('sewa')}>
              Sewa
            </SelectContainer>
            {selectOpen.sewa.isOpen ? (
              <OptionContainer>
                <OptionItem
                  onClick={() =>
                    setSelectOpen({
                      ...selectOpen,
                      sewa: {
                        ...selectOpen.sewa,
                        isOpen: !selectOpen.sewa.isOpen,
                      },
                    })
                  }
                  className="active"
                >
                  sewa
                </OptionItem>
              </OptionContainer>
            ) : null}
          </FormItem>
          <Button submit>Cari Mobil</Button>
        </Container>
      </BigContainer>
    );
  } else if (props.edits) {
    return (
      <BigContainer className="searchBar">
        <Title>Pencarianmu</Title>
        <Container onSubmit={toResult}>
          <FormItem>
            <Label htmlFor="nama">Nama Mobil</Label>
            <Inputs
              id="nama"
              type="text"
              placeholder="Ketik nama/tipe mobil"
              required
              onChange={(e) =>
                setData({
                  ...dataRef.current,
                  name: e.target.value,
                })
              }
              onClick={selectToggle}
            />
          </FormItem>
          <FormItem>
            <Label
              htmlFor="kategori"
              onClick={() =>
                setSelectOpen({
                  ...selectOpen,
                  category: {
                    ...selectOpen.category,
                    isOpen: !selectOpen.category.isOpen,
                  },
                })
              }
            >
              Kategori
            </Label>
            <SelectsContainer
              onClick={() =>
                setSelectOpen({
                  ...selectOpen,
                  category: {
                    ...selectOpen.category,
                    isOpen: !selectOpen.category.isOpen,
                  },
                })
              }
            >
              {selectOpen.category.select}
            </SelectsContainer>
            {selectOpen.category.isOpen ? (
              <OptionContainer>
                <OptionItem onClick={() => gantiKategori('Small')}>
                  Small
                </OptionItem>
                <OptionItem onClick={() => gantiKategori('Medium')}>
                  Medium
                </OptionItem>
                <OptionItem onClick={() => gantiKategori('Large')}>
                  Large
                </OptionItem>
              </OptionContainer>
            ) : null}
          </FormItem>
          <FormItem>
            <Label
              htmlFor="harga"
              onClick={() =>
                setSelectOpen({
                  ...selectOpen,
                  price: {
                    ...selectOpen.price,
                    isOpen: !selectOpen.price.isOpen,
                  },
                })
              }
            >
              Harga
            </Label>
            <SelectsContainer
              onClick={() =>
                setSelectOpen({
                  ...selectOpen,
                  price: {
                    ...selectOpen.price,
                    isOpen: !selectOpen.price.isOpen,
                  },
                })
              }
            >
              {selectOpen.price.select}
            </SelectsContainer>
            {selectOpen.price.isOpen ? (
              <OptionContainer>
                <OptionItem onClick={() => gantiHarga('< Rp. 400.000')}>
                  {'< Rp. 400.000'}
                </OptionItem>
                <OptionItem
                  onClick={() => gantiHarga('Rp. 400.000 - Rp. 600.000')}
                >
                  {'Rp. 400.000 - Rp. 600.000'}
                </OptionItem>
                <OptionItem onClick={() => gantiHarga('> Rp. 600.000')}>
                  {'> Rp. 600.000'}
                </OptionItem>
              </OptionContainer>
            ) : null}
          </FormItem>
          <FormItem>
            <Label htmlFor="status">Status</Label>
            <Sewa>
              <p>Disewa</p>
              <FiCheckCircle className="icon"></FiCheckCircle>
            </Sewa>
          </FormItem>
          <Button second submit>
            Edit
          </Button>
        </Container>
      </BigContainer>
    );
  } else {
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
              <BsChevronDown className="icon"></BsChevronDown>
            </Sewas>
          </FormItem>
          <FormItem>
            <Labels htmlFor="status">Harga Sewa per Hari</Labels>
            <Sewas>
              <p></p>
              <BsChevronDown className="icon"></BsChevronDown>
            </Sewas>
          </FormItem>
          <FormItem>
            <Labels htmlFor="status">Status</Labels>
            <Sewas>
              <p></p>
              <BsChevronDown className="icon"></BsChevronDown>
            </Sewas>
          </FormItem>
        </Container>
      </BigContainer>
    );
  }
}
