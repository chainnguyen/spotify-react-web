import { IPagination, IProfile } from '@/types/global'

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

interface Track {
  name: string
  track_file: string
  release_date: string
  track_duration: string
  quantity_liked: number
  album: IProfile
  artist: IProfile
}

export type TrackDetail = {
  parent_id: string
  data: Track[]
  pagination: IPagination
}
