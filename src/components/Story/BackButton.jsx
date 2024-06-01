import React from 'react'
import { useNavigate } from 'react-router-dom'

import { StyledBackButton } from '../../styles/BackButtonStyles'

export const BackButton = () => {
  const navigate = useNavigate()

  return <StyledBackButton onClick={() => navigate(-1)}>&lt; back to news list</StyledBackButton>
}
