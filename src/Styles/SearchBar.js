import styled from 'styled-components';

export const BigContainer = styled.div`
  margin-inline: 197px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  transform: translateY(-100px);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  @media only screen and (max-width: 1200px) {
    margin-inline: 100px;
  }

  @media only screen and (max-width: 1000px) {
    margin-inline: 50px;
  }

  @media only screen and (max-width: 750px) {
    margin-inline: 25px;
  }
`;

export const Container = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: relative;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const Title = styled.h3`
  margin-bottom: 1.5rem;
  align-self: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Labels = styled(Label)`
  color: #8a8a8a;
`;

export const FormItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

export const Input = styled.input`
  width: 230px;
  border: 1px solid #ccc;
  padding: 0.7rem 1rem;
  border-radius: 2px;

  &:active,
  &:focus {
    outline: 1px solid #5cb85f;
  }

  &::placeholder {
    color: #8a8a8a;
  }
`;

export const Inputs = styled(Input)`
  border: 1px solid black;

  &::placeholder {
    color: black;
  }
`;

export const Sewa = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  border: 1px solid black;
  padding: 0.6rem 1rem;
  border-radius: 2px;
  min-height: 37px;

  &:active,
  &:focus {
    border: 1px solid #5cb85f;
  }

  & p {
    font-size: 14px;
  }

  & .icon {
    font-size: 20px;
  }
`;

export const Sewas = styled(Sewa)`
  border: 0;
  background-color: #d0d0d0;

  &:active,
  &:focus {
    border: 0;
  }

  & > * {
    color: #8a8a8a;
  }
`;

export const SelectContainer = styled.div`
  width: 230px;
  padding: 0.7rem 1rem;
  border: 1px solid #ccc;
  color: #8a8a8a;
  height: 36px;
  position: relative;
  cursor: pointer;
`;

export const SelectsContainer = styled.div`
  width: 230px;
  padding: 0.7rem 1rem;
  border: 1px solid #ccc;
  color: #8a8a8a;
  height: 36px;
  position: relative;
  z-index: 10000;
  cursor: pointer;
  color: black;
  border: 1px solid black;
`;

export const OptionContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
`;

export const OptionItem = styled.div`
  padding: 10px 15px;
  color: #3c3c3c;
  cursor: pointer;

  &.active,
  &.active:hover {
    background: rgba(201, 231, 202, 1);
    color: #5cb85f;
    font-weight: bold;
  }

  &:hover {
    background: rgba(201, 231, 202, 0.5);
  }
`;
