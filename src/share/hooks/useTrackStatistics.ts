import { useMemo } from 'react'

import { formatNumberDecimal } from '@/share/utils/helper'
import type { TrackDetail } from '@/types/playlist'

function useTrackStatistics(tracksList: TrackDetail) {
  const totalTrackLike = useMemo<string | number>(() => {
    if (!tracksList.data.length) return 0
    const total: number = tracksList.data.reduce((t, i) => (t += i.quantity_liked), 0)
    return formatNumberDecimal(total, ',')
  }, [tracksList])

  const totalTrackTime = useMemo<string>(() => {
    if (!tracksList.data.length) return '0'
    return '9 hr 32 min'
  }, [tracksList])

  return { totalTrackLike, totalTrackTime }
}

export default useTrackStatistics
