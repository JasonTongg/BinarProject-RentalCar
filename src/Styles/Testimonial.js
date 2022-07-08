import styled from 'styled-components'

export const BigContainer = styled.section`
    padding: 2rem 0 4rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    flex-direction: column;
    width: 100vw;

    & h2{
        font-size: ${props => props.theme.subTitleFontSize};
        margin-bottom: 1rem;
        align-self: center;
    }

    & p{
        font-weight: bold;
        margin-bottom: 40px;
        align-self: center;
    }
`;

export const Fragment = styled.div`
    width: calc(620 * 4)px;
    height: 270px;
    position: relative;

    @media only screen and (max-width: 620px){
        height: 392px;
    }    
`;

export const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 2rem;
    position: absolute;
    top: 0;
    left: calc( 50vw - 310px );
    width: calc(620 * 4)px;
    transition: all .5s ease-out;
    height: 270px;

    @media only screen and (max-width: 620px){
        left: calc( 50vw - 164px );
        height: 392px;
    }
`;

export const SlideItem = styled.div`
    width: 620px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.lighterPrimaryColor};
    padding: 3rem;
    gap: 3rem;

    & img{
        width: 80px;
        border-radius: 50%;
    }

    @media only screen and (max-width: 620px){
        width: 328px;
        gap: 1rem;
        flex-direction: column;
        height: 392px;
        padding: 1rem;
    }
`;

export const Buttons = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
`;

export const Icon = styled.button`
    background-color: white;
    color: black;
    padding: 0;
    border-radius: 50%;
    outline: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 32px;
    width: 32px;
    border: 1px solid rgba(0,0,0,.5);
    cursor: pointer;

    &:hover{
        border: 1px solid ${props => props.theme.greenColor};
        background-color: ${props => props.theme.greenColor};
        color: white;
    }
`;

export const SlideInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    & h3{
        margin-block: 1rem;
        line-height: 1.5rem;

        @media only screen and (max-width: 1000px){
            font-size: 1rem;
            line-height: 1.3rem;
        }

        @media only screen and (max-width: 750px){
            font-size: .9rem;
            line-height: 1.2rem;
        }

        @media only screen and (max-width: 500px){
            font-size: .8rem;
            line-height: 1.rem;
        }
    }

    & p{
        align-self: flex-start;
        margin: 0;
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: flex-start;
    align;items: center;

    & > *{
        font-size: 16px;
        color: #F9CC00;
    }

    @media only screen and (max-width: 620px){
        justify-content: center;
        width: 100%;
        margin-bottom: 1rem;
    }
`;