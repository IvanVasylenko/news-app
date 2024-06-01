import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  0% {
    right: -100%;
  }
  20% {
    right: 0;
  }
  80% {
    right: 0;
  }
  100% {
    right: -100%;
  }
`

export const Label = styled.div`
  position: absolute;
  top: 100px;
  padding: 15px 150px 15px 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: whitesmoke;
  animation: ${slideIn} 3s ease-in-out;
`
