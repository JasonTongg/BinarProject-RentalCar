import styled from "styled-components";

export const Container = styled.section`
    padding: 2rem 196px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    gap: 1rem;

    @media only screen and (max-width: 1200px){
        padding: 2rem 100px;
    }

    @media only screen and (max-width: 750px){
        padding: 2rem 25px;
    }

    @media only screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }
`;

export const CarInfo = styled.div`
    width: 65%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    padding: 1.5rem;

    & h2{
        font-size: 14px;
    }

    @media only screen and (max-width: 700px){
        width: 100%;
    }
`;

export const Sub = styled.div`
    margin-top: 15px;

    & ul{
        list-style: disc;
        margin-left: 1rem;
        margin-top: 8px;

        & li{
            padding-block: .5rem;
            color: #8A8A8A;
        }
    }
`;

export const SubHeader = styled(Sub)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > *:last-child{
        font-size: 1.5rem;
        cursor: pointer;
        transition: all .5s ease-out;
        transform: rotate(180deg);
    }
`;

export const Gone = styled.div`
    opacity: 1;
    transition: opacity .5s ease-out, height .5s ease-out;
`;

export const CarImage = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 28px 24px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

    & img{
        width: 100%;
        align-self: center;
    }

    .maxday{
        margin-top: 1.5rem;
        color: rgba(0,0,0,.8);
        width: 100%;

        @media only screen and (max-width: 1300px){
            text-align: center;
        }
    
        @media only screen and (max-width: 700px){
            text-align: left;
        }
    
        @media only screen and (max-width: 500px){
            text-align: center;
        }
    }

    @media only screen and (max-width: 700px){
        width: 100%;
    }
`;

export const CarType = styled.div`
    & div{
        display: flex;
        margin-top: .5rem;
        align-items: center;
        color: #8A8A8A;

        & > *:first-child{
            font-size: 1.2rem;
            margin-right: .5rem;
        }
    }
`;

export const CarPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-block: 1.5rem;
`;

export const DateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-block: .5rem 1rem;
    gap: .5rem;
    width: 100%;
    cursor: pointer;

    .react-datepicker__triangle::after, .react-datepicker__triangle::before{
        width: 0 !important;
        border: none !important;
        height: 0 important;
    }

    .react-datepicker-popper[data-placement^=bottom] {
        padding-top: 0px !important;
    }

    .react-datepicker-popper[data-placement^=top] {
        padding-bottom: 0px !important;
    }

    .react-datepicker__header{
        background-color: white;
        border-top-right-radius: 0;
        border-bottom: 0;
    }

    .react-datepicker__day--in-range, .react-datepicker__day--in-selecting-range{
        background-color: rgba(232, 246, 241, 1);
        color: black;
    }

    .react-datepicker__day--range-end, .react-datepicker__day--range-start, .react-datepicker__day--keyboard-selected{
        background-color: rgba(53, 176, 167, 1);
        border-radius: 50%;
        color: white;
    }

    .react-datepicker__header{
        div:first-of-type{
            margin: 0 !important;
            height: 30px;

            select{
                border: none;
                outline: none;
                cursor: pointer;
            }
        }
    }

    .react-datepicker__navigation--next, .react-datepicker__navigation--previous{
        top: 5px;
    }

    .react-datepicker__close-icon{
        margin-right: 5px;
        &::after{
            background-color: rgba(0, 156, 150, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            content: "X";
        }
    }

    input{
        width: 100%;
        text-align: start;
        outline: none;
        padding: .5rem 1rem;
        cursor: pointer !important;

        &:focus, &:active{
            border: 2px solid rgba(0, 156, 150, 1);
        }

        &::placeholder{
            color: rgba(0,0,0,.5);
        }
    }
`;

export const Button = styled.button`
    background-color: ${props => props.theme.secondaryColor};
    color: white;
    font-weight: bolder;
    border: none;
    outline: none;
    width: 100%;
    padding: .7rem 1rem;
    font-size: 1.1rem;
    cursor: pointer;

    &:disabled{
        background-color: rgba(53, 176, 167, 0.2);
    }
`;