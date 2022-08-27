import React from 'react'
import {DashboardContainer, Pwd, Label, InputContainer} from '../Styles/Dashboard'
import {Bar} from 'react-chartjs-2'

export default function Dashboard() {
  let labels = ['januari', 'febriari', 'maret', 'april', 'mei', 'juni'];
  let data = {
    labels,
    datasets: [
      {
        label: "Amount of Car Rented",
        backgroundColor: "rgba(88, 107, 144, 1)",
        borderColor: "rgb(204,194,123)",
        data: [0,24,13,241,163,35],
      },
    ]
  }
  return (
    <DashboardContainer>
      <Pwd>Dashboard {`>`} <span> Dashboard </span></Pwd>
      <Label><h4>Rented Car Data Visualization</h4></Label>
      <p>Month</p>
      <InputContainer>
        <select>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
          <option value="option4">option4</option>
        </select>
        <button>Go</button>
      </InputContainer>
      <Bar data={data}></Bar>
      <h2>Dashboard</h2>
      <Label><h4>List Order</h4></Label>
    </DashboardContainer>
  )
}
