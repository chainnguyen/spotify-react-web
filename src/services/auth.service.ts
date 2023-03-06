import { useAxios } from '@/shared/hooks'

const { Get, Post } = useAxios()

export const AuthService = {
  async login(form: any) {
    return await Post('/mocks/track-list.json', form).then((resp: any) => resp.data)
  },

  async loginSNS() {
    return await Get('/mocks/track-list.json').then((resp: any) => resp.data)
  },

  async logout() {
    return await Get('/mocks/track-list.json').then((resp: any) => resp.data)
  },

  async profile() {
    return await Get('/mocks/track-list.json').then((resp: any) => resp.data)
  },
}
