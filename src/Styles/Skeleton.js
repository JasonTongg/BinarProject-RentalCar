import styled from 'styled-components';

export const CarListSkeleton = styled.div`
  height: 357px;
  width: 272px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const AdminCarListSkeleton = styled(CarListSkeleton)`
  width: 100%;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  & > * {
    margin-top: 16px;
    width: 100%;
  }

  & .button {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > * {
      width: 100%;
    }
  }

  @media only screen and (max-width: 300px) {
    padding-inline: 0;
  }
`;
