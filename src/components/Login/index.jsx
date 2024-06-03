import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setUserData } from '../../store/slices/userSlice'
import { commonSelector, setLoggedIn } from '../../store/slices/commonSlice'

import { useEmailFormatChecking } from '../../helpers/useEmailFormatChecking'

import { CustomInput } from '../Input'
import { CustomButton } from '../Button'
import { Notification } from '../Shared/Notification'

import { LoginContainer, LoginFormContainer, LoginTitle } from '../../styles/LoginStyles'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { checkEmailFormat } = useEmailFormatChecking()

  const { data: appState } = useSelector(commonSelector)

  const [email, setEmail] = useState('')
  const [APIKey, setAPIKey] = useState('')

  const isDisabled = !email || !APIKey

  const login = () => {
    const user = { email, APIKey }

    const isValidEmail = checkEmailFormat(email)

    if (!isValidEmail) return

    dispatch(setUserData(user))
    dispatch(setLoggedIn())

    navigate('/')
  }

  return (
    <LoginContainer>
      <LoginFormContainer>
        <LoginTitle>Login</LoginTitle>

        <CustomInput label='Email' value={email} type='email' onChange={e => setEmail(e.target.value)} />
        <CustomInput label='API Key' value={APIKey} onChange={e => setAPIKey(e.target.value)} />

        <CustomButton disabled={isDisabled} label='LogIn' onClick={() => login()} />
      </LoginFormContainer>

      {appState.notification.isShow && <Notification />}
    </LoginContainer>
  )
}
