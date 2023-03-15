import type { ICredentials, IRegistration } from '@/@types/views/auth'
import { useAxios } from '@/shared/hooks'

const { Get, Post } = useAxios()

export const AuthService = {
  async login(form: ICredentials) {
    return await Post('/mocks/auth.json', form).then((resp: any) => {
      const { email, password } = resp.data.data
      if (form.email === email && form.password === password) {
        return resp.data
      }
      return null
    })
  },

  async loginSNS(form: any) {
    return await Post('/mocks/auth.json', form).then((resp: any) => resp.data)
  },

  async signup(form: IRegistration) {
    return await Post('/mocks/auth.json', form).then((resp: any) => resp.data)
  },

  async logout() {
    return await Get('/mocks/auth.json').then((resp: any) => resp.data)
  },

  async profile() {
    return await Get('/mocks/profile.json').then((resp: any) => resp.data)
  },
}
