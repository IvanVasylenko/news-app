import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {
    isLoading: false,
    isLoggedIn: false,
    notification: {
      message: '',
      isShow: false,
    },
  },
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    enableLoading: (state, action) => {
      state.data.isLoading = true
    },
    disableLoading: (state, action) => {
      state.data.isLoading = false
    },
    setLoggedIn: (state, action) => {
      state.data.isLoggedIn = true
    },
    setLogOut: (state, action) => {
      state.data.isLoggedIn = false
    },
    showNotification: (state, action) => {
      state.data.notification = {
        message: action.payload,
        isShow: true,
      }
    },
    hideNotification: (state, action) => {
      state.data.notification = {
        message: '',
        isShow: false,
      }
    },
  },
})

const stateCommon = state => state.common

export const commonSelector = createDraftSafeSelector(stateCommon, state => {
  return state
})

export const {
  enableLoading,
  disableLoading,
  setLoggedIn,
  setLogOut,
  showNotification,
  hideNotification,
} = commonSlice.actions

export default commonSlice.reducer
