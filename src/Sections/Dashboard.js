import React, {useEffect} from 'react'
import {DashboardContainer, Pwd, Label, InputContainer, Table, TableSetting, PagesContainer, PageItem, BarContainer, TableContainer} from '../Styles/Dashboard'
import {Bar} from 'react-chartjs-2'
import useState from 'react-usestateref'
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import DotLoader from "react-spinners/DotLoader";

export default function Dashboard() {
    let [order, setOrder, orderRef] = useState();
    let [orderTemp, setOrderTemp] = useState(order);
    let labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    

    let [bulanList, setBulanList, bulanListRef] = useState([]);
    let [hasil, setHasil] = useState("");
    let [DataStatistik, setDataStatistik] = useState([]);
    let [limit, setLimit] = useState(5);
    let [page, setPage] = useState(1);
    let [pages, setPages] = useState(1);
    let [loading, setLoading] = useState(true);

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

    // let getData = async () => {
    //   if(order && page){
    //     setOrderTemp(orderRef.current.filter(item => item.id>(page-1)*limit && item.id<=limit*page));
    //     setPages(Math.ceil(orderRef.current.length/limit));
    //   }
    //   else{
    //     try {
    //       let rawData = await window.fetch("https://bootcamp-rent-car.herokuapp.com/admin/order");
  
    //       if(rawData.status !== 200){
    //         throw new Error(rawData.statusText);
    //       }
  
    //       let dataBersih = await rawData.json();
    //       setOrder(dataBersih);
    //     } catch (error) {
    //       console.log(error.message);
    //     }
    //   }
    // }

    // let olahData = async () => {
    //   if(order){
    //     order.forEach(element => {
    //       let month = element.start_rent_at.split("T")[0].split("-")[1];
    //       let cek = bulanListRef.current.some(item => item === bulan[+month - 1]);
    //       if(cek === false){
    //         setBulanList([...bulanListRef.current, bulan[+month - 1]]);
    //       }
    //     });
    //   }
    //   if(hasil === undefined || hasil === "" || hasil.length === 0 || hasil === false){
    //     setHasil(bulanList[0]);
    //   }
    // }

    // let olahDataStatistik = () => {
    //   if(hasil){
    //     order.forEach(item => {
    //       let hari = item.start_rent_at.split("T")[0].split("-")[2];
    //       let month = item.start_rent_at.split("T")[0].split("-")[1];
    //       if(hasil === bulan[+month - 1]){
    //         if(dataStat[+hari - 1]){
    //           dataStat[+hari - 1]+=1;
    //         }
    //         else{
    //           dataStat[+hari - 1] = 1;
    //         }
    //       }
    //     })
    //   }
    //   setDataStatistik(dataStat);
    // }

    useEffect(() => {
      let bulan = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      let dataStat = [];

      for(let i=0;i<31;i++){
        dataStat.push(0);
      }

      setLoading(true);
         let getData = async () => {
      if(order && page){
        setOrderTemp(orderRef.current.filter(item => item.id>(page-1)*limit && item.id<=limit*page));
        setPages(Math.ceil(orderRef.current.length/limit));
      }
      else{
        try {
          let rawData = await window.fetch("https://bootcamp-rent-car.herokuapp.com/admin/order");
  
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
    
    getData();
    olahData();
    olahDataStatistik();
      setLoading(false);
    }, [order, hasil, limit, page, bulanList, bulanListRef, orderRef, setBulanList, setOrder])

    // useEffect(() => {
    //   setLoading(true);
      // getData();
      // olahData();
      // olahDataStatistik();
    //   setLoading(false);
    // }, [order, hasil, limit, page, getData, olahData, olahDataStatistik])

    // useEffect(() => {
      
    // }, [])

    if(DataStatistik.some(item => item>0) && loading===false){
      let bulan = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
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
          <BarContainer>
            <Bar data={data}></Bar>
          </BarContainer>
          <h2>Dashboard</h2>
          <Label><h4>List Order</h4></Label>
          <TableContainer>
            <Table>
              <tr>
                <th>No</th>
                <th>User Email</th>
                <th>Car</th>
                <th>Start Rent</th>
                <th>Finish Rent</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
              {orderTemp.map((item, idx) => {
                let start = item.start_rent_at.split("T")[0].split("-").reverse();
                start = [start[0], bulan[+start[1] - 1], start[2]].join(" ");
                let end = item.finish_rent_at.split("T")[0].split("-").reverse();
                end = [end[0], bulan[+end[1] - 1], end[2]].join(" ");
                return(
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.User.email}</td>
                    <td>{item.Car.name}</td>
                    <td>{start}</td>
                    <td>{end}</td>
                    <td>Rp. {item.Car.price},-</td>
                    <td>{item.Car.category}</td>
                  </tr>
                )
              })}
            </Table>
          </TableContainer>
          <TableSetting>
            <div>
              <label for="limit">Limit</label>
              <select onChange={(e) => {
                setLimit(+e.target.value);
                setPage(1);
              }}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>
            <div>
              <label for="pages">Jump to Page</label>
              <PagesContainer>
                <select onChange={(e) => setPage(+e.target.value)}>
                  { 
                    [...Array(pages).fill(10)].map((item, idx) => {
                      if(idx+1===page){
                        return(
                          <option selected>{idx+1}</option>
                        )
                      }
                      else{
                        return(
                          <option>{idx+1}</option>
                        )
                      }
                    })
                  }
                </select>
                <button>Go</button>
              </PagesContainer>
            </div>
            <PageItem>
              <div onClick={() => {
                if(page>1){
                  setPage(page-1);
                }
              }}>
                <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
              </div>
              {[...Array(pages).fill(10)].map((item, idx) => {
                if(idx+1 === page){
                  return (
                    <div className='active' onClick={() => setPage(idx+1)}>{idx+1}</div>
                  )
                }
                else{
                  return (
                    <div onClick={() => setPage(idx+1)}>{idx+1}</div>
                  )
                }
              })}
              <div onClick={() => {
                if(page<pages){
                  setPage(page+1)
                }
              }}>
                <AiOutlineDoubleRight></AiOutlineDoubleRight>
              </div>
            </PageItem>
          </TableSetting>
        </DashboardContainer>
      )
    }
    else{
      return (
          <DashboardContainer>
              <DotLoader color={"#D0d0d0"} size={100} className="load"/>
          </DashboardContainer>
      )
  }
}
