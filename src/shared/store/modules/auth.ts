import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { COOKIES_KEY } from '@/enums/cookie.enum'
import { LANG_STORAGE_KEY } from '@/enums/locales.enum'

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

const reducers = {
  SET_LOGIN: (state: IAuthState, { payload }: PayloadAction<any>) => {
    const { token, expires } = payload
    state.token = token

    Cookies.set(COOKIES_KEY.token, token, {
      expires: expires || COOKIES_KEY.expires,
      // requires a secure protocol (https) when transmitting cookies
      secure: ['production', 'staging'].includes(import.meta.env.MODE),
      // allowing to control whether the browser is sending a cookie along with cross-site requests
      sameSite: 'lax',
    })
    Cookies.set(COOKIES_KEY.token, payload)
  },
  SET_LOGOUT: (state: IAuthState) => {
    state.token = initialState.token
    state.profile = initialState.profile
    Cookies.remove(COOKIES_KEY.token)
    localStorage.removeItem(LANG_STORAGE_KEY)
  },
  SET_PROFILE: (state: IAuthState, { payload }: PayloadAction<any>) => {
    state.profile = payload
  },
  SET_DATA_MODAL_REQUEST_LOGIN: (state: IAuthState, { payload }: PayloadAction<any>) => {
    state.dataRequestLogin = payload
  },
  SET_MODAL_REQUEST_LOGIN: (state: IAuthState, { payload }: PayloadAction<any>) => {
    state.isRequestLogin = payload
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
})

export const {
  SET_LOGIN,
  SET_LOGOUT,
  SET_PROFILE,
  SET_DATA_MODAL_REQUEST_LOGIN,
  SET_MODAL_REQUEST_LOGIN,
} = authSlice.actions
export default authSlice.reducer
