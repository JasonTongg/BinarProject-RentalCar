import React, {useEffect} from 'react'
import LoginImage from '../Assets/userLogin.png'
import Logo from '../Assets/Logo.png'
import {Link, useNavigate} from 'react-router-dom'
import {Left, Right,UserLoginContainer, InputContainer, Form, RightContainer} from '../Styles/UserLogin'
import Button from '../Components/Button'
import { ErrorMessage } from '../Styles/AdminLogin'
import {useDispatch} from 'react-redux'
import {isLogin} from '../Redux/Actions/AnimationAction'
import useState from 'react-usestateref'

export default function UserLogin(props){
    let [, setData, dataRef] = useState({});
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
                        "email": dataRef.current.email,
                        "password": dataRef.current.password
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
                        "email": dataRef.current.email,
                        "password": dataRef.current.password
                    })
                })

                rawData = await window.fetch(`${url}/customer/auth/login`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body : JSON.stringify({
                        "email": dataRef.current.email,
                        "password": dataRef.current.password
                    })
                })
            }

            let data = await rawData.json();

            if(rawData.status !== 201){
                throw new Error(data.errors[0].message);
            }

            window.localStorage.setItem("token", data.access_token);
            navigate("/");
            dispatch(isLogin(true));
        } catch (error) {
            setErrorMessage(error.message);
            dispatch(isLogin(false));
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <UserLoginContainer>
            <Link to="/" className='back'>&larr; Home</Link>
            <Left>
                <Form onSubmit={doAction}>
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                    <h2>{props.title}</h2>
                    {errorMessage ? <ErrorMessage><p>{errorMessage}</p></ErrorMessage> : null}
                    {props.login ? 
                    <>
                        <InputContainer>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' placeholder='Contoh: johndee@gmail.com' required onChange={(e) => setData({
                                ...dataRef.current,
                                email: e.target.value
                            })}/>
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' placeholder='6+ karakter' required onChange={(e) => setData({
                                ...dataRef.current,
                                password: e.target.value
                            })}/>
                        </InputContainer>
                    </> 
                    : 
                    <>
                        <InputContainer>
                            <label htmlFor="nama">Name*</label>
                            <input type="text" id='nama' placeholder='Nama Lengkap' required/>
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="email">Email*</label>
                            <input type="email" id='email' placeholder='Contoh: johndee@gmail.com' required onChange={(e) => setData({
                                ...dataRef.current,
                                email: e.target.value
                            })}/>
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="password">Create Password*</label>
                            <input type="password" id='password' placeholder='6+ karakter' required onChange={(e) => setData({
                                ...dataRef.current,
                                password: e.target.value
                            })}/>
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
