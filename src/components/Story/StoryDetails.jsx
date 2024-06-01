import React from 'react'
import moment from 'moment'

import {
  StoryAuthor,
  StoryDate,
  StoryDetailsContainer,
  StoryTitle,
} from '../../styles/StoryDetailsStyles'

export const StoryDetails = ({ article }) => (
  <StoryDetailsContainer>
    <StoryTitle>{article.title}</StoryTitle>
    <StoryAuthor>Author: {article.author}</StoryAuthor>
    <StoryDate>Date: {moment(article.publishedAt).format('LLLL')}</StoryDate>
  </StoryDetailsContainer>
)
