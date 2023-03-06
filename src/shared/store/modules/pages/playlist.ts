import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IPagination } from '@/@types/global'

export interface IPlayListState {
  list: null
  detail: null
  pagination: IPagination | null
}

const initialState: IPlayListState = {
  list: null,
  detail: null,
  pagination: null,
}

const reducers = {
  SET_PLAYLIST_LIST: (state: IPlayListState, { payload }: PayloadAction<any>) => {
    state.list = payload
  },
  SET_PLAYLIST_DETAIL: (state: IPlayListState, { payload }: PayloadAction<any>) => {
    state.detail = payload
  },
  SET_PLAYLIST_PAGINATION: (state: IPlayListState, { payload }: PayloadAction<any>) => {
    state.pagination = payload
  },
}

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers,
})

export const { SET_PLAYLIST_LIST, SET_PLAYLIST_DETAIL, SET_PLAYLIST_PAGINATION } =
  playlistSlice.actions
export default playlistSlice.reducer
