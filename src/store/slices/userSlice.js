import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {
    name: '',
    email: '',
    APIKey: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      }
    },
    clearUserData: (state, action) => {
      state.data = {
        ...initialState.data,
      }
    },
  },
})

const stateUser = state => state.user

export const userSelector = createDraftSafeSelector(stateUser, state => {
  return state
})

export const { setUserData, clearUserData } = userSlice.actions

export default userSlice.reducer
