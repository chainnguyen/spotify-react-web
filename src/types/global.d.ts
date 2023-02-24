export type ResponseData = {
  status: null
  success: boolean
  message?: string
}

export interface IFreeObject {
  [key: string]: any
}

export type ResponseSuccess = {}

export type ResponseError = {
  response: {
    data: ResponseData
  }
}

export interface IPagination {
  total: number
  current_page: number
}

export type Card = {
  id: string
  title: string
  color: string
  image: string
  description: string
}

export type Playlist = {
  id: string
  type: string
  title: string
  card_data: Card[]
}
