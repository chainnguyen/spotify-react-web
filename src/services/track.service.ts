import { useAxios } from '@/shared/hooks/useAxios'

const { Get } = useAxios()

export const TrackService = {
  async getList() {
    return await Get('/mocks/track-list.json').then((resp: any) => resp.data)
  },
}
