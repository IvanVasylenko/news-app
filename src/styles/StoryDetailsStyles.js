import styled from 'styled-components'

export const StoryDetailsContainer = styled.div`
  display: grid;
  grid-template-areas:
    'title title'
    'author date';
`
export const StoryTitle = styled.h3`
  grid-area: title;
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 30px;
`
export const StoryAuthor = styled.span`
  grid-area: author;
  justify-self: start;
  font-size: 14px;
  font-weight: 100;
`
export const StoryDate = styled.span`
  grid-area: date;
  justify-self: end;
  font-size: 14px;
  font-weight: 100;
`
