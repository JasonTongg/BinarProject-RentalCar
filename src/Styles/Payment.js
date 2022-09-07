import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    padding-inline: 200px;
    gap: 1rem;

    & > *{
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    }

    @media only screen and (max-width: 1200px){
        padding-inline: 100px;
    }

    @media only screen and (max-width: 1000px){
        padding-inline: 50px;
    }

    @media only screen and (max-width: 750px){
        padding-inline: 25px;
    }
`;

export const Left = styled.div`
    min-width: 300px;
    width: 49%;
    padding: 2rem;
    border-radius: 10px;
    height: auto;

    & > *:not(:last-child){
        margin-bottom: 1rem;
    }

    .text{
        line-height: 1.5rem;
    }

    @media only screen and (max-width: 1000px){
        width: 100%;
    }

    @media only screen and (max-width: 300px){
        min-width: 0;
        text-align: center;
    }
`;

export const BankContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;
`;

export const BankItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.1);
    width: 100%;
    padding: 1rem .2rem 1.5rem .2rem;
    gap: 1rem;
    cursor: pointer;

    div{
        border: 1px solid rgba(0,0,0,.4);
        border-radius: 5px;
        padding: .5rem 1rem;
        min-width: 74px;
        text-align: center;
    }

    .icon{
        font-size: 1.7rem;
        color: ${props => props.theme.secondaryColor};
        margin-left: auto;

        @media only screen and (max-width: 300px){
            margin-left: 0;
        }
    }

    @media only screen and (max-width: 300px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const Right = styled.div`
    width: 49%;
    min-width: 300px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > *:not(:last-child){
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 1000px){
        width: 100%;
    }

    @media only screen and (max-width: 300px){
        min-width: 0;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    margin-bottom: 2rem !important;

    div{
        display: flex;
        gap: .5rem;
        justify-content: flex-start;
        align-items: center;
        color: rgba(0,0,0,.5);

        .icon{
            font-size: 1.2rem;
        }
    }
`;

export const DetailHarga = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    width: 100%;

    .total{
        margin-left: auto;
    }

    .icon{
        font-size: 2rem;
        cursor: pointer;
    }

    p{
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 430px){
        .total{
            display: none;
        }
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 430px){
        flex-direction: column;
        justify-content: center;
        gap: .5rem;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgba(0,0,0,.3);
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transition: opacity .2s ease-out, height .5s ease-out;
    z-index: -1;

    & > *{
        width: 100%;

        @media only screen and (max-width: 430px){
            text-align: center;
        }
    }

    & > *:not(:last-child){
        margin-bottom: 1.5rem;

        @media only screen and (max-width: 430px){
            margin-bottom: 1rem;
        }
    }

    &.hide{
        opacity: 0;
        height: 0;
    }

    &.show{
        opacity: 1;
        height: 270px;

        @media only screen and (max-width: 430px){
            height: 330px;
        }
    }
`;

export const Price = styled.div`

    ul{
        list-style-type: disc;
        margin-left: 1rem;

        @media only screen and (max-width: 430px){
            list-style-type: none;
        }

        li{
            margin-block: 1rem;

            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
                line-height: 1.5rem;

                @media only screen and (max-width: 430px){
                    justify-content: center;
                    flex-direction: column;
                    gap: .5rem;
                }
            }
        }
    }
`;

export const Other = styled.div`
    ul{
        list-style-type: disc;
        margin-left: 1rem;

        @media only screen and (max-width: 430px){
            list-style-type: none;
        }

        li{
            margin-block: 1rem;
            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;

                p:nth-of-type(2){
                    color: ${props => props.theme.secondaryColor};
                }

                @media only screen and (max-width: 430px){
                    justify-content: center;
                    flex-direction: column;
                    gap: .5rem;
                }
            }
        }
    }
`;

export const NotInclude = styled.div`
    ul{
        list-style-type: disc;
        margin-left: 1rem;

        @media only screen and (max-width: 430px){
            list-style-type: none;
        }

        li{
            margin-block: 1rem;
            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
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