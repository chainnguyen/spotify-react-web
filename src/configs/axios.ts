import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import type { IFreeObject } from '@/@types/global'
import { COOKIES_KEY } from '@/enums/cookie.enum'
import { store } from '@/shared/store'
import { SET_LOGOUT } from '@/shared/store/modules/auth'

const { dispatch } = store

const AcceptType: IFreeObject = {
  json: 'application/json;charset=UTF-8',
  formData: 'multipart/form-data',
}

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL as string,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json;charset=UTF-8',
  },
  // See more: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
  withCredentials: false,
  responseType: 'json',
  timeout: 6000, // Request timeout
})

// Interceptors
instance.interceptors.request.use((config: AxiosRequestConfig | any): AxiosRequestConfig => {
  const token: string | undefined = Cookies.get(COOKIES_KEY.token)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
    config.headers['Content-Type'] =
      AcceptType[config.data instanceof FormData ? 'formData' : 'json']
  }
  return config
})

instance.interceptors.response.use(
  (response): AxiosResponse => response,
  async (error): Promise<AxiosError> => {
    const navigate = useNavigate()
    const { status } = error.response

    // Catch err CORS with case type script inside (input, textarea)
    if (error.toString().includes('Network Error')) {
      // alert('Network Error - Please try again')
    }

    switch (status) {
      case 401:
        navigate('/auth/login')
        dispatch(SET_LOGOUT())
        break
      case 403:
        navigate('/not-authenticated')
        break
      case 404:
        navigate('/not-found')
        break
      case 500:
        navigate('/server-error')
        break
    }

    return Promise.reject(error)
  }
)

export default instance
