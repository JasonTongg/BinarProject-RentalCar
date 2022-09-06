import React from 'react'
import {BigContainer, Container, SlideItem, Buttons, Icon, Fragment, SlideInfo, Icons} from '../Styles/Testimonial'
import { useEffect } from 'react'
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi'
import Testi1 from '../Assets/Testimoni-1.jpeg'
import Testi2 from '../Assets/Testimoni-2.jpeg'
import Testi3 from '../Assets/Testimoni-3.jpeg'
import Testi4 from '../Assets/Testimoni-4.jpeg'
import {AiFillStar} from 'react-icons/ai'

export default function Testimonial() {
    let curr=0;

    let ToLeft = () => {
        let slides = document.querySelectorAll(".slides");
        let width = slides[1].getBoundingClientRect().width;

        curr--;
        if(curr<0){
            curr=3;
        }

        let slider = document.querySelector(".slider");
        slider.style.transform = `translateX(-${curr*width + 28*curr}px)`;
    }

    let ToRight = () => {   
        let slides = document.querySelectorAll(".slides");
        let width = slides[1].getBoundingClientRect().width;

        curr++;
        if(curr>3){
            curr=0;
        }

        let slider = document.querySelector(".slider");
        slider.style.transform = `translateX(-${curr*width + 28*curr}px)`;
    }
    
    return (
        <BigContainer className='testi'>
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
            <Fragment>
                <Container className='slider'>
                    {[Testi1,Testi2,Testi3,Testi4].map(item => (
                        <SlideItem className='slides'>
                            <img src={item} alt="TestimoniImage" />
                            <SlideInfo>
                                <Icons>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                </Icons>
                                <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</h3>
                                <p>John Dee 32, Bromo</p>
                            </SlideInfo>
                        </SlideItem>
                    ))}
                </Container>
            </Fragment>
            <Buttons>
                <Icon onClick={ToLeft}><BiChevronLeft></BiChevronLeft></Icon>
                <Icon onClick={ToRight}><BiChevronRight></BiChevronRight></Icon>
            </Buttons>
        </BigContainer>
    )
}