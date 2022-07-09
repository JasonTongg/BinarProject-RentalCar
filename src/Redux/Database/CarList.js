import React from 'react'

export default async function CarList() {

    let raw = await fetch("https://bootcamp-rent-car.herokuapp.com/admin/car");

    let data = await raw.json();

    console.log("ini");
    console.log(data);

    return data;
}
