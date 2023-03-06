import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { IPagination } from '@/@types/global'
import type { RootState } from '@/shared/store'

export interface ITrackState {
  list: null
  detail: null
  pagination: IPagination | null
}

const initialState: ITrackState = {
  list: null,
  detail: null,
  pagination: null,
}

export const TRACK_GETTER = {
  list: (state: RootState) => state['track'].list,
  detail: (state: RootState) => state['track'].detail,
  pagination: (state: RootState) => state['track'].pagination,
}

const reducers = {
  SET_TRACK_LIST: (state: ITrackState, { payload }: PayloadAction<any>) => {
    state.list = payload
  },
  SET_TRACK_DETAIL: (state: ITrackState, { payload }: PayloadAction<any>) => {
    state.detail = payload
  },
  SET_TRACK_PAGINATION: (state: ITrackState, { payload }: PayloadAction<any>) => {
    state.pagination = payload
  },
}

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers,
})

export const { SET_TRACK_LIST, SET_TRACK_DETAIL, SET_TRACK_PAGINATION } = trackSlice.actions
export default trackSlice.reducer
