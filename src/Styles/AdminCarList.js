import styled, {keyframes} from 'styled-components';

export const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 2rem;
  width: calc(100vw - 4rem);
  background: rgba(244, 245, 247, 1);
  min-height: calc(100vh - 78px);

  .load {
    align-self: center;
    justify-self: center;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  padding-block: 25px;

  @media only screen and (max-width: 300px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const ListItem = styled.div`
  width: 100%;
  padding: 24px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    margin-top: 16px;
  }

  img {
    width: 276px;
    height: 213px;
    padding: 31px 17px;
    margin: 0;
    align-self: center;
  }

  @media only screen and (max-width: 300px) {
    padding-inline: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
    padding: 0.8rem;
    border: none;
    outline: none;
    cursor: pointer;

    .icon {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 280px) {
    justify-content: center;
  }
`;

export const Pwd = styled.h3`
  margin-bottom: 27px;

  a {
    text-decoration: none;
    color: black;
  }

  span {
    font-weight: normal;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 24px;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  padding: 0.5rem 1rem;
  border: 2px solid rgba(174, 183, 225, 1);
  border-radius: 3px;
  color: rgba(174, 183, 225, 1);
  cursor: pointer;

  &.active {
    border: 2px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
    background-color: rgba(207, 212, 237, 1);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  & > * {
    width: 50%;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 5px;

  .icon {
    font-size: 1.2rem;
  }

  &:nth-of-type(1) {
    background-color: white;
    border: 2px solid red;
    color: red;
  }

  &:nth-of-type(2) {
    background-color: ${(props) => props.theme.secondaryColor};
    border: 2px solid ${(props) => props.theme.secondaryColor};
    color: white;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const show = keyframes`
    from{
        opacity: 0;
        transform: translateY(-100px);
    }
    to{
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  gap: 24px;

  width: 400px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  animation: ${show} 0.35s linear forwards;

  @media only screen and (max-width: 400px) {
    width: 95%;
    padding: 10px;
  }
`;

export const DeleteInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  p {
    line-height: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const DeleteButton = styled.button`
  padding: 0.8rem 1rem;
  font-weight: bolder;
  min-width: 100px;
  border-radius: 3px;
  cursor: pointer;

  &:nth-of-type(1) {
    background-color: ${(props) => props.theme.primaryColor};
    border: 2px solid ${(props) => props.theme.primaryColor};
    color: white;
  }

  &:nth-of-type(2) {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
  }

  @media only screen and (max-width: 400px) {
    min-width: 0;
    width: 48%;
  }
`;

export const BigContainerLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  height: calc(100vh - 250px);
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: none !important;
  transition: none !important;
  opacity: 1 !important;

  h1,
  p {
    text-align: center;
  }

  p {
    line-height: 1rem;
  }

  h1 {
    line-height: 1.5rem;
    margin-block: 1rem 0.5rem;
    font-size: 1.4rem;
    @media only screen and (max-width: 300px) {
      font-size: 1.2rem;
    }
  }

  img {
    width: 40%;

    @media only screen and (max-width: 1300px) {
      width: 60%;
    }

    @media only screen and (max-width: 1000px) {
      width: 70%;
    }

    @media only screen and (max-width: 700px) {
      width: 80%;
    }

    @media only screen and (max-width: 500px) {
      width: 90%;
    }
  }
`;
