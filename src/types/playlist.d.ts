import { IPagination, IProfile } from '@/types/global'

export type Card = {
  id: string
  title: string
  backup_color: {
    thumbnail_color: string
    background_color: string
    background_image: string
  }
  thumbnail: string
  description: string
}

export type Playlist = {
  id: string
  type: string
  title: string
  card_data: Card[]
}

export interface ITrack {
  id: string
  name: string
  track_file: string
  track_thumbnail: string
  release_date: string
  track_duration: string
  quantity_liked: number
  is_liked: boolean
  album: IProfile
  artist: IProfile
}

export type TrackList = {
  parent_id: string
  parent_name: string
  data: ITrack[]
  pagination: IPagination
}
