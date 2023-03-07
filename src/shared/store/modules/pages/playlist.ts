import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IPagination } from '@/@types/global'
import type { Card, Playlist } from '@/@types/views/playlist'
import type { RootState } from '@/shared/store'

export interface IPlayListState {
  list: Playlist[] | null
  detail: Card | null
  section_detail: Playlist | null
  pagination: IPagination | null
}

const initialState: IPlayListState = {
  list: null,
  detail: null,
  section_detail: null,
  pagination: null,
}

export const PLAYLIST_GETTER = {
  list: (state: RootState) => state['playlist'].list,
  detail: (state: RootState) => state['playlist'].detail,
  section_detail: (state: RootState) => state['playlist'].section_detail,
  pagination: (state: RootState) => state['playlist'].pagination,
}

const reducers = {
  SET_PLAYLIST_LIST: (state: IPlayListState, { payload }: PayloadAction<Playlist[] | null>) => {
    state.list = payload
  },
  SET_PLAYLIST_DETAIL: (state: IPlayListState, { payload }: PayloadAction<Card | null>) => {
    state.detail = payload
  },
  SET_SECTION_DETAIL: (state: IPlayListState, { payload }: PayloadAction<Playlist | null>) => {
    state.section_detail = payload
  },
  SET_PLAYLIST_PAGINATION: (
    state: IPlayListState,
    { payload }: PayloadAction<IPagination | null>
  ) => {
    state.pagination = payload
  },
}

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers,
})

export const {
  SET_PLAYLIST_LIST,
  SET_PLAYLIST_DETAIL,
  SET_SECTION_DETAIL,
  SET_PLAYLIST_PAGINATION,
} = playlistSlice.actions
export default playlistSlice.reducer
