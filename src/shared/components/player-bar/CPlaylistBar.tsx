import '@/assets/scss/components/_playlist-bar.scss'

import React, { useCallback } from 'react'

import type { Card } from '@/@types/views/playlist'
import { CButtonMore, CButtonPlay, CButtonSaveToLibrary } from '@/shared/components'
import { useTrackController } from '@/shared/hooks'

interface IProps {
  data: Card
}

function CPlaylistBar({ data }: IProps) {
  const { enforcePlayList } = useTrackController()

  const MemoizedCButtonPlay = React.memo(CButtonPlay)
  const MemoizedCButtonSaveToLibrary = React.memo(CButtonSaveToLibrary)
  const MemoizedCButtonMore = React.memo(CButtonMore)

  const onEnforcePlayList = useCallback(() => enforcePlayList(data), [JSON.stringify(data)])

  return (
    <div className="E4q8ogfdWtye7YgotBlN contentSpacing">
      <div className="eSg4ntPU2KQLfpLGXAww">
        <div className="PFgcCoJSWC3KjhZxHDYH">
          <MemoizedCButtonPlay
            width={28}
            height={28}
            onClick={onEnforcePlayList}
          />
        </div>

        <MemoizedCButtonSaveToLibrary
          width={32}
          height={32}
        />

        <MemoizedCButtonMore
          width={32}
          height={32}
          ariaLabel={`More options for ${data.title}`}
        />
      </div>
    </div>
  )
}

export default CPlaylistBar
