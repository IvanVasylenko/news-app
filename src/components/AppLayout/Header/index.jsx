import React from 'react'
import { useDispatch } from 'react-redux'

import { setLogOut } from '../../../store/slices/commonSlice'
import { clearUserData } from '../../../store/slices/userSlice'

import { HeaderTabs } from './HeaderTabs'
import { CustomButton } from '../../Button'

import { AppContainer } from '../../../styles/CommonStyles'
import { HeaderActionsContainer, HeaderContainer } from '../../../styles/HeaderStyles'

export const Header = () => {
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(setLogOut())
    dispatch(clearUserData())
  }

  return (
    <HeaderContainer>
      <AppContainer>
        <HeaderActionsContainer>
          <HeaderTabs />
          <CustomButton darkButton label='Logout' onClick={() => onLogOut()} />
        </HeaderActionsContainer>
      </AppContainer>
    </HeaderContainer>
  )
}
