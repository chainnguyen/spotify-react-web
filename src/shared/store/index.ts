import { configureStore } from '@reduxjs/toolkit'
import packageJson from 'package.json'

// Modules
import authReducer from './modules/auth'
import playerMusicReducer from './modules/player-music'

const reducer = {
  auth: authReducer,
  playerMusic: playerMusicReducer,
}

export const store = configureStore({
  reducer,
  devTools: import.meta.env.MODE !== 'production' ? { name: packageJson.name } : false,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// The store has been created with these options:
// - The slice reducers were automatically passed to combineReducers()
// - The Redux DevTools Extension is disabled for production
