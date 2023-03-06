import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/shared/store'

export interface IPlayerMusicState {
  playingData: null
  isPlayingMusic: boolean
}

const initialState: IPlayerMusicState = {
  playingData: null,
  isPlayingMusic: false,
}

export const PLAYER_MUSIC_GETTER = {
  playingData: (state: RootState) => state['playerMusic'].playingData,
  isPlayingMusic: (state: RootState) => state['playerMusic'].isPlayingMusic,
}

const reducers = {
  SET_PLAYING_MUSIC: (state: IPlayerMusicState, { payload }: PayloadAction<any>) => {
    state.isPlayingMusic = payload
  },
  REQUEST_PLAY_TRACK: (state: IPlayerMusicState, { payload }: PayloadAction<any>) => {
    state.isPlayingMusic = true
    state.playingData = payload
  },
}

export const playerMusicSlice = createSlice({
  name: 'playerMusic',
  initialState,
  reducers,
})

export const { SET_PLAYING_MUSIC, REQUEST_PLAY_TRACK } = playerMusicSlice.actions
export default playerMusicSlice.reducer
