import { useAxios } from '@/shared/hooks'

const { Get } = useAxios()

export const GenreService = {
  async getList() {
    return await Get('/mocks/genre.json').then((resp: any) => resp.data)
  },
}
