import styled from 'styled-components'

export const LoadingContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
`
