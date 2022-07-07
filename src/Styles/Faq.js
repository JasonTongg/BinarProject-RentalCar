import styled from "styled-components"

export const Container = styled.section`
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    padding: 4rem 136px;
    gap: 1rem;

    @media only screen and (max-width: 1000px){
        padding: 2rem 80px;
    }

    @media only screen and (max-width: 750px){
        padding: 2rem 50px;
    }

    @media only screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (max-width: 500px){
        padding: 2rem 20px;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    height: 100%;

    & h2{
        font-size: ${props => props.theme.subTitleFontSize};
        margin-bottom: 2rem;
    }

    & p{
        font-weight: bold;
    }

    @media only screen and (max-width: 700px){
        text-align: center;
        height: 120px;
        width: 90%;
        align-items: center;
        justify-content: center;
    }
`;
export const Questions = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    @media only screen and (max-width: 700px){
        width: 90%;
    }
`;

export const DropDown = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    height: 100%;
`;

export const Ques = styled.div`
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    border: 1px solid rgba(0,0,0,.2);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;

    & h2{
        font-size: 14px;
    }

    & .arrow{
        transition: all .3s ease-out;
    }
    
    &.hidden{

        & .arrow{
            transform: rotate(180deg);
        }
    }
`;

export const Ans = styled(Ques)`
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    line-height: 1.7rem;
    transition: all .3s ease-out;
    height: auto;
    background-color: ${props => props.theme.lighterPrimaryColor};

    &.hidden{
        transform: scaleY(0);
        transform-origin: top;
        height: 0;
        padding: 0;
        opacity: 0;
    }

    @media only screen and (max-width: 1000px){
        font-size: .8rem;
        line-height: 1.2rem;
    }

    @media only screen and (max-width: 750px){
        font-size: .7rem;
        line-height: 1.1rem;
    }

    @media only screen and (max-width: 500px){
        font-size: .6rem;
        line-height: 1rem;
    }
`;