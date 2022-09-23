import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 110px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 50px;

  p {
    margin-bottom: 1.2rem;
  }

  h2 {
    margin-top: 2rem;
  }

  .load {
    align-self: center;
  }

  @media only screen and (max-width: 1000px) {
    padding: 78px 100px 0 100px;
  }

  @media only screen and (max-width: 800px) {
    padding: 78px 50px 0 50px;
  }

  @media only screen and (max-width: 700px) {
    padding: 78px 20px 0 20px;
  }
`;

export const BarContainer = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    overflow: scroll;
    align-self: flex-start;
  }

  canvas {
    width: 80% !important;
    height: 550px !important;

    @media only screen and (max-width: 1000px) {
      width: 90% !important;
      height: 450px !important;
    }

    @media only screen and (max-width: 600px) {
      width: 477px !important;
      height: 300px !important;
      min-width: 477px;
      min-height: 300px;
    }
  }
`;

export const Pwd = styled.h1`
  margin-bottom: 40px;

  span {
    font-weight: normal;
  }
`;

export const Label = styled.div`
  border-left: 5px solid ${(props) => props.theme.primaryColor};
  padding: 10px;
  margin-block: 18px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;

  select {
    padding: 9px 12px;
    font-size: 1.2rem;
    width: 150px;
    outline: none;
  }

  button {
    padding: 9px 12px;
    font-size: 1.2rem;
    color: white;
    background-color: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 750px) {
    align-self: flex-start;
    justify-content: flex-start;
    overflow: auto;
  }
`;

export const Table = styled.table`
  width: 90%;

  @media only screen and (max-width: 1000px) {
    width: 92.5%;
  }

  @media only screen and (max-width: 750px) {
    width: 95%;
    min-width: 700px !important;
  }

  tr {
    td {
      text-align: center;
      padding-block: 12px;
      background-color: white;
    }

    th {
      text-align: center;
      background-color: #cfd4ed;
      padding-block: 12px;
      font-weight: bolder;
      padding-inline: 12px;
    }
  }
`;

export const TableSetting = styled.div`
  width: 90%;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;

  @media only screen and (max-width: 1000px) {
    width: 91.25%;
  }

  @media only screen and (max-width: 750px) {
    width: 92.5%;
  }

  @media only screen and (max-width: 600px) {
    width: 95%;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }

  div {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    label {
      color: rgba(0, 0, 0, 0.8);
    }

    @media only screen and (max-width: 550px) {
      width: 100% !important;
    }
  }

  div:last-of-type {
    margin-left: auto;

    @media only screen and (max-width: 600px) {
      margin-left: 0;
    }
  }

  div:first-of-type {
    select {
      padding: 9px 12px;
      font-size: 1.2rem;
      width: 80px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.4);
      color: rgba(0, 0, 0, 0.4);

      @media only screen and (max-width: 550px) {
        width: 100% !important;
      }

      &:focus {
        border: 1px solid rgba(0, 0, 0, 0.8);
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
`;

export const PagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row !important;
  gap: 0 !important;

  select {
    padding: 9px 12px;
    font-size: 1.2rem;
    width: 150px !important;
    outline: none;
  }

  button {
    padding: 9px 12px;
    font-size: 1.2rem;
    color: white;
    background-color: ${(props) => props.theme.primaryColor};
    border: 1px solid ${(props) => props.theme.primaryColor};
  }
`;

export const PageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row !important;
  gap: 0 !important;
  align-self: flex-end;
  height: 38px !important;

  @media only screen and (max-width: 550px) {
    align-self: center;
  }

  & > * {
    border: 2px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.4);
    padding-block: 9px;
    width: 38px;
    cursor: pointer;
    border-radius: 2px;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    flex-direction: row !important;
    height: 100%;
    font-weight: bolder;

    &.active,
    &:hover {
      border: 2px solid ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.primaryColor};
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
