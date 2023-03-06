import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IPagination } from '@/@types/global'
import type { RootState } from '@/shared/store'

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

export const PLAYLIST_GETTER = {
  list: (state: RootState) => state['playlist'].list,
  detail: (state: RootState) => state['playlist'].detail,
  pagination: (state: RootState) => state['playlist'].pagination,
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
