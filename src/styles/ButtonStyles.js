import styled from 'styled-components'

export const StyledButton = styled.button`
  border: 0;
  padding: 10px 50px;
  font-size: 18px;
  font-weight: 200;
  text-transform: uppercase;
  background-color: ${props => (props.darkButton ? 'gray' : 'whitesmoke')};
  color: ${props => (props.darkButton ? 'white' : 'black')};

  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.darkButton ? 'whitesmoke' : 'gray')};
    color: ${props => (props.darkButton ? 'black' : 'white')};
  }
  &:disabled {
    color: black;
    background-color: whitesmoke;
    opacity: 0.5;
  }
  &:disabled:hover {
    cursor: not-allowed;
    background-color: whitesmoke;
  }
`
