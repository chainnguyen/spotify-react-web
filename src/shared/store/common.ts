import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { LayoutTypes } from '@/@types/global'
import type { RootState } from '@/shared/store'

export interface ICommonState {
  layout: LayoutTypes
  theme: string | null
}

const initialState: ICommonState = {
  layout: null,
  theme: null,
}

export const COMMON_GETTER = {
  layout: (state: RootState) => state['common'].layout,
  theme: (state: RootState) => state['common'].theme,
}

const reducers = {
  SET_LAYOUT: (state: ICommonState, { payload }: PayloadAction<LayoutTypes>) => {
    state.layout = payload
  },
  SET_THEME: (state: ICommonState, { payload }: PayloadAction<string | null>) => {
    state.theme = payload
  },
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers,
})

export const { SET_LAYOUT, SET_THEME } = commonSlice.actions
export default commonSlice.reducer
