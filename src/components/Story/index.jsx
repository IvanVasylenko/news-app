import React from 'react'
import { useLocation } from 'react-router-dom'

import { AppLayout } from '../AppLayout'
import { EmptyData } from '../AppLayout/EmptyData'
import { BackButton } from './BackButton'
import { StoryDetails } from './StoryDetails'
import { StoryContent } from './StoryContent'

import { FullWidthDivider } from '../../styles/CommonStyles'
import { StoryContainer } from '../../styles/StoryStyles'
import { StorySource } from './StorySource'

export const Story = () => {
  const location = useLocation()
  const article = location.state?.article

  return (
    <AppLayout>
      {article ? (
        <StoryContainer>
          <BackButton />
          <StoryDetails article={article} />
          <FullWidthDivider />
          <StoryContent article={article} />
          <FullWidthDivider />
          <StorySource article={article} />
        </StoryContainer>
      ) : (
        <EmptyData />
      )}
    </AppLayout>
  )
}
