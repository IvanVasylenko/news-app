import React from 'react'

import { HeaderTab } from './HeaderTab'

import { HeaderTabsContainer } from '../../../styles/HeaderTabsStyles'

export const HeaderTabs = () => {
  const tabs = [
    {
      id: 0,
      label: 'News',
      path: '/',
    },
    {
      id: 1,
      label: 'Profile',
      path: '/profile',
    },
  ]

  return (
    <HeaderTabsContainer>
      {tabs.map(({ id, label, path }) => (
        <HeaderTab key={id} label={label} to={path} />
      ))}
    </HeaderTabsContainer>
  )
}
