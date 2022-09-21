import styled from 'styled-components';

export const Button1 = styled.button.attrs((props) => ({
  size: props.size ? props.size : null,
}))`
  padding: ${(props) => (props.size === 'big' ? '14px 107px' : '8px 12px')};
  border: 1px solid ${(props) => props.theme.primaryColor};
  outline: none;
  color: ${(props) => props.theme.primaryColor};
  background-color: white;
  border-radius: 2px;
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  }

  &:active,
  &:focus {
    transform: translateY(-3px);
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const Button2 = styled.button.attrs((props) => ({
  size: props.size ? props.size : null,
  background: props.background,
}))`
  padding: 8px 12px;
  width: ${(props) => (props.size === 'big' ? '100%' : null)};
  border: none;
  outline: none;
  color: white;
  background-color: ${(props) =>
    props.background
      ? (props) => props.theme.primaryColor
      : (props) => props.theme.secondaryColor};
  border-radius: 2px;
  font-weight: bolder;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }

  transition: all 0.2s linear;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  }

  &:active,
  &:focus {
    transform: translateY(-3px);
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  }
`;
