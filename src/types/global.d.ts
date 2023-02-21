export type ResponseData = {
  status: null
  success: boolean
  message?: string
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
