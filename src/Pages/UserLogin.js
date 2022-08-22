import React, {useState} from 'react'
import LoginImage from '../Assets/userLogin.png'
import Logo from '../Assets/Logo.png'
import {Link, useNavigate} from 'react-router-dom'
import {Left, Right,UserLoginContainer, InputContainer, Form, RightContainer} from '../Styles/UserLogin'
import Button from '../Components/Button'
import Popup from '../Components/PopupMessage'
import { useDispatch } from 'react-redux/es/exports'
import {login} from '../Redux/Actions/AnimationAction'

export default function UserLogin(props){
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [isError, setIsError] = useState(false);
    let [errorMessage, setErrorMessage] = useState("");
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let url = "https://bootcamp-rent-car.herokuapp.com";
    let doAction = async (e) => {
        e.preventDefault();
        try {
            let rawData;
            if(props.login){
                rawData = await window.fetch(`${url}/customer/auth/login`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body : JSON.stringify({
                        "email": email,
                        "password": password
                    })
                })
            }
            else{
                rawData = await window.fetch(`${url}/customer/auth/register`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body : JSON.stringify({
                        "email": email,
                        "password": password
                    })
                })
            }
            if(rawData.status !== 201){
                console.log(rawData);
                console.log(rawData.statusText);
                throw new Error(rawData.statusText);
            }

            let data = await rawData.json();

            window.localStorage.setItem("token", data.access_token);
            dispatch(login());
            navigate("/");
        } catch (error) {
            setIsError(true);
            setErrorMessage(error.message);
            console.log(error);
        }
    }
    return (
        <UserLoginContainer>
            <Link to="/" className='back'>&larr; Home</Link>
            {isError ? <Popup color="red" text={errorMessage}></Popup> : null}
            
            <Left>
                <Form onSubmit={doAction}>
                    <img src={Logo} alt="logo" />
                    <h2>{props.title}</h2>
                    {props.login ? 
                    <>
                        <InputContainer>
                            <label for="email">Email</label>
                            <input type="text" id='email' placeholder='Contoh: johndee@gmail.com' required onChange={(e) => setEmail(e.target.value)}/>
                        </InputContainer>
                        <InputContainer>
                            <label for="password">Password</label>
                            <input type="password" id='password' placeholder='6+ karakter' required onChange={(e) => setPassword(e.target.value)}/>
                        </InputContainer>
                    </> 
                    : 
                    <>
                        <InputContainer>
                            <label for="nama">Name*</label>
                            <input type="text" id='nama' placeholder='Nama Lengkap' required onChange={(e) => setName(e.target.value)}/>
                        </InputContainer>
                        <InputContainer>
                            <label for="email">Email*</label>
                            <input type="text" id='email' placeholder='Contoh: johndee@gmail.com' required onChange={(e) => setEmail(e.target.value)}/>
                        </InputContainer>
                        <InputContainer>
                            <label for="password">Create Password*</label>
                            <input type="password" id='password' placeholder='6+ karakter' required onChange={(e) => setPassword(e.target.value)}/>
                        </InputContainer>
                    </>
                    }
                    
                    <Button size="big" background={props => props.theme.primaryColor}>{props.button}</Button>
                    <p>{props.text[0]} <Link to={props.text[2]}>{props.text[1]}</Link></p>
                </Form>
            </Left>
            <Right>
                <RightContainer>
                    <h2>Binar Car Rental</h2>
                    <img src={LoginImage} alt="binar page" />
                </RightContainer>
            </Right>
        </UserLoginContainer>
    )
}
