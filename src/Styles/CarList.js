import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 5rem;
  width: 100%;
  padding: 1rem 196px;
  min-height: 400px;
  margin-block: 2rem 1.5rem;

  @media only screen and (max-width: 1450px) {
    padding: 1rem 100px;
  }
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 136px;
  text-align: center;
  min-height: 400px;
  transform: none !important;
  transition: none !important;
  opacity: 1 !important;

  .errorh1,
  .errorp {
    text-align: center;
  }

  .errorp {
    line-height: 1rem;
  }

  .errorh1 {
    line-height: 1.5rem;
    @media only screen and (max-width: 300px) {
      font-size: 1.2rem;
    }
  }

  &.height {
    min-height: 100vh;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 100px;
  }

  @media only screen and (max-width: 750px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 20px;
  }

  & img {
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

  & h1 {
    font-weight: bold;
    font-size: 2rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
      margin-top: 0.8rem;
    }
  }

  & p {
    margin-top: 1.5rem;
    font-size: 1rem;
    color: #8a8a8a;

    @media only screen and (max-width: 600px) {
      font-size: 0.8rem;
      margin-top: 1rem;
    }
  }
`;

export const CarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  gap: 0.8rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 1rem;

  & h5 {
    font-weight: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    min-width: 250px;
    max-height: 180px;
    object-fit: cover;
  }

  & p {
    font-weight: bold;
    line-height: 1.5rem;
  }
`;
