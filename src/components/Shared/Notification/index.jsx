import React from 'react'
import { useSelector } from 'react-redux'

import { commonSelector } from '../../../store/slices/commonSlice'

import { Label } from '../../../styles/NotificationStyles'

export const Notification = () => {
  const { data: appState } = useSelector(commonSelector)

  return <Label>{appState.notification.message}</Label>
}
