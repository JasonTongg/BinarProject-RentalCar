import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

export default function PrivateRouter() {
  let token = localStorage.getItem('Admin Token');
  if (token) {
    return <Outlet></Outlet>;
  } else {
    return <Navigate to="/admin/login" />;
  }
}
