import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    padding-inline: 200px;

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
    width: 50%;
    padding: 2rem;
    border-radius: 10px;
    height: auto;

    & > *:not(:last-child){
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 1000px){
        width: 100%;
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
    }

    .icon{
        font-size: 1.7rem;
        color: ${props => props.theme.secondaryColor};
        margin-left: auto;
    }
`;

export const Right = styled.div`
    width: 50%;
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
`;

export const Total = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

    & > *{
        width: 100%;
    }

    & > *:not(:last-child){
        margin-bottom: 1.5rem;
    }
`;

export const Price = styled.div`
    ul{
        list-style-type: disc;
        margin-left: 1rem;

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

export const Other = styled.div`
    ul{
        list-style-type: disc;
        margin-left: 1rem;

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
            }
        }
    }
`;

export const NotInclude = styled.div`
    ul{
        list-style-type: disc;
        margin-left: 1rem;

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