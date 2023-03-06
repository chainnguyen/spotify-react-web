import { configureStore } from '@reduxjs/toolkit'
import packageJson from 'package.json'

// Modules
import authReducer from './modules/auth'
import localesReducer from './modules/locales'
import genreReducer from './modules/pages/genre'
import playlistReducer from './modules/pages/playlist'
import trackReducer from './modules/pages/track'
import playerMusicReducer from './modules/player-music'

const reducer = {
  auth: authReducer,
  locales: localesReducer,
  playerMusic: playerMusicReducer,
  playlist: playlistReducer,
  track: trackReducer,
  genre: genreReducer,
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
