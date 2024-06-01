import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { commonSelector } from './store/slices/commonSlice'

import { Login } from './components/Login'
import { Main } from './components/Main'
import { Profile } from './components/Profile'
import { Story } from './components/Story'
import { NotFound } from './components/AppLayout/NotFound'
import { ProtectedRoute } from './components/ProtectedRoute'

const App = () => {
  const { data: appState } = useSelector(commonSelector)

  return (
    <Routes>
      <Route element={<ProtectedRoute isLoggedIn={appState.isLoggedIn} />}>
        <Route path='/' element={<Main />} />
        <Route path='story/:storyID' element={<Story />} />
        <Route path='profile' element={<Profile />} />
      </Route>

      <Route path='login' element={<Login />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
