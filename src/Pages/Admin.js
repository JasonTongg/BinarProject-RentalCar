import React, {useEffect} from 'react';
import AdminLayout from '../Layouts/AdminLayout';
import Dashboard from '../Sections/Dashboard';
import Popup from '../Components/PopupMessage';
import {useSelector, useDispatch} from 'react-redux';
import {isLogin} from '../Redux/Actions/AnimationAction';

export default function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let success = useSelector((state) => state.animations.login);
  let dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(isLogin(false));
    }, 3000);
  }, [dispatch]);

  return (
    <AdminLayout type="Dashboard">
      {success ? <Popup text="Login Success" color></Popup> : null}
      <Dashboard></Dashboard>
    </AdminLayout>
  );
}
