import type { AxiosResponse } from 'axios'

import axiosInstance from '@/configs/axios'

function useAxios() {
  const Get = (url: string, params?: any): Promise<AxiosResponse<any>> => {
    return axiosInstance.get(`${url}`, { params })
  }

  const Post = (url: string, body: any, params?: any): Promise<AxiosResponse<any>> => {
    return axiosInstance.post(`${url}`, body, { params })
  }

  const Put = (url: string, body: any, params?: any): Promise<AxiosResponse<any>> => {
    return axiosInstance.put(`${url}`, body, { params })
  }

  const Delete = (url: string, params?: any): Promise<AxiosResponse<any>> => {
    return axiosInstance.delete(url, params)
  }

  return { Get, Post, Put, Delete }
}

export default useAxios
