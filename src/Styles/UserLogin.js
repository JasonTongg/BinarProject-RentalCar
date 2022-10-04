import styled, {keyframes} from 'styled-components';

export const UserLoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  align-items: center;
  justify-items: center;
  position: relative;

  .back {
    padding: 8px 12px;
    border: none;
    outline: none;
    color: white;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 2px;
    font-weight: bolder;
    cursor: pointer;
    position: absolute;
    top: 50px;
    left: 50px;
    text-decoration: none;
    border: 1px solid white;
    z-index: 100;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Left = styled.div.attrs((props) => ({
  tetap: props.tetap ? props.tetap : null,
}))`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-width: ${(props) => (props.tetap ? '425px' : '')};

  @media only screen and (max-width: 900px) {
    order: 2;
  }

  @media only screen and (max-width: 500px) {
    padding: 1rem;
  }

  @media only screen and (max-width: 425px) {
    min-width: auto;
  }
`;

export const Right = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  width: 100%;
  height: 100%;
  position: relative;

  h2 {
    color: rgba(255, 255, 255, 0.7);
    font-size: 3rem;
    text-align: center;
  }

  img {
    width: 35vw;

    @media only screen and (max-width: 900px) {
      width: 85%;
    }

    @media only screen and (max-width: 500px) {
      width: 100%;
    }
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;

  @media only screen and (max-width: 900px) {
    align-items: center;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    flex-direction: row;
    order: 1;
  }
`;

const show = keyframes`
    from{
        transform: translateY(50px);
        opacity: 0;
    },
    to{
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Form = styled.form`
  width: 50%;
  animation: ${show} 0.5s linear;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    width: 65%;
  }

  @media only screen and (max-width: 500px) {
    width: 80%;
  }

  img {
    width: 100px;
  }

  h2 {
    font-size: 2rem;
    font-weight: bolder;
    margin-block: 2.5rem;
  }

  p {
    text-align: center;
    margin-top: 2rem;
    align-self: center;

    a {
      color: ${(props) => props.theme.primaryColor};
      font-weight: bolder;
      margin-left: 8px;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 16px;

  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-top: 9px;
  }

  div {
    width: 100%;
    height: 20px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.8rem;
    padding-block: 0.8rem;
  }
`;
