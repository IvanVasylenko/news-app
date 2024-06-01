import { createStore } from 'redux'
import { combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import commonReducer from './slices/commonSlice'
import userReducer from './slices/userSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const appStore = createStore(persistedReducer)
export const persistor = persistStore(appStore)
