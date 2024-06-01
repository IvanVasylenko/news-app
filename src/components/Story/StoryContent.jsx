import React from 'react'
import { useImageCheck } from '../../helpers/useImageCheck'

import {
  StoryImage,
  StoryContentContainer,
  StoryContentText,
} from '../../styles/StoryContentStyles'

export const StoryContent = ({ article }) => {
  const validURLToImage = useImageCheck(article.urlToImage)

  return (
    <StoryContentContainer>
      <StoryContentText>
        {validURLToImage && <StoryImage src={validURLToImage} alt='Illustration for the article' />}
        {article.content}
      </StoryContentText>
    </StoryContentContainer>
  )
}
