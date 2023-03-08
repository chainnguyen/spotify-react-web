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
