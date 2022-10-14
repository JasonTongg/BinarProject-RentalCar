import React, {useEffect} from 'react';
import AdminLayout from '../Layouts/AdminLayout';
import Dashboard from '../Sections/Dashboard';
import Popup from '../Components/PopupMessage';
import {useSelector, useDispatch} from 'react-redux';
import {adminIsLogin} from '../Redux/Actions/AnimationAction';

export default function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let success = useSelector((state) => state.animations.adminLogin);
  let dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(adminIsLogin(false));
    }, 3000);
  }, [dispatch]);

  return (
    <AdminLayout type="Dashboard">
      {success ? <Popup text="Admin Login Success" color></Popup> : null}
      <Dashboard></Dashboard>
    </AdminLayout>
  );
}
