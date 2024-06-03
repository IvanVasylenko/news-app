import React from 'react'
import { useSelector } from 'react-redux'

import { commonSelector } from '../../store/slices/commonSlice'

import { Header } from './Header'
import { Footer } from './Footer'
import { Loading } from '../Shared/Loading'
import { Notification } from '../Shared/Notification'

import { AppContainer, Main } from '../../styles/CommonStyles'

export const AppLayout = ({ children }) => {
  const { data: appState } = useSelector(commonSelector)

  return (
    <>
      <Header />
      <Main>
        <AppContainer>{children}</AppContainer>
      </Main>
      <Footer />

      {appState.isLoading && <Loading />}
      {appState.notification.isShow && <Notification />}
    </>
  )
}
