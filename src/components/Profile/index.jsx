import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { hideNotification, showNotification } from '../../store/slices/commonSlice'
import { setUserData, userSelector } from '../../store/slices/userSlice'

import { AppLayout } from '../AppLayout'
import { CustomButton } from '../Button'
import { CustomInput } from '../Input'

import { ProfileContainer, ProfileTitle } from '../../styles/ProfileStyles'

export const Profile = () => {
  const dispatch = useDispatch()

  const { data: user } = useSelector(userSelector)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [APIKey, setAPIKey] = useState(user.APIKey)
  const [isDisabled, setIsDisabled] = useState(true)

  const showTemporaryNotification = message => {
    dispatch(showNotification(message))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 3000)
  }

  useEffect(() => {
    if (name !== user.name || email !== user.email || APIKey !== user.APIKey) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [name, email, APIKey, user.APIKey, user.email, user.name])

  const onSave = () => {
    const userData = {
      name,
      email,
      APIKey,
    }

    dispatch(setUserData(userData))
    showTemporaryNotification('Saved')
  }

  return (
    <AppLayout>
      <ProfileContainer>
        <ProfileTitle>Profile Details</ProfileTitle>

        <CustomInput
          label='Name'
          placeholder='enter name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <CustomInput
          label='Email'
          placeholder='enter email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <CustomInput
          label='API Key'
          placeholder='enter API key'
          value={APIKey}
          onChange={e => setAPIKey(e.target.value)}
        />

        <CustomButton disabled={isDisabled} label='Save' onClick={() => onSave()} />
      </ProfileContainer>
    </AppLayout>
  )
}
