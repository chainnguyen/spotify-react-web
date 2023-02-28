import { useMemo } from 'react'

import { formatNumberDecimal } from '@/shared/utils/helper'
import type { TrackList } from '@/types/playlist'

function useTrackStatistics(tracksList: TrackList | null) {
  const totalTrackLike = useMemo<string | number>(() => {
    if (tracksList && tracksList.data.length) {
      const total: number = tracksList.data.reduce((t, i) => (t += i.quantity_liked), 0)
      return formatNumberDecimal(total, ',')
    }
    return 0
  }, [tracksList])

  const totalTrackTime = useMemo<string>(() => {
    if (tracksList && tracksList.data.length) {
      return '9 hr 32 min'
    }
    return '0'
  }, [tracksList])

  return { totalTrackLike, totalTrackTime }
}

export default useTrackStatistics
