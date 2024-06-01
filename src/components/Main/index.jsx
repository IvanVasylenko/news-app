/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  disableLoading,
  enableLoading,
  hideNotification,
  showNotification,
} from '../../store/slices/commonSlice'

import { getTopNews } from '../../api'

import { AppLayout } from '../AppLayout'
import { Search } from './Search'
import { NewsList } from './NewsList'
import { EmptyData } from '../AppLayout/EmptyData'

import { MainContainer, MainTitle, MainTitleContainer } from '../../styles/MainStyles'

export const Main = () => {
  const dispatch = useDispatch()

  const [newsList, setNewsList] = useState([])

  const showTemporaryNotification = message => {
    dispatch(showNotification(message))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 3000)
  }

  const getNewsList = async search => {
    dispatch(enableLoading())

    const response = await getTopNews(search)

    if (response.data.status === 'error' || response.data.code === 'apiKeyInvalid') {
      showTemporaryNotification('Invalid API Key')
    } else if (response.data.status === 'error') {
      showTemporaryNotification('Network error')
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
