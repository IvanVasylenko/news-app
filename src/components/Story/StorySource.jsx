import React from 'react'

import { StorySourceContainer } from '../../styles/StorySourceStyles'

export const StorySource = ({ article }) => (
  <StorySourceContainer>
    <span>Source: </span>
    <a href={article.url} rel='noreferrer' target='_blank'>
      {article.url}
    </a>
  </StorySourceContainer>
)
