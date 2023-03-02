import '@/assets/scss/main.scss'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from '@/shared/store'

import App from './App'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container as HTMLElement)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}
