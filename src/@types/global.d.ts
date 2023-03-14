import type { DefaultTFuncReturn } from 'i18next'
import type { HTMLInputTypeAttribute } from 'react'

export interface IFreeObject {
  [key: string]: any
}

export type LayoutTypes = 'default' | 'auth' | null
export type GuardTypes = 'auth' | 'login' | null

export interface IProfile {
  id: string
  name: string
}

export interface IPagination {
  total: number
  total_track: number
  per_page: number
  current_page: number
}

export interface ICommonFieldProps {
  type: HTMLInputTypeAttribute | undefined
  label: DefaultTFuncReturn | string | null
  hiddenAsterisk: boolean
  disabled: boolean
  readOnly: boolean
  autofill: boolean
  isDirty: boolean
  isValid: boolean
  className: string
  classContainer: string
  placeholder: DefaultTFuncReturn | string | undefined
}
