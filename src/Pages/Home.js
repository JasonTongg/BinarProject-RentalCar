import React, {useEffect} from 'react';
import MainLayout from '../Layouts/MainLayout';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';
import Whyus from '../Sections/WhyUs';
import Sewa from '../Sections/Sewa';
import Testimonial from '../Sections/Testimonial';
import Faq from '../Sections/Faq';
import Popup from '../Components/PopupMessage';
import {useSelector, useDispatch} from 'react-redux';
import {isLogin} from '../Redux/Actions/AnimationAction';

export default function Home() {
  let success = useSelector((state) => state.animations.login);
  let dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(isLogin(false));
    }, 2000);
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <MainLayout>
        <Hero button></Hero>
        <Services></Services>
        <Whyus></Whyus>
        <Testimonial></Testimonial>
        <Sewa></Sewa>
        <Faq></Faq>
        {success ? <Popup text="Login Success" color></Popup> : null}
      </MainLayout>
    </React.Fragment>
  );
}
