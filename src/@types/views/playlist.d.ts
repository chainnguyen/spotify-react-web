import { IPagination, IProfile } from '@/@types/global'

type Backup = {
  thumbnail: string
  thumbnail_large: string
  thumbnail_color: string
  background_color: string
  background_image: string
}

export type Card = {
  id: string
  title: string
  backup: Backup
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
  title: string
  track_file: string
  release_date: string
  track_duration: string
  quantity_liked: number
  is_liked: boolean
  backup: Backup
  album: IProfile
  artist: IProfile
}

export type TrackList = {
  parent_id: string
  parent_name: string
  data: ITrack[]
  pagination: IPagination
}
