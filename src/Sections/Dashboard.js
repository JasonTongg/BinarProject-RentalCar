import React, {useEffect} from 'react'
import {DashboardContainer, Pwd, Label, InputContainer} from '../Styles/Dashboard'
import {Bar} from 'react-chartjs-2'
import useState from 'react-usestateref'

export default function Dashboard() {
    let [order, setOrder] = useState();
    let labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    let bulan = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    let [bulanList, setBulanList, bulanListRef] = useState([]);
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
      if(order){
      }
      else{
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
    }

    let olahData = async () => {
      if(order){
        order.forEach(element => {
          let month = element.start_rent_at.split("T")[0].split("-")[1];
          let cek = bulanListRef.current.some(item => item === bulan[+month - 1]);
          if(cek === false){
            setBulanList([...bulanListRef.current, bulan[+month - 1]]);
          }
        });
      }
      if(hasil === undefined || hasil === "" || hasil.length === 0 || hasil === false){
        setHasil(bulanList[0]);
      }
    }

    let olahDataStatistik = () => {
      if(hasil){
        order.forEach(item => {
          let hari = item.start_rent_at.split("T")[0].split("-")[2];
          let month = item.start_rent_at.split("T")[0].split("-")[1];
          if(hasil === bulan[+month - 1]){
            if(dataStat[+hari - 1]){
              dataStat[+hari - 1]+=1;
            }
            else{
              dataStat[+hari - 1] = 1;
            }
          }
        })
      }
      setDataStatistik(dataStat);
    }

    useEffect(() => {
      getData();
      olahData();
      olahDataStatistik();
    }, [order, hasil])

    useEffect(() => {
      for(let i=0;i<31;i++){
        dataStat.push(0);
      }
    }, [])

    if(DataStatistik.some(item => item>0)){
      return (
        <DashboardContainer>
          <Pwd>Dashboard {`>`} <span> Dashboard </span></Pwd>
          <Label><h4>Rented Car Data Visualization</h4></Label>
          <p>Month</p>
          <InputContainer>
            <select onChange={(e) => setHasil(e.target.value)}>
              {bulanList.map((item, idx) => {
                return(
                  <option defaultValue={item} key={idx}>{item}</option>
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
