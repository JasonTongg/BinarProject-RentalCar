import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import {LoadingContainer} from '../Styles/Loading'
import {Wave, Wave2} from '../Styles/Loading'
import NotFoundImage from '../Assets/NotFound.jpg'

export default function Loading(props) {
  return (
    <LoadingContainer>
      <Wave2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D28A6" fill-opacity="1" d="M0,128L34.3,138.7C68.6,149,137,171,206,176C274.3,181,343,171,411,160C480,149,549,139,617,154.7C685.7,171,754,213,823,213.3C891.4,213,960,171,1029,149.3C1097.1,128,1166,128,1234,128C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      </Wave2>
      <img src={NotFoundImage} alt="Not Found" />
      <h1>Memuat halaman, harap tunggu...</h1>
      <p>Situs Binar Rental Car sedang memuat</p>
      <PropagateLoader color={"#0D28A6"} loading={props.loading} size={20}/>
      <Wave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0D28A6" fill-opacity="1" d="M0,128L34.3,138.7C68.6,149,137,171,206,176C274.3,181,343,171,411,160C480,149,549,139,617,154.7C685.7,171,754,213,823,213.3C891.4,213,960,171,1029,149.3C1097.1,128,1166,128,1234,128C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      </Wave>
    </LoadingContainer>
  )
}
