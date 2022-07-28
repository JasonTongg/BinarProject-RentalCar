import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    padding: 100px 173px 50px 173px;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    @media only screen and (max-width: 800px){
        padding: 50px 100px 25px 100px;
    }

    @media only screen and (max-width: 500px){
        padding: 20px 50px 10px 50px;
    }
`;

export const Address = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding-right: 2rem;
    margin-bottom: 10px;
    
    & > *{
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 1500px){
        width: 433px;
    }
`;

export const Menu = styled.ul`
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    list-style: none;
    height: 100%;
    margin-bottom: 10px;
    
    & > *{
        margin-bottom: 20px;
        cursor: pointer;
    }

    & > *{
        text-decoration: none;
        color: black;
    }

    @media only screen and (max-width: 1500px){
        width: 173px;
    }
`;

export const SocialMedia = styled(Address)`
    width: 25%;

    @media only screen and (max-width: 1500px){
        width: 260px;
    }
`;

export const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    & > *:not(:last-of-type){
        margin-right: 10px;
    }

    & > *{
        cursor: pointer;
    }
`;

export const CopyRight = styled(Address)`
    width: 20%;

    & img{
        width: 100px;
        cursor: pointer;
    }

    @media only screen and (max-width: 1500px){
        width: 202px;
    }
`;