import React from 'react'

import { StyledButton } from '../styles/ButtonStyles'

export const CustomButton = ({ label, onClick, disabled, darkButton, ...props }) => (
  <StyledButton darkButton={darkButton} onClick={onClick} disabled={disabled} {...props}>
    {label}
  </StyledButton>
)
