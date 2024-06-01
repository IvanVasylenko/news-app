import styled from 'styled-components'

export const ShortNewsContainer = styled.div`
  border-left: 1px solid gray;
  padding-left: 20px;

  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    border-left: 7px solid gray;
  }
`
export const ShortNewsTitle = styled.h3`
  font-size: 24px;
  font-weight: 300;
`
export const ShortNewsDescription = styled.p`
  font-weight: 100;
`
