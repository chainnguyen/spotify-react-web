import { useDispatch, useSelector } from 'react-redux'

import type { Card, ITrack } from '@/@types/views/playlist'
import type { AppDispatch } from '@/shared/store'
import {
  AUTH_GETTER,
  SET_DATA_MODAL_REQUEST_LOGIN,
  SET_MODAL_REQUEST_LOGIN,
} from '@/shared/store/modules/auth'
import { REQUEST_PLAY_TRACK } from '@/shared/store/modules/player-music'

function useTrackController() {
  const dispatch = useDispatch<AppDispatch>()

  const $token = useSelector(AUTH_GETTER.token)

  const enforcePlayList = (data: Card) => {
    if (!$token) {
      dispatch(SET_MODAL_REQUEST_LOGIN(true))
      dispatch(SET_DATA_MODAL_REQUEST_LOGIN(data))
    } else {
      dispatch(REQUEST_PLAY_TRACK(data))
    }
  }

  const enforceTrack = (data: ITrack) => {
    if (!$token) {
      dispatch(SET_MODAL_REQUEST_LOGIN(true))
      dispatch(SET_DATA_MODAL_REQUEST_LOGIN(data))
    } else {
      dispatch(REQUEST_PLAY_TRACK(data))
    }
  }

  return { enforcePlayList, enforceTrack }
}

export default useTrackController
