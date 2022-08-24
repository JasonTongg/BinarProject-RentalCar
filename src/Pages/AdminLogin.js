import React, {useState} from 'react'
import {AdminContainer, Left, Form, ErrorMessage} from '../Styles/AdminLogin'
import Logo from '../Assets/Logo.png'
import {Link, useNavigate} from 'react-router-dom'
import { InputContainer, Left as Right} from '../Styles/UserLogin'
import Button from '../Components/Button'
import { useDispatch } from 'react-redux/es/exports'


export default function AdminLogin() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [errorMessage, setErrorMessage] = useState("");

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let url = "https://bootcamp-rent-car.herokuapp.com";

    let loginAdmin = async (e) => {
        e.preventDefault();
        try {
            let rawData = await window.fetch(`${url}/admin/auth/login`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body : JSON.stringify({
                    "email": email,
                    "password": password
                })
            })
            if(rawData.status !== 201){
                throw new Error(rawData.statusText);
            }

            let data = await rawData.json();

            window.localStorage.setItem("Admin Token", data.access_token);
            navigate("/admin");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <AdminContainer>
        <Left></Left>
        <Right tetap>
            <Link to="/" className='back'>&larr; Home</Link>
            <Form onSubmit={loginAdmin}>
                <Link to="/"><img src={Logo} alt="logo" /></Link>
                <h2>Welcome, Admin BCR</h2>
                {errorMessage ? <ErrorMessage><p>{errorMessage}</p></ErrorMessage> : null}
                <InputContainer>
                    <label for="email">Email</label>
                    <input type="email" id='email' placeholder='Contojohndee@gmail.com' required onChange={(e) => setEmail(e.target.value)}/>
                </InputContainer>
                <InputContainer>
                    <label for="password">Password</label>
                    <input type="password" id='password' placeholder='6+ karakter' required onChange={(e) => setPassword(e.target.value)}/>
                </InputContainer>
                <Button size="big" background={props => props.theme.primaryColor}>Sign In</Button>
            </Form>
        </Right>
        </AdminContainer>
    )
}
