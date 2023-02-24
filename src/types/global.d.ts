export interface IFreeObject {
  [key: string]: any
}

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
