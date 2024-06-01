import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { appStore, persistor } from './store';

import App from './App'

import './index.css'

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)

root.render(
  <BrowserRouter>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
)
