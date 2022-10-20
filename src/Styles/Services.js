import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  padding-inline: 136px;
  padding-block: 100px;

  @media only screen and (max-width: 1200px) {
    padding-inline: 80px;
  }

  @media only screen and (max-width: 800px) {
    padding-inline: 60px;
  }

  @media only screen and (max-width: 500px) {
    padding-inline: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 80%;

  & h2 {
    font-size: ${(props) => props.theme.subTitleFontSize};
    line-height: 2.5rem;
    margin-bottom: 1.3rem;
  }

  & p {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.8rem;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  & ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-weight: bold;
    gap: 1.5rem;
  }

  & ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  @media only screen and (max-width: 1270px) {
    margin-top: 3rem;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;

    & p {
      text-align: justify;
    }
  }
`;

export const Image = styled.div`
  width: 70%;
  max-width: 450px;

  & img {
    width: 100%;
  }
`;
