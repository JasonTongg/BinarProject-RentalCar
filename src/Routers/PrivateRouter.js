import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

export default function PrivateRouter() {
    let token = localStorage.getItem("token");
    if(token){
        return (
            <Outlet></Outlet>
        )
    }
    else{
        return (
            <Navigate to="/login"/>
        )
    }
}
