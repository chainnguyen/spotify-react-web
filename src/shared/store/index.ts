import { configureStore } from '@reduxjs/toolkit'
import packageJson from 'package.json'

// Modules
import authReducer from './modules/auth'
import playerMusicReducer from './modules/player-music'

export const store = configureStore({
  reducer: { auth: authReducer, playerMusic: playerMusicReducer },
  devTools: {
    name: packageJson.name,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
