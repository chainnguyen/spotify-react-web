import '@/assets/scss/main.scss'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import i18next from '@/configs/i18next'
import { store } from '@/shared/store'

import App from './App'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container as HTMLElement)

  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </I18nextProvider>
    </React.StrictMode>
  )
}
