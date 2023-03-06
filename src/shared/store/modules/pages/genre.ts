import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IPagination } from '@/@types/global'
import type { RootState } from '@/shared/store'

export interface IGenreState {
  list: null
  detail: null
  pagination: IPagination | null
}

const initialState: IGenreState = {
  list: null,
  detail: null,
  pagination: null,
}

export const GETTER = {
  list: (state: RootState) => state['genre'].list,
  detail: (state: RootState) => state['genre'].detail,
  pagination: (state: RootState) => state['genre'].pagination,
}

const reducers = {
  SET_GENRE_LIST: (state: IGenreState, { payload }: PayloadAction<any>) => {
    state.list = payload
  },
  SET_GENRE_DETAIL: (state: IGenreState, { payload }: PayloadAction<any>) => {
    state.detail = payload
  },
  SET_GENRE_PAGINATION: (state: IGenreState, { payload }: PayloadAction<any>) => {
    state.pagination = payload
  },
}

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers,
})

export const { SET_GENRE_LIST, SET_GENRE_DETAIL, SET_GENRE_PAGINATION } = genreSlice.actions
export default genreSlice.reducer
