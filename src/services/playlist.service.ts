import type { Card, Playlist } from '@/@types/views/playlist'
import { useAxios } from '@/shared/hooks'

const { Get } = useAxios()

export const PlaylistService = {
  async getList() {
    return await Get('/mocks/playlist.json').then((resp: any) => resp.data)
  },

  async getSectionDetail(id: string | undefined) {
    return await Get('/mocks/playlist.json').then((resp: any) =>
      resp.data.find((list: Playlist) => list.id === id)
    )
  },

  async getPlaylistDetail(id: string | undefined) {
    return await Get('/mocks/playlist.json').then((resp: any) => {
      for (let i = 0; i < resp.data.length; i++) {
        const playlist: Card | undefined = resp.data[i].card_data.find((i: Card) => i.id === id)

        if (playlist && Object.keys(playlist).length) return playlist
      }
    })
  },
}
