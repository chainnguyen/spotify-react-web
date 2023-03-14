import moment from 'moment'
import { useMemo } from 'react'

import type { ITrack, TrackList } from '@/@types/views/playlist'
import { formatNumberDecimal } from '@/shared/utils/helper'

type TotalDuration = {
  hour: number
  minute: number
  second: number
}

function useTrackStatistics(tracksList: TrackList | null) {
  const totalTrackLike = useMemo<string | number>(() => {
    if (tracksList && tracksList.data.length) {
      const total: number = tracksList.data.reduce(
        (t: number, i: ITrack) => (t += i.quantity_liked),
        0
      )
      return formatNumberDecimal(total, ',')
    }
    return 0
  }, [JSON.stringify(tracksList)])

  const totalTrackTime = useMemo<TotalDuration>(() => {
    const totalDuration: TotalDuration = {
      hour: 0,
      minute: 0,
      second: 0,
    }

    if (tracksList && tracksList.data.length) {
      for (let i = 0; i < tracksList.data.length; i++) {
        totalDuration.minute += Number(tracksList.data[i].track_duration.split(':')[0])
        totalDuration.second += Number(tracksList.data[i].track_duration.split(':')[1])
      }
      const formatted: string = moment
        .utc((totalDuration.minute * 60 + totalDuration.second) * 1000)
        .format('HH:mm:ss')
      totalDuration.hour = moment(formatted, 'HH:mm:ss').hour()
      totalDuration.minute = moment(formatted, 'HH:mm:ss').minute()
      totalDuration.second = moment(formatted, 'HH:mm:ss').second()

      return totalDuration
    }
    return totalDuration
  }, [JSON.stringify(tracksList)])

  return { totalTrackLike, totalTrackTime }
}

export default useTrackStatistics
