/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { disableLoading, enableLoading } from '../../store/slices/commonSlice'

import { useTemporaryNotification } from '../../helpers/useTemporaryNotification'

import { getTopNews } from '../../api'

import { AppLayout } from '../AppLayout'
import { Search } from './Search'
import { NewsList } from './NewsList'
import { EmptyData } from '../AppLayout/EmptyData'

import { MainContainer, MainTitle, MainTitleContainer } from '../../styles/MainStyles'

export const Main = () => {
  const dispatch = useDispatch()
  const { showNotificationMessage } = useTemporaryNotification()

  const [newsList, setNewsList] = useState([])

  const getNewsList = async search => {
    dispatch(enableLoading())

    const response = await getTopNews(search)

    if (response.data.status === 'error' || response.data.code === 'apiKeyInvalid') {
      showNotificationMessage('Invalid API Key')
    } else if (response.data.status === 'error') {
      showNotificationMessage('Network error')
    } else {
      setNewsList(response.data.articles)
    }

    dispatch(disableLoading())
  }

  useEffect(() => {
    getNewsList()
  }, [])

  return (
    <AppLayout>
      <MainContainer>
        <MainTitleContainer>
          <MainTitle>Top News</MainTitle>
          <Search onSearch={getNewsList} />
        </MainTitleContainer>

        {newsList?.length ? <NewsList newsList={newsList} /> : <EmptyData />}
      </MainContainer>
    </AppLayout>
  )
}
