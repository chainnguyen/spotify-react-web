import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { COOKIES_KEY } from '@/enums/cookie.enum'

export interface IAuthState {
  token: string | null
  profile: null
  dataRequestLogin: null
  isRequestLogin: boolean
}

const initialState: IAuthState = {
  token: Cookies.get(COOKIES_KEY.token) || null,
  profile: null,
  dataRequestLogin: null,
  isRequestLogin: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_DATA_MODAL_REQUEST_LOGIN: (state: IAuthState, { payload }: PayloadAction<any>) => {
      state.dataRequestLogin = payload
    },
    SET_MODAL_REQUEST_LOGIN: (state: IAuthState, { payload }: PayloadAction<any>) => {
      state.isRequestLogin = payload
    },
  },
})

export const { SET_DATA_MODAL_REQUEST_LOGIN, SET_MODAL_REQUEST_LOGIN } = authSlice.actions
export default authSlice.reducer
