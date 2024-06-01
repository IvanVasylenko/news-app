import React from 'react'

import { StyledInput, StyledLabel } from '../styles/InputStyles'

export const CustomInput = ({ label, value, placeholder, onChange, onKeyPress, ...props }) => (
  <StyledLabel>
    {label && <span>{label}</span>}
    <StyledInput
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      {...props}
    />
  </StyledLabel>
)
