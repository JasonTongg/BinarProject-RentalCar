import React, {useEffect} from 'react';
import {AdminContainer, Left, Form, ErrorMessage} from '../Styles/AdminLogin';
import Logo from '../Assets/Logo.png';
import {Link, useNavigate} from 'react-router-dom';
import {InputContainer, Left as Right} from '../Styles/UserLogin';
import Button from '../Components/Button';
import useState from 'react-usestateref';

export default function AdminLogin() {
  let [, setData, dataRef] = useState({});
  let [errorMessage, setErrorMessage] = useState('');
  let navigate = useNavigate();

  let url = 'https://bootcamp-rent-car.herokuapp.com';

  let loginAdmin = async (e) => {
    e.preventDefault();
    try {
      let rawData = await window.fetch(`${url}/admin/auth/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: dataRef.current.email,
          password: dataRef.current.password,
        }),
      });

      let data = await rawData.json();

      if (rawData.status !== 201) {
        throw new Error(data.message ? data.message : data.errors[0].message);
      }

      if (data.role !== 'admin') {
        throw new Error('Sorry!, only admin can access this page...');
      }

      window.localStorage.setItem('Admin Token', data.access_token);
      navigate('/admin');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AdminContainer>
      <Left></Left>
      <Right tetap>
        <Link to="/" className="back">
          &larr; Home
        </Link>
        <Form onSubmit={loginAdmin}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <h2>Welcome, Admin BCR</h2>
          {errorMessage ? (
            <ErrorMessage>
              <p>{errorMessage}</p>
            </ErrorMessage>
          ) : null}
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Contojohndee@gmail.com"
              required
              onChange={(e) =>
                setData({
                  ...dataRef.current,
                  email: e.target.value,
                })
              }
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="6+ karakter"
              required
              onChange={(e) =>
                setData({
                  ...dataRef.current,
                  password: e.target.value,
                })
              }
            />
          </InputContainer>
          <Button size="big" background={(props) => props.theme.primaryColor}>
            Sign In
          </Button>
        </Form>
      </Right>
    </AdminContainer>
  );
}
