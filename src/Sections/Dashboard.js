import React, {useEffect, useState} from 'react'
import {DashboardContainer, Pwd, Label, InputContainer} from '../Styles/Dashboard'
import {Bar, getDatasetAtEvent} from 'react-chartjs-2'

export default function Dashboard() {
    let [order, setOrder] = useState();
    let labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    let bulan = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let [bulanList, setBulanList] = useState([]);
    let [hasil, setHasil] = useState("");
    let [DataStatistik, setDataStatistik] = useState([]);
    let dataStat = [];

    let data = {
      labels,
      datasets: [
        {
          label: "Amount of Car Rented",
          backgroundColor: "rgba(88, 107, 144, 1)",
          borderColor: "rgb(204,194,123)",
          data: DataStatistik,
        },
      ]
    }

    let getData = async () => {
      try {
        let rawData = await window.fetch("https://bootcamp-rent-car.herokuapp.com/customer/order", {
          method: "GET",
          headers: {
            "access_token": window.localStorage.getItem("Admin Token"),
            "content-Type": "application/json",
          },
        });

        if(rawData.status !== 200){
          throw new Error(rawData.statusText);
        }

        let dataBersih = await rawData.json();
        setOrder(dataBersih);
      } catch (error) {
        console.log(error.message);
      }
    }

    let olahData = () => {
      if(order){
        order.forEach(element => {
          let month = element.start_rent_at.split("T")[0].split("-")[1];
          if(bulanList.length){
            let cek = bulanList.filter(item => item === bulan[+month]);
            if(cek === false){
              setBulanList([...bulanList, bulan[+month - 1]])
            }
          }
          else{
            setBulanList([...bulanList, bulan[+month - 1]])
          }
        });
      }
    }

    let olahDataStatistik = () => {
      if(hasil){
        order.forEach(item => {
          let hari = item.element.start_rent_at.split("T")[0].split("-")[0];
          if(dataStat[20]){
            dataStat[20] = 20;
          }
          else{
            dataStat[20] = 20;
          }
        })
      }
      console.log(dataStat);
    }

    useEffect(() => {
      getData();
    }, [])

    useEffect(() => {
      olahData();
    }, [order])

    useEffect(() => {
      olahDataStatistik();
    }, [hasil])

    useEffect(() => {
      if(dataStat){
        console.log(dataStat);
        setDataStatistik(dataStat);
      }
    }, [dataStat])

    if(bulanList !== []){
      return (
        <DashboardContainer>
          <Pwd>Dashboard {`>`} <span> Dashboard </span></Pwd>
          <Label><h4>Rented Car Data Visualization</h4></Label>
          <p>Month</p>
          <InputContainer>
            <select onChange={(e) => setHasil(e.target.value)}>
              {bulanList.map(item => {
                return(
                  <option value={item}>{item}</option>
                )
              })}
            </select>
            <button>Go</button>
          </InputContainer>
          <Bar data={data}></Bar>
          <h2>Dashboard</h2>
          <Label><h4>List Order</h4></Label>
        </DashboardContainer>
      )
    }
}
