import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import i18next from 'i18next'

import type { ILocales } from '@/enums/locales.enum'
import { LANG_STORAGE_KEY, LOCALES } from '@/enums/locales.enum'
import type { RootState } from '@/shared/store'

export interface ILocalesState {
  currentLocale: string | null
  isLanguageSelection: boolean
}

const localLanguage: string | null = localStorage.getItem(LANG_STORAGE_KEY)
const initialLocale = LOCALES.find((i: ILocales) => i.code === localLanguage) ? localLanguage : null

const initialState: ILocalesState = {
  currentLocale: initialLocale,
  isLanguageSelection: false,
}

export const LOCALES_GETTER = {
  currentLocale: (state: RootState) => state['locales'].currentLocale,
  isLanguageSelection: (state: RootState) => state['locales'].isLanguageSelection,
}

const reducers = {
  SET_LANGUAGE_SELECTION: (state: ILocalesState, { payload }: PayloadAction<boolean>) => {
    state.isLanguageSelection = payload
  },
  SET_LANGUAGE: (state: ILocalesState, { payload }: PayloadAction<any>) => {
    if (state.currentLocale !== payload) {
      state.currentLocale = payload
    }
    i18next.changeLanguage(payload).then((r) => r)
    localStorage.setItem(LANG_STORAGE_KEY, payload)
    // @ts-ignore
    document && document.querySelector('html').setAttribute('lang', payload)
  },
}

export const localesSlice = createSlice({
  name: 'locales',
  initialState,
  reducers,
})

export const { SET_LANGUAGE_SELECTION, SET_LANGUAGE } = localesSlice.actions
export default localesSlice.reducer
